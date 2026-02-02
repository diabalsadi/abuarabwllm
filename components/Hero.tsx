
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
            backgroundImage: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.85)), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pt-20">
        <div className="max-w-4xl">
          <div className="reveal-1">
            <span className="inline-block px-4 py-1.5 bg-amber-500 text-slate-900 text-xs font-black tracking-widest uppercase rounded-full mb-6">
              {t('hero.tag')}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] reveal-2">
            {t('hero.title1')} <br />
            <span className="text-amber-500">{t('hero.title2')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl reveal-3">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse reveal-3">
            <a 
              href="#services" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-lg font-bold text-lg flex items-center justify-center transition-all shadow-2xl hover:scale-105 active:scale-95 group"
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
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-slate-900 text-white px-10 py-5 rounded-lg font-bold text-lg text-center transition-all hover:scale-105 active:scale-95"
            >
              {t('hero.projectsBtn')}
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-amber-500 rounded-full mt-2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
