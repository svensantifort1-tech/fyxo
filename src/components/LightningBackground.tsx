import { useEffect, useRef } from "react";

const LightningBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lastFlash = 0;
    let bolts: Bolt[] = [];
    let flashOpacity = 0;

    interface Point {
      x: number;
      y: number;
    }

    interface Branch {
      points: Point[];
      width: number;
      opacity: number;
    }

    interface Bolt {
      branches: Branch[];
      life: number;
      maxLife: number;
      fadeStart: number;
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const createLightningPoints = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      segments: number,
      jitter: number
    ): Point[] => {
      const points: Point[] = [{ x: startX, y: startY }];
      for (let i = 1; i < segments; i++) {
        const t = i / segments;
        const baseX = startX + (endX - startX) * t;
        const baseY = startY + (endY - startY) * t;
        const offsetX = (Math.random() - 0.5) * jitter;
        const offsetY = (Math.random() - 0.5) * jitter * 0.4;
        points.push({ x: baseX + offsetX, y: baseY + offsetY });
      }
      points.push({ x: endX, y: endY });
      return points;
    };

    const createBolt = (): Bolt => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      // Main bolt from top-right to bottom-left
      const startX = w * (0.7 + Math.random() * 0.25);
      const startY = -10;
      const endX = w * (0.1 + Math.random() * 0.3);
      const endY = h + 10;

      const mainPoints = createLightningPoints(startX, startY, endX, endY, 18 + Math.floor(Math.random() * 8), w * 0.12);

      const branches: Branch[] = [
        { points: mainPoints, width: 2.5, opacity: 0.85 },
      ];

      // Create many branches at random points along main bolt
      const branchCount = 6 + Math.floor(Math.random() * 6);
      for (let b = 0; b < branchCount; b++) {
        const idx = 2 + Math.floor(Math.random() * (mainPoints.length - 4));
        const origin = mainPoints[idx];
        const dir = Math.random() > 0.5 ? -1 : 1;
        const length = w * (0.05 + Math.random() * 0.12);
        const angle = (Math.random() * 0.6 + 0.2) * dir;
        const brEndX = origin.x + Math.cos(angle - Math.PI / 4) * length * dir;
        const brEndY = origin.y + Math.sin(Math.PI / 4 + Math.abs(angle)) * length;

        const brPoints = createLightningPoints(
          origin.x, origin.y, brEndX, brEndY,
          4 + Math.floor(Math.random() * 4),
          length * 0.4
        );

        branches.push({
          points: brPoints,
          width: 1 + Math.random() * 1.2,
          opacity: 0.3 + Math.random() * 0.35,
        });

        // Sub-branches (smaller forks)
        if (Math.random() > 0.4 && brPoints.length > 2) {
          const subIdx = 1 + Math.floor(Math.random() * (brPoints.length - 2));
          const subOrigin = brPoints[subIdx];
          const subLen = length * (0.3 + Math.random() * 0.4);
          const subEndX = subOrigin.x + (Math.random() - 0.5) * subLen;
          const subEndY = subOrigin.y + Math.random() * subLen;
          const subPoints = createLightningPoints(
            subOrigin.x, subOrigin.y, subEndX, subEndY,
            3 + Math.floor(Math.random() * 2),
            subLen * 0.5
          );
          branches.push({
            points: subPoints,
            width: 0.5 + Math.random() * 0.8,
            opacity: 0.15 + Math.random() * 0.2,
          });
        }
      }

      return {
        branches,
        life: 0,
        maxLife: 400 + Math.random() * 300,
        fadeStart: 100 + Math.random() * 100,
      };
    };

    const drawBranch = (branch: Branch, globalAlpha: number) => {
      if (branch.points.length < 2) return;
      const alpha = branch.opacity * globalAlpha;

      // Outer glow
      ctx.beginPath();
      ctx.moveTo(branch.points[0].x, branch.points[0].y);
      for (let i = 1; i < branch.points.length; i++) {
        ctx.lineTo(branch.points[i].x, branch.points[i].y);
      }
      ctx.strokeStyle = `hsla(217, 91%, 60%, ${alpha * 0.3})`;
      ctx.lineWidth = branch.width * 8;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.filter = "blur(12px)";
      ctx.stroke();

      // Mid glow
      ctx.beginPath();
      ctx.moveTo(branch.points[0].x, branch.points[0].y);
      for (let i = 1; i < branch.points.length; i++) {
        ctx.lineTo(branch.points[i].x, branch.points[i].y);
      }
      ctx.strokeStyle = `hsla(210, 85%, 65%, ${alpha * 0.5})`;
      ctx.lineWidth = branch.width * 3;
      ctx.filter = "blur(4px)";
      ctx.stroke();

      // Core
      ctx.beginPath();
      ctx.moveTo(branch.points[0].x, branch.points[0].y);
      for (let i = 1; i < branch.points.length; i++) {
        ctx.lineTo(branch.points[i].x, branch.points[i].y);
      }
      ctx.strokeStyle = `hsla(200, 90%, 80%, ${alpha * 0.9})`;
      ctx.lineWidth = branch.width;
      ctx.filter = "none";
      ctx.stroke();
    };

    const animate = (time: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.filter = "none";

      // Flash ambient glow
      if (flashOpacity > 0) {
        ctx.fillStyle = `hsla(217, 91%, 60%, ${flashOpacity * 0.06})`;
        ctx.fillRect(0, 0, w, h);
        flashOpacity *= 0.92;
        if (flashOpacity < 0.01) flashOpacity = 0;
      }

      // Spawn new bolts periodically
      if (time - lastFlash > 2500 + Math.random() * 3000) {
        bolts.push(createBolt());
        // Sometimes double-strike
        if (Math.random() > 0.5) {
          setTimeout(() => bolts.push(createBolt()), 80 + Math.random() * 120);
        }
        flashOpacity = 1;
        lastFlash = time;
      }

      // Draw & update bolts
      bolts = bolts.filter((bolt) => {
        bolt.life += 16;
        let alpha = 1;
        if (bolt.life > bolt.fadeStart) {
          alpha = 1 - (bolt.life - bolt.fadeStart) / (bolt.maxLife - bolt.fadeStart);
        }
        if (alpha <= 0) return false;

        // Flicker effect
        const flicker = 0.7 + Math.random() * 0.3;
        const finalAlpha = Math.max(0, alpha * flicker);

        bolt.branches.forEach((branch) => drawBranch(branch, finalAlpha));
        return true;
      });

      animationId = requestAnimationFrame(animate);
    };

    // Start with initial bolt
    bolts.push(createBolt());
    flashOpacity = 1;
    lastFlash = performance.now();
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default LightningBackground;
