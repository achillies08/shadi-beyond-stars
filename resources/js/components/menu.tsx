import { SharedData } from '@/types';
import { Head, usePage, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface MenuProps {
    scrollToCTA: () => void;
}

export default function Menu({ scrollToCTA }: MenuProps) {
    const { auth } = usePage<SharedData>().props;
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-[200] flex min-h-fit items-center justify-between px-[5%] py-2 transition-all duration-400 ${scrolled ? 'border-shadi-gold/20 border-b bg-[#1c0a0a]/96 backdrop-blur-md' : ''}`}
        >
            <Head title="Shadi Beyond Stars — Vedic Marriage Alignment">
                <link rel="shortcut icon" href="/front-assets/fav.png" type="image/x-icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Link href="/" className="flex items-center gap-3.5 no-underline">
                {/* <LogoIcon /> */}
                <img src="/front-assets/light-logo.png" alt="Shadi Beyond Stars" className="w-22" />
                {/* <div className="  text-shadi-gold-light text-[0.88rem] leading-tight tracking-[0.2em]">
                    Shadi Beyond Stars
                    <small className="font-garamond text-shadi-gold block text-[0.62rem] tracking-[0.32em] italic opacity-70">
                        Vedic Marriage Alignment
                    </small>
                </div> */}
            </Link>
            <ul className="mr-auto ml-10 hidden list-none gap-10 lg:flex">
                {[
                    { name: 'Services', url: '/services' },
                    { name: 'Rituals', url: '/rituals' },
                    { name: 'About', url: '/about' }
                ].map((item) => (
                    <li key={item.name}>

                        <Link
                            href={item.url}
                            className="text-shadi-cream/55 hover:text-shadi-gold-light text-[0.6rem] tracking-[0.2em] uppercase no-underline transition-colors"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                        className="text-shadi-cream/55 hover:text-shadi-gold-light cursor-pointer border-none bg-transparent p-0 text-[0.6rem] tracking-[0.2em] uppercase transition-colors"
                    >
                        Contact
                    </button>
                </li>
            </ul>
            <div className="hidden items-center gap-6 lg:flex">
                <button
                    onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                    className="btn-magnetic border-shadi-gold text-shadi-gold-light hover:bg-shadi-gold hover:text-nightshade cursor-pointer border bg-transparent px-5.5 py-4 text-[0.58rem] tracking-[0.18em] uppercase transition-all"
                >
                    Begin Your Journey
                </button>
            </div>
            <button
                className="text-shadi-gold flex flex-col justify-center gap-1.5 p-2 lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <div className={`h-[2px] w-6 bg-shadi-gold transition-all duration-300 ${mobileMenuOpen ? 'translate-y-[8px] rotate-45' : ''}`}></div>
                <div className={`h-[2px] w-6 bg-shadi-gold transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`h-[2px] w-6 bg-shadi-gold transition-all duration-300 ${mobileMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}`}></div>
            </button>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 top-[70px] z-[-1] bg-[#1c0a0a]/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className="flex h-full flex-col items-center justify-center gap-8 p-0">
                    {[
                        { name: 'Services', url: '/services' },
                        { name: 'Rituals', url: '/rituals' },
                        { name: 'About', url: '/about' }
                    ].map((item) => (
                        <li key={item.name}>
                            {
                                <Link
                                    href={item.url}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-shadi-cream hover:text-shadi-gold text-[1.2rem] tracking-[0.2em] uppercase no-underline transition-colors"
                                >
                                    {item.name}
                                </Link>
                            }
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                window.dispatchEvent(new Event('open-contact-modal'));
                            }}
                            className="text-shadi-cream hover:text-shadi-gold cursor-pointer border-none bg-transparent p-0 text-[1.2rem] tracking-[0.2em] uppercase transition-colors"
                        >
                            Contact
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                window.dispatchEvent(new Event('open-contact-modal'));
                            }}
                            className="border-shadi-gold text-shadi-gold-light hover:bg-shadi-gold hover:text-nightshade mt-8 cursor-pointer border bg-transparent px-8 py-4 text-[0.8rem] tracking-[0.18em] uppercase transition-all"
                        >
                            Begin Your Journey
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
