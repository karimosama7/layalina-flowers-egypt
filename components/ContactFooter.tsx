import React, { useState, FormEvent } from 'react';
import { Translation, Language } from '../types';
import { Facebook, Instagram, Phone, MapPin, Send, Info } from 'lucide-react';

interface ContactFooterProps {
  t: Translation['contact'];
  lang: Language;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ t, lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    date: '',
    occasion: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const text = `
*New Order Request | طلب جديد*
---------------------------
*Name:* ${formData.name}
*Address:* ${formData.address}
*Phone:* ${formData.phone}
*Date:* ${formData.date}
*Occasion:* ${formData.occasion}
*Notes:* ${formData.notes}
---------------------------
    `.trim();

    const encodedText = encodeURIComponent(text);
    const phoneNumber = '201098748884'; 
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
            {/* Order Form */}
            <div className="flex-1 bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className={`text-3xl font-bold mb-2 text-accent ${lang === 'ar' ? 'font-sans' : 'font-serif'}`}>{t.title}</h2>
                <p className="text-gray-300 mb-6 text-sm">{t.subtitle}</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs mb-1 text-accent uppercase tracking-wider font-bold">{t.name}</label>
                            <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full bg-white/10 border border-white/20 rounded p-3 focus:outline-none focus:border-accent text-white placeholder-gray-500/50" />
                        </div>
                        <div>
                            <label className="block text-xs mb-1 text-accent uppercase tracking-wider font-bold">{t.phone}</label>
                            <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full bg-white/10 border border-white/20 rounded p-3 focus:outline-none focus:border-accent text-white placeholder-gray-500/50" />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-xs mb-1 text-accent uppercase tracking-wider font-bold">{t.address}</label>
                        <input required name="address" value={formData.address} onChange={handleChange} type="text" className="w-full bg-white/10 border border-white/20 rounded p-3 focus:outline-none focus:border-accent text-white placeholder-gray-500/50" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div>
                            <label className="block text-xs mb-1 text-accent uppercase tracking-wider font-bold">{t.date}</label>
                            <input name="date" value={formData.date} onChange={handleChange} type="date" className="w-full bg-white/10 border border-white/20 rounded p-3 focus:outline-none focus:border-accent text-white placeholder-gray-500/50" />
                        </div>
                        <div>
                            <label className="block text-xs mb-1 text-accent uppercase tracking-wider font-bold">{t.occasion}</label>
                            <input name="occasion" value={formData.occasion} onChange={handleChange} type="text" className="w-full bg-white/10 border border-white/20 rounded p-3 focus:outline-none focus:border-accent text-white placeholder-gray-500/50" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs mb-1 text-accent uppercase tracking-wider font-bold">{t.notes}</label>
                        <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="w-full bg-white/10 border border-white/20 rounded p-3 focus:outline-none focus:border-accent text-white placeholder-gray-500/50"></textarea>
                    </div>
                    
                    {/* Note about sending images */}
                    <div className="flex gap-3 text-accent text-sm bg-accent/5 p-3 rounded border border-accent/20">
                        <Info size={20} className="shrink-0" />
                        <p className="leading-tight opacity-90">{t.imageNote}</p>
                    </div>

                    <button type="submit" className="w-full bg-green-600 text-white font-bold py-4 rounded hover:bg-green-500 transition-colors flex items-center justify-center gap-2 shadow-lg">
                        <Send size={20} />
                        {t.submit}
                    </button>
                </form>
            </div>

            {/* Info & Social */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h2 className={`text-4xl font-bold mb-6 text-white ${lang === 'ar' ? 'font-sans' : 'font-serif'}`}>
                        {lang === 'ar' ? 'ليالينا للزهور' : 'Layalina Flowers'}
                    </h2>
                    <p className="text-gray-300 mb-8 leading-relaxed text-lg border-l-4 border-accent pl-4">
                        {lang === 'ar' 
                            ? 'نصنع الذكريات بلمسة من الطبيعة. من قويسنا لكل مكان في مصر.' 
                            : 'Creating memories with a touch of nature. From Quesna to everywhere in Egypt.'}
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 text-gray-200">
                            <div className="bg-accent/20 p-2 rounded-full text-accent"><MapPin /></div>
                            <div>
                                <h4 className="font-bold text-accent">{lang === 'ar' ? 'العنوان' : 'Address'}</h4>
                                <span>{lang === 'ar' ? 'قويسنا، المنوفية، مصر' : 'Quesna, Menoufia, Egypt'}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 text-gray-200">
                             <div className="bg-accent/20 p-2 rounded-full text-accent"><Phone /></div>
                            <div>
                                <h4 className="font-bold text-accent">{lang === 'ar' ? 'اتصل بنا' : 'Call Us'}</h4>
                                <span dir="ltr" className="font-mono text-lg">01098748884</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h4 className="text-accent font-bold mb-4 uppercase tracking-widest text-sm">Follow Us</h4>
                    <div className="flex gap-6">
                        <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-primary transition-all transform hover:-translate-y-1"><Facebook size={24} /></a>
                        <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-primary transition-all transform hover:-translate-y-1"><Instagram size={24} /></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Layalina Flowers. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default ContactFooter;