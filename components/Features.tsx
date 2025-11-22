import React from 'react';
import { Sparkles, Heart, Truck } from 'lucide-react';
import { Language } from '../types';

interface FeaturesProps {
  t: {
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  lang: Language;
}

const Features: React.FC<FeaturesProps> = ({ t }) => {
  const features = [
    { icon: Sparkles, title: t.step1Title, desc: t.step1Desc },
    { icon: Heart, title: t.step2Title, desc: t.step2Desc },
    { icon: Truck, title: t.step3Title, desc: t.step3Desc },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="text-center px-4">
                <div className="inline-block p-3 sm:p-4 bg-accent/20 rounded-full mb-4 sm:mb-6">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-primary/70 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;