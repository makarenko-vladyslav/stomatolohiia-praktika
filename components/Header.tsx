"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    setLocale(locale === "uk" ? "en" : "uk");
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO - TYPOGRAPHIC WORDMARK ONLY */}
        <a href="#" className="flex items-center gap-2 group text-white">
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-tight text-white transition-colors group-hover:text-accent">Praktika</span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-accent leading-none uppercase">клинічна стоматологія</span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-xs font-mono tracking-wider text-white/80 hover:text-white transition-colors">{t("nav.services")}</a>
          <a href="#cases" className="text-xs font-mono tracking-wider text-white/80 hover:text-white transition-colors">{t("nav.cases")}</a>
          <a href="#calculator" className="text-xs font-mono tracking-wider text-white/80 hover:text-white transition-colors">{t("nav.calculator")}</a>
          <a href="#about" className="text-xs font-mono tracking-wider text-white/80 hover:text-white transition-colors">{t("nav.about")}</a>
          <a href="#contact" className="text-xs font-mono tracking-wider text-white/80 hover:text-white transition-colors">{t("nav.contact")}</a>
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={toggleLocale} className="text-[10px] font-bold text-white/80 hover:text-white border border-white/20 rounded-none px-2 py-1 transition-all uppercase tracking-widest font-mono">
            {locale === "uk" ? "EN" : "UA"}
          </button>
          
          <a href="tel:+380507717535" className="text-xs font-bold text-white hover:text-accent transition-colors font-mono">
            +38 050 771 75 35
          </a>

          <a href="#contact" className="bg-accent hover:bg-accent-deep text-white px-5 py-2.5 text-[10px] font-bold tracking-wider uppercase transition-colors font-mono">
            {t("nav.cta")}
          </a>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleLocale} className="text-[10px] font-bold text-white/85 border border-white/20 rounded-none px-2 py-0.5 uppercase font-mono">
            {locale === "uk" ? "EN" : "UA"}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none py-2" aria-label="Toggle Menu">
            <span className="block w-6 h-0.5 bg-white mb-1.5 transition-transform"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* MOBILE FULL-SCREEN OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-primary z-50 flex flex-col justify-between p-8 md:hidden">
          <div className="flex justify-between items-center border-b border-white/10 pb-6">
            <span className="font-display font-bold text-white text-2xl">Praktika</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white text-xs font-mono tracking-widest uppercase py-2">
              Закрити ✕
            </button>
          </div>

          <nav className="flex flex-col gap-8 text-center my-auto">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl text-white/90 hover:text-accent transition-colors">{t("nav.services")}</a>
            <a href="#cases" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl text-white/90 hover:text-accent transition-colors">{t("nav.cases")}</a>
            <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl text-white/90 hover:text-accent transition-colors">{t("nav.calculator")}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl text-white/90 hover:text-accent transition-colors">{t("nav.about")}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl text-white/90 hover:text-accent transition-colors">{t("nav.contact")}</a>
          </nav>

          <div className="flex flex-col gap-6 text-center border-t border-white/10 pt-6">
            <a href="tel:+380507717535" className="text-white font-bold text-lg font-mono">+38 050 771 75 35</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-accent text-white py-4 font-bold tracking-wider uppercase text-xs rounded-none font-mono">
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
