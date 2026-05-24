export const Marquee = () => {
    return (
        <div className="bg-shadi-gold overflow-hidden py-4">
            <div className="animate-marquee flex gap-12 whitespace-nowrap">
                {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-12">
                        {[
                            'From the House of Astro Beyond Stars',
                            'From the House of Astro Beyond Stars',
                            'From the House of Astro Beyond Stars',
                            'From the House of Astro Beyond Stars',
                            'From the House of Astro Beyond Stars',
                            'From the House of Astro Beyond Stars',
                            'From the House of Astro Beyond Stars',
                            'From the House of Astro Beyond Stars',
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-12">
                                <span className="text-nightshade text-[0.58rem] tracking-[0.3em] opacity-88">{item}</span>
                                <span className="bg-nightshade h-1 w-1 rounded-full opacity-30"></span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
