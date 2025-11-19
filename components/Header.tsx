import React, { useState } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';
import { Language, Translation } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translation['nav'];
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { label: t.home, href: '#home' },
    { label: t.catalog, href: '#catalog' },
    { label: t.about, href: '#about' },
  ];

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <Flower2 className="w-8 h-8 text-accent" />
          <span className={`text-2xl font-bold ${lang === 'ar' ? 'font-sans' : 'font-serif'}`}>
            {lang === 'ar' ? 'ليالينا' : 'Layalina'}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className={`hover:text-accent transition-colors text-lg ${lang === 'ar' ? 'font-sans' : 'font-serif'}`}
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={toggleLang}
            className="border border-accent px-3 py-1 rounded-full hover:bg-accent hover:text-primary transition-all text-sm"
          >
            {t.language}
          </button>
          <a 
            href="#contact"
            className="bg-accent text-primary px-5 py-2 rounded-md font-semibold hover:bg-white transition-colors"
          >
            {t.contact}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-primary/95 flex flex-col items-center justify-center gap-8 md:hidden z-40">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-2xl hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => {
                toggleLang();
                setIsOpen(false);
              }}
              className="border border-accent px-6 py-2 rounded-full text-xl"
            >
              {t.language}
            </button>
             <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-accent text-primary px-8 py-3 rounded-md font-bold text-xl"
              >
                {t.contact}
              </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
