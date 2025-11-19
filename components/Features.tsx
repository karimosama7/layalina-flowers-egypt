import React from 'react';
import { Translation, Language } from '../types';
import { Search, Flower, Truck } from 'lucide-react';

interface FeaturesProps {
  t: Translation['features'];
  lang: Language;
}

const Features: React.FC<FeaturesProps> = ({ t, lang }) => {
  const isRTL = lang === 'ar';

  return (
    <section className="py-20 bg-surface text-primary">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row justify-between gap-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          
          {/* Step 1 */}
          <div className="flex-1 text-center p-6 hover:bg-white hover:shadow-xl rounded-lg transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Search size={32} />
            </div>
            <h3 className={`text-xl font-bold mb-4 ${isRTL ? 'font-sans' : 'font-serif'}`}>{t.step1Title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.step1Desc}</p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 text-center p-6 hover:bg-white hover:shadow-xl rounded-lg transition-all duration-300">
             <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Flower size={32} />
            </div>
            <h3 className={`text-xl font-bold mb-4 ${isRTL ? 'font-sans' : 'font-serif'}`}>{t.step2Title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.step2Desc}</p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 text-center p-6 hover:bg-white hover:shadow-xl rounded-lg transition-all duration-300">
             <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Truck size={32} />
            </div>
            <h3 className={`text-xl font-bold mb-4 ${isRTL ? 'font-sans' : 'font-serif'}`}>{t.step3Title}</h3>
            <p className="text-gray-600 leading-relaxed">{t.step3Desc}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
