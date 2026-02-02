
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <span className="text-3xl font-bold tracking-tighter text-amber-500">ABUAC</span>
            <p className="mt-6 text-gray-400 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 transition-colors"><Instagram size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 uppercase tracking-wider text-amber-500">{t('footer.links')}</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t('nav.services')}</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">{t('nav.projects')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 uppercase tracking-wider text-amber-500">{t('footer.services')}</h4>
            <ul className="space-y-4">
              {t('services.items').slice(0, 5).map((s: any) => (
                <li key={s.id}><a href="#services" className="text-gray-400 hover:text-white transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 uppercase tracking-wider text-amber-500">{t('footer.newsletter')}</h4>
            <p className="text-gray-400 mb-6">{t('footer.newsletterDesc')}</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder={t('contact.placeholders.email')} 
                className="bg-white/5 border border-white/10 rounded-s-md px-4 py-3 outline-none focus:border-amber-500 transition-all w-full"
              />
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-e-md font-bold transition-colors">
                GO
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Abu Arab Contracting W.L.L. {t('footer.rights')}</p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
