import { useEffect, useRef } from "react";

const STAR_COLORS = [
  "185, 100%, 50%",   // cyan
  "150, 100%, 45%",   // green
  "45, 100%, 55%",    // yellow
  "25, 100%, 55%",    // orange
  "330, 100%, 60%",   // pink
  "0, 85%, 55%",      // red
  "200, 100%, 60%",   // skyblue
];

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      speed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame: number;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        const opacity = 0.3 + 0.7 * Math.abs(Math.sin(time * s.speed + s.phase));
        const glow = s.r * 3;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.color}, ${opacity})`;
        ctx.shadowBlur = glow;
        ctx.shadowColor = `hsla(${s.color}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    const observer = new ResizeObserver(resize);
    observer.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default StarBackground;
