"use client";

import { useState, type FormEvent } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from './motion';

export default function ContactForm() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="booking" className="py-20 bg-primary text-bg-light relative overflow-hidden border-b border-border-light/10">
      
      {/* Background Watermark */}
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] font-display text-[16vw] font-bold uppercase text-bg-light whitespace-nowrap">
        APPOINTMENT
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Invitation Heading, Lede & Hours Mini-Table */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <span className="text-xs font-body uppercase tracking-[0.2em] text-accent font-bold">
                {t('booking.kicker') as string}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-semibold text-bg-light mt-2 leading-snug">
                {t('booking.title') as string}
              </h2>
              <p className="text-xs sm:text-sm font-body text-bg-light/70 mt-3 leading-relaxed">
                {t('booking.subtitle') as string}
              </p>
            </Reveal>

            {/* Direct Telephone Text Link */}
            <Reveal className="p-4 rounded bg-primary-dark/60 border border-border-light/10">
              <span className="text-[10px] font-body uppercase tracking-wider text-bg-light/60 block mb-1">
                ПОРЯДОК БРОНЮВАННЯ ТЕЛЕФОНОМ
              </span>
              <a href="tel:+380507717535" className="text-lg font-body font-bold text-accent hover:underline tabular-nums">
                +38 050 771 75 35
              </a>
            </Reveal>

            {/* Structured Hours Mini-Table */}
            <Reveal className="space-y-2 font-body text-xs border-t border-border-light/10 pt-4">
              <span className="text-[10px] uppercase text-accent font-bold tracking-wider block">
                ГРАФІК ПРИЙОМУ КЛІНІКИ
              </span>
              <div className="flex justify-between py-1 border-b border-border-light/10">
                <span className="text-bg-light/80">Понеділок — П'ятниця</span>
                <span className="text-accent font-bold tabular-nums">09:00 - 20:00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-border-light/10">
                <span className="text-bg-light/80">Субота</span>
                <span className="text-accent font-bold tabular-nums">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-bg-light/80">Неділя</span>
                <span className="text-text-muted">За попереднім записом</span>
              </div>
            </Reveal>

            {/* Address & Map Line */}
            <Reveal className="text-xs font-body text-bg-light/70 space-y-1">
              <p>м. Харків, проспект Науки, 77 (ст.м. Олексіївська)</p>
              <p className="text-[10px] text-accent">*Власна автопарковка біля входу клініки</p>
            </Reveal>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal className="bg-primary-dark p-6 sm:p-10 rounded-2xl border border-border-light/15 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 text-accent font-bold text-xl mx-auto flex items-center justify-center border border-accent">
                    ✓
                  </div>
                  <p className="font-body font-bold text-sm text-bg-light">
                    {t('booking.form.successMessage') as string}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-body font-bold uppercase tracking-wider text-bg-light/90 mb-2">
                      Ваше ім'я *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t('booking.form.namePlaceholder') as string}
                      className="w-full px-4 py-3 rounded bg-primary border border-border-light/20 text-xs font-body text-bg-light focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body font-bold uppercase tracking-wider text-bg-light/90 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t('booking.form.phonePlaceholder') as string}
                      className="w-full px-4 py-3 rounded bg-primary border border-border-light/20 text-xs font-body text-bg-light focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body font-bold uppercase tracking-wider text-bg-light/90 mb-2">
                      {t('booking.form.serviceSelectLabel') as string}
                    </label>
                    <select className="w-full px-4 py-3 rounded bg-primary border border-border-light/20 text-xs font-body text-bg-light focus:border-accent focus:outline-none">
                      <option>Консультація та 3D КТ-діагностика</option>
                      <option>Імплантація All-on-4 / All-on-6</option>
                      <option>Скулова імплантація Zygoma</option>
                      <option>Лікування під медикаментозним сном</option>
                      <option>Протезування цирконієм / вінірами</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded font-body font-bold text-xs uppercase tracking-widest bg-accent text-primary-dark hover:bg-accent-hover transition-colors shadow-md disabled:opacity-50 mt-2"
                  >
                    {loading ? 'Надсилання...' : (t('booking.form.submitBtn') as string)}
                  </button>

                  <p className="text-[10px] font-body text-bg-light/50 text-center pt-2">
                    *Консультація включає первинний огляд, аналіз 3D-знімка та складання кошторису
                  </p>
                </form>
              )}
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}
