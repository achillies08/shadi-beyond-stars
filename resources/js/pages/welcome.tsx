import { ContactForm } from '@/components/common/ContactForm';
import ParticleTextEffect from '@/components/common/ParticleTextEffect';
import { CTA } from '@/components/sections/CTA';
import { Hero } from '@/components/sections/Hero';
import { KundaliSection } from '@/components/sections/KundaliSection';
import { Marquee } from '@/components/sections/Marquee';
import { Philosophy } from '@/components/sections/Philosophy';
import { Process } from '@/components/sections/Process';
import { Rituals } from '@/components/sections/Rituals';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';
import MainLayout from '@/layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome() {
    const [toast, setToast] = useState(false);

    const submitLead = (e: React.FormEvent) => {
        e.preventDefault();
        setToast(true);
        setTimeout(() => setToast(false), 3500);
    };

    const triggerToast = () => {
        setToast(true);
        setTimeout(() => setToast(false), 3500);
    };

    const scrollToCTA = () => {
        document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <MainLayout scrollToCTA={scrollToCTA}>
            <Head title="Shadi Beyond Stars — Vedic Marriage Alignment" />

            <div
                className={`toast bg-shadi-gold text-nightshade pointer-events-none fixed bottom-20 left-1/2 z-[500] -translate-x-1/2 px-8 py-3.5 text-[0.62rem] tracking-[0.2em] transition-all duration-400 ${toast ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
            >
                ✦ &nbsp; We'll reach you within 24 hours &nbsp; ✦
            </div>

            <main>
                <Hero submitLead={submitLead} scrollToCTA={scrollToCTA} />
                <Marquee />
                <Philosophy />
                <Services scrollToCTA={scrollToCTA} />

                {/* LEAD STRIP 1 */}
                <div className="reveal from-nightshade via-shadi-gold/6 to-nightshade border-shadi-gold/20 border-y bg-gradient-to-br px-[5%] py-15">
                    <div className="reveal-stagger mx-auto grid max-w-4xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div className="reveal-item">
                            <div className="text-shadi-cream mb-2 text-[1.65rem] italic">Not sure where to begin?</div>
                            <p className="text-shadi-cream/55 text-[0.98rem]">
                                Share your birth details and we'll guide you to the right service — no pressure, no obligation.
                            </p>
                        </div>
                        <div className="reveal-item">
                            <ContactForm buttonText="Get Free Guidance →" onSuccess={triggerToast} />
                        </div>
                    </div>
                </div>

                <KundaliSection />
                <Rituals scrollToCTA={scrollToCTA} />
                <Process />
                <WhyUs />

                <CTA onSuccess={triggerToast} />
            </main>
        </MainLayout>
    );
}
