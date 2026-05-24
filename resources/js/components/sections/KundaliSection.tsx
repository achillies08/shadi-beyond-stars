import { useState } from 'react';
import { KundaliDetail } from '../canvas/KundaliDetail';

const kundaliTabs = {
    match: {
        t: 'Kundali Matching',
        s: 'More Than Just Guna Matching',
        d: 'Traditional matching focuses on gunas. We study the deeper balance between two individuals including emotional nature, karmic understanding, relationship harmony, and karmic connection.',
        p: [
            'Prarabdh Match & karmic compatibility analysis',
            'Dashakoota, D90 & D120 chart study',
            'Extended Dashakoota matching',
            'Long-term harmony & stability insights',
        ],
    },
    dosha: {
        t: 'Dosha Analysis',
        s: 'Understanding The Cause Behind The Imbalance',
        d: 'Every dosha reflects a specific planetary influence within the chart. We carefully study its placement, intensity, and actual effect before suggesting any remedy or ritual.',
        p: [
            'Mangal, Kaal Sarp & Pitra analysis',
            'Severity assessment for each chart',
            'Cancellation conditions examined',
            'Personalised ritual recommendations',
        ],
    },
    muhurat: {
        t: 'Muhurat Selection',
        s: 'Choosing The Right Time To Begin',
        d: 'In our traditions, the timing of a marriage has always held deep importance. We study Panchang, Tithi, Nakshatra, and both Kundalis carefully to identify the most supportive time for the ceremony to begin.',
        p: [
            'Panchang-based muhurat calculation',
            'Alignment between both charts',
            'Multiple suitable date options',
            'Precise ceremony timing guidance',
        ],
    },
    karmic: {
        t: 'Karmic Reading',
        s: 'Understanding Deeper Relationship Patterns',
        d: 'Some relationships carry emotions and patterns that feel difficult to explain. Through deeper chart study, we examine karmic influences connected to Rahu, Ketu, Saturn, and the 7th house to better understand the bond between two individuals.',
        p: [
            'Rahu/Ketu axis analysis',
            '7th house & lord examination',
            'Ancestral pattern insights',
            'Personalised karmic remedies',
        ],
    },
};

export const KundaliSection = () => {
    const [activeKTab, setActiveKTab] = useState('match');

    return (
        <section className="bg-burgundy border-shadi-gold/20 border-y px-[5%] py-28" id="kundali">
            <div className="reveal mx-auto grid max-w-6xl grid-cols-1 items-center gap-20 lg:grid-cols-[1.1fr_1fr]">
                <div className="bg-nightshade/20 overflow-hidden rounded-sm p-4">
                    <KundaliDetail />
                </div>
                <div>
                    <div className="text-shadi-gold before:bg-shadi-gold mb-4.5 flex items-center gap-4 text-[0.58rem] tracking-[0.4em] before:h-[1px] before:w-[28px] before:content-['']">
                        The Chart Science
                    </div>
                    <h2 className="mb-8 text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.12] font-normal">
                        Analysis{' '}
                        <em className="text-shadi-gold-light italic">
                            Beyond
                            <br />
                            Stars
                        </em>
                    </h2>

                    <div className="mb-8 flex flex-wrap gap-4">
                        {[
                            { id: 'match', label: 'Matching' },
                            { id: 'dosha', label: 'Dosha' },
                            { id: 'muhurat', label: 'Muhurat' },
                            { id: 'karmic', label: 'Karmic' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveKTab(tab.id)}
                                className={`cursor-pointer border bg-transparent px-4 py-2 text-[0.56rem] tracking-[0.15em] uppercase transition-all ${activeKTab === tab.id ? 'border-shadi-gold text-shadi-gold-light bg-shadi-gold/8' : 'border-shadi-gold/22 text-shadi-cream/45 hover:border-shadi-gold'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="animate-fade-in min-h-[320px]">
                        <div className="text-shadi-cream mb-2 text-[1.75rem] italic">{kundaliTabs[activeKTab as keyof typeof kundaliTabs].t}</div>
                        <div className="text-shadi-gold mb-5.5 text-[0.6rem] tracking-[0.25em] uppercase">
                            {kundaliTabs[activeKTab as keyof typeof kundaliTabs].s}
                        </div>
                        <div className="text-shadi-cream/55 mb-7.2 text-[1rem] leading-[1.9]">
                            {kundaliTabs[activeKTab as keyof typeof kundaliTabs].d}
                        </div>
                        <ul className="gap-2.8 flex list-none flex-col">
                            {kundaliTabs[activeKTab as keyof typeof kundaliTabs].p.map((pt, i) => (
                                <li
                                    key={i}
                                    className="text-shadi-cream/62 before:text-shadi-gold relative pl-5.5 text-[0.92rem] leading-relaxed before:absolute before:top-1 before:left-0 before:text-[0.55rem] before:content-['✦']"
                                >
                                    {pt}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
