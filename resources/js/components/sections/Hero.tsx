import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { KundaliWheel } from '../canvas/KundaliWheel';
import { Starfield } from '../canvas/Starfield';

interface HeroProps {
    submitLead: (e: React.FormEvent) => void;
    scrollToCTA: () => void;
}

export const Hero = ({ submitLead, scrollToCTA }: HeroProps) => {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            // Set initial states
            gsap.set('.hero-reveal', { autoAlpha: 0, y: 30 });
            gsap.set('.hero-line', { scaleX: 0 });

            tl.to('.hero-line', { scaleX: 1, duration: 1.2, ease: 'power4.inOut', stagger: 0.2 })
                .to(
                    '.hero-reveal',
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.1,
                        ease: 'power3.out',
                    },
                    '-=0.8',
                )
                .from(
                    '.kundali-wrap',
                    {
                        autoAlpha: 0,
                        scale: 0.8,
                        rotation: -15,
                        duration: 2,
                        ease: 'power2.out',
                    },
                    '-=1.5',
                );
        },
        { scope: sectionRef },
    );

    return (
        <section ref={sectionRef} className="bg-nightshade relative flex min-h-screen items-center overflow-hidden">
            <Starfield />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_65%_85%_at_25%_52%,rgba(28,10,10,0.85)_0%,transparent_65%),radial-gradient(ellipse_45%_55%_at_75%_50%,rgba(20,7,7,0.4)_0%,transparent_60%),linear-gradient(to_right,rgba(20,7,7,0.97)_0%,rgba(20,7,7,0.55)_48%,rgba(20,7,7,0.15)_100%)]"></div>
            <div className="relative z-[3] px-[5%] pt-28 pb-20">
                <div className="text-appear text-shadi-gold mb-5 before:bg-shadi-gold flex items-center gap-4 text-[0.6rem] tracking-[0.45em] before:h-[1px] before:w-[35px] before:content-['']">
                    Vedic Marriage Alignment
                </div>
                <h1 className="text-appear mb-1.5 text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] font-normal">
                    Marriages Made
                    <br />
                    <em className="text-appear text-shadi-gold-light italic">Beyond</em> the Stars
                    <span className="text-appear font-devanagari text-shadi-gold mt-5 block text-[0.36em] font-light tracking-wide opacity-80">
                        दो कर्मों के संगम का सारथी
                    </span>
                </h1>
                <div className="hero-reveal hero-line after:from-shadi-gold/50 before:from-shadi-gold/50 my-6.5 flex items-center gap-4 before:h-[1px] before:flex-1 before:bg-gradient-to-r before:to-transparent before:content-[''] after:h-[1px] after:flex-1 after:bg-gradient-to-l after:to-transparent after:content-['']">
                    <span className="text-shadi-gold text-[0.9rem] opacity-70">✦</span>
                </div>
                <p className="hero-reveal font-devanagari text-shadi-gold-light mb-1 text-[1.05rem] tracking-wide">आपकी विवाहिक यात्रा का सारथी</p>
                <p className="hero-reveal text-shadi-cream/55 mb-6 text-[0.9rem] italic">The celestial guide to your marital journey</p>
                <p className="hero-reveal text-shadi-cream/72 mb-8 max-w-[510px] text-[1.12rem] leading-[1.9] font-light">
                    We go beyond horoscope matching. Through deep Kundali analysis, karmic alignment, and precisely designed rituals — we ensure your
                    marriage is spiritually balanced and karmically prepared for a lifetime.
                </p>
                <div className="hero-reveal flex max-w-[480px] flex-col gap-3">
                    <div className="text-shadi-gold mb-0.5 text-[0.58rem] tracking-[0.3em]">✦ &nbsp; Begin with a free consultation</div>
                    <button 
                        onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                        className="btn-magnetic bg-shadi-gold text-nightshade hover:bg-shadi-gold-light cursor-pointer border-none px-8 py-3.5 text-[0.58rem] font-semibold tracking-[0.18em] uppercase transition-all hover:shadow-[0_8px_30px_rgba(200,146,42,0.35)]"
                    >
                        Request Free Consultation →
                    </button>
                    <p className="text-shadi-cream/28 text-[0.78rem] italic">
                        ✦ &nbsp; Premium, private & judgment-free &nbsp;·&nbsp; We respond within 24 hours
                    </p>
                </div>
            </div>
            <KundaliWheel />
        </section>
    );
};
