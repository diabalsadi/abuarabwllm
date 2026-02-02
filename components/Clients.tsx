
import React from 'react';
import { CLIENTS } from '../constants';
import { useLanguage } from './LanguageContext';

const Clients: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 md:py-24 bg-blue-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-amber-500 font-black tracking-[0.3em] text-xs uppercase block mb-4">Our Partners</span>
          <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight">{t('clients.title')}</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
          {CLIENTS.map((client, i) => (
            <div 
              key={client.name} 
              className="flex items-center justify-center p-6 md:p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-500 group text-center backdrop-blur-sm hover:-translate-y-2"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-gray-400 group-hover:text-amber-500 font-black text-xs md:text-base tracking-widest leading-tight transition-colors uppercase">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background circle */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Clients;
