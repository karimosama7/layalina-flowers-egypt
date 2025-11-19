export type Language = 'en' | 'ar';

export interface Translation {
  nav: {
    home: string;
    catalog: string;
    about: string;
    contact: string;
    language: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    location: string;
  };
  features: {
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  catalog: {
    title: string;
    wedding: string;
    engagement: string;
    gifts: string;
    custom: string;
    orderBtn: string;
  };
  about: {
    title: string;
    desc: string;
    quote: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    address: string;
    phone: string;
    date: string;
    occasion: string;
    notes: string;
    imageNote: string;
    submit: string;
  };
}

export interface Product {
  id: string;
  image: string;
  category: 'wedding' | 'engagement' | 'gift';
  titleEn: string;
  titleAr: string;
}