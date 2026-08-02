"use client";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 bg-primary text-white">
      
      {/* BACKGROUND VIDEO LOOP STACK */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={t("hero.posterSrc")}
          className="w-full h-full object-cover opacity-30"
        >
          <source src={t("hero.videoSrc")} type="video/mp4" />
        </video>
        {/* Surgical-green radial overlay for elite depth & contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-primary/85 to-primary/95 mix-blend-multiply" />
      </div>

      {/* GIANT DECORATIVE WATERMARK TEXT LAYER */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        <span className="font-display text-[15vw] font-bold text-white/2 leading-none whitespace-nowrap tracking-wider">
          PRAKTIKA DENT
        </span>
      </div>

      {/* HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        
        {/* KICKER WITH REAL META */}
        <div className="mb-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[10px] font-mono tracking-[0.3em] uppercase text-accent">
          <span>{t("hero.kicker")}</span>
          <span className="hidden sm:inline text-white/30">·</span>
          <span className="text-white/60">EST. 2018</span>
        </div>

        {/* H1 WITH DUAL-FONT ARCHITECTURE */}
        <h1 className="heading-display text-4xl sm:text-6xl md:text-8xl max-w-5xl leading-none mb-6">
          Хірургічна точність <span className="italic font-normal text-accent">ортопедичної</span> реабілітації
        </h1>

        {/* SUBTITLE */}
        <p className="text-sm sm:text-base text-white/70 max-w-3xl mb-12 font-light leading-relaxed max-w-2xl font-mono">
          {t("hero.subtitle")}
        </p>

        {/* CTA PAIR BUTTON BLOCK */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-20">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-accent hover:bg-accent-deep text-white px-8 py-4.5 text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-accent/20 font-mono"
          >
            {t("hero.ctaPrimary")}
          </a>
          <a
            href="#calculator"
            className="w-full sm:w-auto border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-8 py-4.5 text-xs font-bold tracking-wider uppercase transition-all font-mono"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>

        {/* THREE-ITEM META STRIP */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 border-t border-white/10 pt-8 w-full max-w-3xl font-mono">
          <div className="flex flex-col items-center">
            <span className="text-xs text-white/40 uppercase tracking-widest block">Прийомні години</span>
            <span className="text-xs font-bold text-white mt-1 block">Пн - Сб: 09:00 - 19:00</span>
          </div>
          <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-white/10 py-4 sm:py-0">
            <span className="text-xs text-white/40 uppercase tracking-widest block">Локація</span>
            <span className="text-xs font-bold text-white mt-1 block">Харків, проспект Науки, 77</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-white/40 uppercase tracking-widest block">Рейтинг клініки</span>
            <span className="text-xs font-bold text-accent mt-1 block">4.9 / 5 · 587 відгуків</span>
          </div>
        </div>

        {/* ROTATING TEXT SEAL METAPHOR */}
        <div className="hidden lg:block absolute right-12 bottom-24 w-28 h-28 pointer-events-none select-none z-20 overflow-hidden" aria-hidden="true">
          <div className="relative w-full h-full animate-rotate-text flex items-center justify-center">
            <svg className="w-full h-full text-white/10" viewBox="0 0 100 100">
              <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
              <text className="font-mono text-[7px] fill-accent uppercase tracking-[0.2em]">
                <textPath href="#circlePath" startOffset="0%">
                  PRAKTIKA DENTAL CLINIC · DIGITAL ACCURACY ·
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* CLASSIC SCROLL INDICATOR */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="text-[9px] font-mono tracking-[0.3em] text-white/40">SCROLL</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>

      </div>
    </section>
  );
}
