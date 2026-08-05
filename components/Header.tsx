"use client";

import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: t('nav.services') as string },
    { href: '#calculator', label: t('nav.calculator') as string },
    { href: '#zygoma', label: t('nav.zygoma') as string },
    { href: '#lab', label: t('nav.lab') as string },
    { href: '#cases', label: t('nav.cases') as string },
    { href: '#reviews', label: t('nav.reviews') as string },
    { href: '#faq', label: t('nav.faq') as string },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md py-3 border-b border-border-light/10 shadow-lg'
            : 'bg-gradient-to-b from-primary-dark/90 via-primary-dark/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Typographic Wordmark Logo — NO icon box */}
          <a href="#" className="flex flex-col group">
            <span className="font-display font-bold text-xl leading-none tracking-wider text-bg-light group-hover:text-accent transition-colors">
              {t('brand.name') as string}
            </span>
            <span className="text-[9px] tracking-[0.2em] text-accent uppercase font-body mt-1 font-semibold">
              {t('brand.subline') as string}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-wider font-body font-medium text-bg-light/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+380507717535"
              className="text-xs font-body font-semibold text-bg-light hover:text-accent transition-colors flex items-center gap-2 tabular-nums"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              +38 050 771 75 35
            </a>
            <a
              href="#booking"
              className="px-5 py-2.5 rounded text-xs font-body uppercase font-bold tracking-wider bg-accent text-primary-dark hover:bg-accent-hover transition-all shadow-md hover:shadow-accent/20"
            >
              {t('nav.bookBtn') as string}
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-bg-light focus:outline-none"
            aria-label="Перемикач меню"
          >
            <span className="text-xs uppercase font-body font-bold tracking-widest text-accent">
              {mobileMenuOpen ? 'ЗАКРИТИ ✕' : 'МЕНЮ ☰'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-primary-dark/98 pt-24 px-6 pb-12 flex flex-col justify-between lg:hidden"
          >
            <div className="flex flex-col gap-5 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-semibold text-2xl text-bg-light hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-center border-t border-border-light/10 pt-6">
              <a
                href="tel:+380507717535"
                className="text-lg font-body font-bold text-accent tabular-nums"
              >
                +38 050 771 75 35
              </a>
              <p className="text-xs text-bg-light/60 font-body">м. Харків, пр. Науки, 77</p>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded text-sm font-body font-bold uppercase tracking-wider bg-accent text-primary-dark"
              >
                {t('nav.bookBtn') as string}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
