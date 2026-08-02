
"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-primary/95 border-b border-white/5 py-4 backdrop-blur-md shadow-lg' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Typographic wordmark with small initial letter as emblem */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-accent flex items-center justify-center font-display font-extrabold text-primary text-base transition-transform group-hover:scale-105">
            P
          </div>
          <span className="font-display font-extrabold text-xl tracking-wide text-white">
            PRAKTIKA
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-white/80">
          <a href="#about" className="hover:text-accent transition-colors">{t('nav.about')}</a>
          <a href="#services" className="hover:text-accent transition-colors">{t('nav.services')}</a>
          <a href="#calculator" className="hover:text-accent transition-colors">{t('nav.calculator')}</a>
          <a href="#cases" className="hover:text-accent transition-colors">{t('nav.cases')}</a>
          <a href="#faq" className="hover:text-accent transition-colors">{t('nav.faq')}</a>
        </nav>

        {/* Call-to-actions */}
        <div className="flex items-center gap-6">
          {/* Lang Switch */}
          <div className="flex items-center gap-2 border border-white/10 rounded px-2 py-1 text-2xs font-bold text-white/80 uppercase">
            <button 
              onClick={() => setLocale('uk')} 
              className={`hover:text-accent ${locale === 'uk' ? 'text-accent' : ''}`}
            >
              UA
            </button>
            <span className="text-white/20">|</span>
            <button 
              onClick={() => setLocale('en')} 
              className={`hover:text-accent ${locale === 'en' ? 'text-accent' : ''}`}
            >
              EN
            </button>
          </div>

          {/* Quick contact and Book CTA */}
          <a 
            href={`tel:${t('common.phone')}`} 
            className="hidden lg:block text-sm font-semibold text-white hover:text-accent transition-colors"
          >
            {t('common.phone')}
          </a>

          <a 
            href="#contact" 
            className="hidden sm:inline-flex bg-accent text-primary hover:bg-white hover:text-primary transition-all duration-300 font-bold text-2xs uppercase tracking-widest px-5 py-2.5 rounded shadow-md shadow-accent/10"
          >
            {t('common.cta')}
          </a>
        </div>
      </div>
    </header>
  );
}
