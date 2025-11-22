import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';

interface ContactFooterProps {
    t: {
        title: string;
        subtitle: string;
        submit: string;
    };
    lang: Language;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ t, lang }) => {
    const handleWhatsAppClick = () => {
        const message = lang === 'ar'
            ? 'مرحباً، أرغب في طلب بوكيه من زهور ليالينا'
            : 'Hello, I would like to order a bouquet from Layalina Flowers';

        const whatsappUrl = `https://wa.me/201557703015?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <footer id="contact" className="bg-primary text-surface py-12 sm:py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{t.title}</h2>
                    <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8">{t.subtitle}</p>

                    <button
                        onClick={handleWhatsAppClick}
                        className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all inline-flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>{t.submit}</span>
                    </button>
                </div>

                <div className="text-center mt-8 sm:mt-12 text-xs sm:text-sm opacity-75">
                    <p>© 2024 {lang === 'ar' ? 'زهور ليالينا' : 'Layalina Flowers'}. {lang === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.</p>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;