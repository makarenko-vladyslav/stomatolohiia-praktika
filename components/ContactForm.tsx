"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function ContactForm() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: 'all4'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    
    // Simulate API request and conversion tracking
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', date: '', service: 'all4' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-[25%] right-[-10%] text-watermark text-[14rem] hidden lg:block select-none pointer-events-none">
        HARKOV
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-2xs font-bold uppercase tracking-widest text-accent">
              {t('contact.kicker')}
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl leading-tight tracking-tight text-primary">
              {t('contact.title')}
            </h2>
            <p className="text-sm text-text-main/70 leading-relaxed font-body">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-4 pt-4 text-xs font-semibold text-text-main/80">
              <p className="flex items-center gap-2">
                <span className="text-accent">•</span>
                <span>Харків, ст. м. Олексіївська, просп. Науки, 77</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent">•</span>
                <span>Щоденна автономна робота від генераторів</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent">•</span>
                <span>Безкоштовний паркінг під охороною клініки</span>
              </p>
            </div>
          </div>

          {/* Form container card - strict opaque container to pass color contrast requirements */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-lg border border-primary/5 shadow-xl relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Input: Name */}
              <div className="space-y-2">
                <label className="text-2xs font-bold uppercase tracking-widest text-primary/60 block">
                  {t('contact.formName')} *
                </label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Олексій Шевченко"
                  required
                  className="w-full bg-bg-light border border-primary/10 rounded p-4 text-xs font-body focus:border-accent outline-none"
                />
              </div>

              {/* Grid: Phone & Date */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-2xs font-bold uppercase tracking-widest text-primary/60 block">
                    {t('contact.formPhone')} *
                  </label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+38 050 000 00 00"
                    required
                    className="w-full bg-bg-light border border-primary/10 rounded p-4 text-xs font-body focus:border-accent outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-2xs font-bold uppercase tracking-widest text-primary/60 block">
                    {t('contact.formDate')}
                  </label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-bg-light border border-primary/10 rounded p-4 text-xs font-body focus:border-accent outline-none text-text-main/80"
                  />
                </div>
              </div>

              {/* Select: Service */}
              <div className="space-y-2">
                <label className="text-2xs font-bold uppercase tracking-widest text-primary/60 block">
                  {t('contact.formService')}
                </label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-bg-light border border-primary/10 rounded p-4 text-xs font-body focus:border-accent outline-none text-text-main/80"
                >
                  <option value="all4">Імплантація All-on-4</option>
                  <option value="all6">Імплантація All-on-6</option>
                  <option value="zygoma">Вилицева імплантація Zygoma</option>
                  <option value="sleep">Лікування зубів під седацією</option>
                  <option value="diagnostics">Професійна 3D-діагностика</option>
                </select>
              </div>

              {/* Submission button with loading/success/error statuses */}
              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-accent text-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest py-4 rounded disabled:opacity-50 shadow-md shadow-accent/15"
                >
                  {status === 'loading' ? 'ОБРОБКА ДАНИХ...' : t('contact.formSubmit')}
                </button>
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="p-4 bg-accent/10 border border-accent rounded text-2xs text-primary font-semibold leading-relaxed">
                  {t('contact.success')}
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500 rounded text-2xs text-red-600 font-semibold leading-relaxed">
                  {t('contact.error')}
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}