
import React from 'react';
import { Target, Shield, Users } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-12 md:py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="lg:w-1/2 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Changed image to look more like the PDF industrial vibe */}
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
                alt="Construction Site in Qatar" 
                className="rounded-sm shadow-2xl relative z-10 w-full"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl -z-0" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-900/10 rounded-full blur-3xl -z-0" />
              
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-blue-950 text-white p-6 md:p-8 shadow-2xl z-20 hidden sm:block rtl:-left-10 rtl:right-auto border-t-4 border-cyan-500">
                <span className="text-xs uppercase font-bold tracking-widest text-cyan-400 block mb-1">Established</span>
                <span className="text-4xl md:text-5xl font-black block text-white">2025</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
            <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-4 md:mb-8 relative inline-block">
              {t('about.title')}
              <span className="absolute -bottom-3 start-0 w-16 h-1 bg-cyan-500" />
            </h2>
            <p className="text-slate-600 text-lg md:text-xl mb-6 md:mb-10 leading-relaxed font-light">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-1 gap-5 md:gap-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-blue-50 p-4 rounded-sm text-blue-900 group-hover:bg-blue-950 group-hover:text-white transition-all duration-300">
                  <Target size={28} />
                </div>
                <div className="ms-5">
                  <h4 className="text-xl font-bold text-slate-800 mb-1">{t('about.missionTitle')}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">{t('about.missionDesc')}</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-cyan-50 p-4 rounded-sm text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <Shield size={28} />
                </div>
                <div className="ms-5">
                  <h4 className="text-xl font-bold text-slate-800 mb-1">{t('about.qualityTitle')}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">{t('about.qualityDesc')}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 bg-slate-100 p-4 rounded-sm text-slate-600 group-hover:bg-slate-600 group-hover:text-white transition-all duration-300">
                  <Users size={28} />
                </div>
                <div className="ms-5">
                  <h4 className="text-xl font-bold text-slate-800 mb-1">{t('about.expertTitle')}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm">{t('about.expertDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
