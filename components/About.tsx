import React from 'react';
import { Translation, Language } from '../types';

interface AboutProps {
  t: Translation['about'];
  lang: Language;
}

const About: React.FC<AboutProps> = ({ t, lang }) => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div className="flex-1 relative">
            <div className="relative z-10">
              <img
                src="/images/bridal bouquet بوكيه عروسة.jfif"
                alt="Florist arranging flowers"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto md:mx-0"
              />
            </div>
            {/* Decorative Background Box */}
            <div className={`absolute top-10 -bottom-10 w-full max-w-md bg-accent/20 -z-0 rounded-lg ${lang === 'ar' ? 'left-10' : 'right-10 md:-right-10'}`}></div>
          </div>

          <div className="flex-1 text-center md:text-start">
            <h2 className={`text-4xl font-bold text-primary mb-6 ${lang === 'ar' ? 'font-sans' : 'font-serif'}`}>
              {t.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t.desc}
            </p>
            <div className="border-l-4 border-accent pl-6 py-2 italic text-gray-500">
              <p className={lang === 'ar' ? 'pr-6 pl-0 border-l-0 border-r-4 border-accent' : ''}>"{t.quote}"</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
