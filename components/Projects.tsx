
import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const projectsData = t('projects.items');
  const items = Array.isArray(projectsData) ? projectsData : [];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-6xl font-black text-blue-900 mb-4 md:mb-6 uppercase tracking-tight">
              {t('projects.title')}
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full mb-6 md:mb-8"></div>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>
          <button className="bg-blue-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-500 transition-all shadow-2xl hover:scale-105 active:scale-95 whitespace-nowrap">
            {t('projects.viewAll')}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {items.map((project: any, index: number) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-slate-100 h-[28rem] md:h-[35rem] shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              <img 
                src={PROJECTS[index]?.image || `https://picsum.photos/seed/${index}/800/1200`} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              <div className="absolute bottom-0 start-0 p-8 md:p-12 text-white w-full">
                <span className="inline-block px-4 py-1.5 bg-amber-500 text-slate-900 text-[10px] font-black tracking-[0.2em] uppercase mb-4 md:mb-6 rounded-full shadow-lg">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-5xl font-black mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                <div className="flex items-center text-gray-300 font-bold tracking-wide">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center me-3">
                    <MapPin size={16} className="text-amber-500" />
                  </div>
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
