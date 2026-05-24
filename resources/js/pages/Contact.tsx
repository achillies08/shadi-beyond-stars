import MainLayout from '@/layouts/MainLayout';
import { Head, router } from '@inertiajs/react';
import React, { useState } from 'react';

export default function Contact() {
    const [toast, setToast] = useState(false);

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        const formElement = e.target as HTMLFormElement;
        const name = (formElement.elements.namedItem('formName') as HTMLInputElement).value;
        const phone = (formElement.elements.namedItem('formPhone') as HTMLInputElement).value;
        const email = (formElement.elements.namedItem('formEmail') as HTMLInputElement).value;
        const reason = (formElement.elements.namedItem('formReason') as HTMLSelectElement).value || 'General Analysis';
        const date = (formElement.elements.namedItem('formDate') as HTMLInputElement).value;
        const msg = (formElement.elements.namedItem('formMsg') as HTMLTextAreaElement).value;

        router.post(
            '/contact',
            {
                name,
                phone,
                email,
                reason,
                date,
                message: msg,
            },
            {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    setToast(true);
                    setTimeout(() => setToast(false), 3500);

                    formElement.reset();
                },
            },
        );
    };

    const scrollToForm = () => {
        document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <MainLayout scrollToCTA={scrollToForm}>
            <Head title="Contact Us — Shadi Beyond Stars" />

            <div
                className={`toast bg-shadi-gold text-nightshade pointer-events-none fixed bottom-20 left-1/2 z-[500] -translate-x-1/2 px-8 py-3.5 text-[0.62rem] tracking-[0.2em] transition-all duration-400 ${toast ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
            >
                ✦ &nbsp; Message Sent &nbsp; ✦
            </div>

            <main>
                {/* HERO */}
                <section className="bg-nightshade relative flex min-h-[90vh] items-center pt-24">
                    <div className="mx-auto max-w-[1000px] px-[5%] text-center">
                        <div className="text-shadi-gold mb-6 text-[0.62rem] tracking-[0.45em] uppercase before:mr-2 before:content-['✦']">
                            Get in Touch
                        </div>
                        <h1 className="font-goudy text-shadi-gold mb-4 text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-[0.04em]">Let's Connect</h1>
                        <p className="text-shadi-cream/55 mx-auto mb-12 max-w-[600px] text-[1.15rem] leading-[1.8]">
                            Whether you have questions, need guidance, or want to begin your alignment journey — we're here to listen and help.
                        </p>
                    </div>
                </section>

                {/* CONTACT CHANNELS */}
                <section className="bg-nightshade mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center justify-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                            Reach Us
                        </div>
                        <h2 className="font-goudy text-shadi-gold mb-12 text-center text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Multiple Ways to Connect
                        </h2>

                        <div className="bg-shadi-gold/5 mt-8 grid grid-cols-1 gap-[2px] md:grid-cols-2">
                            {[
                                {
                                    icon: '💬',
                                    title: 'WhatsApp',
                                    info: '+91 7065777369',
                                    sub: 'Fastest for quick questions and bookings',
                                    link: 'https://wa.me/917065777369',
                                    linkText: 'Message on WhatsApp',
                                },
                                {
                                    icon: '☎',
                                    title: 'Phone',
                                    info: '+91 7065777369',
                                    sub: 'For detailed conversations · 10am–8pm IST',
                                    link: 'tel:+917065777369',
                                    linkText: 'Call Us',
                                },
                                {
                                    icon: '✉',
                                    title: 'Email',
                                    info: 'astrobeyondstars@gmail.com',
                                    sub: 'For formal inquiries and documentation',
                                    link: 'mailto:astrobeyondstars@gmail.com',
                                    linkText: 'Send Email',
                                },
                                {
                                    icon: '📍',
                                    title: 'Office',
                                    info: 'Delhi, India',
                                    sub: 'For in-person consultations',
                                    link: '#form',
                                    linkText: 'Request Address',
                                },
                            ].map((cc, idx) => (
                                <div key={idx} className="bg-nightshade hover:bg-burgundy/80 p-6 text-center transition-all duration-300 md:p-10">
                                    <div className="mb-4 text-[2rem]">{cc.icon}</div>
                                    <div className="font-goudy text-shadi-gold mb-2 text-[1.1rem] font-semibold">{cc.title}</div>
                                    <div className="text-shadi-gold mb-2 text-[1rem] font-semibold">{cc.info}</div>
                                    <div className="text-shadi-cream/55 mb-6 text-[0.9rem]">{cc.sub}</div>
                                    <a
                                        href={cc.link}
                                        className="font-goudy text-nightshade hover:bg-shadi-gold-light bg-shadi-gold inline-block cursor-pointer px-6 py-[0.6rem] text-[0.6rem] font-semibold tracking-[0.15em] uppercase transition-all duration-500"
                                    >
                                        {cc.linkText}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RESPONSE TIMES */}
                <section className="bg-nightshade/80 px-[5%] py-16 text-center md:py-24">
                    <div className="reveal mx-auto max-w-[900px]">
                        <h2 className="font-goudy text-shadi-gold mb-8 text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                            Response Times
                        </h2>
                        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
                            {[
                                { time: '2h', label: 'WhatsApp usually' },
                                { time: 'Same Day', label: 'Phone calls' },
                                { time: '24h', label: 'Email replies' },
                                { time: 'Priority', label: 'Urgent wedding matters' },
                            ].map((rt, idx) => (
                                <div key={idx} className="bg-burgundy/80 border-shadi-gold/15 border p-8">
                                    <div className="font-goudy text-shadi-gold mb-2 text-[1.8rem]">{rt.time}</div>
                                    <div className="text-shadi-cream/55 text-[0.9rem]">{rt.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT FORM */}
                <section id="form" className="bg-nightshade mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="mb-12 text-center">
                            <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center justify-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                                Send Us a Message
                            </div>
                            <h2 className="font-goudy text-shadi-gold text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                                Get in Touch
                            </h2>
                        </div>

                        <div className="bg-burgundy/80 border-shadi-gold/15 mx-auto my-12 max-w-[600px] border p-6 md:p-12">
                            <form onSubmit={submitForm}>
                                <div className="mb-6">
                                    <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] tracking-[0.2em] uppercase">
                                        Your Name *
                                    </label>
                                    <input
                                        className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 w-full border px-4 py-3 text-[0.95rem] transition-all duration-300 outline-none"
                                        type="text"
                                        required
                                        name="formName"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] tracking-[0.2em] uppercase">
                                        WhatsApp Number *
                                    </label>
                                    <input
                                        className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 w-full border px-4 py-3 text-[0.95rem] transition-all duration-300 outline-none"
                                        type="tel"
                                        required
                                        name="formPhone"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] tracking-[0.2em] uppercase">Email</label>
                                    <input
                                        className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 w-full border px-4 py-3 text-[0.95rem] transition-all duration-300 outline-none"
                                        type="email"
                                        name="formEmail"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] tracking-[0.2em] uppercase">
                                        Ritual or Dosha Concern
                                    </label>
                                    <select
                                        className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 w-full border px-4 py-3 text-[0.95rem] transition-all duration-300 outline-none"
                                        name="formReason"
                                    >
                                        <option className="bg-nightshade" value="">
                                            Select a concern...
                                        </option>
                                        <option className="bg-nightshade" value="Mangal Dosh">
                                            Mangal Dosh
                                        </option>
                                        <option className="bg-nightshade" value="Kaal Sarp Dosh">
                                            Kaal Sarp Dosh
                                        </option>
                                        <option className="bg-nightshade" value="Navgrah Shanti">
                                            Navgrah Shanti
                                        </option>
                                        <option className="bg-nightshade" value="Pitra Dosh">
                                            Pitra Dosh
                                        </option>
                                        <option className="bg-nightshade" value="General Analysis">
                                            General Analysis
                                        </option>
                                    </select>
                                </div>

                                <div className="mb-6">
                                    <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] tracking-[0.2em] uppercase">
                                        Approximate Wedding Date
                                    </label>
                                    <input
                                        className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 placeholder-shadi-cream/30 placeholder-italic w-full border px-4 py-3 text-[0.95rem] transition-all duration-300 outline-none"
                                        type="text"
                                        name="formDate"
                                        placeholder="e.g., June 2026"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] tracking-[0.2em] uppercase">
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 placeholder-shadi-cream/30 placeholder-italic min-h-[80px] w-full resize-y border px-4 py-3 text-[0.95rem] transition-all duration-300 outline-none"
                                        name="formMsg"
                                        placeholder="Tell us about your situation..."
                                    ></textarea>
                                </div>

                                <div className="mb-6 flex items-start gap-3">
                                    <input className="mt-1" type="checkbox" id="formPrivacy" required />
                                    <label className="text-shadi-cream/55 text-[0.9rem] leading-[1.6]" htmlFor="formPrivacy">
                                        I agree to receive updates about Shadi Beyond Stars
                                    </label>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="font-goudy text-nightshade hover:bg-shadi-gold-light bg-shadi-gold w-full cursor-pointer p-[0.9rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-500"
                                    >
                                        Request Analysis →
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="bg-nightshade/80 mx-auto px-[5%] py-16 md:py-24">
                    <div className="reveal">
                        <div className="mb-12 text-center">
                            <div className="text-shadi-gold font-goudy before:bg-shadi-gold/60 mb-5 flex items-center justify-center gap-4 text-[0.6rem] tracking-[0.4em] uppercase before:h-[1px] before:w-[26px] before:content-['']">
                                Common Questions
                            </div>
                            <h2 className="font-goudy text-shadi-gold text-[clamp(1.6rem,3.5vw,3rem)] font-semibold tracking-[0.03em]">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="mx-auto max-w-[700px]">
                            <details className="border-shadi-gold/10 group mb-8 border-b pb-8" open>
                                <summary className="font-goudy text-shadi-gold hover:text-shadi-gold-light mb-4 flex cursor-pointer list-none items-center justify-between text-[1rem] font-semibold transition-colors duration-300 [&::-webkit-details-marker]:hidden">
                                    <span>How do I start?</span>
                                    <span className="text-[0.8rem] transition-transform duration-300 group-open:rotate-180">▼</span>
                                </summary>
                                <div className="text-shadi-cream/55 mt-4 text-[0.95rem] leading-[1.8]">
                                    The easiest way is to WhatsApp us with your situation. Or book a free 30-minute consultation call where we can
                                    understand your needs and recommend next steps. There's no pressure — this is just a discovery conversation.
                                </div>
                            </details>

                            {[
                                {
                                    q: 'Do I need to provide my birth details?',
                                    a: "Yes, for any Kundali analysis. We'll need: your date of birth, exact time of birth (as precise as possible), and place of birth. This is how we create your birth chart.",
                                },
                                {
                                    q: 'How much does it cost to start?',
                                    a: 'A free consultation is available to understand your situation. The first paid service (pre-marriage consultation) is typically ₹5,000–₹8,000. Services range from ₹2,500 for quick consultations to ₹75,000+ for complete wedding ceremonies.',
                                },
                                {
                                    q: 'What if my wedding is soon (within 1–2 months)?',
                                    a: "We can work fast. Emergency alignment packages are available. WhatsApp us immediately — we'll prioritize your case and create a compressed timeline.",
                                },
                                {
                                    q: 'Can services be done remotely?',
                                    a: "Some can (Kundali analysis, consultations, muhurat selection). For rituals, we offer proxy performance, guided remote rituals, or we travel to you. Tell us your situation and we'll find a solution.",
                                },
                                {
                                    q: "What if I'm not sure what I need?",
                                    a: "That's why we offer free consultations. Tell us your situation — a potential relationship challenge, concerns about marriage, questions about your charts — and we'll recommend what you actually need.",
                                },
                                {
                                    q: 'How do I book a consultation?',
                                    a: "WhatsApp us, call, or fill out the contact form above. Mention your preferred date and time, and we'll confirm. Most consultations can be scheduled within a week.",
                                },
                                {
                                    q: "What's the cancellation policy?",
                                    a: "Consultations can be rescheduled with 48 hours notice. For rituals, cancellation terms depend on timing and pandit commitments. We'll clarify this when you book.",
                                },
                                {
                                    q: 'Do you offer payment plans?',
                                    a: 'Yes, for larger services (full wedding ceremonies, multiple rituals). We can discuss flexible payment options. Ask us directly.',
                                },
                                {
                                    q: 'How do I know if your services are real?',
                                    a: "Our community speaks for itself. Read the testimonials from couples we've worked with. You can also ask for references — we're happy to share.",
                                },
                            ].map((faq, idx) => (
                                <details key={idx} className="border-shadi-gold/10 group mb-8 border-b pb-8 last:mb-0 last:border-b-0 last:pb-0">
                                    <summary className="font-goudy text-shadi-gold hover:text-shadi-gold-light mb-4 flex cursor-pointer list-none items-center justify-between text-[1rem] font-semibold transition-colors duration-300 [&::-webkit-details-marker]:hidden">
                                        <span>{faq.q}</span>
                                        <span className="text-[0.8rem] transition-transform duration-300 group-open:rotate-180">▼</span>
                                    </summary>
                                    <div className="text-shadi-cream/55 mt-4 text-[0.95rem] leading-[1.8]">{faq.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    );
}
