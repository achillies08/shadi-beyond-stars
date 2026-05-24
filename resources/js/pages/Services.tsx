import MainLayout from '@/layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Services() {
    return (
        <MainLayout>
            <Head title="Services — Shadi Beyond Stars" />
            <main>
                {/* HERO */}
                <section className="bg-nightshade relative flex min-h-[90vh] items-center pt-24">
                    <div className="mx-auto max-w-[1000px] px-[5%] text-center">
                        <div className="text-shadi-gold mb-6 text-[0.62rem] tracking-[0.45em] uppercase before:mr-2 before:content-['✦']">
                            Our Complete Offering
                        </div>
                        <h1 className="font-goudy text-shadi-gold mb-4 text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-[0.04em]">
                            Three Pillars Of
                            <br />
                            A Meaningful Marriage
                        </h1>
                        <p className="text-shadi-cream/55 mx-auto mb-12 max-w-[600px] text-[1.15rem] leading-[1.8]">
                            Every relationship carries its own journey, challenges, and energies. That is why every recommendation is shaped around your Kundali with care and understanding.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button
                                onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                                className="font-goudy text-nightshade hover:bg-shadi-gold-light bg-shadi-gold inline-block cursor-pointer px-8 py-[0.85rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-500"
                            >
                                Book Consultation
                            </button>
                            <a
                                href="#pillars"
                                className="font-goudy text-shadi-gold border-shadi-gold hover:bg-shadi-gold/10 hover:border-shadi-gold-light inline-block cursor-pointer border bg-transparent px-8 py-[0.8rem] text-[0.62rem] tracking-[0.2em] uppercase transition-all duration-300"
                            >
                                Explore Services ↓
                            </a>
                        </div>
                    </div>
                </section>

                {/* PILLAR 1: ASTROLOGY & ANALYSIS */}
                <section id="pillars" className="bg-nightshade mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            Pillar One
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Astrology & <em className="font-garamond text-shadi-cream font-normal italic">Deep Analysis</em>
                        </h2>
                        <div className="text-shadi-cream/55 mb-8 max-w-[600px] space-y-4 text-[1.05rem] leading-[1.9]">
                            <p>Every meaningful decision begins with understanding.</p>
                            <p>Before rituals, remedies, or wedding dates, we study what the Kundali reveals through planetary positions, compatibility patterns, doshas, and deeper karmic connections between two individuals.</p>
                            <p>This stage focuses on bringing clarity to the relationship and understanding what truly needs attention before marriage.</p>
                        </div>

                        <div className="bg-burgundy/80 hover:bg-burgundy border-shadi-gold/15 hover:border-shadi-gold/35 reveal mt-12 border p-8 transition-all duration-400 md:p-12">
                            <h3 className="font-goudy text-shadi-gold mb-6 text-[1.5rem] font-semibold">What This Includes</h3>
                            <p className="text-shadi-cream/55 mb-8 text-[1.05rem] leading-[1.85]">
                                Four focused services designed to help couples and families move forward with greater confidence and understanding.
                            </p>

                            <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-2">
                                {[
                                    {
                                        num: '01',
                                        title: 'Advanced Kundali Matching',
                                        desc: 'A deeper compatibility study beyond traditional guna matching. Includes Prarabdh Match, D90 & D120 analysis, and compatibility across emotional, financial, spiritual, family, and long-term relationship dynamics.',
                                        duration: '30 Minutes',
                                        cost: '₹11,000 (Report shared after consultation)',
                                    },
                                    {
                                        num: '02',
                                        title: 'Dosha Analysis & Identification',
                                        desc: 'A detailed study of planetary imbalances including Mangal, Kaal Sarp, Pitra, Nadi, Bhakoot, and other doshas to understand their actual impact and whether correction is truly needed.',
                                        duration: '30 Minutes',
                                        cost: null,
                                    },
                                    {
                                        num: '03',
                                        title: 'Pre-Marriage Consultation',
                                        desc: 'A complete guidance session covering Kundali analysis, compatibility insights, dosha study, written observations, and personalised recommendations before marriage.',
                                        duration: '30 Minutes',
                                        cost: null,
                                    },
                                    {
                                        num: '04',
                                        title: 'Muhurat Selection',
                                        desc: 'Selection of suitable wedding dates and timings through Panchang study, planetary calculations, and alignment between both Kundalis.',
                                        duration: '30 Minutes',
                                        cost: null,
                                    },
                                ].map((svc, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-nightshade hover:bg-burgundy/80 group relative overflow-hidden p-6 transition-all duration-300 md:p-10"
                                    >
                                        <div className="font-goudy text-shadi-gold/80 mb-2 text-[0.52rem] tracking-[0.2em] uppercase opacity-70">
                                            {svc.num}
                                        </div>
                                        <div className="font-goudy text-shadi-gold mt-4 mb-3 text-[1.1rem] font-semibold">{svc.title}</div>
                                        <div className="text-shadi-cream/55 mb-6 text-[0.95rem] leading-[1.7]">{svc.desc}</div>
                                        <div className="border-shadi-gold/10 text-shadi-gold/80 font-goudy flex flex-wrap gap-6 border-t pt-6 text-[0.55rem] tracking-[0.15em] uppercase">
                                            <div className="flex-1">
                                                <div className="text-shadi-gold/60 opacity-80">Duration</div>
                                                <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] tracking-normal normal-case">
                                                    {svc.duration}
                                                </div>
                                            </div>
                                            {svc.cost && (
                                                <div className="flex-1">
                                                    <div className="text-shadi-gold/60 opacity-80">Cost</div>
                                                    <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] tracking-normal normal-case">
                                                        {svc.cost}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
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
                    </div>
                </section>

                {/* PILLAR 2: WEDDING CEREMONY */}
                <section className="bg-nightshade/80 mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            Pillar Two
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Wedding Day
                            <br />
                            <em className="font-garamond text-shadi-cream font-normal italic">Ceremony</em>
                        </h2>
                        <div className="text-shadi-cream/55 mb-12 max-w-[600px] space-y-4 text-[1.05rem] leading-[1.9]">
                            <p>The wedding ceremony is not just a tradition.</p>
                            <p>It is the beginning of a new chapter in two people's lives.</p>
                            <p>Your Vivah Sanskar is designed according to your Kundali, chosen muhurat, and family traditions so every ritual is performed with the right timing, meaning, and guidance.</p>
                        </div>

                        <div className="bg-burgundy/80 hover:bg-burgundy border-shadi-gold/15 hover:border-shadi-gold/35 reveal border p-8 transition-all duration-400 md:p-12">
                            <h3 className="font-goudy text-shadi-gold mb-6 text-[1.5rem] font-semibold">Your Wedding Ceremony</h3>

                            <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px]">
                                <div className="bg-nightshade hover:bg-burgundy/80 group relative overflow-hidden p-6 transition-all duration-300 md:p-10">
                                    <div className="font-goudy text-shadi-gold/80 mb-2 text-[0.52rem] tracking-[0.2em] uppercase opacity-70">05</div>
                                    <div className="font-goudy text-shadi-gold mt-4 mb-3 text-[1.1rem] font-semibold">
                                        Vivah Sanskar — Personalised Vedic Wedding Ceremony
                                    </div>
                                    <div className="text-shadi-cream/55 mb-6 text-[0.95rem] leading-[1.7]">
                                        <p className="mb-4">A complete Vedic wedding ceremony thoughtfully planned around the couple's birth charts and selected muhurat.</p>
                                        <p className="mb-4">Includes Shuddhi, Ganesh Puja, Kanya Daan, Vivah Mantras, Saptapadi, Mangal Sutra Ritual, Ashirvad, final havan, and prasad distribution with proper guidance throughout the ceremony.</p>
                                        <p>Our experienced pandit team manages the complete process along with ritual materials, ceremony coordination, and support for all family members involved.</p>
                                    </div>
                                    <div className="border-shadi-gold/10 text-shadi-gold/80 font-goudy flex flex-wrap gap-6 border-t pt-6 text-[0.55rem] tracking-[0.15em] uppercase">
                                        <div className="flex-1">
                                            <div className="text-shadi-gold/60 opacity-80">Duration</div>
                                            <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] tracking-normal normal-case">
                                                4–8 Hours
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-shadi-gold/60 opacity-80">Includes</div>
                                            <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] tracking-normal normal-case">
                                                Pandit Team & Ritual Materials
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-shadi-gold/60 opacity-80">Cost</div>
                                            <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] tracking-normal normal-case">
                                                Consult us
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                                        className="font-goudy text-shadi-gold mt-6 flex items-center gap-2 border-none bg-transparent p-0 text-[0.55rem] tracking-[0.15em] uppercase opacity-0 transition-opacity duration-300 group-hover:cursor-pointer group-hover:opacity-100 after:text-[0.7rem] after:content-['→']"
                                    >
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PILLAR 3: POST-MARRIAGE */}
                <section className="bg-nightshade mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            Pillar Three
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Post-Marriage Guidance &<br />
                            <em className="font-garamond text-shadi-cream font-normal italic">Long-Term Harmony</em>
                        </h2>
                        <div className="text-shadi-cream/55 mb-12 max-w-[600px] space-y-4 text-[1.05rem] leading-[1.9]">
                            <p>Marriage continues to evolve with time, responsibilities, and different phases of life.</p>
                            <p>Through continued guidance and thoughtful support, we help couples maintain balance, understanding, and harmony beyond the wedding day.</p>
                        </div>

                        <div className="bg-burgundy/80 hover:bg-burgundy border-shadi-gold/15 hover:border-shadi-gold/35 reveal border p-8 transition-all duration-400 md:p-12">
                            <h3 className="font-goudy text-shadi-gold mb-6 text-[1.5rem] font-semibold">Long-Term Support</h3>

                            <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-2">
                                {[
                                    {
                                        num: '06',
                                        title: 'Post-Marriage Consultation & Remedies',
                                        desc: 'A follow-up session after marriage to understand relationship dynamics, current challenges, and planetary influences affecting the couple\'s journey together.',
                                        duration: '30–60 Minutes',
                                        cost: null,
                                    },
                                    {
                                        num: '07',
                                        title: 'Guidance For Troubled & Broken Marriages',
                                        desc: 'Some marriages go through difficult periods of emotional distance, recurring conflict, misunderstandings, or imbalance. Through deeper Kundali study and relationship analysis, we help couples understand the patterns affecting harmony within the marriage and guide them towards clarity and healing.',
                                        duration: '30–60 Minutes',
                                        cost: null,
                                    },
                                    {
                                        num: '08',
                                        title: 'Subscription Guidance (Coming Soon)',
                                        desc: 'Monthly or quarterly guidance for couples seeking continued spiritual and relationship support through important phases of married life. Includes personalised remedies, transit guidance, important dates, and direct consultation support.',
                                        duration: '30–60 Minutes',
                                        cost: null,
                                    },
                                ].map((svc, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-nightshade hover:bg-burgundy/80 group relative overflow-hidden p-6 transition-all duration-300 md:p-10"
                                    >
                                        <div className="font-goudy text-shadi-gold/80 mb-2 text-[0.52rem] tracking-[0.2em] uppercase opacity-70">
                                            {svc.num}
                                        </div>
                                        <div className="font-goudy text-shadi-gold mt-4 mb-3 text-[1.1rem] font-semibold">{svc.title}</div>
                                        <div className="text-shadi-cream/55 mb-6 text-[0.95rem] leading-[1.7]">{svc.desc}</div>
                                        <div className="border-shadi-gold/10 text-shadi-gold/80 font-goudy flex flex-wrap gap-6 border-t pt-6 text-[0.55rem] tracking-[0.15em] uppercase">
                                            <div className="flex-1">
                                                <div className="text-shadi-gold/60 opacity-80">Duration</div>
                                                <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] tracking-normal normal-case">
                                                    {svc.duration}
                                                </div>
                                            </div>
                                            {svc.cost && (
                                                <div className="flex-1">
                                                    <div className="text-shadi-gold/60 opacity-80">Cost</div>
                                                    <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] tracking-normal normal-case">
                                                        {svc.cost}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                                            className="font-goudy text-shadi-gold mt-6 flex items-center gap-2 border-none bg-transparent p-0 text-[0.55rem] tracking-[0.15em] uppercase opacity-0 transition-opacity duration-300 group-hover:cursor-pointer group-hover:opacity-100 after:text-[0.7rem] after:content-['→']"
                                        >
                                            {svc.num === '08' ? 'Express interest' : 'Learn more'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-nightshade border-shadi-gold/15 border-y px-[5%] py-20 text-center">
                    <div className="reveal mx-auto max-w-[700px]">
                        <h2 className="font-goudy text-shadi-gold mb-2 text-[clamp(1.6rem,3vw,2.8rem)] font-semibold tracking-[0.04em]">
                            Unsure Where
                            <br />
                            To <em className="font-garamond text-shadi-cream font-normal italic">Begin?</em>
                        </h2>
                        <div className="text-shadi-cream/55 mb-10 space-y-4 text-[1.05rem] leading-[1.8]">
                            <p>Every relationship carries a different story, concern, and journey.</p>
                            <p>We help you understand which guidance, ritual, or consultation is truly right for your situation.</p>
                            <p>Whether you are preparing for marriage or seeking clarity within an existing relationship, we are here to guide you with care and understanding.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button
                                onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                                className="font-goudy text-nightshade hover:bg-shadi-gold-light bg-shadi-gold inline-block cursor-pointer px-8 py-[0.85rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-500"
                            >
                                Book Your Consultation
                            </button>
                            <a
                                href="https://wa.me/917065777369"
                                target="_blank"
                                rel="noreferrer"
                                className="font-goudy text-shadi-gold border-shadi-gold hover:bg-shadi-gold/10 hover:border-shadi-gold-light inline-block cursor-pointer border bg-transparent px-8 py-[0.8rem] text-[0.62rem] tracking-[0.2em] uppercase transition-all duration-300"
                            >
                                WhatsApp Us Your Situation
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
}
