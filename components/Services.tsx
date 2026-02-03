
import React from 'react';
import { ICON_MAP } from '../constants';
import { useLanguage } from './LanguageContext';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const servicesItems = t('services.items');
  const items = Array.isArray(servicesItems) ? servicesItems : [];

  return (
    <section id="services" className="py-12 md:py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black text-blue-950 mb-3 md:mb-6 uppercase tracking-tight">
            {t('services.title')}
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4 md:mb-8"></div>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {items.map((service: any) => (
            <div 
              key={service.id} 
              className="bg-white p-6 md:p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 border-transparent hover:border-cyan-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-4 -mt-4 group-hover:bg-cyan-50 transition-colors duration-500"></div>
              
              <div className="text-cyan-600 mb-5 md:mb-8 bg-cyan-50 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-sm group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                {ICON_MAP[service.id] || <div className="w-8 h-8" />}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-blue-950 mb-3 group-hover:text-cyan-600 transition-colors font-display">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed mb-5 md:mb-8 text-sm">
                {service.description}
              </p>
              
              <a href="#contact" className="inline-flex items-center text-blue-950 font-bold text-xs uppercase tracking-widest hover:text-cyan-600 transition-colors border-b border-gray-200 pb-1 hover:border-cyan-600">
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
