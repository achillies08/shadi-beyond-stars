interface Props {
    scrollToCTA: () => void;
}

export const TroubledMarriages = ({ scrollToCTA }: Props) => {
    return (
        <section className="bg-nightshade relative overflow-hidden px-[5%] py-28" id="troubled-marriages">
            <div className="reveal mx-auto mb-16 max-w-4xl text-center">
                <div className="text-shadi-gold before:bg-shadi-gold mx-auto mb-4.5 flex max-w-fit items-center gap-4 text-[0.58rem] tracking-[0.4em] before:h-[1px] before:w-[28px] before:content-[''] after:h-[1px] after:w-[28px] after:bg-shadi-gold after:content-['']">
                    We Specialise In
                </div>
                <h2 className="mb-5.5 text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.12] font-normal">
                    Troubled & <em className="text-shadi-gold-light italic">Broken Marriages</em>
                </h2>
                <p className="text-shadi-cream/70 mx-auto max-w-[700px] text-[1.05rem] leading-[1.9] font-light">
                    Not every relationship breaks in a single day. Sometimes distance builds slowly through misunderstandings, emotional imbalance, repeated conflict, or difficult phases in life together.
                    <br /><br />
                    Through careful Kundali study and thoughtful guidance, we help couples understand what may be affecting harmony within the marriage.
                </p>
            </div>
            
            <div className="reveal-stagger mx-auto max-w-5xl">
                <div className="bg-shadi-gold/6 grid grid-cols-1 gap-px md:grid-cols-2">
                    {[
                        {
                            g: '✦',
                            t: 'Compatibility reassessment for married couples',
                        },
                        {
                            g: '◈',
                            t: 'Emotional & karmic conflict analysis',
                        },
                        {
                            g: '☽',
                            t: 'Guidance during difficult marriage phases',
                        },
                        {
                            g: '❈',
                            t: 'Personalised remedies for restoring harmony',
                        }
                    ].map((item, i) => (
                        <div key={i} className="reveal-item bg-burgundy hover:bg-burgundy/80 p-9 transition-colors text-center">
                            <div className="text-shadi-gold mb-4 text-2xl opacity-60">{item.g}</div>
                            <div className="text-shadi-cream text-[1.05rem] leading-relaxed">{item.t}</div>
                        </div>
                    ))}
                </div>

                <div className="reveal mt-12 text-center">
                    <button 
                        onClick={scrollToCTA}
                        className="btn-magnetic bg-shadi-gold text-nightshade hover:bg-shadi-gold-light cursor-pointer border-none px-8 py-3.5 text-[0.58rem] font-semibold tracking-[0.18em] uppercase transition-all"
                    >
                        Seek Guidance for your Marriage →
                    </button>
                </div>
            </div>
        </section>
    );
};
