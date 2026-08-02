"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Contact() {
  const { t } = useLocale();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setName('');
      setPhone('');
      setDate('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative gradient sphere */}
      <div className="absolute -left-1/4 -bottom-1/4 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Structured Details with Monospace tags */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Layer 1: Kicker */}
              <span className="text-[10px] tracking-[0.25em] text-accent font-bold uppercase block mb-3 font-mono">
                {t('contact.kicker') as string}
              </span>

              {/* Layer 2: Invitation Heading */}
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
                Запишіться на прийом з томографією щелепи
              </h2>

              {/* Layer 3: Lede */}
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-12">
                {t('contact.subtitle') as string}
              </p>
            </div>

            {/* Layer 4: Structured Info Blocks & Structured Hours Mini-Table */}
            <div className="flex flex-col gap-8 border-t border-white/10 pt-8 font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="text-[9px] tracking-widest uppercase text-accent font-bold block mb-1">
                    {t('contact.phoneLabel') as string}
                  </span>
                  <a href="tel:+380507717535" className="font-display font-bold text-lg text-white hover:text-accent transition-all">
                    +38 050 771 75 35
                  </a>
                  <span className="block text-[10px] text-white/40 mt-1">Текстовий запис у Viber / Telegram</span>
                </div>
                <div>
                  <span className="text-[9px] tracking-widest uppercase text-accent font-bold block mb-1">
                    {t('contact.addressLabel') as string}
                  </span>
                  <address className="not-italic font-display text-white text-base leading-tight">
                    Харків, проспект Науки, 77
                  </address>
                  <span className="block text-[10px] text-white/40 mt-1">Метро 23 Серпня • Власний паркінг</span>
                </div>
              </div>

              {/* Structured Hours Mini-Table */}
              <div className="border-t border-white/5 pt-6">
                <span className="text-[9px] tracking-widest uppercase text-accent font-bold block mb-3">
                  {t('contact.hoursLabel') as string}
                </span>
                <div className="flex flex-col gap-2 text-xs text-white/70 max-w-xs">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Понеділок — П'ятниця</span>
                    <span className="tabular-nums font-bold text-white">09:00 — 20:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span>Субота</span>
                    <span className="tabular-nums font-bold text-white">09:00 — 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Неділя</span>
                    <span className="text-accent uppercase font-bold tracking-wider">Черговий за викликом</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-primary/95 border border-white/10 p-8 sm:p-12 shadow-xl relative overflow-hidden z-10">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-8 pb-4 border-b border-white/10">
                {t('contact.formTitle') as string}
              </h3>

              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="text-accent text-3xl font-bold mb-4">✓</div>
                  <p className="text-white font-display font-semibold text-lg">{t('contact.success') as string}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/50 font-bold mb-2 font-mono">
                      {t('contact.name') as string} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={status === 'loading'}
                      className="w-full p-4 border border-white/10 bg-primary/40 text-white focus:outline-none focus:border-accent text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/50 font-bold mb-2 font-mono">
                      {t('contact.phone') as string} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+38 050 --- -- --"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={status === 'loading'}
                      className="w-full p-4 border border-white/10 bg-primary/40 text-white focus:outline-none focus:border-accent text-xs font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/50 font-bold mb-2 font-mono">
                      {t('contact.date') as string}
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      disabled={status === 'loading'}
                      className="w-full p-4 border border-white/10 bg-primary/40 text-white focus:outline-none focus:border-accent text-xs font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-accent hover:bg-white hover:text-primary text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 mt-4 disabled:opacity-50 cursor-pointer font-mono"
                  >
                    {status === 'loading' ? (t('contact.loading') as string) : (t('contact.submit') as string)}
                  </button>

                  <span className="block text-[10px] text-white/40 text-center mt-2 font-mono">
                    * Натискаючи кнопку, ви погоджуєтесь на обробку клінічних даних.
                  </span>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Live Google Maps Embed frame below layout */}
        <div className="mt-16 border border-white/10 h-[300px] w-full grayscale contrast-[1.2] opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <iframe 
            src="https://www.google.com/maps?q=Харків, проспект Науки, 77&output=embed" 
            className="w-full h-full border-0"
            allowFullScreen={false} 
            loading="lazy"
            title="Google Maps Location"
          />
        </div>

      </div>
    </section>
  );
}
