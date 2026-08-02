"use client";
import { useLocale } from "@/lib/i18n";
import { useState, useEffect } from "react";

export default function Hero() {
  const { t, locale } = useLocale();
  const [rotation, setRotation] = useState(0);

  // Rotate text-seal dynamically on idle scroll
  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Cinematic Video Loop & Gradient Overlay Layers */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-25"
          poster="https://images.pexels.com/videos/6192977/bank-card-calculation-caries-caries-removal-6192977.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
        >
          <source src="https://videos.pexels.com/video-files/6192977/6192977-hd_1280_720_30fps.mp4" type="video/mp4" />
        </video>
        {/* Dark Surgical Teal Overlay (V3 Ground Choreography) */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/70 to-primary/98 mix-blend-multiply" />
      </div>

      {/* High-end precision technical blueprint grid instead of noisy watermark */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="50%" cy="50%" r="300" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent" strokeDasharray="5,5" />
          <circle cx="50%" cy="50%" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" strokeDasharray="2,2" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="1.5" className="text-white" strokeDasharray="4,4" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="currentColor" strokeWidth="1.5" className="text-white" strokeDasharray="4,4" />
        </svg>
      </div>

      <div className="container-custom relative z-10 pt-32 pb-16 flex flex-col justify-between min-h-[calc(100svh-4rem)]">
        
        {/* Layer 1: Top-aligned metadata branding with strict NAP indicators */}
        <div className="flex justify-between items-start text-white/40 border-b border-white/10 pb-4 mb-8">
          <p className="font-body text-[0.625rem] uppercase tracking-[0.3em] font-medium">
            {t("hero.kicker") as string}
          </p>
          <p className="font-body text-[0.625rem] uppercase tracking-[0.3em] text-right font-medium">
            EST. 2018 — ХАРКІВ, ЦЕНТР
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column content Block */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display font-medium text-white tracking-tight leading-[1.05] text-[clamp(2.5rem,6.5vw,5.5rem)] text-wrap">
              {t("hero.title") as string}{" "}
              <span className="font-display italic text-accent font-normal underline decoration-accent/30 decoration-wavy underline-offset-[0.25rem]">
                {t("hero.italicWord") as string}
              </span>
            </h1>

            <p className="font-body text-white/80 max-w-2xl text-[clamp(0.85rem,1.4vw,1.05rem)] leading-relaxed font-normal">
              {t("hero.sub") as string}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#booking" 
                className="bg-accent hover:bg-accent-hover text-white font-body text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 rounded transition-all duration-300 shadow-2xl shadow-accent/20"
              >
                {t("common.cta") as string}
              </a>
              <a 
                href="#services" 
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 font-body text-xs uppercase tracking-[0.2em] font-bold px-8 py-4 rounded transition-all duration-300"
              >
                {t("nav.services") as string}
              </a>
            </div>
          </div>

          {/* Right Column: Mini-copy column + Rotating text seal (Layer 7 & 11) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center relative select-none">
            {/* Spinning Text Seal Widget */}
            <div 
              className="relative w-40 h-40 flex items-center justify-center"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-accent/80">
                <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="font-body text-[0.38rem] tracking-[0.22em] uppercase font-bold fill-current">
                  <textPath href="#circlePath" startOffset="0%">
                    {locale === "uk" 
                      ? "• ПРАКТИКА • СТОМАТОЛОГІЯ • ХАРКІВ • ДІАГНОСТИКА " 
                      : "• PRAKTIKA • DENTAL CLINIC • KHARKIV • CLINIC "}
                  </textPath>
                </text>
              </svg>
              {/* Inner core badge with numeric rating */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-body text-xs font-bold text-white tracking-widest">★ 4.9</span>
                <span className="font-body text-[0.5rem] text-white/50 uppercase tracking-widest">GOOGLE</span>
              </div>
            </div>

            {/* Micro details / Flanking columns info */}
            <div className="mt-8 text-center lg:text-right max-w-xs space-y-2">
              <p className="font-body text-[0.625rem] text-accent font-bold uppercase tracking-[0.2em]">
                {locale === "uk" ? "ЛІЦЕНЗІЯ МОЗ" : "MOH LICENSE"}
              </p>
              <p className="font-body text-[0.65rem] text-white/50 leading-relaxed uppercase">
                {locale === "uk" 
                  ? "СЕРІЯ АЕ №571344 — ДЕРЖАВНІ СТАНДАРТИ ЯКОСТІ"
                  : "SERIES AE NO. 571344 — HIGHEST MEDICAL COMPLIANCE"}
              </p>
            </div>
          </div>

        </div>

        {/* Layer 6: 3-item horizontal Meta Strip with Hairline separators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/10 text-white/80">
          <div className="flex items-center space-x-4">
            <span className="font-body text-2xl font-bold text-accent tracking-tighter">
              {t("hero.stat1_num") as string}
            </span>
            <span className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-white/60 leading-tight">
              {t("hero.stat1_lbl") as string}
            </span>
          </div>
          <div className="flex items-center space-x-4 md:border-x md:border-white/10 md:px-6">
            <span className="font-body text-2xl font-bold text-accent tracking-tighter">
              {t("hero.stat2_num") as string}
            </span>
            <span className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-white/60 leading-tight">
              {t("hero.stat2_lbl") as string}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-body text-2xl font-bold text-accent tracking-tighter">
              {t("hero.stat3_num") as string}
            </span>
            <span className="font-body text-[0.65rem] uppercase tracking-[0.25em] text-white/60 leading-tight">
              {t("hero.stat3_lbl") as string}
            </span>
          </div>
        </div>

        {/* Layer 8: Precise vertical inline Scroll Cue */}
        <div className="flex flex-col items-center pt-8 mt-4 select-none opacity-40">
          <p className="font-body text-[0.55rem] tracking-[0.3em] text-white uppercase mb-2">SCROLL</p>
          <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
        </div>

      </div>
    </section>
  );
}
