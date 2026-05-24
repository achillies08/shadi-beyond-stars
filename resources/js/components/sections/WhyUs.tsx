export const WhyUs = () => {
    return (
        <section className="bg-burgundy border-shadi-gold/20 border-y px-[5%] py-28">
            <div className="mx-auto max-w-6xl">
                <p className="reveal text-shadi-cream font-goudy mx-auto mb-18 max-w-[820px] text-center text-[clamp(1.7rem,3.3vw,2.85rem)] leading-[1.4] font-normal italic">
                    Helping marriages begin with <em className="text-shadi-gold-light not-italic">clarity and balance.</em>
                </p>
                <div className="reveal-stagger bg-shadi-gold/5 mx-auto grid max-w-6xl grid-cols-1 gap-0.5 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            g: '✦',
                            t: 'Personalised For Every Kundali',
                            d: "No two marriages carry the same energies or circumstances. Every ritual, recommendation, and ceremony is selected according to the couple's chart and situation.",
                        },
                        {
                            g: '◈',
                            t: 'Beyond Doshas Alone',
                            d: 'We study deeper relationship patterns, karmic influences, emotional compatibility, and family dynamics to understand the marriage more completely.',
                        },
                        {
                            g: '⬡',
                            t: 'Complete Guidance Under One Roof',
                            d: 'From analysis and planning to rituals and ceremony coordination, every step is managed with clarity and care.',
                        },
                        {
                            g: '☽',
                            t: 'Traditional Wisdom, Thoughtfully Delivered',
                            d: 'Rooted in authentic Vedic practices, explained with simplicity and sensitivity for modern families across the world.',
                        },
                        {
                            g: '❈',
                            t: 'Focused On Long-Term Harmony',
                            d: 'The goal is not simply completing rituals, but helping couples begin married life with greater balance, understanding, and peace.',
                        },
                        {
                            g: '◉',
                            t: 'Available Across India & Worldwide',
                            d: 'From intimate home ceremonies to destination weddings, our team travels wherever guidance and rituals are needed.',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="reveal-item bg-burgundy group hover:bg-burgundy/80 relative overflow-hidden p-11.5 transition-all border border-transparent hover:border-shadi-gold/30"
                        >
                            <div className="border-shadi-gold/28 text-shadi-gold mb-5.5 flex h-9.5 w-9.5 items-center justify-center border text-[0.95rem]">
                                {item.g}
                            </div>
                            <div className="text-shadi-gold-light mb-2.8 text-[1.12rem] leading-tight font-medium">{item.t}</div>
                            <div className="text-shadi-cream/55 text-[0.92rem] leading-[1.8]">{item.d}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
