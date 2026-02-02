
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info */}
            <div className="lg:w-2/5 bg-blue-900 p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
              <p className="text-blue-100 mb-10 text-lg">
                {t('contact.subtitle')}
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-lg me-4">
                    <Phone className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300 uppercase tracking-widest font-bold">{t('contact.call')}</p>
                    <p className="text-lg" dir="ltr">+974 4400 0000</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-lg me-4">
                    <Mail className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300 uppercase tracking-widest font-bold">{t('contact.email')}</p>
                    <p className="text-lg">info@abuac.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-lg me-4">
                    <MapPin className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300 uppercase tracking-widest font-bold">{t('contact.visit')}</p>
                    <p className="text-lg">{language === 'ar' ? 'طريق سلوى، الدوحة، قطر' : 'Salwa Road, Doha, Qatar'}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-lg me-4">
                    <Clock className="text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-300 uppercase tracking-widest font-bold">{t('contact.hours')}</p>
                    <p className="text-lg">{t('contact.hoursDetail')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:w-3/5 p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase mb-2">{t('contact.labels.name')}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder={t('contact.placeholders.name')} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase mb-2">{t('contact.labels.email')}</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder={t('contact.placeholders.email')} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">{t('contact.labels.service')}</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all">
                    {(Array.isArray(t('services.items')) ? t('services.items') : []).map((s: any) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 uppercase mb-2">{t('contact.labels.message')}</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder={t('contact.placeholders.message')}></textarea>
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0">
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
