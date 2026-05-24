export const TrustStrip = () => {
    return (
        <div className="reveal bg-nightshade border-shadi-gold/20 border-b px-[5%] py-10">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-16">
                {[
                    { n: '12', l: 'Step Alignment\nJourney' },
                    { n: '8+', l: 'Core Vedic\nServices' },
                    { n: '3', l: 'Languages\nof Service' },
                    { n: '∞', l: 'Commitment\nto Harmony' },
                    { n: '100%', l: 'Custom Per\nKundali' },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-16">
                        <div className="flex flex-col items-center gap-1.5">
                            <div className="text-shadi-gold-light text-[2.2rem] leading-none">{item.n}</div>
                            <div className="text-shadi-cream/55 text-center text-[0.52rem] tracking-[0.25em] whitespace-pre-line">{item.l}</div>
                        </div>
                        {i < 4 && <div className="bg-shadi-gold/20 hidden h-10 w-px md:block"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};
