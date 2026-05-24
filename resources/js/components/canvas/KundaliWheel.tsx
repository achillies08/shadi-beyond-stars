import { useEffect, useRef } from 'react';

export const KundaliWheel = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let t = 0;
        let animationFrameId: number;

        const resize = () => {
            if (canvas) {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
            }
        };
        resize();
        window.addEventListener('resize', resize);

        const signs = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
        const planets = [
            { s: '☉', a: 30, r: 0.35, c: '#F5C842' },
            { s: '☽', a: 110, r: 0.28, c: '#C8D8F0' },
            { s: '♂', a: 185, r: 0.38, c: '#E05050' },
            { s: '♃', a: 260, r: 0.32, c: '#E8A840' },
            { s: '♀', a: 340, r: 0.3, c: '#F0D080' },
            { s: '♄', a: 75, r: 0.42, c: '#C8B898' },
        ];

        const draw = () => {
            t += 0.004;
            const W = canvas.width;
            const H = canvas.height;
            const ccx = W / 2;
            const ccy = H / 2;
            const base = Math.min(W, H) * 0.42;

            ctx.clearRect(0, 0, W, H);

            const g = ctx.createRadialGradient(ccx, ccy, base * 0.6, ccx, ccy, base * 1.1);
            g.addColorStop(0, 'rgba(200,146,42,.06)');
            g.addColorStop(1, 'rgba(200,146,42,0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(ccx, ccy, base * 1.1, 0, Math.PI * 2);
            ctx.fill();

            [1, 0.78, 0.58, 0.38].forEach((f, i) => {
                ctx.beginPath();
                ctx.arc(ccx, ccy, base * f, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(200,146,42,${[0.22, 0.16, 0.12, 0.09][i]})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            });

            for (let i = 0; i < 72; i++) {
                const a = (i / 72) * Math.PI * 2 + t * 0.2;
                const len = i % 6 === 0 ? 0.04 : 0.02;
                ctx.beginPath();
                ctx.moveTo(ccx + Math.cos(a) * base * 0.97, ccy + Math.sin(a) * base * 0.97);
                ctx.lineTo(ccx + Math.cos(a) * base * (1 - len), ccy + Math.sin(a) * base * (1 - len));
                ctx.strokeStyle = `rgba(200,146,42,${i % 6 === 0 ? 0.42 : 0.16})`;
                ctx.lineWidth = 0.7;
                ctx.stroke();
            }

            for (let i = 0; i < 12; i++) {
                const a = (i / 12) * Math.PI * 2 - Math.PI / 2 + t * 0.05;
                ctx.beginPath();
                ctx.moveTo(ccx, ccy);
                ctx.lineTo(ccx + Math.cos(a) * base * 0.78, ccy + Math.sin(a) * base * 0.78);
                ctx.strokeStyle = 'rgba(200,146,42,.09)';
                ctx.lineWidth = 0.8;
                ctx.stroke();
                const ga = a + Math.PI / 12;
                const gr = base * 0.88;
                ctx.font = `${base * 0.07}px serif`;
                ctx.fillStyle = 'rgba(200,146,42,.38)';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(signs[i], ccx + Math.cos(ga) * gr, ccy + Math.sin(ga) * gr);
            }

            const sq = base * 0.36;
            ctx.strokeStyle = 'rgba(200,146,42,.17)';
            ctx.lineWidth = 0.9;
            ctx.strokeRect(ccx - sq, ccy - sq, sq * 2, sq * 2);
            ctx.beginPath();
            ctx.moveTo(ccx - sq, ccy - sq);
            ctx.lineTo(ccx + sq, ccy + sq);
            ctx.moveTo(ccx + sq, ccy - sq);
            ctx.lineTo(ccx - sq, ccy + sq);
            ctx.stroke();

            ctx.font = `${base * 0.13}px 'serif'`;
            ctx.fillStyle = `rgba(200,146,42,${0.13 + 0.06 * Math.sin(t)})`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('ॐ', ccx, ccy);

            planets.forEach((p, i) => {
                const a = (p.a / 180) * Math.PI + t * (i % 2 === 0 ? 0.08 : 0.06);
                const pr = base * p.r;
                const px = ccx + Math.cos(a) * pr;
                const py = ccy + Math.sin(a) * pr;
                const pg = ctx.createRadialGradient(px, py, 0, px, py, base * 0.06);
                const rgb = parseInt(p.c.slice(1), 16);
                const r = (rgb >> 16) & 255;
                const gg = (rgb >> 8) & 255;
                const b = rgb & 255;
                pg.addColorStop(0, `rgba(${r},${gg},${b},.22)`);
                pg.addColorStop(1, 'transparent');
                ctx.fillStyle = pg;
                ctx.beginPath();
                ctx.arc(px, py, base * 0.06, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(px, py, base * 0.023, 0, Math.PI * 2);
                ctx.fillStyle = p.c;
                ctx.globalAlpha = 0.88;
                ctx.fill();
                ctx.globalAlpha = 1;
                ctx.font = `${base * 0.054}px serif`;
                ctx.fillStyle = p.c;
                ctx.globalAlpha = 0.85;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(p.s, px, py - base * 0.05);
                ctx.globalAlpha = 1;
            });

            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="kundali-wrap absolute right-[5%] top-1/2 -translate-y-1/2 w-[min(65vw,850px)] h-[min(65vw,850px)] z-[2] hidden lg:block opacity-60" />;
};
