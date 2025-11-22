import React from 'react';
import { Translation, Language } from '../types';
import { MapPin } from 'lucide-react';

interface HeroProps {
    t: Translation['hero'];
    lang: Language;
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
    return (
        <section id="home" className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/WhatsApp Image 2025-11-18 at 10.36.02 PM.jpeg"
                    alt="Beautiful flowers"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${lang === 'ar' ? 'font-sans' : 'font-serif'} tracking-wide text-accent`}>
                        {t.title}
                    </h1>
                    <p className={`text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed ${lang === 'ar' ? 'font-sans' : 'font-serif'}`}>
                        {t.subtitle}
                    </p>

                    <div className="flex items-center justify-center gap-2 mb-10 text-accent/90 font-medium">
                        <MapPin size={20} />
                        <span>{t.location}</span>
                    </div>

                    <a
                        href="#contact"
                        className="inline-block bg-accent text-primary hover:bg-white transition-all duration-300 px-8 py-4 rounded-md font-bold text-lg shadow-lg transform hover:-translate-y-1"
                    >
                        {t.cta}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;