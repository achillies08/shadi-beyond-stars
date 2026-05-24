import { useState } from 'react';
import { KundaliDetail } from '../canvas/KundaliDetail';

const kundaliTabs = {
    match: {
        t: 'Kundali Matching',
        s: 'Ashtakoota & Beyond',
        d: 'Traditional guna matching covers only 8 points. We analyse 36 — including emotional temperament, financial compatibility, sexual harmony, and deeper spiritual alignment between two souls.',
        p: [
            '36-point Ashtakoota analysis',
            'Emotional & karmic compatibility',
            'Dashakoota extended compatibility',
            'Longevity & financial alignment',
        ],
    },
    dosha: {
        t: 'Dosha Analysis',
        s: 'Root Cause, Not Symptom',
        d: 'Every dosh has a root — a specific planetary configuration in a specific house at a specific degree. We identify it precisely and design the exact remedy required, not a generic puja.',
        p: [
            'Mangal, Kaal Sarp, Pitra identification',
            'Severity grading per chart',
            'Cancellation conditions checked',
            'Precise ritual prescription',
        ],
    },
    muhurat: {
        t: 'Muhurat Selection',
        s: 'The Timing of Destiny',
        d: 'The moment a marriage begins sets its energetic foundation. We select muhurat using Panchang, Tithi, Nakshatra, and both charts — giving your marriage the most auspicious cosmic start possible.',
        p: [
            'Panchang-based calculation',
            'Both charts aligned to same window',
            'Multiple date options provided',
            'Ceremony timing sequenced precisely',
        ],
    },
    karmic: {
        t: 'Karmic Reading',
        s: 'Past Lives, Present Bonds',
        d: 'Some marriages carry unresolved debt from previous lives. We identify karmic indicators — Rahu/Ketu placements, 7th house patterns, and Saturn influences — and resolve them before the ceremony.',
        p: ['Rahu/Ketu axis analysis', '7th house & lord examination', 'Ancestral pattern identification', 'Karmic clearing ritual design'],
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
                        Reading the{' '}
                        <em className="text-shadi-gold-light italic">
                            Language
                            <br />
                            of Destiny
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
