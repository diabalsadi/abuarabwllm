
import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <div id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Animated Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-kenburns"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.85)), url("/public/heroImage.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-20">
        <div className="max-w-4xl">
          <div className="reveal-1">
            <span className="inline-block px-4 py-1.5 bg-cyan-500 text-white text-xs font-black tracking-widest uppercase rounded-sm mb-6 shadow-lg shadow-cyan-500/20">
              {t('hero.tag')}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] reveal-2 text-white">
            {t('hero.title1')} <br />
            <span className="text-cyan-400">{t('hero.title2')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light max-w-2xl reveal-3">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse reveal-3">
            <a 
              href="#services" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-5 rounded-sm font-bold text-lg flex items-center justify-center transition-all shadow-2xl hover:scale-105 active:scale-95 group border-b-4 border-cyan-700 hover:border-cyan-800"
            >
              {t('hero.servicesBtn')}
              {language === 'en' ? (
                <ChevronRight className="ms-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              ) : (
                <ChevronLeft className="ms-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              )}
            </a>
            <a 
              href="#projects" 
              className="bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white hover:text-blue-950 text-white px-10 py-5 rounded-sm font-bold text-lg text-center transition-all hover:scale-105 active:scale-95"
            >
              {t('hero.projectsBtn')}
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cyan-500 rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
