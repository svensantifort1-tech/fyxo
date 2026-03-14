import { useEffect, useRef, useCallback } from "react";

interface Point { x: number; y: number }
interface Branch { points: Point[]; width: number; opacity: number }
interface Bolt { branches: Branch[]; birth: number; fadeIn: number; hold: number; fadeOut: number }
interface Spark { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number }

const LightningBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const createPoints = useCallback(
    (x1: number, y1: number, x2: number, y2: number, segs: number, jitter: number): Point[] => {
      const pts: Point[] = [{ x: x1, y: y1 }];
      for (let i = 1; i < segs; i++) {
        const t = i / segs;
        pts.push({
          x: x1 + (x2 - x1) * t + (Math.random() - 0.5) * jitter,
          y: y1 + (y2 - y1) * t + (Math.random() - 0.5) * jitter * 0.35,
        });
      }
      pts.push({ x: x2, y: y2 });
      return pts;
    }, []
  );

  const addBranches = useCallback(
    (origin: Point, dir: number, len: number, depth: number, branches: Branch[]) => {
      if (depth > 3 || len < 12) return;
      const angle = (Math.random() * 0.7 + 0.15) * dir;
      const ex = origin.x + Math.cos(angle - Math.PI / 4) * len * dir;
      const ey = origin.y + Math.sin(Math.PI / 4 + Math.abs(angle)) * len;
      const pts = createPoints(origin.x, origin.y, ex, ey, 3 + Math.floor(Math.random() * 3), len * 0.35);
      const w = Math.max(0.4, 2.2 - depth * 0.55);
      const op = Math.max(0.1, 0.55 - depth * 0.13);
      branches.push({ points: pts, width: w, opacity: op });

      // Recursive sub-branches
      for (let i = 0; i < pts.length - 1; i++) {
        if (Math.random() > 0.55) {
          addBranches(pts[i], Math.random() > 0.5 ? 1 : -1, len * (0.35 + Math.random() * 0.3), depth + 1, branches);
        }
      }
    }, [createPoints]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let bolts: Bolt[] = [];
    let sparks: Spark[] = [];
    let flashAlpha = 0;
    let nextBolt = 800;
    let lastTime = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const createBolt = (): Bolt => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const sx = w * (0.15 + Math.random() * 0.7);
      const sy = -5;
      const ex = sx + (Math.random() - 0.5) * w * 0.4;
      const ey = h * (0.6 + Math.random() * 0.4);
      const mainPts = createPoints(sx, sy, ex, ey, 14 + Math.floor(Math.random() * 10), w * 0.1);
      const branches: Branch[] = [{ points: mainPts, width: 2.8, opacity: 0.9 }];

      // Generate many branches
      for (let i = 2; i < mainPts.length - 1; i++) {
        if (Math.random() > 0.3) {
          const dir = Math.random() > 0.5 ? 1 : -1;
          const len = w * (0.04 + Math.random() * 0.1);
          addBranches(mainPts[i], dir, len, 0, branches);
        }
      }

      // Spawn sparks at endpoints
      branches.forEach((b) => {
        const last = b.points[b.points.length - 1];
        const count = Math.floor(Math.random() * 4);
        for (let s = 0; s < count; s++) {
          sparks.push({
            x: last.x, y: last.y,
            vx: (Math.random() - 0.5) * 2.5,
            vy: Math.random() * -1.5 - 0.5,
            life: 0, maxLife: 300 + Math.random() * 500,
            size: 0.8 + Math.random() * 1.5,
          });
        }
      });

      return { branches, birth: performance.now(), fadeIn: 60, hold: 80 + Math.random() * 120, fadeOut: 250 + Math.random() * 200 };
    };

    const drawPath = (pts: Point[], width: number, color: string, blur: number) => {
      if (pts.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(pts[0].x * dpr, pts[0].y * dpr);
      for (let i = 1; i < pts.length; i++) {
        const prev = pts[i - 1];
        const cur = pts[i];
        const mx = (prev.x + cur.x) / 2;
        const my = (prev.y + cur.y) / 2;
        ctx.quadraticCurveTo(prev.x * dpr, prev.y * dpr, mx * dpr, my * dpr);
      }
      const last = pts[pts.length - 1];
      ctx.lineTo(last.x * dpr, last.y * dpr);
      ctx.strokeStyle = color;
      ctx.lineWidth = width * dpr;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.filter = blur > 0 ? `blur(${blur * dpr}px)` : "none";
      ctx.stroke();
    };

    const animate = (time: number) => {
      const dt = lastTime ? time - lastTime : 16;
      lastTime = time;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);
      ctx.filter = "none";

      // Flash
      if (flashAlpha > 0.005) {
        ctx.fillStyle = `rgba(120,170,255,${flashAlpha * 0.08})`;
        ctx.fillRect(0, 0, w, h);
        flashAlpha *= 0.88;
      }

      // Spawn
      nextBolt -= dt;
      if (nextBolt <= 0) {
        bolts.push(createBolt());
        if (Math.random() > 0.4) {
          setTimeout(() => { bolts.push(createBolt()); flashAlpha = Math.min(flashAlpha + 0.5, 1); }, 50 + Math.random() * 100);
        }
        flashAlpha = 1;
        nextBolt = 1800 + Math.random() * 4000;
      }

      // Draw bolts
      bolts = bolts.filter((bolt) => {
        const age = time - bolt.birth;
        const total = bolt.fadeIn + bolt.hold + bolt.fadeOut;
        if (age > total) return false;

        let alpha: number;
        if (age < bolt.fadeIn) alpha = age / bolt.fadeIn;
        else if (age < bolt.fadeIn + bolt.hold) alpha = 1;
        else alpha = 1 - (age - bolt.fadeIn - bolt.hold) / bolt.fadeOut;

        const flicker = 0.75 + Math.random() * 0.25;
        const a = Math.max(0, alpha * flicker);

        bolt.branches.forEach((b) => {
          // Outer glow
          drawPath(b.points, b.width * 12, `hsla(217,91%,60%,${a * b.opacity * 0.15})`, 18);
          // Mid glow
          drawPath(b.points, b.width * 4, `hsla(210,85%,68%,${a * b.opacity * 0.4})`, 6);
          // Core - bright white-blue
          drawPath(b.points, b.width, `hsla(200,95%,88%,${a * b.opacity * 0.95})`, 0);
        });
        return true;
      });

      // Draw sparks
      ctx.filter = "none";
      sparks = sparks.filter((s) => {
        s.life += dt;
        if (s.life > s.maxLife) return false;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.03; // gravity
        const a = 1 - s.life / s.maxLife;
        const r = s.size * dpr;

        ctx.beginPath();
        ctx.arc(s.x * dpr, s.y * dpr, r * 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(217,91%,60%,${a * 0.3})`;
        ctx.filter = `blur(${3 * dpr}px)`;
        ctx.fill();

        ctx.filter = "none";
        ctx.beginPath();
        ctx.arc(s.x * dpr, s.y * dpr, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(200,90%,85%,${a * 0.8})`;
        ctx.fill();
        return true;
      });

      raf = requestAnimationFrame(animate);
    };

    // Initial bolt on load
    bolts.push(createBolt());
    flashAlpha = 1;
    nextBolt = 1500 + Math.random() * 2000;
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [createPoints, addBranches]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default LightningBackground;
