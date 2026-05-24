import { useState } from 'react';

const ritualCards = [
    {
        g: '🔥',
        t: 'Mangal Dosh Puja',
        w: 'Mars Neutralisation',
        d: "The most commonly required pre-wedding ritual — performed for Manglik individuals to neutralise the martial influence and protect the union's longevity.",
        dur: '3–5 Hours',
        ven: 'Home / Temple',
    },
    {
        g: '🐍',
        t: 'Kaal Sarp Puja',
        w: 'Planetary Liberation',
        d: 'Performed when all planets are hemmed between Rahu and Ketu — one of the more serious Yog configurations requiring expert remedy before marriage.',
        dur: '4–6 Hours',
        ven: 'Specified Temples',
    },
    {
        g: '🪐',
        t: 'Navgrah Shanti',
        w: 'Nine Planet Alignment',
        d: 'A comprehensive propitiation of all nine planetary forces — balancing every celestial influence on the chart before the marriage begins.',
        dur: '5–7 Hours',
        ven: 'Home / Venue',
    },
    {
        g: '✧',
        t: 'Vivah Sanskar',
        w: 'The Sacred Union',
        d: 'The core wedding ceremony — Saptapadi, Kanyadaan, and all Vedic rites performed with chart-specific mantras and precise muhurat alignment.',
        dur: '2–4 Hours',
        ven: 'Any Location',
    },
    {
        g: '🕊',
        t: 'Pitra Dosh Puja',
        w: 'Ancestral Liberation',
        d: 'Clearing ancestral debt that may obstruct marital harmony — performed when Pitra Dosh indicators appear in either chart.',
        dur: '3–4 Hours',
        ven: 'Home / Sacred Sites',
    },
    {
        g: '🌿',
        t: 'Shanti Havan',
        w: 'Peace & Harmony Ritual',
        d: 'A sacred fire ceremony designed to purify the environment, invoke divine blessings, and establish harmony in the new home and marriage.',
        dur: '2–3 Hours',
        ven: 'Home',
    },
];

interface RitualsProps {
    scrollToCTA: () => void;
}

export const Rituals = ({ scrollToCTA }: RitualsProps) => {
    const [activeRC, setActiveRC] = useState(0);

    return (
        <section className="bg-nightshade overflow-hidden px-[5%] py-28" id="rituals">
            <div className="reveal mx-auto mb-12 max-w-6xl">
                <div className="text-shadi-gold before:bg-shadi-gold mb-4.5 flex items-center gap-4 text-[0.58rem] tracking-[0.4em] before:h-[1px] before:w-[28px] before:content-['']">
                    Sacred Ceremonies
                </div>
                <h2 className="mb-5.5 text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.12] font-normal">
                    Precisely Chosen Rituals.
                    <br />
                    <em className="text-shadi-gold-light italic">Never Generic.</em>
                </h2>
                <p className="text-shadi-cream/55 max-w-[600px] text-[1.05rem] leading-[1.9] font-light">
                    Each ritual below is selected only when your Kundali specifically requires it — not as a default offering. Your chart tells us
                    what your marriage needs.
                </p>
            </div>
            <div className="bg-shadi-gold/6 scrollbar-hide reveal-stagger -mx-[5%] flex gap-px overflow-x-auto px-[5%] pb-4">
                {ritualCards.map((rc, i) => (
                    <div
                        key={i}
                        onClick={() => setActiveRC(i)}
                        className={`reveal-item bg-burgundy after:border-shadi-gold/10 relative w-[305px] flex-shrink-0 cursor-pointer border-b-2 p-10 transition-all after:absolute after:top-0 after:right-0 after:h-11 after:w-11 after:border-b after:border-l after:content-[''] ${activeRC === i ? 'bg-burgundy/80 border-shadi-gold' : 'hover:bg-burgundy/80 border-transparent'}`}
                    >
                        <div className="mb-5.5 text-3xl opacity-60">{rc.g}</div>
                        <div className="text-shadi-cream mb-1.5 text-[1.2rem]">{rc.t}</div>
                        <div className="text-shadi-gold mb-3.5 text-[0.52rem] tracking-[0.15em] uppercase opacity-65">{rc.w}</div>
                        <div className="text-shadi-cream/55 mb-6.8 line-clamp-3 text-[0.88rem] leading-[1.7]">{rc.d}</div>
                        <div className="border-shadi-gold/10 flex gap-6 border-t pt-5.5">
                            <div className="text-shadi-gold/55 text-[0.5rem] tracking-[0.12em] uppercase">
                                Duration
                                <strong className="font-garamond text-shadi-cream/80 mt-0.8 block text-[0.88rem] font-normal tracking-normal lowercase">
                                    {rc.dur}
                                </strong>
                            </div>
                            <div className="text-shadi-gold/55 text-[0.5rem] tracking-[0.12em] uppercase">
                                Venue
                                <strong className="font-garamond text-shadi-cream/80 mt-0.8 block text-[0.88rem] font-normal tracking-normal lowercase">
                                    {rc.ven}
                                </strong>
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    onClick={scrollToCTA}
                    className="reveal-item bg-burgundy/40 group flex w-[305px] flex-shrink-0 cursor-pointer flex-col items-center justify-center p-10 text-center opacity-70 transition-all"
                >
                    <div className="mb-4 text-2xl opacity-40">✦</div>
                    <div className="text-shadi-cream text-base">And many more</div>
                    <p className="text-shadi-cream/55 mt-2 text-[0.85rem] leading-relaxed">Each ritual selected specifically for your Kundali</p>
                    <button className="bg-shadi-gold text-nightshade group-hover:bg-shadi-gold-light mt-8 px-5.5 py-2.5 text-[0.52rem] tracking-[0.18em] uppercase transition-colors">
                        Ask About Your Ritual
                    </button>
                </div>
            </div>
        </section>
    );
};
