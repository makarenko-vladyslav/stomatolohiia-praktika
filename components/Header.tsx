
"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

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

  const menuItems = [
    { name: t('nav.services') as string, href: '#services' },
    { name: t('nav.calculator') as string, href: '#calculator' },
    { name: t('nav.portfolio') as string, href: '#portfolio' },
    { name: t('nav.technology') as string, href: '#technology' },
    { name: t('nav.testimonials') as string, href: '#testimonials' },
    { name: t('nav.faq') as string, href: '#faq' },
    { name: t('nav.contact') as string, href: '#contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-primary/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-display font-bold text-2xl tracking-wide text-white transition-colors duration-300 group-hover:text-accent">
              PRAKTIKA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            {/* Language Switcher */}
            <div className="flex gap-2">
              <button
                onClick={() => setLocale('uk')}
                className={`text-xs font-bold tracking-widest transition-colors ${locale === 'uk' ? 'text-accent' : 'text-white/40 hover:text-white'}`}
              >
                UA
              </button>
              <span className="text-white/20">/</span>
              <button
                onClick={() => setLocale('en')}
                className={`text-xs font-bold tracking-widest transition-colors ${locale === 'en' ? 'text-accent' : 'text-white/40 hover:text-white'}`}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="px-5 py-2.5 bg-accent text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-primary"
            >
              {t('nav.cta') as string}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white focus:outline-none relative w-8 h-8 flex flex-col justify-center gap-1.5"
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2 w-8' : 'w-6 self-end'}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'w-8'}`} />
            <span className={`h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 w-8' : 'w-4 self-end'}`} />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 bg-bg-dark/98 z-40 flex flex-col justify-center px-12 pt-24 pb-8"
          >
            <nav className="flex flex-col gap-6">
              {menuItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display font-semibold text-3xl text-white hover:text-accent transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto border-t border-white/10 pt-8 flex flex-col gap-6">
              {/* Language Switcher Mobile */}
              <div className="flex gap-4">
                <button
                  onClick={() => { setLocale('uk'); setMenuOpen(false); }}
                  className={`text-sm font-bold tracking-widest ${locale === 'uk' ? 'text-accent' : 'text-white/40'}`}
                >
                  УКРАЇНСЬКА
                </button>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => { setLocale('en'); setMenuOpen(false); }}
                  className={`text-sm font-bold tracking-widest ${locale === 'en' ? 'text-accent' : 'text-white/40'}`}
                >
                  ENGLISH
                </button>
              </div>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-full py-4 bg-accent text-white text-center font-bold tracking-widest uppercase text-sm"
              >
                {t('nav.cta') as string}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
