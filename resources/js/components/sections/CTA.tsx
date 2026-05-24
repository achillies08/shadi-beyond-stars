import React from 'react';
import { CTAParticles } from '../canvas/CTAParticles';
import { ContactForm } from '../common/ContactForm';
import { WhatsAppIcon } from '../Icons';

interface CTAProps {
    onSuccess?: () => void;
}

export const CTA = ({ onSuccess }: CTAProps) => {
    return (
        <section className="bg-nightshade relative overflow-hidden px-[5%] py-32 text-center" id="cta">
            <CTAParticles />
            <div className="reveal relative z-10">
                <span className="font-devanagari text-shadi-gold mb-4 block animate-pulse text-[4rem] opacity-22">ॐ</span>
                <h2 className="text-shadi-cream mb-4 text-[clamp(1.9rem,4.2vw,3.8rem)] leading-none font-normal">
                    Begin Your <em className="text-shadi-gold-light italic">Karmic</em>
                    <br />
                    Alignment Today
                </h2>
                <p className="font-devanagari text-shadi-gold mb-1.8 text-[1rem] opacity-70">आपकी विवाहिक यात्रा का सारथी</p>
                <p className="text-shadi-cream/55 mx-auto mb-11 max-w-[500px] text-[1.05rem] leading-[1.8]">
                    Every marriage begins with a question. Let us help you find the answers written in your stars — and then act on them with
                    precision.
                </p>
                <div className="mx-auto max-w-[560px]">
                    <ContactForm buttonText="Request Your Free Consultation →" onSuccess={onSuccess} />
                </div>
                <div className="text-shadi-cream/28 my-1.5 text-[0.56rem] tracking-[0.28em] uppercase">— or reach us directly —</div>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="https://wa.me/917065777369"
                        className="gap-2.8 border-shadi-gold/32 text-shadi-gold-light hover:bg-shadi-gold/10 hover:border-shadi-gold inline-flex items-center border bg-transparent px-8 py-3.5 text-[0.6rem] tracking-[0.18em] uppercase no-underline transition-all"
                    >
                        <WhatsAppIcon />
                        Chat on WhatsApp
                    </a>
                    <a
                        href="tel:+917065777369"
                        className="gap-2.8 border-shadi-gold/32 text-shadi-gold-light hover:bg-shadi-gold/10 hover:border-shadi-gold inline-flex items-center border bg-transparent px-8 py-3.5 text-[0.6rem] tracking-[0.18em] uppercase no-underline transition-all"
                    >
                        📞 &nbsp; Call Us
                    </a>
                </div>
            </div>
        </section>
    );
};
