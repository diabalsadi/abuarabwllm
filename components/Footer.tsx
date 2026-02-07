
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MessageCircleCodeIcon } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            {/* Logo in Footer */}
            <span className="text-3xl font-black tracking-tighter text-white">
              ABU<span className="text-cyan-500">AC</span>
            </span>
            <p className="mt-6 text-slate-400 leading-relaxed text-sm">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse mt-8">
              <a href="https://www.linkedin.com/company/abuac-w-l-l/posts/?feedView=all" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-cyan-600 transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-cyan-600 transition-colors"><Facebook size={18} /></a>
              <a href="https://wa.me/97455052843" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-cyan-600 transition-colors"><img src="whatsappIcon.svg" /></a> {/** TODO: Instead of Twitter use WhatsApp*/}
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-cyan-600 transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-cyan-500">{t('footer.links')}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">{t('nav.services')}</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-white transition-colors">{t('nav.projects')}</a></li>
              <li><a href="/careers" className="text-slate-400 hover:text-white transition-colors">{t('nav.careers')}</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-cyan-500">{t('footer.services')}</h4>
            <ul className="space-y-4 text-sm">
              {t('services.items').slice(0, 5).map((s: any) => (
                <li key={s.id}><a href="#services" className="text-slate-400 hover:text-white transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-cyan-500">{t('footer.newsletter')}</h4>
            <p className="text-slate-400 mb-6 text-sm">{t('footer.newsletterDesc')}</p>
            <form className="flex">
              <input
                type="email"
                placeholder={t('contact.placeholders.email')}
                className="bg-white/5 border border-white/10 rounded-s-sm px-4 py-3 outline-none focus:border-cyan-500 transition-all w-full text-sm"
              />
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-e-sm font-bold transition-colors">
                GO
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Abu Arab Contracting W.L.L. {t('footer.rights')}</p>
          {/* <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
