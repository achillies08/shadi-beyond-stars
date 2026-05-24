export const Philosophy = () => {
    return (
        <section className="bg-burgundy border-shadi-gold/20 border-y">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="reveal border-shadi-gold/10 border-b px-[5%] py-24 lg:border-r lg:border-b-0">
                    <div className="text-shadi-gold before:bg-shadi-gold mb-4.5 flex items-center gap-4 text-[0.58rem] tracking-[0.4em] before:h-[1px] before:w-[28px] before:content-['']">
                        Our Philosophy
                    </div>
                    <h2 className="mb-5.5 text-[clamp(1.75rem,2.8vw,2.7rem)] leading-[1.2] font-normal">
                        More than a wedding service.
                        <br />
                        <em className="text-shadi-gold-light italic">Thoughtful guidance</em>
                        <br />
                        for a lasting marriage.
                    </h2>
                    <p className="text-shadi-cream/55 mt-5.5 max-w-[600px] text-[1.05rem] leading-[1.9] font-light">
                        Many people stop at basic horoscope matching. We look deeper into compatibility, emotional patterns, planetary influences, and the unseen factors that often shape a relationship over time. Through careful Kundali study and Vedic guidance, we help couples begin this journey with greater clarity, balance, and understanding.
                    </p>
                </div>
                <div className="reveal relative overflow-hidden h-full min-h-[400px]">
                    <img 
                        src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&h=1200" 
                        alt="Indian Wedding Tradition" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nightshade/80 to-transparent"></div>
                </div>
            </div>
        </section>
    );
};
