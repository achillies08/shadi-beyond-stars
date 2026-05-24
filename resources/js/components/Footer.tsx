import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="border-shadi-gold/8 border-t bg-[#0D0404] px-[5%] pt-20 pb-10">
            <div className="reveal-stagger mx-auto mb-14 grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
                <div className="reveal-item">
                    <div className="gap-3.2 mb-3.2 flex items-center">
                        <svg width="38" height="38" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="92" stroke="#D4AC5E" strokeWidth="1.5" opacity="0.7" />
                            <circle cx="100" cy="100" r="75" stroke="#D4AC5E" strokeWidth="0.8" opacity="0.4" />
                            <rect x="60" y="60" width="80" height="80" stroke="#D4AC5E" strokeWidth="0.8" opacity="0.4" />
                            <line x1="60" y1="60" x2="100" y2="100" stroke="#D4AC5E" strokeWidth="0.7" opacity="0.35" />
                            <line x1="140" y1="60" x2="100" y2="100" stroke="#D4AC5E" strokeWidth="0.7" opacity="0.35" />
                            <line x1="60" y1="140" x2="100" y2="100" stroke="#D4AC5E" strokeWidth="0.7" opacity="0.35" />
                            <line x1="140" y1="140" x2="100" y2="100" stroke="#D4AC5E" strokeWidth="0.7" opacity="0.35" />
                            <text x="100" y="107" textAnchor="middle" fontSize="32" fill="#D4AC5E" opacity="0.6" fontFamily="serif">
                                ॐ
                            </text>
                        </svg>
                        <div className="text-shadi-gold-light text-[0.95rem] tracking-[0.18em]">Shadi Beyond Stars</div>
                    </div>
                    <div className="font-devanagari text-shadi-gold mb-5.5 text-[0.82rem] opacity-58">आपकी विवाहिक यात्रा का सारथी</div>
                    <div className="text-shadi-cream/36 text-[0.9rem] leading-[1.8]">
                        A premium Vedic marriage alignment practice. We combine deep Kundali analysis with precisely designed rituals to ensure every
                        marriage begins in karmic harmony.
                    </div>
                </div>
                <div className="reveal-item">
                    <div className="text-shadi-gold mb-5.5 text-[0.55rem] tracking-[0.35em] uppercase">Services</div>
                    <ul className="flex list-none flex-col gap-2.5 p-0">
                        {['Kundali Matching', 'Dosha Analysis', 'Muhurat Selection', 'Ritual Execution', 'Post-Marriage Guidance'].map((item) => (
                            <li key={item}>
                                <Link href="/services" className="text-shadi-cream/38 hover:text-shadi-gold-light text-[0.9rem] no-underline transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="reveal-item">
                    <div className="text-shadi-gold mb-5.5 text-[0.55rem] tracking-[0.35em] uppercase">Rituals</div>
                    <ul className="flex list-none flex-col gap-2.5 p-0">
                        {['Mangal Dosh Puja', 'Kaal Sarp Puja', 'Navgrah Shanti', 'Vivah Sanskar', 'Pitra Dosh Puja'].map((item) => (
                            <li key={item}>
                                <Link href="/rituals" className="text-shadi-cream/38 hover:text-shadi-gold-light text-[0.9rem] no-underline transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="reveal-item">
                    <div className="text-shadi-gold mb-5.5 text-[0.55rem] tracking-[0.35em] uppercase">Connect</div>
                    <ul className="flex list-none flex-col gap-2.5 p-0">
                        {[
                            { name: 'WhatsApp', href: 'https://wa.me/917065777369', external: true },
                            { name: 'Facebook', href: 'https://www.facebook.com/Astrobeyondstars', external: true },
                            { name: 'Instagram', href: 'https://www.instagram.com/astrobeyondstars/', external: true },
                            { name: 'YouTube', href: 'https://www.youtube.com/@Astrobeyondstars6363', external: true },
                            { name: 'Free Consultation', href: '/contact', external: false },
                            { name: 'Privacy Policy', href: '#', external: false }
                        ].map((item) => (
                            <li key={item.name}>
                                {item.external ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-shadi-cream/38 hover:text-shadi-gold-light text-[0.9rem] no-underline transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ) : item.name === 'Free Consultation' ? (
                                    <button
                                        onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                                        className="text-shadi-cream/38 hover:text-shadi-gold-light cursor-pointer border-none bg-transparent text-[0.9rem] no-underline transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-shadi-cream/38 hover:text-shadi-gold-light text-[0.9rem] no-underline transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="pt-7.2 border-shadi-gold/7 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t">
                <div className="text-shadi-cream/20 text-[0.52rem] tracking-[0.2em] uppercase">
                    © 2025 Shadi Beyond Stars · All Rights Reserved · Premium Vedic Marriage Alignment
                </div>
                <div className="flex gap-6">
                    <button className="text-shadi-cream/22 hover:text-shadi-cream cursor-pointer border-none bg-transparent text-[0.52rem] tracking-[0.2em] uppercase transition-colors">
                        English
                    </button>
                    <button className="text-shadi-cream/22 hover:text-shadi-cream cursor-pointer border-none bg-transparent text-[0.52rem] tracking-[0.2em] uppercase transition-colors">
                        हिंदी
                    </button>
                </div>
            </div>
        </footer>
    );
}
