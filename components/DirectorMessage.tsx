
import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const DirectorMessage: React.FC = () => {
    const { t, isRTL } = useLanguage();

    return (
        <section id="director-message" className="py-16 md:py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Director Image Block */}
                    <div className="lg:w-2/5 w-full">
                        <div className="relative group">
                            {/* Decorative background elements */}
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl transition-all duration-500 group-hover:bg-cyan-500/20" />
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-900/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-blue-900/20" />

                            {/* Image Container */}
                            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-b-8 border-cyan-500 transform transition-transform duration-500 group-hover:scale-[1.02]">
                                <img
                                    src="/ceo.jpeg"
                                    alt="Mohammad Abu Arab - General Director"
                                    className="w-full h-auto object-cover aspect-[4/5]"
                                />

                                {/* Floating Badge */}
                                <div className={`absolute bottom-6 ${isRTL ? 'left-6' : 'right-6'} bg-blue-950 text-white p-4 shadow-xl border-s-4 border-cyan-400 backdrop-blur-sm bg-opacity-90`}>
                                    <p className="text-xs uppercase tracking-widest font-bold text-cyan-400 mb-1">{t('director.role')}</p>
                                    <p className="text-lg font-bold">{t('director.name')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Message Content Block */}
                    <div className="lg:w-3/5 w-full">
                        <div className="relative">
                            {/* Large quote icon in background */}
                            <div className={`absolute -top-10 ${isRTL ? '-right-4' : '-left-4'} text-slate-200 opacity-50`}>
                                <Quote size={80} />
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-8 leading-tight">
                                    {t('director.title')}
                                    <span className="block h-1.5 w-24 bg-cyan-500 mt-4" />
                                </h2>

                                <div className="space-y-6 text-slate-700">
                                    <p className="text-xl md:text-2xl font-semibold leading-relaxed text-blue-900 italic">
                                        "{t('director.message1')}"
                                    </p>

                                    <p className="text-lg leading-relaxed text-slate-600 font-light">
                                        {t('director.message2')}
                                    </p>

                                    <div className="pt-4">
                                        <p className="text-xl font-medium text-slate-800">
                                            {t('director.message3')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DirectorMessage;
