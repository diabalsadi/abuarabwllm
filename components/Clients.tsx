
import React from 'react';
import { CLIENTS } from '../constants';
import { useLanguage } from './LanguageContext';

const Clients: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="clients" className="py-12 md:py-24 bg-blue-950 relative overflow-hidden border-t border-blue-900">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-950 via-cyan-500 to-blue-950 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <span className="text-cyan-500 font-bold tracking-[0.3em] text-xs uppercase block mb-3">Trusted Partners</span>
          <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight">{t('clients.title')}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 md:gap-6">
          {CLIENTS.map((client, i) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-4 md:p-6 bg-white/5 rounded-sm border border-white/5 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-500 group text-center backdrop-blur-sm"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-slate-400 group-hover:text-white font-bold text-[10px] md:text-xs tracking-wider leading-tight transition-colors uppercase">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
