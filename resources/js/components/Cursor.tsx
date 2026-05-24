import { useEffect, useRef } from 'react';

export const Cursor = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let cx = 0, cy = 0, rx = 0, ry = 0;
        const handleMouseMove = (e: MouseEvent) => {
            cx = e.clientX;
            cy = e.clientY;
            if (dotRef.current) dotRef.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
        };
        const ac = () => {
            rx += (cx - rx) * 0.12;
            ry += (cy - ry) * 0.12;
            if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
            requestAnimationFrame(ac);
        };
        window.addEventListener('mousemove', handleMouseMove);
        const raf = requestAnimationFrame(ac);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="hidden lg:block pointer-events-none">
            <div ref={dotRef} className="fixed w-1.8 h-1.8 bg-shadi-gold-light rounded-full z-[9999] transition-transform duration-75"></div>
            <div ref={ringRef} className="fixed w-9 h-9 border border-shadi-gold/45 rounded-full z-[9999] transition-transform duration-150"></div>
        </div>
    );
};
