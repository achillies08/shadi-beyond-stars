import { useEffect, useRef } from 'react';

export const KundaliDetail = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let t = 0;
        let animationFrameId: number;

        const W = canvas.width;
        const H = canvas.height;
        const ccx = W / 2;
        const ccy = H / 2;
        const pad = 24;
        const unit = (W - pad * 2) / 4;
        const houses = [['☉', '☽'], [], [' ♂'], [' ♃'], [], [' ♀'], [' ♄'], [], [], [], [], [' ☿']];
        const hPos = [
            [ccx, pad + unit / 2],
            [ccx + unit, pad + unit / 2],
            [ccx + unit * 2, pad + unit / 2],
            [ccx + unit * 2, ccy],
            [ccx + unit * 2, ccy + unit],
            [ccx + unit, ccy + unit],
            [ccx, ccy + unit],
            [ccx - unit, ccy + unit],
            [ccx - unit * 2, ccy + unit],
            [ccx - unit * 2, ccy],
            [ccx - unit * 2, pad + unit / 2],
            [ccx - unit, pad + unit / 2],
        ];
        const houseNames = ['Lagna', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];
        const planetColors: any = { '☉': '#F5C842', '☽': '#C8D8F0', '♂': '#E05050', '♃': '#E8A840', '♀': '#F0D080', '♄': '#C8B898', '☿': '#90C080' };

        const drawDiamond = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, alpha: number) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.beginPath();
            ctx.moveTo(0, -h / 2);
            ctx.lineTo(w / 2, 0);
            ctx.lineTo(0, h / 2);
            ctx.lineTo(-w / 2, 0);
            ctx.closePath();
            ctx.fillStyle = `rgba(200,146,42,${alpha || 0.06})`;
            ctx.fill();
            ctx.strokeStyle = 'rgba(200,146,42,.22)';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            ctx.restore();
        };

        const draw = () => {
            t += 0.007;
            ctx.clearRect(0, 0, W, H);
            ctx.strokeStyle = 'rgba(200,146,42,.2)';
            ctx.lineWidth = 1;
            ctx.strokeRect(pad, pad, W - pad * 2, H - pad * 2);
            ctx.beginPath();
            ctx.moveTo(ccx, pad);
            ctx.lineTo(W - pad, ccy);
            ctx.lineTo(ccx, H - pad);
            ctx.lineTo(pad, ccy);
            ctx.closePath();
            ctx.strokeStyle = 'rgba(200,146,42,.16)';
            ctx.lineWidth = 0.9;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pad, pad);
            ctx.lineTo(ccx, ccy);
            ctx.moveTo(W - pad, pad);
            ctx.lineTo(ccx, ccy);
            ctx.moveTo(pad, H - pad);
            ctx.lineTo(ccx, ccy);
            ctx.moveTo(W - pad, H - pad);
            ctx.lineTo(ccx, ccy);
            ctx.strokeStyle = 'rgba(200,146,42,.11)';
            ctx.lineWidth = 0.8;
            ctx.stroke();
            const bw = unit * 0.9;
            const bh = unit * 0.9;
            hPos.forEach(([hx, hy], i) => {
                const pulse = 0.04 + 0.02 * Math.sin(t + i * 0.52);
                drawDiamond(ctx, hx, hy, bw, bh, pulse);
                ctx.save();
                ctx.translate(hx, hy);
                ctx.font = `bold ${unit * 0.11}px 'Cinzel',serif`;
                ctx.fillStyle = 'rgba(200,146,42,.45)';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(houseNames[i], 0, -bh * 0.23);
                const ps = houses[i];
                if (ps && ps.length) {
                    ps.forEach((p, pi) => {
                        const pc = p.trim();
                        ctx.font = `${unit * 0.18}px serif`;
                        ctx.fillStyle = planetColors[pc] || 'rgba(200,146,42,.75)';
                        ctx.fillText(pc.trim(), (pi - (ps.length - 1) / 2) * unit * 0.2, bh * 0.07);
                    });
                }
                ctx.restore();
            });
            const cg = ctx.createRadialGradient(ccx, ccy, 0, ccx, ccy, unit * 0.7);
            cg.addColorStop(0, `rgba(200,146,42,${0.07 + 0.03 * Math.sin(t * 0.6)})`);
            cg.addColorStop(1, 'transparent');
            ctx.fillStyle = cg;
            ctx.beginPath();
            ctx.arc(ccx, ccy, unit * 0.7, 0, Math.PI * 2);
            ctx.fill();
            ctx.font = `${unit * 0.6}px 'serif'`;
            ctx.fillStyle = `rgba(200,146,42,${0.09 + 0.04 * Math.sin(t * 0.5)})`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('ॐ', ccx, ccy);
            animationFrameId = requestAnimationFrame(draw);
        };
        draw();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return <canvas ref={canvasRef} width="500" height="500" className="w-full aspect-square" />;
};
