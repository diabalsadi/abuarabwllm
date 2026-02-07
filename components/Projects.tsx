
import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const projectsData = t('featuredProjects.items');
  // Use data from constants if translations are empty/default
  const items = Array.isArray(projectsData) && projectsData.length > 0 ? projectsData : PROJECTS;

  return (
    <section id="projects" className="py-12 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-6xl font-black text-blue-950 mb-3 md:mb-6 uppercase tracking-tight">
              {t('featuredProjects.title')}
            </h2>
            <div className="w-16 h-1 bg-cyan-500 mb-4 md:mb-8"></div>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light">
              {t('featuredProjects.subtitle')}
            </p>
          </div>
          <Link to="/our-projects">
            <button className="bg-blue-950 text-white px-8 py-3 md:px-10 md:py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-cyan-600 transition-all shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1 whitespace-nowrap">
              {t('projects.viewAll')}
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((project: any, index: number) => {
            // Fallback to PROJECTS constant data if translation object doesn't have image
            const image = project.image || PROJECTS[index]?.image || `https://picsum.photos/seed/${index}/800/1200`;
            const title = project.title || PROJECTS[index]?.title;
            const category = project.category || PROJECTS[index]?.category;
            const location = project.location || PROJECTS[index]?.location;

            return (
              <Link
                key={index}
                to="/our-projects"
                className="group relative overflow-hidden rounded-sm bg-slate-100 h-[22rem] md:h-[30rem] shadow-lg hover:shadow-2xl transition-all duration-700 block"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute top-6 right-6 md:top-8 md:right-8">
                  <div className="bg-cyan-500 p-3 md:p-4 rounded-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div className="absolute bottom-0 start-0 p-6 md:p-10 text-white w-full">
                  <span className="inline-block px-3 py-1 bg-cyan-500/90 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-6 rounded-sm backdrop-blur-sm">
                    {category}
                  </span>
                  <h3 className="text-xl md:text-4xl font-bold mb-2 md:mb-3 leading-tight font-display">{title}</h3>
                  <div className="flex items-center text-slate-300 font-medium tracking-wide text-xs md:text-sm">
                    <MapPin size={16} className="text-cyan-400 me-2" />
                    {location}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
