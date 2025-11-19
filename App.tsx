import React, { useState } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Catalog from './components/Catalog';
import About from './components/About';
import ContactFooter from './components/ContactFooter';

function App() {
  // Default to Arabic for local market relevance, or English if preferred
  const [lang, setLang] = useState<Language>('ar');
  
  const t = CONTENT[lang];

  return (
    <div 
      dir={lang === 'ar' ? 'rtl' : 'ltr'} 
      className={`min-h-screen flex flex-col ${lang === 'ar' ? 'font-arabic' : ''}`}
    >
      <Header lang={lang} setLang={setLang} t={t.nav} />
      
      <main>
        <Hero t={t.hero} lang={lang} />
        <Features t={t.features} lang={lang} />
        <Catalog t={t.catalog} lang={lang} />
        <About t={t.about} lang={lang} />
      </main>

      <ContactFooter t={t.contact} lang={lang} />
    </div>
  );
}

export default App;
