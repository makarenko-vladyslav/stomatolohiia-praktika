
"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLang = () => {
    setLocale(locale === "uk" ? "en" : "uk");
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-primary/95 backdrop-blur-md border-b border-border-subtle/20 py-3 shadow-lg" 
        : "bg-transparent py-5"
    }`}>
      <div className="container-custom flex items-center justify-between">
        {/* Typographic Wordmark ONLY — No generic logomark symbols */}
        <a href="#hero" className="flex flex-col select-none">
          <span className="font-display font-bold text-lg tracking-wider text-white">
            PRAKTIKA
          </span>
          <span className="font-body text-[0.625rem] text-accent tracking-[0.2em] uppercase font-bold">
            стоматологія
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-body text-xs text-white/90 hover:text-accent tracking-wider uppercase font-medium">
            {t("nav.about") as string}
          </a>
          <a href="#services" className="font-body text-xs text-white/90 hover:text-accent tracking-wider uppercase font-medium">
            {t("nav.services") as string}
          </a>
          <a href="#implantology" className="font-body text-xs text-white/90 hover:text-accent tracking-wider uppercase font-medium">
            {t("nav.implantology") as string}
          </a>
          <a href="#portfolio" className="font-body text-xs text-white/90 hover:text-accent tracking-wider uppercase font-medium">
            {t("nav.portfolio") as string}
          </a>
          <a href="#faq" className="font-body text-xs text-white/90 hover:text-accent tracking-wider uppercase font-medium">
            {t("nav.faq") as string}
          </a>
        </nav>

        {/* Actions & Language Switcher */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={changeLang}
            className="font-body text-xs font-bold text-white hover:text-accent uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1.5 rounded-md"
            aria-label="Toggle language"
          >
            {locale === "uk" ? "EN" : "UA"}
          </button>
          
          <a 
            href="tel:+380507717535"
            className="hidden lg:flex font-body text-xs font-bold text-accent hover:text-white transition-colors"
          >
            +38 050 771 75 35
          </a>

          <a 
            href="#booking"
            className="hidden sm:inline-flex bg-accent hover:bg-accent-hover text-white font-body text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow-lg shadow-accent/20 transition-all duration-300"
          >
            {t("common.book") as string}
          </a>
        </div>
      </div>
    </header>
  );
}
