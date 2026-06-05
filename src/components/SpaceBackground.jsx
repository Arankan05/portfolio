import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let stars = [];
    const numStars = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedY: Math.random() * 0.12 + 0.04,
          speedX: (Math.random() - 0.5) * 0.04,
          opacity: Math.random() * 0.7 + 0.3,
          blinkSpeed: Math.random() * 0.008 + 0.002,
          blinkDir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 231, 255, ${star.opacity})`; // Indigo-50 text-like color
        ctx.fill();

        // Update position
        star.y += star.speedY;
        star.x += star.speedX;

        // Twinkle/blink effect
        star.opacity += star.blinkSpeed * star.blinkDir;
        if (star.opacity >= 0.95) {
          star.opacity = 0.95;
          star.blinkDir = -1;
        } else if (star.opacity <= 0.15) {
          star.opacity = 0.15;
          star.blinkDir = 1;
        }

        // Loop stars around boundaries
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        if (star.x < 0) {
          star.x = canvas.width;
        } else if (star.x > canvas.width) {
          star.x = 0;
        }
      }
    };

    const render = () => {
      drawStars();
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-slate-950"
    />
  );
};

export default SpaceBackground;
