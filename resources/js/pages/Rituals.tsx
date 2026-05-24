import MainLayout from '@/layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

export default function Rituals() {
    return (
        <MainLayout>
            <Head title="Rituals — Shadi Beyond Stars" />
            <main>
                {/* HERO */}
                <section className="bg-gradient-to-br from-burgundy to-nightshade relative flex min-h-[90vh] items-center pt-24">
                    <div className="mx-auto max-w-[1000px] px-[5%] text-center">
                        <div className="text-shadi-gold mb-6 text-[0.62rem] uppercase tracking-[0.45em] before:mr-2 before:content-['✦']">Sacred Practices, Precise Purpose</div>
                        <h1 className="font-goudy text-shadi-gold mb-4 text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-[0.04em]">
                            Every Ritual Has<br />a Purpose
                        </h1>
                        <p className="text-shadi-cream/55 mx-auto mb-12 max-w-[600px] text-[1.15rem] leading-[1.8]">
                            We don't perform generic ceremonies. Each ritual is designed from your Kundali to clear specific karmic blockages and align your marriage with the cosmos.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))} className="font-goudy text-nightshade hover:from-shadi-gold hover:to-shadi-gold-light inline-block cursor-pointer bg-gradient-to-br from-shadi-gold/80 to-shadi-gold px-8 py-[0.85rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(212,162,64,0.45)] border-none">
                                Find Your Ritual
                            </button>
                            <a href="#rituals" className="font-goudy text-shadi-gold border-shadi-gold hover:bg-shadi-gold/10 hover:border-shadi-gold-light inline-block cursor-pointer border bg-transparent px-8 py-[0.8rem] text-[0.62rem] tracking-[0.2em] uppercase transition-all duration-300">
                                Explore Rituals ↓
                            </a>
                        </div>
                    </div>
                </section>

                {/* INTRO SECTION */}
                <section className="bg-nightshade mx-auto max-w-[1200px] px-[5%] py-16 md:py-24 text-center">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center justify-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            Beyond Just Ceremony
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            What Is a Ritual?
                        </h2>
                        <div className="bg-burgundy/80 border-shadi-gold/15 my-8 border p-6 md:p-12 leading-[1.9] text-left">
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                A ritual is not superstition. It is a precise, scientifically-structured practice rooted in thousands of years of Vedic wisdom. When you perform a ritual with the correct intention, at the correct time, with the correct materials, you send a signal to the universe — and to your own subconscious — that you are committed to change.
                            </p>
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                In Vedic tradition, rituals work on multiple levels: <strong className="text-shadi-cream">Karmic</strong> (helping settle and resolve karmic debts), <strong className="text-shadi-cream">Planetary</strong> (aligning your energy with planetary influences), <strong className="text-shadi-cream">Psychological</strong> (creating deep shifts in consciousness and intention), and <strong className="text-shadi-cream">Energetic</strong> (purifying and elevating the spiritual vibration of a space).
                            </p>
                            <p className="text-shadi-cream/55 text-[1.05rem]">
                                This is why we don't offer "standard" rituals. A Mangal Dosh Puja for one person is different from another's because their Kundali is unique. We read what your stars need, and then we design the ritual to address exactly that.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SEVEN CORE RITUALS */}
                <section id="rituals" className="bg-nightshade/80 mx-auto max-w-[1200px] px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            Our Ritual Practice
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Seven <em className="font-garamond text-shadi-cream font-normal italic">Core Rituals</em> We Perform
                        </h2>
                        <p className="text-shadi-cream/55 mb-8 max-w-[600px] text-[1.05rem] leading-[1.9]">
                            Here are the seven core rituals we've mastered over years of work. Each can be customised based on your specific Kundali needs.
                        </p>

                        <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-2">
                            {[
                                { num: '01', title: 'Mangal Dosh Puja', problem: 'Neutralising the influence of Mars', impact: 'When Mars is positioned in certain houses, it can bring conflict into a marriage. This targeted ceremony reduces that aggressive influence and brings stability to your relationship.', duration: '3–5 hours', cost: '₹8,000–₹15,000', location: 'Home / Temple' },
                                { num: '02', title: 'Kaal Sarp Dosh Puja', problem: 'Breaking the karmic cycle of Rahu and Ketu', impact: 'One of the most significant karmic blockages. This ritual performs specific yagnas to dissolve the serpentine energy and release ancestral debts.', duration: '4–6 hours', cost: '₹12,000–₹25,000', location: 'Temple Preferred' },
                                { num: '03', title: 'Navgrah Shanti Puja', problem: 'Bringing all nine planets into harmony', impact: 'All nine planetary deities are individually propitiated. Creates a harmonious cosmic environment for the marriage to begin.', duration: '5–7 hours', cost: '₹10,000–₹18,000', location: 'Home / Temple' },
                                { num: '04', title: 'Vivah Sanskar', problem: 'The wedding ceremony, built from your charts', impact: 'The complete Vedic wedding ceremony, customised from your birth charts. Every mantra and offering is sequenced for spiritual impact.', duration: '4–8 hours', cost: '₹35,000–₹75,000', location: 'Your Venue' },
                                { num: '05', title: 'Pitra Dosh Puja', problem: 'Addressing ancestral karmic debt', impact: 'Unresolved ancestral karma can burden a marriage. This ritual performs correct ancestral rites so your union begins without inherited burdens.', duration: '3–4 hours', cost: '₹6,000–₹12,000', location: 'Temple / Home' },
                                { num: '06', title: 'Grah Shanti Puja', problem: 'Removing obstacles before the wedding', impact: 'Performed weeks before your wedding, this clearing dissolves planetary obstacles that could create delays or disruptions.', duration: '2–4 hours', cost: '₹5,000–₹10,000', location: '2–4 weeks before', labelLocation: 'Timing' },
                                { num: '07', title: 'Post-Marriage Remedies', problem: 'Long-term spiritual harmony', impact: 'Marriage is lifelong. We provide ongoing guidance aligned to planetary movements, periodic check-ins, and updated remedies for enduring harmony.', duration: 'Variable', cost: '₹2,000–₹5,000', location: 'Ongoing', labelLocation: 'Frequency' }
                            ].map((ritual, idx) => (
                                <div key={idx} className="bg-nightshade hover:bg-burgundy/80 group relative overflow-hidden p-6 md:p-10 transition-all duration-300">
                                    <div className="font-goudy text-shadi-gold/80 mb-2 text-[0.52rem] uppercase tracking-[0.2em] opacity-70">{ritual.num}</div>
                                    <div className="font-goudy text-shadi-gold mb-4 mt-4 text-[1.1rem] font-semibold">{ritual.title}</div>
                                    <div className="text-shadi-cream/35 border-shadi-gold/10 mb-4 border-b pb-4 text-[0.95rem] italic">{ritual.problem}</div>
                                    <div className="text-shadi-cream/55 mb-6 text-[0.92rem] leading-[1.7]">{ritual.impact}</div>
                                    <div className="text-shadi-gold/80 flex flex-wrap gap-6 text-[0.52rem] uppercase tracking-[0.12em] font-goudy">
                                        <div className="flex-1">
                                            <div className="text-shadi-gold/60 opacity-80">Duration</div>
                                            <div className="font-garamond text-shadi-cream mt-1 block text-[0.85rem] normal-case tracking-normal">{ritual.duration}</div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-shadi-gold/60 opacity-80">Cost</div>
                                            <div className="font-garamond text-shadi-cream mt-1 block text-[0.85rem] normal-case tracking-normal">{ritual.cost}</div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-shadi-gold/60 opacity-80">{ritual.labelLocation || 'Location'}</div>
                                            <div className="font-garamond text-shadi-cream mt-1 block text-[0.85rem] normal-case tracking-normal">{ritual.location}</div>
                                        </div>
                                    </div>
                                    <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))} className="font-goudy text-shadi-gold mt-6 flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.15em] opacity-0 transition-opacity duration-300 group-hover:cursor-pointer group-hover:opacity-100 after:text-[0.7rem] after:content-['→'] border-none bg-transparent p-0">
                                        Learn more
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY RITUAL MATTERS */}
                <section className="bg-burgundy/60 mx-auto max-w-[1200px] px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            The Science & Soul of Ritual
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Why Ritual <em className="font-garamond text-shadi-cream font-normal italic">Matters</em>
                        </h2>
                        <div className="bg-burgundy/80 border-shadi-gold/15 my-8 border p-6 md:p-12 leading-[1.9]">
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                <strong className="text-shadi-cream font-semibold">The Power of Intention:</strong> When you perform a ritual with conscious intention, you create a psychological and energetic shift. Research shows rituals reduce anxiety, increase confidence, and create real behavioral change.
                            </p>
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                <strong className="text-shadi-cream font-semibold">The Vedic Science:</strong> Vedic rituals are based on thousands of years of observation. The timing, materials, mantras, and process are all scientifically structured to create specific outcomes.
                            </p>
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                <strong className="text-shadi-cream font-semibold">The Planetary Connection:</strong> Your birth chart is a cosmic fingerprint. Rituals "update" your energetic signature to align with more auspicious planetary influences. They don't change your fate — they optimize your response to it.
                            </p>
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem]">
                                <strong className="text-shadi-cream font-semibold">The Transformational Shift:</strong> People who perform rituals with our guidance report increased confidence, reduced anxiety, better communication, and faster conflict resolution.
                            </p>
                            <p className="text-shadi-cream/55 text-[1.05rem]">
                                <strong className="text-shadi-cream font-semibold">The Ritual Doesn't Do the Work — You Do:</strong> Rituals are a tool, not a magic fix. They create an optimal environment for you to build a healthy marriage. The discipline, intention, and commitment you bring is what makes it powerful.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="from-nightshade to-burgundy border-shadi-gold/15 border-y bg-gradient-to-br px-[5%] py-20 text-center">
                    <div className="reveal mx-auto max-w-[700px]">
                        <h2 className="font-goudy text-shadi-gold mb-2 text-[clamp(1.6rem,3vw,2.8rem)] font-semibold tracking-[0.04em]">
                            Which Ritual Is Right<br />for <em className="font-garamond text-shadi-cream font-normal italic">You?</em>
                        </h2>
                        <p className="text-shadi-cream/55 mb-10 text-[1.05rem] leading-[1.8]">
                            Let's identify which rituals your Kundali needs. Every ritual is customised — we design the ceremony specifically for your karmic needs and your marriage's highest good.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))} className="font-goudy text-nightshade hover:from-shadi-gold hover:to-shadi-gold-light inline-block cursor-pointer bg-gradient-to-br from-shadi-gold/80 to-shadi-gold px-8 py-[0.85rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(212,162,64,0.45)] border-none">
                                Get Your Ritual Analysis
                            </button>
                            <Link href="/services" className="font-goudy text-shadi-gold border-shadi-gold hover:bg-shadi-gold/10 hover:border-shadi-gold-light inline-block cursor-pointer border bg-transparent px-8 py-[0.8rem] text-[0.62rem] tracking-[0.2em] uppercase transition-all duration-300">
                                View All Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
}
