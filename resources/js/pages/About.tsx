import MainLayout from '@/layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react';

export default function About() {
    return (
        <MainLayout>
            <Head title="About Us — Shadi Beyond Stars" />
            <main>
                {/* HERO */}
                <section className="bg-gradient-to-br from-burgundy to-nightshade relative flex min-h-[90vh] items-center pt-24">
                    <div className="mx-auto max-w-[1000px] px-[5%] text-center">
                        <div className="text-shadi-gold mb-6 text-[0.62rem] uppercase tracking-[0.45em] before:mr-2 before:content-['✦']">Our Story</div>
                        <h1 className="font-goudy text-shadi-gold mb-4 text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-[0.04em]">
                            A Mission <br /><em className="font-garamond text-shadi-cream font-normal italic">Beyond Stars</em>
                        </h1>
                        <p className="text-shadi-cream/55 mx-auto mb-12 max-w-[600px] text-[1.15rem] leading-[1.8]">
                            Combining ancient Vedic wisdom with modern clarity to ensure every marriage begins in karmic harmony.
                        </p>
                    </div>
                </section>

                {/* FOUNDER SECTION */}
                <section className="bg-nightshade mx-auto max-w-[1200px] px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            Meet the Founder
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Mr. Sanjeev Nayyar
                        </h2>
                        
                        <div className="bg-burgundy/80 border-shadi-gold/15 my-8 border p-6 md:p-12">
                            <div className="flex flex-col gap-6 md:p-10 lg:flex-row lg:items-start">
                                <div className="shrink-0 lg:w-1/3">
                                    <img src="/front-assets/sanjeev.png" alt="Mr. Sanjeev Nayyar" className="border-shadi-gold/20 w-full border object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-goudy text-shadi-gold mb-4 text-[1.3rem] font-semibold">The Journey</h3>
                                    <p className="text-shadi-cream/55 mb-4 text-[1.05rem] leading-[1.9]">
                                        Mr. Sanjeev Nayyar is the visionary behind Shadi Beyond Stars, a platform born from a deep spiritual journey and a desire to guide individuals through life's most significant moments with clarity, purpose, and compassion.
                                    </p>
                                    <p className="text-shadi-cream/55 mb-4 text-[1.05rem] leading-[1.9]">
                                        After establishing a distinguished career in the corporate world — spanning industries like education, health, and hygiene — Mr. Nayyar experienced a profound awakening. While corporate success had brought material achievement, his soul was calling him toward something deeper: the ancient wisdom of Astrology, Numerology, and Sanatan Dharma.
                                    </p>
                                    <p className="text-shadi-cream/55 text-[1.05rem] leading-[1.9]">
                                        Over the past 15+ years, he has dedicated himself to rigorous study and spiritual practice, becoming a mentor and guide for thousands of individuals seeking clarity on their life paths, relationships, and spiritual journeys.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="font-garamond text-shadi-gold bg-shadi-gold/5 border-l-3 border-shadi-gold my-6 p-6 text-[1.1rem] italic">
                            "The love and respect of people is my true earning." – Sanjeev Nayyar
                        </div>

                        <div className="bg-burgundy/80 border-shadi-gold/15 my-8 border p-6 md:p-12">
                            <h3 className="font-goudy text-shadi-gold mb-4 text-[1.3rem] font-semibold">Why Shadi Beyond Stars?</h3>
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem] leading-[1.9]">
                                After years of consultations, Mr. Nayyar noticed a pattern: couples came to him asking "Will our marriage work?" but felt lost. They had basic horoscope matches, but no deep understanding of their karmic compatibility. More importantly, they had no roadmap, no rituals, no actionable guidance.
                            </p>
                            <p className="text-shadi-cream/55 mb-4 text-[1.05rem] leading-[1.9]">
                                He realised that most marriage guidance stopped at analysis. It didn't go further to include the precise, customised rituals that could actually transform a relationship.
                            </p>
                            <p className="text-shadi-cream/55 text-[1.05rem] leading-[1.9]">
                                In that moment, Shadi Beyond Stars was conceived: a comprehensive platform that combines the precision of Vedic astrology with the power of ritual, so that every couple doesn't just understand their marriage — they consciously architect it.
                            </p>
                            
                            <div className="font-garamond text-shadi-gold bg-shadi-gold/5 border-l-3 border-shadi-gold my-6 p-6 text-[1.1rem] italic">
                                "Marriage is not left to chance. It's a sacred alignment of two souls. My mission is to help every couple experience that blessing." – Sanjeev Nayyar
                            </div>
                            
                            <p className="text-shadi-cream/55 text-[1.05rem] leading-[1.9]">
                                Every ritual performed, every consultation given, every couple guided is an expression of Mr. Nayyar's core belief: that we all deserve to walk our life paths — especially in marriage — with clarity, blessing, and purpose.
                            </p>
                        </div>
                    </div>
                </section>

                {/* BELIEFS SECTION */}
                <section className="bg-nightshade/80 mx-auto max-w-[1200px] px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            Our Philosophy
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            What We <em className="font-garamond text-shadi-cream font-normal italic">Believe</em>
                        </h2>
                        
                        <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-2">
                            {[
                                { title: 'Marriage Is Sacred Karma', desc: 'Two souls choosing to walk life together is not random. In Vedic philosophy, marriage is one of the most significant karmic contracts. Understanding this through your Kundali is the first step toward honoring it.' },
                                { title: 'The Stars Don\'t Dictate — They Guide', desc: 'Your birth chart shows you the terrain. But you\'re the one walking. Rituals don\'t change your destiny; they optimize your journey through it.' },
                                { title: 'Customization Over Cookie-Cutter', desc: 'No two Kundalis are the same. No two marriages face the same challenges. We reject standardized advice. Every couple deserves a solution designed for them.' },
                                { title: 'Ancient Wisdom Meets Modern Life', desc: 'Vedic astrology is thousands of years old. Life is radically different now. But the principles are eternal. We translate ancient wisdom into language and practices that make sense today.' },
                                { title: 'Spirituality Is Practical', desc: 'We\'re not interested in abstract philosophy. We care about results: better communication, deeper trust, the ability to navigate challenges together.' },
                                { title: 'Long-Term Harmony as the Measure', desc: 'Our measure of success is not a completed ceremony. It is a marriage that thrives. Every decision is made with the long-term wellbeing of the couple in mind.' }
                            ].map((belief, idx) => (
                                <div key={idx} className="bg-nightshade hover:bg-burgundy/80 p-6 md:p-10 transition-all duration-300">
                                    <div className="font-goudy text-shadi-gold mb-4 text-[1rem] font-semibold">{belief.title}</div>
                                    <div className="text-shadi-cream/55 text-[0.95rem] leading-[1.7]">{belief.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS SECTION */}
                <section className="bg-burgundy/60 mx-auto max-w-[1200px] px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            Voices from Our Community
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Success <em className="font-garamond text-shadi-cream font-normal italic">Stories</em>
                        </h2>
                        
                        <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-3">
                            {[
                                { name: 'Priya & Arjun K.', location: 'Delhi', challenge: 'She had severe Mangal Dosh; most astrologers advised against the match', result: 'After the Mangal Dosh Puja, the relationship transformed. Married 3 years with exceptional harmony.', quote: '"We almost didn\'t get married because of Mangal Dosh warnings. But Shadi Beyond Stars showed us it wasn\'t a blockade — it was a challenge we could navigate. The ritual shifted something in us both."' },
                                { name: 'Simran & Vikram', location: 'International', challenge: 'Long-distance relationship spanning two continents, challenging planetary alignments', result: 'Complete alignment service with remote rituals. Now engaged and planning wedding with confidence.', quote: '"Having someone who understood both our birth charts and our modern life situation made all the difference. The rituals felt real and powerful even done remotely."' },
                                { name: 'Anaya & Karan S.', location: 'Mumbai', challenge: 'Both had Pitra Dosh; both came from broken family backgrounds', result: 'Pitra Dosh Puja followed by Navgrah Shanti. Their marriage is the first successful one in either family in 2 generations.', quote: '"The Pitra Dosh Puja was deeply healing. It felt like we were honoring our ancestors while freeing ourselves from their karma. Our marriage feels blessed."' }
                            ].map((test, idx) => (
                                <div key={idx} className="bg-nightshade hover:bg-burgundy/80 p-6 md:p-10 transition-all duration-300">
                                    <div className="font-goudy text-shadi-gold mb-1 text-[0.9rem] font-semibold">{test.name}</div>
                                    <div className="font-goudy text-shadi-gold/80 mb-4 text-[0.55rem] uppercase tracking-[0.15em] opacity-80">{test.location}</div>
                                    <div className="text-shadi-cream/35 border-shadi-gold/10 mb-4 border-b pb-4 text-[0.9rem] italic"><strong>Challenge:</strong> {test.challenge}</div>
                                    <div className="text-shadi-cream/55 mb-4 text-[0.9rem]"><strong>Result:</strong> {test.result}</div>
                                    <div className="font-garamond text-shadi-gold text-[0.95rem] leading-[1.6] italic">{test.quote}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US SECTION */}
                <section className="bg-nightshade mx-auto max-w-[1200px] px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            Why Choose Us
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            What Sets Us <em className="font-garamond text-shadi-cream font-normal italic">Apart</em>
                        </h2>
                        
                        <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-3">
                            {[
                                { num: '01', title: 'Fully Customised Per Kundali', desc: 'No two ceremonies we design are identical. Every ritual, sequence, and mantra is based on your precise birth chart.' },
                                { num: '02', title: 'Karmic Alignment', desc: 'We go deeper than surface-level problem solving. We read the karmic debt between two souls and design rituals to clear that at the root.' },
                                { num: '03', title: 'End-to-End Execution', desc: 'We don\'t just advise and leave. We manage every step — analysis, ritual design, pandit coordination, ceremony execution, and post-marriage guidance.' },
                                { num: '04', title: 'Vedic Tradition, Modern Delivery', desc: 'Ancient, authentic methods delivered with clarity, structure, and sensitivity to modern and NRI families worldwide.' },
                                { num: '05', title: 'Long-Term Relationship', desc: 'Your marriage doesn\'t end with the wedding ceremony. We\'re here for the years ahead, with guidance and support aligned to planetary transits.' },
                                { num: '06', title: 'We Travel to You', desc: 'Delhi, Mumbai, London, Dubai, or anywhere else. We bring the complete ceremony to you.' }
                            ].map((why, idx) => (
                                <div key={idx} className="bg-nightshade hover:bg-burgundy/80 p-6 md:p-10 transition-all duration-300">
                                    <div className="font-goudy text-shadi-gold/80 mb-2 text-[0.52rem] uppercase tracking-[0.2em] opacity-70">{why.num}</div>
                                    <div className="font-goudy text-shadi-gold mb-4 text-[1.05rem] font-semibold">{why.title}</div>
                                    <div className="text-shadi-cream/55 text-[0.92rem] leading-[1.7]">{why.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* COMMITMENTS SECTION */}
                <section className="bg-nightshade/80 mx-auto max-w-[1200px] px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold mb-5 flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.4em] font-goudy before:h-[1px] before:w-[26px] before:bg-gradient-to-r before:from-shadi-gold/80 before:to-shadi-gold before:content-['']">
                            Our Commitment
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Our Promise <em className="font-garamond text-shadi-cream font-normal italic">to You</em>
                        </h2>
                        
                        <div className="bg-shadi-gold/5 mt-8 grid grid-cols-2 gap-[2px] md:grid-cols-5">
                            {[
                                { icon: '✦', title: 'Clarity', desc: 'You\'ll understand exactly what your Kundali says and why certain rituals are needed.' },
                                { icon: '◈', title: 'Integrity', desc: 'We don\'t push unnecessary services. Only what your Kundali actually needs.' },
                                { icon: '☽', title: 'Excellence', desc: 'Every ritual is executed with absolute precision. Our pandits are vetted and experienced.' },
                                { icon: '❈', title: 'Compassion', desc: 'This is sacred work. We approach it with reverence for your spiritual journey.' },
                                { icon: '⬡', title: 'Partnership', desc: 'You\'re not a client; you\'re part of our community. We walk with you.' }
                            ].map((promise, idx) => (
                                <div key={idx} className="bg-nightshade hover:bg-burgundy/80 p-6 md:p-8 text-center transition-all duration-300">
                                    <div className="text-shadi-gold mb-3 text-[1.8rem]">{promise.icon}</div>
                                    <div className="font-goudy text-shadi-gold mb-3 text-[0.95rem] font-semibold">{promise.title}</div>
                                    <div className="text-shadi-cream/55 text-[0.85rem] leading-[1.6]">{promise.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="from-nightshade to-burgundy border-shadi-gold/15 border-y bg-gradient-to-br px-[5%] py-20 text-center">
                    <div className="reveal mx-auto max-w-[700px]">
                        <h2 className="font-goudy text-shadi-gold mb-2 text-[clamp(1.6rem,3vw,2.8rem)] font-semibold tracking-[0.04em]">
                            Let's Begin Your <em className="font-garamond text-shadi-cream font-normal italic">Journey</em>
                        </h2>
                        <p className="text-shadi-cream/55 mb-10 text-[1.05rem] leading-[1.8]">
                            Meet with Mr. Sanjeev Nayyar and discover what your Kundali reveals. Let's architect a marriage that thrives.
                        </p>
                        <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))} className="font-goudy text-nightshade hover:from-shadi-gold hover:to-shadi-gold-light inline-block cursor-pointer bg-gradient-to-br from-shadi-gold/80 to-shadi-gold px-8 py-[0.85rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(212,162,64,0.45)] border-none">
                            Book Your First Consultation →
                        </button>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
}
