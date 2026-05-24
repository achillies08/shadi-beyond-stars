const processSteps = [
    {
        n: '01',
        g: '✦',
        t: 'Initial Inquiry',
        d: 'You reach out via website or WhatsApp. We begin with a discovery conversation to understand your situation and what you are seeking.',
    },
    {
        n: '02',
        g: '☽',
        t: 'Kundali Collection & Analysis',
        d: 'Both birth charts collected. Deep Vedic analysis — compatibility, doshas, karmic patterns, and planetary influences. Far beyond guna matching.',
    },
    {
        n: '03',
        g: '◈',
        t: 'Consultation & Written Report',
        d: '60–90 minute session walking you through findings clearly and practically. You receive a written summary report with all recommendations.',
    },
    {
        n: '04',
        g: '❈',
        t: 'Personalised Ritual Plan',
        d: 'A complete ritual roadmap — which pujas are needed, in what sequence, and at what times. Specific to your Kundali. Nothing generic.',
    },
    {
        n: '05',
        g: '⬡',
        t: 'Muhurat Selection',
        d: 'Vedic planetary calculations aligned to both charts — the most auspicious dates and times for your wedding and each ritual.',
    },
    {
        n: '06',
        g: '◉',
        t: 'Preparation List Shared',
        d: 'Everything the client needs to arrange. We provide full ritual setup and samagri for all ceremonies we execute.',
    },
    {
        n: '07',
        g: '🔥',
        t: 'Pandit Team Assigned',
        d: 'Our trained pandit team is briefed, prepared, and allocated to your specific ceremony requirements.',
    },
    {
        n: '08',
        g: '🪔',
        t: 'Pre-Wedding Rituals Executed',
        d: 'All pre-wedding pujas and shanti rituals performed with precision — at your home, temple, or venue.',
    },
    {
        n: '09',
        g: '✧',
        t: 'Wedding Day Ceremony',
        d: 'The Vivah Sanskar — your customised wedding ceremony performed in alignment with your muhurat and both charts.',
    },
    {
        n: '10',
        g: '🌿',
        t: 'Completion & Blessings',
        d: 'Ritual completion, prasad distribution, and final blessings — the marriage begins in full spiritual alignment.',
    },
    {
        n: '11',
        g: '◎',
        t: 'Post-Ritual Guidance',
        d: 'Aftercare instructions, ongoing remedies, and follow-up consultation — ensuring the spiritual work continues.',
    },
    {
        n: '12',
        g: '♾',
        t: 'Long-Term Harmony Support',
        d: 'Periodic check-ins, updated remedies aligned to planetary transits, and subscription guidance for enduring marital wellbeing.',
    },
];

export const Process = () => {
    return (
        <section className="from-burgundy to-nightshade bg-gradient-to-b px-[5%] py-28" id="process">
            <div className="reveal mx-auto max-w-6xl">
                <div className="text-shadi-gold before:bg-shadi-gold mb-4.5 flex items-center gap-4 text-[0.58rem] tracking-[0.4em] before:h-[1px] before:w-[28px] before:content-['']">
                    How It Works
                </div>
                <h2 className="mb-5.5 text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.12] font-normal">
                    From First Inquiry
                    <br />
                    to <em className="text-shadi-gold-light italic">Lifelong Harmony</em>
                </h2>
                <p className="text-shadi-cream/55 max-w-[600px] text-[1.05rem] leading-[1.9] font-light">
                    A complete 12-step journey — not a one-time consultation. We walk with you from the moment you reach out to well after the wedding
                    day.
                </p>

                <div className="bg-shadi-gold/6 reveal-stagger mt-16 grid grid-cols-1 gap-px transition-all md:grid-cols-2">
                    {processSteps.map((s, i) => (
                        <div
                            key={i}
                            className={`reveal-item bg-nightshade group hover:bg-burgundy relative p-9.5 transition-colors ${i === 11 ? 'bg-shadi-gold/4' : ''}`}
                        >
                            <div className="text-shadi-gold/9 right-7.2 group-hover:text-shadi-gold/20 absolute top-5.5 text-[2.8rem] leading-none transition-colors">
                                {s.n}
                            </div>
                            <div className="mb-3 text-[1.2rem] opacity-55">{s.g}</div>
                            <div className="text-shadi-gold-light mb-1.8 text-[0.7rem] tracking-[0.15em] uppercase">{s.t}</div>
                            <div className="text-shadi-cream/55 group-hover:text-shadi-cream/75 text-[0.92rem] leading-[1.75] transition-colors">
                                {s.d}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
