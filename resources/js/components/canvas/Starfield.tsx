import { useEffect, useRef } from 'react';

export const Starfield = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const stars = Array.from({ length: 300 }, () => ({
            x: Math.random(),
            y: Math.random(),
            r: Math.random() * 0.85 + 0.1,
            o: Math.random() * 0.55 + 0.08,
            s: Math.random() * 0.0004 + 0.00006,
        }));

        let t = 0;
        let animationFrameId: number;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            t++;
            stars.forEach((s) => {
                const f = s.o * (0.7 + 0.3 * Math.sin(t * s.s * 60 + s.x * 100));
                ctx.beginPath();
                ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245, 237, 216, ${f})`;
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};
