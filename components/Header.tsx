"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLocale(locale === 'uk' ? 'en' : 'uk');
  };

  const navItems = ['services', 'calculator', 'beforeAfter', 'about', 'faq', 'contact'];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Typographic wordmark + minimal logo */}
        <a href="#" className="flex items-center gap-3 text-white group" aria-label="Praktika Dentist Logo">
          <svg className="w-8 h-8 text-accent group-hover:scale-105 transition-transform duration-300" viewBox="0 0 32 32" fill="none">
            <path d="M9 11C9 18.5 13 23 16 23C19 23 23 18.5 23 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="16" cy="11" r="2" fill="currentColor"/>
          </svg>
          <span className="font-display font-bold text-[1.5rem] tracking-tight">Praktika</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-[0.875rem] tracking-wider text-white/80 hover:text-accent transition-colors duration-200 uppercase font-medium"
            >
              {t(`nav.${item}`)}
            </a>
          ))}
        </nav>

        {/* Dynamic CTAs & i18n Switcher */}
        <div className="hidden lg:flex items-center gap-6">
          <button 
            onClick={toggleLanguage} 
            className="text-[0.875rem] font-mono border border-white/20 text-white/90 hover:border-accent hover:text-accent px-3 py-1 rounded transition-all cursor-pointer"
            aria-label="Switch language"
          >
            {locale.toUpperCase()}
          </button>
          
          <a 
            href="tel:+380507717535" 
            className="text-white hover:text-accent font-mono text-[0.9rem] transition-colors"
          >
            +38 050 771 75 35
          </a>

          <a 
            href="#contact" 
            className="bg-accent text-white hover:bg-accent/90 px-5 py-2.5 rounded text-[0.875rem] uppercase font-mono tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_hsl(162_90%_36%/_0.3)]"
          >
            {t('nav.cta')}
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={toggleLanguage} 
            className="text-[0.875rem] font-mono border border-white/20 text-white px-2.5 py-0.5 rounded cursor-pointer"
          >
            {locale.toUpperCase()}
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen Overlay Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-primary z-40 flex flex-col justify-center items-center gap-8 lg:hidden animate-fade-in">
          <button 
            onClick={() => setMenuOpen(false)} 
            className="absolute top-6 right-6 text-white"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              onClick={() => setMenuOpen(false)}
              className="text-[1.5rem] uppercase font-display text-white hover:text-accent transition-all duration-200"
            >
              {t(`nav.${item}`)}
            </a>
          ))}

          <a 
            href="tel:+380507717535" 
            className="text-[1.25rem] text-white font-mono mt-4"
          >
            +38 050 771 75 35
          </a>

          <a 
            href="#contact" 
            onClick={() => setMenuOpen(false)}
            className="bg-accent text-white px-8 py-3.5 rounded text-[1rem] uppercase font-mono tracking-wider"
          >
            {t('nav.cta')}
          </a>
        </div>
      )}
    </header>
  );
}
