export const WhyUs = () => {
    return (
        <section className="bg-burgundy border-shadi-gold/20 border-y px-[5%] py-28">
            <div className="mx-auto max-w-6xl">
                <p className="reveal text-shadi-cream font-goudy mx-auto mb-18 max-w-[820px] text-center text-[clamp(1.7rem,3.3vw,2.85rem)] leading-[1.4] font-normal italic">
                    We don't just perform rituals. We architect the <em className="text-shadi-gold-light not-italic">spiritual foundation</em> of a
                    marriage that lasts.
                </p>
                <div className="reveal-stagger bg-shadi-gold/5 mx-auto grid max-w-6xl grid-cols-1 gap-0.5 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        // ... items ...
                        {
                            g: '✦',
                            t: 'Fully Customised Per Kundali',
                            d: 'No two ceremonies we design are identical. Every ritual, sequence, and mantra is selected based on your precise birth chart — not from a template.',
                        },
                        {
                            g: '◈',
                            t: 'Karmic Alignment, Not Just Dosha Correction',
                            d: 'We go deeper than neutralising doshas. We read the karmic debt between two souls — past-life patterns, ancestral obligations — and address them at the root.',
                        },
                        {
                            g: '⬡',
                            t: 'End-to-End Execution',
                            d: 'We do not just advise and leave. From analysis to ritual design to pandit coordination to ceremony — we manage every step, one point of contact.',
                        },
                        {
                            g: '☽',
                            t: 'Vedic Tradition, Modern Delivery',
                            d: 'Rooted in authentic Vedic astrology and traditional Hindu ritual — delivered with clarity, structure, and sensitivity to modern and NRI families worldwide.',
                        },
                        {
                            g: '❈',
                            t: 'Long-Term Harmony as the Measure',
                            d: 'Our measure of success is not a completed ceremony. It is a marriage that thrives. Every decision is made with the long-term wellbeing of the couple in mind.',
                        },
                        {
                            g: '◉',
                            t: 'We Travel to You, Anywhere',
                            d: 'Our team travels locally, nationally, and internationally. Delhi, Mumbai, London, Dubai — we bring the complete ceremony to you.',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="reveal-item bg-burgundy group hover:bg-burgundy/80 before:via-shadi-gold/40 relative overflow-hidden p-11.5 transition-all before:absolute before:inset-x-8 before:top-[-1px] before:h-[1px] before:bg-gradient-to-r before:from-transparent before:to-transparent before:opacity-0 before:transition-opacity before:content-[''] hover:before:opacity-100"
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
