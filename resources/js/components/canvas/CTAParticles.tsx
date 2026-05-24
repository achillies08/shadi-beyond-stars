import { useEffect, useRef } from 'react';

export const CTAParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const pts = Array.from({ length: 65 }, () => ({
            x: Math.random(),
            y: Math.random(),
            vx: (Math.random() - 0.5) * 0.00016,
            vy: (Math.random() - 0.5) * 0.00016,
            r: Math.random() * 1.1 + 0.3,
            o: Math.random() * 0.3 + 0.07,
        }));

        let animationFrameId: number;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pts.forEach((p) => {
                p.x = (p.x + p.vx + 1) % 1;
                p.y = (p.y + p.vy + 1) % 1;
                ctx.beginPath();
                ctx.arc(p.x * canvas.width, p.y * canvas.height, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200,146,42,${p.o})`;
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
