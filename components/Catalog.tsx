import React from 'react';
import { Translation, Language } from '../types';
import { PRODUCTS } from '../constants';
import { MessageCircle } from 'lucide-react';

interface CatalogProps {
  t: Translation['catalog'];
  lang: Language;
}

const Catalog: React.FC<CatalogProps> = ({ t, lang }) => {
  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent text-lg font-serif italic block mb-2">Made with Love in Menoufia</span>
          <h2 className={`text-4xl font-bold text-primary ${lang === 'ar' ? 'font-sans' : 'font-serif'}`}>
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative shadow-lg rounded-xl overflow-hidden bg-surface hover:shadow-2xl transition-all duration-500 border border-primary/5">
              <div className="aspect-[3/4] overflow-hidden bg-gray-200 relative">
                <img
                  src={product.image}
                  alt="Bouquet"
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <a
                    href="#contact"
                    className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-accent hover:text-primary transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 flex items-center gap-2"
                  >
                    <MessageCircle size={20} />
                    {t.orderBtn}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded-full transition-colors duration-300 font-semibold text-lg">
            {t.custom}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catalog;