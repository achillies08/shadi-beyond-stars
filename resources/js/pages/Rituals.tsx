import MainLayout from '@/layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function Rituals() {
    return (
        <MainLayout>
            <Head title="Rituals — Shadi Beyond Stars" />
            <main>
                {/* HERO */}
                <section className="from-burgundy/90 to-nightshade/90 relative flex min-h-[90vh] items-center bg-[url('/front-assets/wedding_havan.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay pt-24">
                    <div className="mx-auto max-w-[1000px] px-[5%] text-center relative z-10">
                        <div className="text-shadi-gold mb-6 text-[0.62rem] tracking-[0.45em] uppercase before:mr-2 before:content-['✦'] drop-shadow-md">
                            Every Ritual Has Meaning & Intention
                        </div>
                        <h1 className="font-goudy text-shadi-gold mb-4 text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-[0.04em] drop-shadow-md">
                            Every Ritual Has
                            <br />a Purpose
                        </h1>
                        <p className="text-shadi-cream/90 mx-auto mb-12 max-w-[600px] text-[1.15rem] leading-[1.8] drop-shadow-md">
                            No ritual is performed without purpose. Each ceremony is chosen through careful Kundali study to address specific imbalances, relationship challenges, and planetary influences connected to the marriage.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button
                                onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                                className="font-goudy text-nightshade hover:bg-shadi-gold-light bg-shadi-gold inline-block cursor-pointer px-8 py-[0.85rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-500"
                            >
                                Find The Right Ritual
                            </button>
                            <a
                                href="#rituals"
                                className="font-goudy text-shadi-gold border-shadi-gold hover:bg-shadi-gold/10 hover:border-shadi-gold-light inline-block cursor-pointer border bg-transparent px-8 py-[0.8rem] text-[0.62rem] tracking-[0.2em] uppercase transition-all duration-300 bg-nightshade/40"
                            >
                                Explore Rituals ↓
                            </a>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="bg-nightshade mx-auto px-[5%] py-16 text-center md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center justify-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            Find The Right Ritual
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            The Meaning Behind <em className="font-garamond text-shadi-cream font-normal italic">Rituals</em>
                        </h2>
                        <div className="bg-burgundy/80 border-shadi-gold/15 my-8 border p-6 text-left leading-[1.9] md:p-12">
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                A ritual is not just a ceremony. It is a way of bringing balance where there is imbalance, clarity where there is confusion, and peace where there is unrest.
                            </p>
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                In Vedic tradition, every ritual carries a purpose. The timing, mantras, materials, and process are chosen carefully according to the person's Kundali and the situation they are facing.
                            </p>
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                This is why we do not believe in standard rituals for everyone.
                            </p>
                            <p className="text-shadi-cream/55 text-[1.05rem]">
                                The same Mangal Dosh can affect two people differently. The same remedy may not work the same way for every marriage. We study the chart first, understand what truly needs attention, and only then recommend the right ritual.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SEVEN CORE RITUALS */}
                <section id="rituals" className="bg-nightshade/80 mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            Our Ritual Practice
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Seven <em className="font-garamond text-shadi-cream font-normal italic">Core Rituals</em> We Perform
                        </h2>
                        <p className="text-shadi-cream/55 mb-8 max-w-[600px] text-[1.05rem] leading-[1.9]">
                            Each ritual is selected and customised according to the individual's Kundali, planetary influences, and the needs of the marriage journey.
                        </p>

                        <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-2">
                            {[
                                {
                                    num: '01',
                                    title: 'Mangal Dosh Puja',
                                    problem: 'Balancing The Influence Of Mars',
                                    impact: 'Performed to reduce conflict, instability, and imbalance caused by strong Mars influence within marriage-related houses.'
                                },
                                {
                                    num: '02',
                                    title: 'Kaal Sarp Dosh Puja',
                                    problem: 'Addressing Rahu & Ketu Imbalance',
                                    impact: 'A ritual performed in specific planetary conditions where Rahu and Ketu create recurring obstacles, emotional heaviness, or delays in life and marriage.'
                                },
                                {
                                    num: '03',
                                    title: 'Navgrah Shanti Puja',
                                    problem: 'Bringing Planetary Energies Into Harmony',
                                    impact: 'A traditional ritual dedicated to balancing the influence of all nine planets before an important new beginning.'
                                },
                                {
                                    num: '04',
                                    title: 'Vivah Sanskar',
                                    problem: 'A Wedding Ceremony Guided By Your Kundali',
                                    impact: 'A complete Vedic wedding ceremony thoughtfully personalised according to the couple\'s birth charts, muhurat, and family traditions.'
                                },
                                {
                                    num: '05',
                                    title: 'Pitra Dosh Puja',
                                    problem: 'Healing Ancestral Imbalance',
                                    impact: 'Performed in situations where ancestral patterns or unresolved family karmas may be affecting harmony in marriage and relationships.'
                                },
                                {
                                    num: '06',
                                    title: 'Grah Shanti Puja',
                                    problem: 'Removing Obstacles Before Marriage',
                                    impact: 'A calming and balancing ritual performed before the wedding to reduce planetary disturbances and create a peaceful beginning.'
                                },
                                {
                                    num: '07',
                                    title: 'Post-Marriage Remedies',
                                    problem: 'Guidance For Long-Term Harmony',
                                    impact: 'Continued remedies and spiritual guidance to help couples navigate different phases of married life with greater balance and understanding.'
                                },
                            ].map((ritual, idx) => (
                                <div
                                    key={idx}
                                    className="bg-nightshade hover:bg-burgundy/80 group relative overflow-hidden p-6 transition-all duration-300 md:p-10"
                                >
                                    <div className="font-goudy text-shadi-gold/80 mb-2 text-[0.52rem] tracking-[0.2em] uppercase opacity-70">
                                        {ritual.num}
                                    </div>
                                    <div className="font-goudy text-shadi-gold mt-4 mb-4 text-[1.1rem] font-semibold">{ritual.title}</div>
                                    <div className="text-shadi-cream/35 border-shadi-gold/10 mb-4 border-b pb-4 text-[0.95rem] italic">
                                        {ritual.problem}
                                    </div>
                                    <div className="text-shadi-cream/55 mb-6 text-[0.92rem] leading-[1.7]">{ritual.impact}</div>
                                    <button
                                        onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                                        className="font-goudy text-shadi-gold mt-6 flex items-center gap-2 border-none bg-transparent p-0 text-[0.55rem] tracking-[0.15em] uppercase opacity-0 transition-opacity duration-300 group-hover:cursor-pointer group-hover:opacity-100 after:text-[0.7rem] after:content-['→']"
                                    >
                                        Learn more
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY RITUAL MATTERS */}
                <section className="bg-burgundy/60 mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            The Science & Soul of Ritual
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Why Rituals <em className="font-garamond text-shadi-cream font-normal italic">Matter</em>
                        </h2>
                        <div className="bg-burgundy/80 border-shadi-gold/15 my-8 border p-6 leading-[1.9] md:p-12">
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                <strong className="text-shadi-cream font-semibold">Intention Creates Direction:</strong> A ritual is not performed mechanically. When done with awareness and sincerity, it helps bring clarity, emotional grounding, and a stronger sense of intention into an important phase of life.
                            </p>
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                <strong className="text-shadi-cream font-semibold">Rooted In Vedic Tradition:</strong> Vedic rituals are built on generations of observation and understanding. The timing, mantras, materials, and process all hold significance within the practice.
                            </p>
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                <strong className="text-shadi-cream font-semibold">Connected To Your Kundali:</strong> Every birth chart carries different planetary influences and patterns. Rituals are chosen according to what your Kundali genuinely indicates, not through fixed formulas.
                            </p>
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                <strong className="text-shadi-cream font-semibold">Creating Space For Harmony:</strong> Many people experience greater emotional clarity, calmness, understanding, and balance in relationships after performing the right rituals with proper guidance.
                            </p>
                            <p className="text-shadi-cream/55 text-[1.05rem]">
                                <strong className="text-shadi-cream font-semibold">Rituals Support The Journey:</strong> A ritual is not a shortcut or instant solution. It is a way of creating the right foundation, intention, and spiritual environment for a healthier marriage and relationship.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-nightshade border-shadi-gold/15 border-y px-[5%] py-20 text-center">
                    <div className="reveal mx-auto max-w-[700px]">
                        <h2 className="font-goudy text-shadi-gold mb-2 text-[clamp(1.6rem,3vw,2.8rem)] font-semibold tracking-[0.04em]">
                            Which Ritual Is Right
                            <br />
                            For <em className="font-garamond text-shadi-cream font-normal italic">Your Journey?</em>
                        </h2>
                        <p className="text-shadi-cream/55 mb-10 text-[1.05rem] leading-[1.8]">
                            Every Kundali carries different needs. We help you understand which rituals are truly relevant for your relationship and marriage journey.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button
                                onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                                className="font-goudy text-nightshade hover:bg-shadi-gold-light bg-shadi-gold inline-block cursor-pointer px-8 py-[0.85rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-500"
                            >
                                Get Your Ritual Analysis
                            </button>
                            <Link
                                href="/services"
                                className="font-goudy text-shadi-gold border-shadi-gold hover:bg-shadi-gold/10 hover:border-shadi-gold-light inline-block cursor-pointer border bg-transparent px-8 py-[0.8rem] text-[0.62rem] tracking-[0.2em] uppercase transition-all duration-300"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
}
