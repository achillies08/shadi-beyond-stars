export const Marquee = () => {
    return (
        <div className="from-shadi-gold to-shadi-gold overflow-hidden bg-gradient-to-r via-[#B8821A] py-4">
            <div className="animate-marquee flex gap-12 whitespace-nowrap">
                {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-12">
                        {[
                            'Kundali Matching',
                            'Karmic Alignment',
                            'Mangal Dosh Puja',
                            'Muhurat Selection',
                            'Vedic Rituals',
                            'Kaal Sarp Puja',
                            'Navgrah Shanti',
                            'NRI Services',
                            'Wedding Day Design',
                            'Post-Marriage Guidance',
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-12">
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
