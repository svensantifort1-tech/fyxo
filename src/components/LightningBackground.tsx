import { useEffect, useRef, useCallback } from "react";

interface Point { x: number; y: number }
interface Branch { points: Point[]; width: number; opacity: number }
interface Bolt { branches: Branch[]; birth: number; duration: number }

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

      for (let i = 2; i < mainPts.length - 1; i++) {
        if (Math.random() > 0.3) {
          const dir = Math.random() > 0.5 ? 1 : -1;
          const len = w * (0.04 + Math.random() * 0.1);
          addBranches(mainPts[i], dir, len, 0, branches);
        }
      }

      return { branches, birth: performance.now(), duration: 200 + Math.random() * 150 };
    };

    const drawPath = (pts: Point[], width: number, color: string) => {
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
      ctx.stroke();
    };

    const animate = (time: number) => {
      const dt = lastTime ? time - lastTime : 16;
      lastTime = time;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Spawn
      nextBolt -= dt;
      if (nextBolt <= 0) {
        bolts.push(createBolt());
        if (Math.random() > 0.4) {
          setTimeout(() => bolts.push(createBolt()), 50 + Math.random() * 100);
        }
        nextBolt = 1800 + Math.random() * 4000;
      }

      // Draw bolts
      bolts = bolts.filter((bolt) => {
        const age = time - bolt.birth;
        if (age > bolt.duration) return false;

        const alpha = 1 - age / bolt.duration;

        bolt.branches.forEach((b) => {
          const a = alpha * b.opacity;
          drawPath(b.points, b.width * 4, `hsla(210,85%,68%,${a * 0.35})`);
          drawPath(b.points, b.width, `hsla(200,95%,88%,${a * 0.9})`);
        });
        return true;
      });

      raf = requestAnimationFrame(animate);
    };

    bolts.push(createBolt());
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
