import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/components/LanguageContext';
import SharedHero from '@/components/shared/Hero';
import Footer from '@/components/Footer';
import { PROJECTS } from '@/constants';
import { Project } from '@/types';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 10;

const ProjectRoute = () => {
    const { t } = useLanguage();
    const [currentPage, setCurrentPage] = useState(1);
    const [statusFilter, setStatusFilter] = useState<'all' | 'ongoing' | 'finished'>('all');

    // Get translated project data, fallback to PROJECTS constant
    const projectsData = t('projects.items');
    const translatedProjects = Array.isArray(projectsData) && projectsData.length > 0 ? projectsData : [];

    // Merge translated data with PROJECTS constant (for images and status)
    const allProjects = PROJECTS.map((project, index) => ({
        ...project,
        title: translatedProjects[index]?.title || project.title,
        category: translatedProjects[index]?.category || project.category,
        location: translatedProjects[index]?.location || project.location,
        description: translatedProjects[index]?.description || project.description,
        date: translatedProjects[index]?.date || project.date,
    }));

    // Filter projects based on status
    const filteredProjects = useMemo(() => {
        if (statusFilter === 'all') return allProjects;
        return allProjects.filter(project => project.status === statusFilter);
    }, [statusFilter, allProjects]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    // Reset to page 1 when filter changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [statusFilter]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col transition-all duration-300">
            <main className="flex-grow">
                <SharedHero hero={t('ourProjects.hero')} imgSrc={'/heroImage.png'} />

                <section className="py-12 md:py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Filter Section */}
                        <div className="mb-8 md:mb-12 flex justify-between items-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-blue-950">
                                {t('ourProjects.filterLabel')}
                            </h2>
                            <div className="relative">
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value as 'all' | 'ongoing' | 'finished')}
                                    className="appearance-none bg-white border-2 border-blue-950 text-blue-950 px-6 py-3 pe-12 rounded-sm font-bold text-sm uppercase tracking-wider cursor-pointer hover:bg-blue-950 hover:text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                >
                                    <option value="all">{t('ourProjects.allProjects')}</option>
                                    <option value="ongoing">{t('ourProjects.ongoing')}</option>
                                    <option value="finished">{t('ourProjects.finished')}</option>
                                </select>
                                <ChevronRight className="absolute end-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-current" />
                            </div>
                        </div>

                        {/* Projects Grid */}
                        {currentProjects.length > 0 ? (
                            <div className="space-y-6 md:space-y-8">
                                {currentProjects.map((project: Project, index: number) => (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                                            {/* Image Section */}
                                            <div className="md:col-span-2 relative h-64 md:h-80 overflow-hidden">
                                                <img
                                                    src={project.image.startsWith('http') ? project.image : `/${project.image}`}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />

                                                {/* Status Badge */}
                                                {project.status && (
                                                    <div className="absolute top-6 start-6">
                                                        <span
                                                            className={`inline-block px-4 py-2 text-white text-xs font-black tracking-widest uppercase rounded-sm shadow-lg ${project.status === 'ongoing'
                                                                ? 'bg-cyan-500 shadow-cyan-500/30'
                                                                : 'bg-green-600 shadow-green-600/30'
                                                                }`}
                                                        >
                                                            {project.status === 'ongoing' ? t('ourProjects.statusOngoing') : t('ourProjects.statusFinished')}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content Section */}
                                            <div className="md:col-span-3 p-6 md:p-10 flex flex-col justify-center">
                                                <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-600 text-xs font-bold tracking-widest uppercase mb-4 rounded-sm w-fit">
                                                    {project.category}
                                                </span>

                                                <h3 className="text-2xl md:text-4xl font-bold text-blue-950 mb-4 leading-tight group-hover:text-cyan-600 transition-colors">
                                                    {project.title}
                                                </h3>

                                                {project.description && (
                                                    <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                                                        {project.description}
                                                    </p>
                                                )}

                                                <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
                                                    <div className="flex items-center text-slate-700">
                                                        <MapPin size={18} className="text-cyan-500 me-2" />
                                                        <span className="font-medium">{project.location}</span>
                                                    </div>

                                                    {/* {project.date && (
                                                        <div className="flex items-center text-slate-700">
                                                            <Calendar size={18} className="text-cyan-500 me-2" />
                                                            <span className="font-medium">{project.date}</span>
                                                        </div>
                                                    )} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-2xl text-slate-500">{t('ourProjects.noProjects')}</p>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-12 flex justify-center items-center gap-4">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="flex items-center gap-2 px-6 py-3 bg-blue-950 text-white rounded-sm font-bold text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
                                >
                                    <ChevronLeft size={20} />
                                    {t('ourProjects.pagination.previous')}
                                </button>

                                <div className="flex items-center gap-2">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`w-10 h-10 rounded-sm font-bold text-sm transition-all ${currentPage === page
                                                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                                                : 'bg-white text-blue-950 border-2 border-blue-950 hover:bg-blue-950 hover:text-white'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="flex items-center gap-2 px-6 py-3 bg-blue-950 text-white rounded-sm font-bold text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1"
                                >
                                    {t('ourProjects.pagination.next')}
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectRoute;