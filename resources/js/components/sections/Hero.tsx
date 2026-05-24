import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

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
                );
        },
        { scope: sectionRef },
    );

    return (
        <section ref={sectionRef} className="bg-nightshade relative flex min-h-screen items-center overflow-hidden bg-[url('/front-assets/wedding_couple_hands.png')] bg-cover bg-center bg-no-repeat bg-blend-soft-light">
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-nightshade/95 via-nightshade/80 to-nightshade/30"></div>
            <div className="relative z-[3] px-[5%] pt-34 pb-20">
                <h1 className="text-appear mb-1.5 text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] font-normal">
                    Marriages are made
                    <br />
                    <em className="text-appear text-shadi-gold-light italic">beyond</em> Stars
                    <span className="text-appear font-devanagari text-shadi-gold mt-5 block text-[0.36em] leading-relaxed font-light tracking-wide opacity-80">
                        दो कर्मों के संगम का सारथी | <br /> आपकी विवाहिक यात्रा का सारथी
                    </span>
                </h1>
                <div className="md:max-w-1/2">
                <div className="hero-reveal hero-line after:from-shadi-gold/50 before:from-shadi-gold/50 my-6.5 flex items-center gap-4 before:h-[1px] before:flex-1 before:bg-gradient-to-r before:to-transparent before:content-[''] after:h-[1px] after:flex-1 after:bg-gradient-to-l after:to-transparent after:content-['']">
                    <span className="text-shadi-gold text-[0.9rem] opacity-70">✦</span>
                </div>
                    <p className="hero-reveal text-shadi-cream/90 mb-4 text-[1.12rem] leading-relaxed font-light drop-shadow-md">
                        A lasting marriage is built on more than emotions alone. Understanding, timing, compatibility, and balance all have their
                        place in the journey. At Shadi Beyond Stars, we help couples and families understand these deeper aspects through detailed
                        Kundali study, Vedic insight, and rituals guided by tradition.
                    </p>
                    <p className="hero-reveal text-shadi-cream/90 mb-8 text-[1.12rem] leading-relaxed font-light drop-shadow-md">
                        With thoughtful analysis and personalised guidance, we help bring greater clarity and peace before an important new beginning.
                    </p>
                    <div className="hero-reveal flex max-w-[480px] flex-col gap-3">
                        <div className="text-shadi-gold mb-0.5 text-[0.75rem] tracking-[0.3em] drop-shadow-md">✦ &nbsp; Begin with a free consultation</div>
                        <button
                            onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                            className="btn-magnetic bg-shadi-gold text-nightshade hover:bg-shadi-gold-light cursor-pointer border-none px-8 py-3.5 text-[0.58rem] font-semibold tracking-[0.18em] uppercase transition-all"
                        >
                            Request Free Consultation →
                        </button>
                        <p className="text-shadi-cream/40 text-[0.75rem] italic drop-shadow-md">
                            ✦ &nbsp; Premium, private & judgment-free &nbsp;·&nbsp; We respond within 24 hours
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
