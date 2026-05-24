import React from 'react';
import { router } from '@inertiajs/react';

interface ContactFormProps {
    buttonText?: string;
    onSuccess?: () => void;
}

export const ContactForm = ({ buttonText = "Request Analysis →", onSuccess }: ContactFormProps) => {
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        
        const formElement = e.target as HTMLFormElement;
        const name = (formElement.elements.namedItem('formName') as HTMLInputElement).value;
        const phone = (formElement.elements.namedItem('formPhone') as HTMLInputElement).value;
        const email = (formElement.elements.namedItem('formEmail') as HTMLInputElement).value;
        const reason = (formElement.elements.namedItem('formReason') as HTMLSelectElement).value || 'General Analysis';
        const date = (formElement.elements.namedItem('formDate') as HTMLInputElement).value;
        const msg = (formElement.elements.namedItem('formMsg') as HTMLTextAreaElement).value;
        
        router.post('/contact', {
            name,
            phone,
            email,
            reason,
            date,
            message: msg
        }, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                // Clear the form fields
                formElement.reset();
                
                if (onSuccess) {
                    onSuccess();
                }
            }
        });
    };

    return (
        <form onSubmit={submitForm} className="w-full text-left">
            <div className="mb-6">
                <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] uppercase tracking-[0.2em]">Your Name *</label>
                <input className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 w-full border px-4 py-3 text-[0.95rem] outline-none transition-all duration-300" type="text" required name="formName" />
            </div>
            
            <div className="mb-6">
                <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] uppercase tracking-[0.2em]">WhatsApp Number *</label>
                <input className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 w-full border px-4 py-3 text-[0.95rem] outline-none transition-all duration-300" type="tel" required name="formPhone" />
            </div>

            <div className="mb-6">
                <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] uppercase tracking-[0.2em]">Email</label>
                <input className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 w-full border px-4 py-3 text-[0.95rem] outline-none transition-all duration-300" type="email" name="formEmail" />
            </div>
            
            <div className="mb-6">
                <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] uppercase tracking-[0.2em]">Ritual or Dosha Concern</label>
                <select className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 w-full border px-4 py-3 text-[0.95rem] outline-none transition-all duration-300" name="formReason">
                    <option className="bg-nightshade" value="">Select a concern...</option>
                    <option className="bg-nightshade" value="Mangal Dosh">Mangal Dosh</option>
                    <option className="bg-nightshade" value="Kaal Sarp Dosh">Kaal Sarp Dosh</option>
                    <option className="bg-nightshade" value="Navgrah Shanti">Navgrah Shanti</option>
                    <option className="bg-nightshade" value="Pitra Dosh">Pitra Dosh</option>
                    <option className="bg-nightshade" value="General Analysis">General Analysis</option>
                </select>
            </div>

            <div className="mb-6">
                <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] uppercase tracking-[0.2em]">Approximate Wedding Date</label>
                <input className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 w-full border px-4 py-3 text-[0.95rem] outline-none transition-all duration-300 placeholder-shadi-cream/30 placeholder-italic" type="text" name="formDate" placeholder="e.g., June 2026" />
            </div>
            
            <div className="mb-6">
                <label className="font-goudy text-shadi-gold mb-2 block text-[0.6rem] uppercase tracking-[0.2em]">Message (Optional)</label>
                <textarea className="font-garamond bg-shadi-gold/5 border-shadi-gold/22 text-shadi-cream focus:border-shadi-gold/65 focus:bg-shadi-gold/10 min-h-[80px] w-full resize-y border px-4 py-3 text-[0.95rem] outline-none transition-all duration-300 placeholder-shadi-cream/30 placeholder-italic" name="formMsg" placeholder="Tell us about your situation..."></textarea>
            </div>
            
            <div className="mt-8">
                <button type="submit" className="font-goudy text-nightshade hover:bg-shadi-gold-light w-full cursor-pointer bg-shadi-gold p-[0.9rem] text-[0.62rem] font-semibold tracking-[0.2em] uppercase transition-all duration-500">
                    {buttonText}
                </button>
                <div className="font-garamond text-shadi-gold/70 mt-4 text-center text-[0.8rem] italic">
                    ✦ We'll reach out within 24 hours
                </div>
            </div>
        </form>
    );
};
