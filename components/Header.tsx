
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

  const navItems = [
    { label: t("nav.services") as string, href: "#services" },
    { label: t("nav.cases") as string, href: "#cases" },
    { label: t("nav.tech") as string, href: "#tech" },
    { label: t("nav.calculator") as string, href: "#calculator" },
    { label: t("nav.team") as string, href: "#team" },
    { label: t("nav.faq") as string, href: "#faq" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of fixed header
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-bg-light/95 backdrop-blur-md border-b border-border-subtle py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo - Typographic wordmark only */}
          <a href="#" className="flex items-center gap-1 group" onClick={(e) => handleNavClick(e, "#")}>
            <span className={`font-display font-bold text-xl tracking-wider transition-colors uppercase ${scrolled ? "text-primary" : "text-white"}`}>
              Praktika
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-[11px] uppercase tracking-wider font-bold transition-colors ${
                  scrolled ? "text-primary/80 hover:text-accent" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Call CTA */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex border border-border-subtle/20 rounded overflow-hidden font-mono">
              <button
                onClick={() => setLocale("uk")}
                className={`px-2.5 py-1 text-[10px] font-bold transition-colors ${
                  locale === "uk" ? "bg-accent text-white" : scrolled ? "text-primary/60 hover:text-primary" : "text-white/60 hover:text-white"
                }`}
              >
                UA
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-2.5 py-1 text-[10px] font-bold transition-colors ${
                  locale === "en" ? "bg-accent text-white" : scrolled ? "text-primary/60 hover:text-primary" : "text-white/60 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={`tel:${t("common.phone")}`}
              className={`text-[11px] font-mono font-bold tracking-wider hover:opacity-80 transition-opacity ${
                scrolled ? "text-accent" : "text-white"
              }`}
            >
              {t("common.phone") as string}
            </a>

            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, "#booking")}
              className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded text-[10px] font-bold uppercase tracking-widest transition-colors glow-accent"
            >
              {t("common.cta") as string}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-current"
            aria-label="Toggle menu"
          >
            <svg className={`w-6 h-6 ${scrolled ? "text-primary" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg-dark flex flex-col justify-between p-8 pt-28">
          <div className="flex flex-col gap-6">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-display font-semibold text-2xl text-white hover:text-accent transition-colors block border-b border-white/5 pb-4"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-6 border-t border-white/10 pt-6">
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-[10px] tracking-widest uppercase">LANGUAGE</span>
              <div className="flex gap-2">
                <button
                  onClick={() => { setLocale("uk"); setMobileMenuOpen(false); }}
                  className={`px-3 py-1.5 rounded text-xs font-bold ${locale === "uk" ? "bg-accent text-white" : "text-white/60"}`}
                >
                  УКР
                </button>
                <button
                  onClick={() => { setLocale("en"); setMobileMenuOpen(false); }}
                  className={`px-3 py-1.5 rounded text-xs font-bold ${locale === "en" ? "bg-accent text-white" : "text-white/60"}`}
                >
                  ENG
                </button>
              </div>
            </div>

            <a
              href={`tel:${t("common.phone")}`}
              className="text-lg font-mono font-bold text-accent tracking-wider block text-center py-3 border border-accent/20 rounded"
            >
              {t("common.phone") as string}
            </a>

            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, "#booking")}
              className="bg-accent text-white py-4 rounded font-bold uppercase tracking-widest text-[11px] text-center glow-accent"
            >
              {t("common.cta") as string}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
