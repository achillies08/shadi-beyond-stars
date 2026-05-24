import MainLayout from '@/layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <MainLayout>
            <Head title="About Us — Shadi Beyond Stars" />
            <main>
                {/* HERO */}
                <section className="from-burgundy/80 to-nightshade/90 relative flex min-h-[90vh] items-center bg-[url('/front-assets/wedding_mandap.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay pt-24">
                    <div className="mx-auto max-w-[1000px] px-[5%] text-center relative z-10">
                        <div className="text-shadi-gold mb-6 text-[0.62rem] tracking-[0.45em] uppercase before:mr-2 before:content-['✦'] drop-shadow-md">
                            Our Story
                        </div>
                        <h1 className="font-goudy text-shadi-gold mb-4 text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-[0.04em] drop-shadow-md">
                            A Mission <br />
                            <em className="font-garamond text-shadi-cream font-normal italic">Beyond The Stars</em>
                        </h1>
                        <p className="text-shadi-cream/90 mx-auto mb-12 max-w-[600px] text-[1.15rem] leading-[1.8] drop-shadow-md">
                            Blending Vedic wisdom with thoughtful guidance to help couples begin marriage with greater clarity, harmony, and
                            understanding.
                        </p>
                    </div>
                </section>

                {/* FOUNDER SECTION */}
                <section className="bg-nightshade mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            Meet The Founder
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Sanjeev Nayyar
                        </h2>

                        <div className="mt-12 flex flex-col gap-12 md:gap-20 lg:flex-row lg:items-start">
                            <div className="shrink-0 lg:sticky lg:top-32 lg:w-1/3">
                                <img
                                    src="/front-assets/sanjeev.png"
                                    alt="Sanjeev Nayyar"
                                    className="border-shadi-gold/20 w-full rounded-sm border object-cover"
                                />
                                <div className="font-garamond text-shadi-gold bg-shadi-gold/5 border-shadi-gold/20 mt-6 border-l-2 p-6 text-[1.1rem] italic">
                                    "The love and trust of people is my true earning."
                                    <br />
                                    <span className="font-goudy mt-2 block text-[0.9rem] not-italic opacity-70">— Sanjeev Nayyar</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-16">
                                {/* The Journey */}
                                <div>
                                    <h3 className="font-goudy text-shadi-gold mb-6 text-[1.8rem] font-semibold">The Journey</h3>
                                    <div className="space-y-4">
                                        <p className="text-shadi-cream/70 text-[1.05rem] leading-[1.9]">
                                            Sanjeev Nayyar is the founder of Astro Beyond Stars and Shadi Beyond Stars, platforms created from years
                                            of spiritual study, life experience, and a deep desire to guide people through important phases of life
                                            with clarity and compassion.
                                        </p>
                                        <p className="text-shadi-cream/70 text-[1.05rem] leading-[1.9]">
                                            Before entering the spiritual space full-time, he built a successful corporate career across industries
                                            such as education, healthcare, and hygiene. Over time, his path gradually shifted towards the study of
                                            Astrology, Numerology, Swar Vigyan, Vastu, and Sanatan Dharma.
                                        </p>
                                        <p className="text-shadi-cream/70 text-[1.05rem] leading-[1.9]">
                                            For more than 15 years, he has worked closely with individuals and families seeking guidance in
                                            relationships, marriage, life direction, and spiritual balance.
                                        </p>
                                    </div>
                                </div>

                                {/* Why Shadi Beyond Stars? */}
                                <div>
                                    <h3 className="font-goudy text-shadi-gold mb-6 text-[1.8rem] font-semibold">Why Shadi Beyond Stars?</h3>
                                    <div className="space-y-4">
                                        <p className="text-shadi-cream/70 text-[1.05rem] leading-[1.9]">
                                            Over years of consultations, one thing became clear to him. Many couples came with horoscope reports and
                                            basic matching results, yet still carried confusion, fear, or uncertainty about their marriage journey.
                                            They had information, but very little real understanding.
                                        </p>
                                        <p className="text-shadi-cream/70 text-[1.05rem] leading-[1.9]">
                                            Most guidance ended at prediction. Very little focused on helping couples move forward with clarity,
                                            preparation, and the right spiritual support.
                                        </p>
                                        <p className="text-shadi-cream/70 text-[1.05rem] leading-[1.9]">
                                            That understanding became the foundation of Shadi Beyond Stars. A platform created to combine deeper
                                            Kundali analysis, meaningful rituals, and thoughtful guidance so couples can approach marriage with
                                            greater awareness and peace of mind.
                                        </p>
                                    </div>
                                </div>

                                {/* Recognition & Public Presence */}
                                <div>
                                    <h3 className="font-goudy text-shadi-gold mb-6 text-[1.8rem] font-semibold">Recognition & Public Presence</h3>
                                    <p className="text-shadi-cream/70 mb-6 text-[1.05rem] leading-[1.9]">
                                        Over the years, Sanjeev Nayyar and Astro Beyond Stars have gained recognition for their work in astrology,
                                        spiritual guidance, and public awareness around Vedic practices.
                                    </p>
                                    <ul className="text-shadi-cream/70 ml-2 list-none space-y-4">
                                        <li className="before:text-shadi-gold relative pl-6 text-[1.05rem] leading-[1.6] before:absolute before:top-2 before:left-0 before:text-[0.5rem] before:content-['✦']">
                                            Honoured with the <strong className="text-shadi-gold font-normal">Rashtriya Ratna Samman 2026</strong> for
                                            contributions to spiritual guidance and Vedic sciences
                                        </li>
                                        <li className="before:text-shadi-gold relative pl-6 text-[1.05rem] leading-[1.6] before:absolute before:top-2 before:left-0 before:text-[0.5rem] before:content-['✦']">
                                            Award presented by <strong className="text-shadi-gold font-normal">Kangana Ranaut</strong>
                                        </li>
                                        <li className="before:text-shadi-gold relative pl-6 text-[1.05rem] leading-[1.6] before:absolute before:top-2 before:left-0 before:text-[0.5rem] before:content-['✦']">
                                            Featured in public conversations and podcasts around Swar Vigyan, Vastu, and Karma Alignment
                                        </li>
                                        <li className="before:text-shadi-gold relative pl-6 text-[1.05rem] leading-[1.6] before:absolute before:top-2 before:left-0 before:text-[0.5rem] before:content-['✦']">
                                            Over <strong className="text-shadi-gold font-normal">18 Million+</strong> digital views across spiritual
                                            content platforms
                                        </li>
                                        <li className="before:text-shadi-gold relative pl-6 text-[1.05rem] leading-[1.6] before:absolute before:top-2 before:left-0 before:text-[0.5rem] before:content-['✦']">
                                            A growing community of <strong className="text-shadi-gold font-normal">400,000+ followers</strong> and
                                            subscribers across YouTube and Instagram
                                        </li>
                                        <li className="before:text-shadi-gold relative pl-6 text-[1.05rem] leading-[1.6] before:absolute before:top-2 before:left-0 before:text-[0.5rem] before:content-['✦']">
                                            Recognised for helping bring wider awareness to lesser-known spiritual and heritage locations through
                                            educational content
                                        </li>
                                    </ul>
                                </div>

                                {/* The Vision Behind The Work */}
                                <div>
                                    <h3 className="font-goudy text-shadi-gold mb-6 text-[1.8rem] font-semibold">The Vision Behind The Work</h3>
                                    <div className="space-y-4">
                                        <p className="text-shadi-cream/70 text-[1.05rem] leading-[1.9]">
                                            Every consultation, ritual, and marriage journey guided through Shadi Beyond Stars is rooted in one
                                            belief:
                                        </p>
                                        <div className="font-garamond text-shadi-gold py-4 text-[1.3rem] leading-[1.6] italic">
                                            "People deserve to enter marriage with understanding, honesty, blessings, and peace of mind."
                                        </div>
                                        <p className="text-shadi-cream/70 text-[1.05rem] leading-[1.9]">
                                            Because when guidance is approached with sincerity, rituals become more meaningful, relationships become
                                            more aware, and marriages begin with stronger foundations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BELIEFS SECTION */}
                <section className="bg-nightshade/80 mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            Our Philosophy
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            What We <em className="font-garamond text-shadi-cream font-normal italic">Believe</em>
                        </h2>
                        
                        <img 
                            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&h=600" 
                            alt="Wedding Ceremony" 
                            className="w-full h-[300px] md:h-[450px] object-cover mt-8 mb-12 border border-shadi-gold/20 rounded-sm"
                        />

                        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:gap-y-16">
                            {[
                                {
                                    title: 'Marriage Is A Sacred Responsibility',
                                    desc: 'Marriage is more than a social tradition. In Vedic understanding, it is the coming together of two journeys, two families, and two karmic paths that must learn to move in harmony.',
                                },
                                {
                                    title: 'The Kundali Guides, It Does Not Control',
                                    desc: 'A birth chart is meant to bring awareness, not fear. It helps us understand patterns, timing, strengths, and challenges so decisions can be made with greater clarity.',
                                },
                                {
                                    title: 'Every Marriage Deserves Personalised Guidance',
                                    desc: 'No two Kundalis are the same. No two relationships carry the same emotions, circumstances, or challenges. That is why we do not believe in fixed remedies or generic advice.',
                                },
                                {
                                    title: 'Ancient Wisdom Still Holds Meaning',
                                    desc: 'Life may have changed, but many human emotions and relationship struggles remain the same. Vedic wisdom continues to offer insight when understood with balance and practicality.',
                                },
                                {
                                    title: 'Spiritual Guidance Should Feel Grounded',
                                    desc: 'The purpose of rituals and guidance is not to create dependency or confusion. It is to help couples build greater understanding, trust, patience, and emotional balance in marriage.',
                                },
                                {
                                    title: 'Harmony Matters More Than Ceremony',
                                    desc: 'A successful marriage is not measured by how grand the wedding day was. It is measured by how peacefully two people continue to walk through life together.',
                                },
                            ].map((belief, idx) => (
                                <div key={idx} className="border-shadi-gold/20 border-t pt-6 transition-all duration-300">
                                    <div className="font-goudy text-shadi-gold mb-3 text-[1.15rem] font-semibold">{belief.title}</div>
                                    <div className="text-shadi-cream/60 text-[1rem] leading-[1.8]">{belief.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS SECTION */}
                <section className="bg-burgundy/60 mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            Voices from Our Community
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Success <em className="font-garamond text-shadi-cream font-normal italic">Stories</em>
                        </h2>

                        <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-3">
                            {[
                                {
                                    name: 'Priya & Arjun K.',
                                    location: 'Delhi',
                                    challenge: 'She had severe Mangal Dosh; most astrologers advised against the match',
                                    result: 'After the Mangal Dosh Puja, the relationship transformed. Married 3 years with exceptional harmony.',
                                    quote: '"We almost didn\'t get married because of Mangal Dosh warnings. But Shadi Beyond Stars showed us it wasn\'t a blockade — it was a challenge we could navigate. The ritual shifted something in us both."',
                                },
                                {
                                    name: 'Simran & Vikram',
                                    location: 'International',
                                    challenge: 'Long-distance relationship spanning two continents, challenging planetary alignments',
                                    result: 'Complete alignment service with remote rituals. Now engaged and planning wedding with confidence.',
                                    quote: '"Having someone who understood both our birth charts and our modern life situation made all the difference. The rituals felt real and powerful even done remotely."',
                                },
                                {
                                    name: 'Anaya & Karan S.',
                                    location: 'Mumbai',
                                    challenge: 'Both had Pitra Dosh; both came from broken family backgrounds',
                                    result: 'Pitra Dosh Puja followed by Navgrah Shanti. Their marriage is the first successful one in either family in 2 generations.',
                                    quote: '"The Pitra Dosh Puja was deeply healing. It felt like we were honoring our ancestors while freeing ourselves from their karma. Our marriage feels blessed."',
                                },
                            ].map((test, idx) => (
                                <div key={idx} className="bg-nightshade hover:bg-burgundy/80 p-6 transition-all duration-300 md:p-10">
                                    <div className="font-goudy text-shadi-gold mb-1 text-[0.9rem] font-semibold">{test.name}</div>
                                    <div className="font-goudy text-shadi-gold/80 mb-4 text-[0.55rem] tracking-[0.15em] uppercase opacity-80">
                                        {test.location}
                                    </div>
                                    <div className="text-shadi-cream/35 border-shadi-gold/10 mb-4 border-b pb-4 text-[0.9rem] italic">
                                        <strong>Challenge:</strong> {test.challenge}
                                    </div>
                                    <div className="text-shadi-cream/55 mb-4 text-[0.9rem]">
                                        <strong>Result:</strong> {test.result}
                                    </div>
                                    <div className="font-garamond text-shadi-gold text-[0.95rem] leading-[1.6] italic">{test.quote}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US SECTION */}
                <section className="bg-nightshade mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            Why Choose Us
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            What Makes Our Approach <em className="font-garamond text-shadi-cream font-normal italic">Different</em>
                        </h2>

                        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
                            {[
                                {
                                    num: '01',
                                    title: 'Personalised For Every Kundali',
                                    desc: "Every relationship carries different energies, challenges, and patterns. That is why every ritual and recommendation is carefully designed around the couple's chart.",
                                },
                                {
                                    num: '02',
                                    title: 'Deeper Relationship Understanding',
                                    desc: 'We look beyond surface-level matching to understand emotional patterns, karmic influences, compatibility, and long-term harmony between two individuals.',
                                },
                                {
                                    num: '03',
                                    title: 'Complete Guidance Under One Roof',
                                    desc: 'From analysis and rituals to ceremony coordination and post-marriage support, every step is managed with clarity and care.',
                                },
                                {
                                    num: '04',
                                    title: 'Rooted In Tradition, Explained With Simplicity',
                                    desc: 'Authentic Vedic practices guided in a way that feels clear, thoughtful, and comfortable for modern families across the world.',
                                },
                                {
                                    num: '05',
                                    title: 'Support Beyond The Wedding Day',
                                    desc: 'Marriage continues to evolve with time. We remain available for guidance through important phases, transitions, and challenges after the ceremony.',
                                },
                                {
                                    num: '06',
                                    title: 'Available Across India & Worldwide',
                                    desc: 'Whether at home or abroad, our team travels wherever rituals, consultations, and ceremonies are needed.',
                                },
                            ].map((why, idx) => (
                                <div key={idx} className="border-shadi-gold/20 relative border-t pt-8 transition-all duration-300">
                                    <div className="font-goudy text-shadi-gold/30 bg-nightshade absolute -top-4 left-0 pr-4 text-[2rem] leading-none font-bold italic">
                                        {why.num}
                                    </div>
                                    <div className="font-goudy text-shadi-gold mb-3 text-[1.15rem] font-semibold">{why.title}</div>
                                    <div className="text-shadi-cream/60 text-[1rem] leading-[1.8]">{why.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* COMMITMENTS SECTION */}
                <section className="bg-nightshade/80 mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            Our Commitment
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-6 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            What You Can Expect <em className="font-garamond text-shadi-cream font-normal italic">From Us</em>
                        </h2>

                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                            {[
                                {
                                    icon: '✦',
                                    title: 'Clarity',
                                    desc: 'We explain your Kundali, compatibility, and recommendations in a way that feels clear, honest, and easy to understand.',
                                },
                                {
                                    icon: '◈',
                                    title: 'Honest Guidance',
                                    desc: 'No unnecessary rituals. No fear-driven advice. Only what is genuinely relevant for your situation and relationship.',
                                },
                                {
                                    icon: '☽',
                                    title: 'Care In Every Ritual',
                                    desc: 'Every ceremony is performed with proper process, experienced pandits, and attention to detail.',
                                },
                                {
                                    icon: '❈',
                                    title: 'Sensitivity & Respect',
                                    desc: 'Marriage guidance is deeply personal. We approach every consultation and ritual with patience, understanding, and care.',
                                },
                                {
                                    icon: '⬡',
                                    title: 'Long-Term Support',
                                    desc: 'Our role does not end with the wedding day. We remain available for guidance through different phases of married life.',
                                },
                            ].map((promise, idx) => (
                                <div
                                    key={idx}
                                    className="bg-shadi-gold/5 hover:bg-shadi-gold/10 rounded-sm p-8 text-center transition-all duration-300"
                                >
                                    <div className="text-shadi-gold mb-4 text-[2rem] opacity-80">{promise.icon}</div>
                                    <div className="font-goudy text-shadi-gold mb-3 text-[1.1rem] font-semibold">{promise.title}</div>
                                    <div className="text-shadi-cream/60 text-[0.95rem] leading-[1.7]">{promise.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="bg-nightshade border-shadi-gold/15 border-y px-[5%] py-20 text-center">
                    <div className="reveal mx-auto max-w-[700px]">
                        <h2 className="font-goudy text-shadi-gold mb-2 text-[clamp(1.6rem,3vw,2.8rem)] font-semibold tracking-[0.04em]">
                            Begin Your Journey <br />
                            <em className="font-garamond text-shadi-cream font-normal italic">With Clarity & Guidance</em>
                        </h2>
                        <p className="text-shadi-cream/55 mb-10 text-[1.05rem] leading-[1.8]">
                            Meet with Sanjeev Nayyar and understand what your Kundali reveals about your relationship, compatibility, and marriage
                            journey. Let us guide you towards a marriage built on understanding, balance, and lasting harmony.
                        </p>
                        <button
                            onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                            className="font-goudy text-nightshade hover:bg-shadi-gold-light bg-shadi-gold inline-block cursor-pointer px-8 py-[0.85rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-500"
                        >
                            Book Your First Consultation →
                        </button>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
}
