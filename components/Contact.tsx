
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="contact" className="py-12 md:py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info */}
            <div className="lg:w-2/5 bg-blue-950 p-6 md:p-12 text-white relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <h2 className="text-3xl font-bold mb-4 md:mb-6 relative z-10">{t('contact.title')}</h2>
              <p className="text-slate-300 mb-8 md:mb-10 text-lg relative z-10 font-light">
                {t('contact.subtitle')}
              </p>
              
              <div className="space-y-6 md:space-y-8 relative z-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm me-4 shrink-0">
                    <Phone className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-500 uppercase tracking-widest font-bold mb-1">{t('contact.call')}</p>
                    <p className="text-lg font-display" dir="ltr">{t('contact.phone1')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm me-4 shrink-0">
                    <Mail className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-500 uppercase tracking-widest font-bold mb-1">{t('contact.email')}</p>
                    <p className="text-lg">info@abuac.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm me-4 shrink-0">
                    <MapPin className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-500 uppercase tracking-widest font-bold mb-1">{t('contact.visit')}</p>
                    <p className="text-lg leading-snug">{t('contact.addressLine1')}</p>
                    <p className="text-lg leading-snug">{t('contact.addressLine2')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm me-4 shrink-0">
                    <Clock className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-500 uppercase tracking-widest font-bold mb-1">{t('contact.hours')}</p>
                    <p className="text-lg">{t('contact.hoursDetail')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:w-3/5 p-6 md:p-12">
              <form className="space-y-5 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase mb-2">{t('contact.labels.name')}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all bg-slate-50" placeholder={t('contact.placeholders.name')} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase mb-2">{t('contact.labels.email')}</label>
                    <input type="email" className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all bg-slate-50" placeholder={t('contact.placeholders.email')} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase mb-2">{t('contact.labels.service')}</label>
                  <select className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all bg-slate-50">
                    {(Array.isArray(t('services.items')) ? t('services.items') : []).map((s: any) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase mb-2">{t('contact.labels.message')}</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all bg-slate-50" placeholder={t('contact.placeholders.message')}></textarea>
                </div>
                <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest">
                  {t('contact.labels.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
