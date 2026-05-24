export const Philosophy = () => {
    return (
        <section className="bg-burgundy border-shadi-gold/20 border-y">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="reveal border-shadi-gold/10 border-b px-[5%] py-24 lg:border-r lg:border-b-0">
                    <div className="text-shadi-gold before:bg-shadi-gold mb-4.5 flex items-center gap-4 text-[0.58rem] tracking-[0.4em] before:h-[1px] before:w-[28px] before:content-['']">
                        Our Philosophy
                    </div>
                    <h2 className="mb-5.5 text-[clamp(1.75rem,2.8vw,2.7rem)] leading-[1.2] font-normal">
                        Not just a wedding service.
                        <br />
                        <em className="text-shadi-gold-light italic">A karmic alignment</em>
                        <br />
                        for a lifelong partnership.
                    </h2>
                    <p className="text-shadi-cream/55 mt-5.5 max-w-[600px] text-[1.05rem] leading-[1.9] font-light">
                        Most people stop at matching numbers. We read the language of destiny — past karmic patterns, planetary debts, ancestral
                        influences — and then design the precise rituals to bring everything into divine order before your marriage begins.
                    </p>
                </div>
                <div className="reveal-stagger before:text-shadi-gold/4 before:font-devanagari relative overflow-hidden px-[5%] py-24 before:pointer-events-none before:absolute before:top-1/2 before:-right-4 before:-translate-y-1/2 before:text-[18rem] before:leading-none before:content-['ॐ']">
                    {[
                        { n: '12', l: 'Step Alignment Journey', d: 'From first inquiry to lifelong post-marriage guidance' },
                        { n: '8+', l: 'Core Vedic Services', d: 'Each custom-designed per your birth chart' },
                        { n: '3', l: 'Languages of Service', d: 'Hindi · English · Sanskrit' },
                        { n: '∞', l: 'Commitment to Harmony', d: 'We travel locally, nationally, internationally', last: true },
                    ].map((stat, i) => (
                        <div key={i} className={`reveal-item ${stat.last ? '' : 'mb-10.5'}`}>
                            <div className="text-shadi-gold-light mb-0.8 text-[3.4rem] leading-none">{stat.n}</div>
                            <div className="text-shadi-cream/55 text-[0.6rem] tracking-[0.3em] uppercase">{stat.l}</div>
                            <div className="text-shadi-cream/40 mt-1.4 text-[0.95rem] italic">{stat.d}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
