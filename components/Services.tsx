
import React from 'react';
import { ICON_MAP } from '../constants';
import { useLanguage } from './LanguageContext';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const servicesItems = t('services.items');
  const items = Array.isArray(servicesItems) ? servicesItems : [];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black text-blue-900 mb-4 md:mb-6 uppercase tracking-tight">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full mb-6 md:mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {items.map((service: any) => (
            <div 
              key={service.id} 
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:bg-amber-500/10 transition-colors duration-500"></div>
              
              <div className="text-amber-500 mb-6 md:mb-8 bg-amber-50 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
                {ICON_MAP[service.id] || <div className="w-8 h-8" />}
              </div>
              
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed mb-6 md:mb-8 text-base">
                {service.description}
              </p>
              
              <a href="#contact" className="inline-flex items-center text-blue-900 font-black text-sm uppercase tracking-widest hover:text-amber-500 transition-colors">
                {t('services.inquire')}
                <span className="ms-3 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                  {language === 'en' ? '→' : '←'}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
