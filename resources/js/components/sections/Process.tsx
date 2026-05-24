const processSteps = [
    {
        n: '01',
        g: '✦',
        t: 'Initial Conversation',
        d: 'We begin by understanding your situation, concerns, and what guidance you are looking for.',
    },
    {
        n: '02',
        g: '☽',
        t: 'Kundali Study',
        d: 'Both charts are carefully analysed for compatibility, doshas, planetary influences, and deeper relationship patterns.',
    },
    {
        n: '03',
        g: '◈',
        t: 'Consultation & Guidance',
        d: 'A detailed consultation where everything is explained clearly, along with practical recommendations and written guidance.',
    },
    {
        n: '04',
        g: '❈',
        t: 'Ritual Planning',
        d: 'Every puja and remedy is selected according to the couple\'s Kundali and actual requirement.',
    },
    {
        n: '05',
        g: '⬡',
        t: 'Muhurat Selection',
        d: 'Suitable dates and timings are chosen through Panchang study and alignment between both charts.',
    },
    {
        n: '06',
        g: '◉',
        t: 'Ceremony Preparation',
        d: 'We help coordinate samagri, ritual requirements, and preparation details before the ceremonies begin.',
    },
    {
        n: '07',
        g: '🔥',
        t: 'Pandit Coordination',
        d: 'Experienced pandits are assigned according to the rituals and ceremony requirements.',
    },
    {
        n: '08',
        g: '🪔',
        t: 'Pre-Wedding Rituals',
        d: 'All important pujas and shanti rituals are performed with proper vidhi and guidance.',
    },
    {
        n: '09',
        g: '✧',
        t: 'Wedding Ceremony',
        d: 'The Vivah Sanskar is conducted according to your muhurat, Kundali, and family traditions.',
    },
    {
        n: '10',
        g: '🌿',
        t: 'Completion & Blessings',
        d: 'The ceremonies conclude with blessings, final rituals, and prayers for harmony ahead.',
    },
    {
        n: '11',
        g: '◎',
        t: 'Post-Marriage Guidance',
        d: 'Continued remedies, follow-up support, and practical spiritual guidance wherever needed.',
    },
    {
        n: '12',
        g: '♾',
        t: 'Long-Term Support',
        d: 'Guidance through important life phases, planetary changes, and maintaining balance in married life.',
    },
];

export const Process = () => {
    return (
        <section className="bg-burgundy px-[5%] py-28" id="process">
            <div className="reveal mx-auto max-w-6xl">
                <div className="text-shadi-gold before:bg-shadi-gold mb-4.5 flex items-center gap-4 text-[0.58rem] tracking-[0.4em] before:h-[1px] before:w-[28px] before:content-['']">
                    How It Works
                </div>
                <h2 className="mb-5.5 text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.12] font-normal">
                    From First Conversation
                    <br />
                    To <em className="text-shadi-gold-light italic">Lasting Harmony</em>
                </h2>
                <p className="text-shadi-cream/55 max-w-[600px] text-[1.05rem] leading-[1.9] font-light">
                    A thoughtful process designed to guide you through every stage of the journey, before and after marriage.
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
