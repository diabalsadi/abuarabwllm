
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  // Initialize service from first item if available
  React.useEffect(() => {
    const services = t('services.items');
    if (Array.isArray(services) && services.length > 0 && !formData.service) {
      setFormData(prev => ({ ...prev, service: services[0].title }));
    }
  }, [t, formData.service]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: formData.service, message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info */}
            <div className="lg:w-2/5 bg-blue-950 p-6 md:p-12 text-white relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

              <h2 className="text-3xl font-bold mb-4 md:mb-6 relative z-10">{t('contact.title')}</h2>
              <p className="text-slate-300 mb-8 md:mb-10 text-lg relative z-10 font-light">
                {t('contact.subtitle')}
              </p>

              <div className="space-y-6 md:space-y-8 relative z-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm me-4 shrink-0">
                    <Phone className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-500 uppercase tracking-widest font-bold mb-1">{t('contact.call')}</p>
                    <p className="text-lg font-display" dir="ltr">{t('contact.phone1')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm me-4 shrink-0">
                    <Mail className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-500 uppercase tracking-widest font-bold mb-1">{t('contact.email')}</p>
                    <p className="text-lg">info@abuac.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm me-4 shrink-0">
                    <MapPin className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-500 uppercase tracking-widest font-bold mb-1">{t('contact.visit')}</p>
                    <p className="text-lg leading-snug">{t('contact.addressLine1')}</p>
                    <p className="text-lg leading-snug">{t('contact.addressLine2')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm me-4 shrink-0">
                    <Clock className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-cyan-500 uppercase tracking-widest font-bold mb-1">{t('contact.hours')}</p>
                    <p className="text-lg">{t('contact.hoursDetail')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-3/5 p-6 md:p-12">
              <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase mb-2">{t('contact.labels.name')}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all bg-slate-50"
                      placeholder={t('contact.placeholders.name')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase mb-2">{t('contact.labels.email')}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all bg-slate-50"
                      placeholder={t('contact.placeholders.email')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase mb-2">{t('contact.labels.service')}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all bg-slate-50"
                  >
                    {(Array.isArray(t('services.items')) ? t('services.items') : []).map((s: any) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase mb-2">{t('contact.labels.message')}</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all bg-slate-50"
                    placeholder={t('contact.placeholders.message')}
                  ></textarea>
                </div>

                <button
                  disabled={status === 'loading'}
                  className={`w-full flex items-center justify-center space-x-2 ${status === 'loading' ? 'bg-slate-400 cursor-not-allowed' : 'bg-cyan-600 hover:bg-cyan-700'
                    } text-white font-bold py-4 rounded-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest`}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{t('contact.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t('contact.labels.send')}</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-sm border border-green-200 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">{t('contact.success')}</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-sm border border-red-200 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">{t('contact.error')}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
