import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

const services = {
// ... existing services ...
    astro: [
        {
            g: '☽',
            t: 'Advanced Kundali Matching',
            d: 'Deep compatibility beyond guna matching — emotional, financial, karmic, and spiritual alignment of both individuals.',
        },
        {
            g: '◈',
            t: 'Comprehensive Dosha Analysis',
            d: 'Identification and assessment of all doshas — Mangal, Kaal Sarp, Pitra, Shani — and their precise impact on your union.',
        },
        {
            g: '✦',
            t: 'Vedic Muhurat Selection',
            d: 'Astrologically precise wedding timing based on both charts, planetary transits, and Panchang — the most auspicious window for your beginning.',
        },
        {
            g: '❈',
            t: 'Detailed Written Analysis',
            d: 'A complete written Kundali report with findings, recommendations, and a personalised ritual plan — delivered after your consultation.',
        },
    ],
    prewed: [
        {
            g: '🔥',
            t: 'Mangal Dosh Puja',
            d: 'Complete remedy for Mangal Dosh — performed with full Vedic precision to neutralise the malefic influence of Mars on the union.',
        },
        {
            g: '🪔',
            t: 'Kaal Sarp Puja',
            d: 'Ritual to address the Kaal Sarp Yog in the chart — done at the right muhurat with specific mantras for lasting resolution.',
        },
        {
            g: '⬡',
            t: 'Navgrah Shanti',
            d: 'Propitiation of all nine planetary forces — a comprehensive shanti ceremony to balance the entire cosmic chart before marriage.',
        },
        {
            g: '◉',
            t: 'Pitra Dosh Puja',
            d: 'Resolution of ancestral karmic debt — one of the most often overlooked yet critical rituals before entering a marriage.',
        },
    ],
    wedding: [
        {
            g: '✧',
            t: 'Vivah Sanskar Ceremony',
            d: 'Your complete wedding ceremony — designed entirely around your Kundali and muhurat, performed with authentic Vedic tradition.',
        },
        {
            g: '☉',
            t: 'Saptapadi Ritual Design',
            d: 'The seven sacred vows, designed precisely for the energies of your two charts — meaningful, personalised, and karmically aligned.',
        },
        {
            g: '🌿',
            t: 'Full Pandit Coordination',
            d: 'Our trained pandit team manages every aspect of the ceremony — samagri, timing, mantra — one seamless point of contact.',
        },
        {
            g: '♾',
            t: 'Wedding Day Alignment Package',
            d: 'Everything bundled — muhurat, ceremony design, pandit team, samagri, and same-day ritual support for a perfectly aligned day.',
        },
    ],
    post: [
        {
            g: '◎',
            t: 'Post-Ritual Aftercare',
            d: 'Instructions, ongoing remedies, and follow-up consultation — the spiritual work continues after the ceremony concludes.',
        },
        {
            g: '♾',
            t: 'Long-Term Harmony Support',
            d: 'Periodic check-ins, updated remedies aligned to planetary transits, and subscription guidance for enduring marital wellbeing.',
        },
        {
            g: '☽',
            t: 'NRI Remote Services',
            d: 'Full consultation, Kundali analysis, and guided ritual execution available remotely for clients anywhere in the world.',
        },
        {
            g: '✦',
            t: 'Annual Transit Guidance',
            d: 'Yearly planetary transit reviews specific to your married chart — identifying key windows, challenges, and opportunities ahead.',
        },
    ],
};

interface ServicesProps {
    scrollToCTA: () => void;
}

export const Services = ({ scrollToCTA }: ServicesProps) => {
    const [activeTab, setActiveTab] = useState('astro');
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.service-card',
                { y: 30, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: 'power3.out',
                    force3D: true,
                    overwrite: 'auto',
                }
            );
        },
        { dependencies: [activeTab], scope: container }
    );

    return (
        <section className="bg-nightshade px-[5%] py-28" id="services">
            <div ref={container} className="reveal mx-auto max-w-6xl">
                <div className="text-shadi-gold before:bg-shadi-gold mb-4.5 flex items-center gap-4 text-[0.58rem] tracking-[0.4em] before:h-[1px] before:w-[28px] before:content-['']">
                    What We Offer
                </div>
                <h2 className="mb-5.5 text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.12] font-normal">
                    End-to-End <em className="text-shadi-gold-light italic">Marriage Alignment</em>
                    <br />— Not Just Advice
                </h2>
                <p className="text-shadi-cream/55 max-w-[600px] text-[1.05rem] leading-[1.9] font-light">
                    Four service pillars, one seamless journey. Every offering is tailored to your Kundali — nothing generic, nothing off-the-shelf.
                </p>

                <div className="border-shadi-gold/15 mt-12 flex flex-wrap gap-0 border-b">
                    {[
                        { id: 'astro', label: 'Astrology & Analysis' },
                        { id: 'prewed', label: 'Pre-Wedding Rituals' },
                        { id: 'wedding', label: 'Wedding Day' },
                        { id: 'post', label: 'Post-Marriage' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`cursor-pointer border-b-2 bg-transparent px-6 py-3.5 text-[0.58rem] tracking-[0.18em] uppercase transition-all ${activeTab === tab.id ? 'text-shadi-gold-light border-shadi-gold' : 'text-shadi-cream/42 hover:text-shadi-gold-light border-transparent'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="bg-shadi-gold/6 mt-px grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4">
                    {services[activeTab as keyof typeof services].map((s, i) => (
                        <div
                            key={`${activeTab}-${i}`}
                            onClick={scrollToCTA}
                            className="service-card group bg-burgundy hover:bg-burgundy/80 after:from-shadi-gold/10 will-change-[transform,opacity] relative cursor-pointer overflow-hidden px-7.5 py-9.5 transition-colors duration-500 after:absolute after:inset-x-0 after:bottom-0 after:h-0 after:bg-gradient-to-t after:to-transparent after:transition-[height] after:duration-500 after:content-[''] hover:after:h-full"
                        >
                            <span className="mb-5.5 block text-2xl opacity-65">{s.g}</span>
                            <div className="text-shadi-gold mb-2 text-[0.52rem] tracking-[0.25em] uppercase opacity-55">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <div className="text-shadi-cream mb-2.5 text-[1.08rem] leading-snug">{s.t}</div>
                            <div className="text-shadi-cream/55 text-[0.88rem] leading-[1.7]">{s.d}</div>
                            <div className="text-shadi-gold mt-5.5 flex items-center gap-2 text-[0.52rem] tracking-[0.2em] uppercase opacity-0 transition-opacity group-hover:opacity-100 after:content-['→']">
                                Enquire about this service
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
