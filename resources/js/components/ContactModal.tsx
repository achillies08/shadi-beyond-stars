import { useEffect, useState } from 'react';

import { ContactForm } from './common/ContactForm';

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [toast, setToast] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-contact-modal', handleOpen);
        return () => window.removeEventListener('open-contact-modal', handleOpen);
    }, []);

    const closeMenu = () => setIsOpen(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1c0a0a]/90 px-[5%] py-10 backdrop-blur-md">
            <div
                className={`toast bg-shadi-gold text-nightshade pointer-events-none fixed top-10 left-1/2 z-[1000] -translate-x-1/2 px-8 py-3.5 text-[0.62rem] tracking-[0.2em] transition-all duration-400 ${toast ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}
            >
                ✦ &nbsp; Message Sent &nbsp; ✦
            </div>

            <div className="bg-burgundy border-shadi-gold/20 relative max-h-[90vh] w-full max-w-[500px] overflow-y-auto border p-8 shadow-2xl md:p-10">
                <button
                    onClick={closeMenu}
                    className="text-shadi-gold hover:text-shadi-gold-light absolute top-6 right-6 cursor-pointer text-2xl transition-colors"
                >
                    ✕
                </button>

                <div className="mb-8">
                    <h2 className="font-goudy text-shadi-gold text-xl font-semibold tracking-[0.05em] uppercase">Get Your Ritual Analysis</h2>
                </div>

                <ContactForm
                    onSuccess={() => {
                        setToast(true);
                        setTimeout(() => setToast(false), 3500);
                        setTimeout(() => setIsOpen(false), 1000);
                    }}
                />
            </div>
        </div>
    );
}
