
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine navbar style based on scroll or open state
  const isSolid = scrolled || isOpen;

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      isSolid 
        ? 'bg-white shadow-lg py-3' 
        : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')} 
            className="flex-shrink-0 flex items-center group relative z-[101]"
          >
            {/* Rebranded Logo: Navy ABU + Cyan AC */}
            <span className={`text-2xl md:text-3xl font-black tracking-tighter transition-colors duration-300 ${isSolid ? 'text-blue-950' : 'text-white'}`}>
              ABU<span className="text-cyan-500">AC W.L.L</span>
            </span>
            <span className={`ms-3 text-[10px] font-bold uppercase tracking-[0.2em] hidden lg:block transition-colors duration-300 ${isSolid ? 'text-slate-500' : 'text-slate-300 opacity-90'}`}>
              {t('nav.companySub')}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-cyan-500 relative group py-2 ${
                  isSolid ? 'text-slate-700' : 'text-white'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <div className={`h-6 w-px hidden lg:block ${isSolid ? 'bg-gray-200' : 'bg-gray-300/30'}`}></div>

            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className={`flex items-center text-xs font-black border-2 rounded-lg px-4 py-1.5 transition-all uppercase tracking-tighter ${
                isSolid 
                  ? 'border-blue-950/10 text-blue-950 hover:bg-blue-50' 
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              <Globe className="w-3.5 h-3.5 me-2" />
              {language === 'en' ? 'عربي' : 'English'}
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center"
            >
              <Phone className="w-3.5 h-3.5 me-2" />
              {t('nav.contactBtn')}
            </a>
          </div>

          {/* Mobile menu controls */}
          <div className="md:hidden flex items-center space-x-3 rtl:space-x-reverse relative z-[101]">
             <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className={`${isSolid ? 'text-blue-950 border-blue-950/20' : 'text-white border-white/30'} text-xs font-black border-2 rounded-lg px-2.5 py-1 uppercase`}
            >
              {language === 'en' ? 'ع' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${isSolid ? 'text-blue-950 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-[90] transition-all duration-300 ease-in-out md:hidden flex flex-col pt-20 px-6 ${
        isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
      }`}>
        <div className="flex flex-col h-full overflow-y-auto pb-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-4 text-lg font-black text-slate-900 border-b border-gray-100 flex justify-between items-center active:bg-gray-50 transition-colors"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
              <ChevronRight className={`text-cyan-500 ${language === 'ar' ? 'rotate-180' : ''}`} size={20} />
            </a>
          ))}
          <div className="mt-6">
             <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full bg-blue-950 text-white p-4 rounded-xl text-lg font-black flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              <Phone className="me-3" size={20} />
              {t('nav.contactBtn')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
