import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

const services = {
    astro: [
        {
            g: '☽',
            t: 'Advanced Kundali Matching',
            d: 'A meaningful match goes far beyond guna scores alone. Along with emotional compatibility, family dynamics, and long-term harmony, we also study deeper karmic connections through advanced analysis such as Prarabdh Match, D90, and D120 charts to understand the true nature of the relationship.',
        },
        {
            g: '◈',
            t: 'Comprehensive Dosha Analysis',
            d: 'Every dosha carries a different influence depending on the chart. We carefully examine Mangal, Kaal Sarp, Pitra, Shani, and other planetary conditions to understand their actual impact on married life and whether remedies are truly needed.',
        },
        {
            g: '✦',
            t: 'Vedic Muhurat Selection',
            d: 'In our traditions, the timing of a marriage has always held importance. Using Panchang, planetary movements, Nakshatra, and both Kundalis, we identify dates and timings that support harmony, stability, and a positive beginning for the couple.',
        },
        {
            g: '❈',
            t: 'Detailed Written Analysis',
            d: 'After the consultation, you receive a clear and personalised report with important observations, compatibility insights, and guidance explained in a practical and easy-to-understand manner.',
        },
    ],
    marriage: [
        {
            g: '✧',
            t: 'Vivah Sanskar Ceremony',
            d: 'A complete Vedic wedding ceremony designed around your Kundali, muhurat, and family traditions with every ritual performed thoughtfully and with proper guidance.',
        },
        {
            g: '☉',
            t: 'Saptapadi Ritual Design',
            d: 'The seven sacred vows hold deep meaning in a marriage. We help personalise the ceremony according to the couple\'s energies, values, and spiritual compatibility.',
        },
        {
            g: '🌿',
            t: 'Full Pandit Coordination',
            d: 'From samagri and mantra recitation to ritual timing and ceremony flow, our pandit team manages every detail with care so families can remain fully present in the moment.',
        },
        {
            g: '♾',
            t: 'Wedding Day Alignment Package',
            d: 'A complete wedding support experience including muhurat guidance, ceremony planning, pandit coordination, samagri, and same-day ritual assistance for a smooth and spiritually aligned celebration.',
        },
    ],
    post: [
        {
            g: '◎',
            t: 'Post-Ritual Aftercare',
            d: 'Some guidance is needed even after the rituals are complete. We remain available for follow-up support, remedies, and practical guidance as the couple settles into married life.',
        },
        {
            g: '♾',
            t: 'Long-Term Harmony Support',
            d: 'Marriage changes with time, responsibilities, and life phases. We offer continued guidance during important planetary periods and major transitions to help maintain balance and understanding in the relationship.',
        },
        {
            g: '☽',
            t: 'Support For Troubled Marriages',
            d: 'Not every relationship needs to end. Some simply need deeper understanding. Through careful chart study and thoughtful guidance, we help couples navigate emotional distance, recurring conflict, and difficult phases in marriage.',
        },
        {
            g: '✦',
            t: 'Subscription Guidance',
            d: 'Ongoing monthly or quarterly guidance for couples seeking continued spiritual and relationship support through different phases of married life. Includes personalised remedies, transit guidance, important dates, and direct consultation support.',
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
                    Thoughtful Guidance For
                    <br />
                    <em className="text-shadi-gold-light italic">A New Beginning</em>
                </h2>
                <p className="text-shadi-cream/55 max-w-[600px] text-[1.05rem] leading-[1.9] font-light">
                    Three paths of support, shaped around your journey. Every marriage carries its own karma, circumstances, and challenges. That is why we do not believe in fixed remedies or generic advice. Whether it is Kundali analysis, rituals & post-marriage guidance, every step is approached with care, understanding, and respect for your situation.
                </p>

                <div className="border-shadi-gold/15 mt-12 flex flex-wrap gap-0 border-b">
                    {[
                        { id: 'astro', label: 'Astrology & Analysis' },
                        { id: 'marriage', label: 'Marriage' },
                        { id: 'post', label: 'Post Marriage' },
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
                            className="service-card group bg-burgundy hover:bg-burgundy/80 border border-transparent hover:border-shadi-gold/20 will-change-[transform,opacity] relative cursor-pointer overflow-hidden px-7.5 py-9.5 transition-colors duration-500"
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
