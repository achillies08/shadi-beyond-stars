import MainLayout from '@/layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

export default function Services() {
    return (
        <MainLayout>
            <Head title="Services — Shadi Beyond Stars" />
            <main>
                {/* HERO */}
                <section className="bg-gradient-to-br from-burgundy to-nightshade relative flex min-h-[90vh] items-center pt-24">
                    <div className="mx-auto max-w-[1000px] px-[5%] text-center">
                        <div className="text-shadi-gold mb-6 text-[0.62rem] uppercase tracking-[0.45em] before:mr-2 before:content-['✦']">Our Complete Offering</div>
                        <h1 className="font-goudy text-shadi-gold mb-4 text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-[0.04em]">
                            Four Pillars of<br />Marriage Alignment
                        </h1>
                        <p className="text-shadi-cream/55 mx-auto mb-12 max-w-[600px] text-[1.15rem] leading-[1.8]">
                            Each service is designed specifically for your Kundali — nothing generic, everything purposeful.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))} className="font-goudy text-nightshade hover:from-shadi-gold hover:to-shadi-gold-light inline-block cursor-pointer bg-gradient-to-br from-shadi-gold/80 to-shadi-gold px-8 py-[0.85rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(212,162,64,0.45)] border-none">
                                Book a Consultation Now
                            </button>
                            <a href="#pillars" className="font-goudy text-shadi-gold border-shadi-gold hover:bg-shadi-gold/10 hover:border-shadi-gold-light inline-block cursor-pointer border bg-transparent px-8 py-[0.8rem] text-[0.62rem] tracking-[0.2em] uppercase transition-all duration-300">
                                Explore Services ↓
                            </a>
                        </div>
                    </div>
                </section>

                {/* PILLAR 1: ASTROLOGY & ANALYSIS */}
                <section id="pillars" className="bg-nightshade mx-auto max-w-[1200px] px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            Pillar One
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Astrology & <em className="font-garamond text-shadi-cream font-normal italic">Deep Analysis</em>
                        </h2>
                        <p className="text-shadi-cream/55 mb-8 max-w-[600px] text-[1.05rem] leading-[1.9]">
                            This is where everything begins. Before any ritual, before any advice, we read what your stars are saying. We go beyond standard guna matching that most astrologers offer. We read your complete birth charts — planetary positions, house placements, nadi compatibility, dosha patterns, and most importantly: the karmic signatures between two souls.
                        </p>
                        
                        <div className="bg-burgundy/80 hover:bg-burgundy border-shadi-gold/15 hover:border-shadi-gold/35 reveal mt-12 border p-8 md:p-12 transition-all duration-400">
                            <h3 className="font-goudy text-shadi-gold mb-6 text-[1.5rem] font-semibold">What This Phase Includes</h3>
                            <p className="text-shadi-cream/55 mb-8 text-[1.05rem] leading-[1.85]">
                                Four specialized services to give you complete clarity on your union.
                            </p>
                            
                            <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-2">
                                {[
                                    { num: '01', title: 'Advanced Kundali Matching', desc: 'The foundation of all marriage decisions. Complete Kundali analysis for both individuals, 36-point guna matching, and compatibility in 8 dimensions: physical, emotional, financial, spiritual, intellectual, family harmony, longevity, and karmic alignment.', duration: '90–120 min', cost: '₹5,000–₹8,000' },
                                    { num: '02', title: 'Dosha Analysis & Identification', desc: 'Identifying planetary imbalances that need correction. Complete dosha screening (Mangal, Kaal Sarp, Pitra, Nadi, Bhakoot, etc.). We assess severity and which doshas require ritual correction.', duration: '45–60 min', cost: '₹3,500–₹5,500' },
                                    { num: '03', title: 'Pre-Marriage Consultation', desc: 'A complete pre-wedding guidance session. Full Kundali analysis, compatibility breakdown, dosha identification, written report with findings, preliminary ritual recommendations, and timeline for when rituals should be performed.', duration: '120 min', cost: '₹8,000–₹12,000' },
                                    { num: '04', title: 'Muhurat Selection', desc: 'Finding the auspicious date and time for your wedding. Vedic planetary calculations for the next 6–12 months, identification of all auspicious dates, consideration of both Kundalis, exact time windows, and written muhurat report.', duration: 'Ongoing', cost: '₹4,000–₹7,000' }
                                ].map((svc, idx) => (
                                    <div key={idx} className="bg-nightshade hover:bg-burgundy/80 group relative overflow-hidden p-6 md:p-10 transition-all duration-300">
                                        <div className="font-goudy text-shadi-gold/80 mb-2 text-[0.52rem] uppercase tracking-[0.2em] opacity-70">{svc.num}</div>
                                        <div className="font-goudy text-shadi-gold mb-3 mt-4 text-[1.1rem] font-semibold">{svc.title}</div>
                                        <div className="text-shadi-cream/55 mb-6 text-[0.95rem] leading-[1.7]">{svc.desc}</div>
                                        <div className="border-shadi-gold/10 text-shadi-gold/80 flex flex-wrap gap-6 border-t pt-6 text-[0.55rem] uppercase tracking-[0.15em] font-goudy">
                                            <div className="flex-1">
                                                <div className="text-shadi-gold/60 opacity-80">Duration</div>
                                                <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] normal-case tracking-normal">{svc.duration}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-shadi-gold/60 opacity-80">Cost</div>
                                                <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] normal-case tracking-normal">{svc.cost}</div>
                                            </div>
                                        </div>
                                        <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))} className="font-goudy text-shadi-gold mt-6 flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.15em] opacity-0 transition-opacity duration-300 group-hover:cursor-pointer group-hover:opacity-100 after:text-[0.7rem] after:content-['→'] border-none bg-transparent p-0">
                                            Learn more
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PILLAR 2: PRE-WEDDING RITUALS */}
                <section className="bg-nightshade/80 mx-auto max-w-[1200px] px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            Pillar Two
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Pre-Wedding Rituals &<br /><em className="font-garamond text-shadi-cream font-normal italic">Dosha Remedies</em>
                        </h2>
                        <p className="text-shadi-cream/55 mb-12 max-w-[600px] text-[1.05rem] leading-[1.9]">
                            Once we've identified what needs to be corrected, we design and perform the precise rituals to clear the path. These are not generic ceremonies — each puja is customised based on your Kundali, your doshas, and the specific karmic work that needs to happen before the marriage begins.
                        </p>
                        
                        <div className="bg-burgundy/80 hover:bg-burgundy border-shadi-gold/15 hover:border-shadi-gold/35 reveal border p-8 md:p-12 transition-all duration-400">
                            <h3 className="font-goudy text-shadi-gold mb-6 text-[1.5rem] font-semibold">Ritual Services We Perform</h3>
                            
                            <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-2">
                                {[
                                    { num: '05', title: 'Mangal Dosh Puja', desc: 'Neutralising the influence of Mars. When Mars is positioned in certain houses of your Kundali (1st, 2nd, 4th, 7th, 8th, or 12th), it can bring conflict into a marriage. This targeted puja reduces that aggressive influence.', duration: '3–5 hours', cost: '₹8,000–₹15,000' },
                                    { num: '06', title: 'Kaal Sarp Dosh Puja', desc: 'Breaking the karmic cycle of Rahu and Ketu. One of the most significant karmic blockages in Vedic astrology. Performed with specific mantras and yagnas to dissolve the serpentine energy and karmic debts.', duration: '4–6 hours', cost: '₹12,000–₹25,000' },
                                    { num: '07', title: 'Navgrah Shanti Puja', desc: 'Bringing all nine planets into harmony. All nine planetary deities (Grahas) are individually propitiated. Creates a harmonious cosmic environment for the marriage to begin, strengthens positive influences, softens negative ones.', duration: '5–7 hours', cost: '₹10,000–₹18,000' },
                                    { num: '08', title: 'Pitra Dosh Puja', desc: 'Addressing ancestral karmic debt. Unresolved ancestral karma can silently burden a marriage. This ritual performs correct ancestral rites and releases inherited spiritual debts so your union begins unencumbered.', duration: '3–4 hours', cost: '₹6,000–₹12,000' }
                                ].map((svc, idx) => (
                                    <div key={idx} className="bg-nightshade hover:bg-burgundy/80 group relative overflow-hidden p-6 md:p-10 transition-all duration-300">
                                        <div className="font-goudy text-shadi-gold/80 mb-2 text-[0.52rem] uppercase tracking-[0.2em] opacity-70">{svc.num}</div>
                                        <div className="font-goudy text-shadi-gold mb-3 mt-4 text-[1.1rem] font-semibold">{svc.title}</div>
                                        <div className="text-shadi-cream/55 mb-6 text-[0.95rem] leading-[1.7]">{svc.desc}</div>
                                        <div className="border-shadi-gold/10 text-shadi-gold/80 flex flex-wrap gap-6 border-t pt-6 text-[0.55rem] uppercase tracking-[0.15em] font-goudy">
                                            <div className="flex-1">
                                                <div className="text-shadi-gold/60 opacity-80">Duration</div>
                                                <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] normal-case tracking-normal">{svc.duration}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-shadi-gold/60 opacity-80">Cost</div>
                                                <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] normal-case tracking-normal">{svc.cost}</div>
                                            </div>
                                        </div>
                                        <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))} className="font-goudy text-shadi-gold mt-6 flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.15em] opacity-0 transition-opacity duration-300 group-hover:cursor-pointer group-hover:opacity-100 after:text-[0.7rem] after:content-['→'] border-none bg-transparent p-0">
                                            Learn more
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PILLAR 3: WEDDING CEREMONY */}
                <section className="bg-burgundy/60 mx-auto max-w-[1200px] px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            Pillar Three
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Wedding Day<br /><em className="font-garamond text-shadi-cream font-normal italic">Ceremony</em>
                        </h2>
                        <p className="text-shadi-cream/55 mb-12 max-w-[600px] text-[1.05rem] leading-[1.9]">
                            The actual wedding ceremony — but unlike a standard wedding, your Vivah Sanskar is completely customised. Every mantra, every ritual, every sequence is determined by your combined Kundali and the auspicious muhurat we've selected. The ceremony becomes a spiritual alignment ritual tailored to your karmic needs.
                        </p>
                        
                        <div className="bg-burgundy/80 hover:bg-burgundy border-shadi-gold/15 hover:border-shadi-gold/35 reveal border p-8 md:p-12 transition-all duration-400">
                            <h3 className="font-goudy text-shadi-gold mb-6 text-[1.5rem] font-semibold">Your Wedding Ceremony</h3>
                            
                            <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px]">
                                <div className="bg-nightshade hover:bg-burgundy/80 group relative overflow-hidden p-6 md:p-10 transition-all duration-300">
                                    <div className="font-goudy text-shadi-gold/80 mb-2 text-[0.52rem] uppercase tracking-[0.2em] opacity-70">09</div>
                                    <div className="font-goudy text-shadi-gold mb-3 mt-4 text-[1.1rem] font-semibold">Vivah Sanskar — Customised Vedic Wedding Ceremony</div>
                                    <div className="text-shadi-cream/55 mb-6 text-[0.95rem] leading-[1.7]">
                                        The complete Vedic wedding ceremony, designed from your birth charts. Includes: Shuddhi (purification), Ganesh Puja, Kanya Daan, Vivah Mantra (custom-written for your Kundali), Saptapadi (seven steps, each aligned to planetary blessings), Mangal Sutra Bandhan (sacred necklace — timed to muhurat), Ashirvad (blessings), final homa (fire ritual), and prasad distribution.<br /><br />Our experienced pandit leads the entire ceremony. Backup pandit available. All ritual materials provided. Step-by-step guidance for all participants.
                                    </div>
                                    <div className="border-shadi-gold/10 text-shadi-gold/80 flex flex-wrap gap-6 border-t pt-6 text-[0.55rem] uppercase tracking-[0.15em] font-goudy">
                                        <div className="flex-1">
                                            <div className="text-shadi-gold/60 opacity-80">Duration</div>
                                            <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] normal-case tracking-normal">4–8 hours</div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-shadi-gold/60 opacity-80">Includes</div>
                                            <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] normal-case tracking-normal">Pandit team, materials</div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-shadi-gold/60 opacity-80">Cost</div>
                                            <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] normal-case tracking-normal">₹35,000–₹75,000</div>
                                        </div>
                                    </div>
                                    <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))} className="font-goudy text-shadi-gold mt-6 flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.15em] opacity-0 transition-opacity duration-300 group-hover:cursor-pointer group-hover:opacity-100 after:text-[0.7rem] after:content-['→'] border-none bg-transparent p-0">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PILLAR 4: POST-MARRIAGE */}
                <section className="bg-nightshade mx-auto max-w-[1200px] px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            Pillar Four
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Post-Marriage Guidance &<br /><em className="font-garamond text-shadi-cream font-normal italic">Long-Term Harmony</em>
                        </h2>
                        <p className="text-shadi-cream/55 mb-12 max-w-[600px] text-[1.05rem] leading-[1.9]">
                            The wedding is not the end — it's the beginning. We provide ongoing support to ensure your marriage remains in spiritual and karmic alignment. Through periodic check-ins, updated remedies, and guidance aligned to planetary transits, we help your marriage thrive for a lifetime.
                        </p>
                        
                        <div className="bg-burgundy/80 hover:bg-burgundy border-shadi-gold/15 hover:border-shadi-gold/35 reveal border p-8 md:p-12 transition-all duration-400">
                            <h3 className="font-goudy text-shadi-gold mb-6 text-[1.5rem] font-semibold">Long-Term Support</h3>
                            
                            <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-2">
                                {[
                                    { num: '10', title: 'Post-Marriage Consultation & Remedies', desc: 'A check-in after your wedding and ongoing support. First consultation within 7 days of wedding. Updated analysis, personalised remedies based on current planetary transits, guidance on maintaining spiritual harmony.', duration: '60 min', cost: 'As needed', labelCost: 'Frequency' },
                                    { num: '11', title: 'Periodic Astrological Check-Ins', desc: 'Regular consultations aligned to planetary movements. Quarterly or semi-annually. Updated analysis based on current planetary transits, which planets currently affect your marriage, specific remedies for current period.', duration: '30–45 min', cost: '₹2,000–₹3,500', labelCost: 'Cost' },
                                    { num: '12', title: 'NRI / Remote Post-Marriage Guidance', desc: 'Complete post-marriage support for couples abroad. Online delivery (video call, email, WhatsApp). Regular check-ins, guided remote remedies, coordination with local pandits if needed, 24-hour support for urgent matters.', duration: 'Online', cost: '₹3,000–₹5,000', labelDuration: 'Delivery', labelCost: 'Cost' },
                                    { num: '13', title: 'Subscription Guidance (Coming Soon)', desc: 'Monthly or quarterly guidance subscription. Monthly written reports on planetary transits, specific remedies to perform, auspicious dates for important decisions, guidance on managing challenging periods, access to direct support.', duration: 'Monthly/Quarterly', cost: '₹5,000–₹8,000/mo', labelDuration: 'Frequency', labelCost: 'Cost' }
                                ].map((svc, idx) => (
                                    <div key={idx} className="bg-nightshade hover:bg-burgundy/80 group relative overflow-hidden p-6 md:p-10 transition-all duration-300">
                                        <div className="font-goudy text-shadi-gold/80 mb-2 text-[0.52rem] uppercase tracking-[0.2em] opacity-70">{svc.num}</div>
                                        <div className="font-goudy text-shadi-gold mb-3 mt-4 text-[1.1rem] font-semibold">{svc.title}</div>
                                        <div className="text-shadi-cream/55 mb-6 text-[0.95rem] leading-[1.7]">{svc.desc}</div>
                                        <div className="border-shadi-gold/10 text-shadi-gold/80 flex flex-wrap gap-6 border-t pt-6 text-[0.55rem] uppercase tracking-[0.15em] font-goudy">
                                            <div className="flex-1">
                                                <div className="text-shadi-gold/60 opacity-80">{svc.labelDuration || 'Duration'}</div>
                                                <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] normal-case tracking-normal">{svc.duration}</div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-shadi-gold/60 opacity-80">{svc.labelCost || 'Cost'}</div>
                                                <div className="font-garamond text-shadi-cream mt-1 block text-[0.9rem] normal-case tracking-normal">{svc.cost}</div>
                                            </div>
                                        </div>
                                        <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))} className="font-goudy text-shadi-gold mt-6 flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.15em] opacity-0 transition-opacity duration-300 group-hover:cursor-pointer group-hover:opacity-100 after:text-[0.7rem] after:content-['→'] border-none bg-transparent p-0">
                                            {svc.num === '13' ? 'Express interest' : 'Learn more'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="from-nightshade to-burgundy border-shadi-gold/15 border-y bg-gradient-to-br px-[5%] py-20 text-center">
                    <div className="reveal mx-auto max-w-[700px]">
                        <h2 className="font-goudy text-shadi-gold mb-2 text-[clamp(1.6rem,3vw,2.8rem)] font-semibold tracking-[0.04em]">
                            Which Service Is Right<br />for <em className="font-garamond text-shadi-cream font-normal italic">Your Journey?</em>
                        </h2>
                        <p className="text-shadi-cream/55 mb-10 text-[1.05rem] leading-[1.8]">
                            Every couple is different. Let's find the perfect service combination for you. Whether you're just beginning to explore or ready to start planning, we're here to guide you every step of the way.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))} className="font-goudy text-nightshade hover:from-shadi-gold hover:to-shadi-gold-light inline-block cursor-pointer bg-gradient-to-br from-shadi-gold/80 to-shadi-gold px-8 py-[0.85rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(212,162,64,0.45)] border-none">
                                Book Your Service Consultation
                            </button>
                            <a href="https://wa.me/917065777369" target="_blank" rel="noreferrer" className="font-goudy text-shadi-gold border-shadi-gold hover:bg-shadi-gold/10 hover:border-shadi-gold-light inline-block cursor-pointer border bg-transparent px-8 py-[0.8rem] text-[0.62rem] tracking-[0.2em] uppercase transition-all duration-300">
                                WhatsApp Us Your Situation
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
}
