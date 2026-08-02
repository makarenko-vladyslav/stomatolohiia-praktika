
"use client";
import { useLocale } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLocale();

  const renderItalicTitle = (text: string) => {
    const parts = text.split("*");
    return parts.map((part, index) => 
      index % 2 === 1 
        ? <em key={index} className="font-display italic font-medium text-accent">{part}</em>
        : part
    );
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-bg-dark pt-32 pb-8">
      
      {/* BACKGROUND STACK (Layer 8) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/6192977/bank-card-calculation-caries-caries-removal-6192977.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-[1.02]"
        >
          <source src="https://videos.pexels.com/video-files/6192977/6192977-hd_1280_720_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/90 via-bg-dark/65 to-bg-dark/95 mix-blend-multiply z-10" />
      </div>

      {/* GIANT DECORATIVE TYPE LAYER (Layer 9 - Background Watermark) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none overflow-hidden h-0" aria-hidden="true">
        <span className="text-[15vw] font-display font-bold text-white/[0.02] tracking-widest uppercase whitespace-nowrap block">
          PRAKTIKA
        </span>
      </div>

      {/* HERO CONTENT GRID */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text details */}
        <div className="lg:col-span-8 flex flex-col items-start gap-6">

          {/* Multi-line poster H1 (Layer 2) */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl font-display">
            {renderItalicTitle(t("hero.title") as string)}
          </h1>

          {/* Subtitle / Lede (Layer 3 - Clean Sans-Serif font-sans inherited) */}
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-xl">
            {t("hero.subtitle") as string}
          </p>

          {/* CTA Pair (Layer 4) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto mt-4">
            <a
              href="#booking"
              className="bg-accent hover:bg-accent-dark text-white text-center py-4 px-8 font-bold uppercase tracking-widest text-[10px] transition-colors glow-accent-strong"
            >
              {t("common.cta") as string}
            </a>
            <a
              href="#calculator"
              className="text-white hover:text-accent font-mono text-[11px] font-bold uppercase tracking-widest transition-colors py-4 px-2"
            >
              {t("common.ctaSecondary") as string} →
            </a>
          </div>
        </div>

        {/* Right Column details (Layer 5: Micro details stack) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Static Review Details card */}
          <div className="bg-bg-dark/80 backdrop-blur-md p-6 rounded border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-3">
              <span className="text-accent font-mono font-bold text-sm tracking-widest">GOOGLE MAPS</span>
              <span className="text-[10px] font-mono text-white/50">EST. 2018</span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display font-bold text-3xl text-white">4.9 / 5.0</span>
            </div>
            <p className="text-white/90 text-[11px] font-bold mb-1 uppercase tracking-wider">{t("common.reviewsCount") as string}</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Харків’яни довіряють нам відновлення складних випадків адентії щелеп.
            </p>
          </div>

          {/* Zygoma certification details card */}
          <div className="bg-bg-dark/80 backdrop-blur-md p-6 rounded border border-accent/20 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-3">
              <span className="text-accent font-mono font-bold text-sm tracking-widest">ZYGOMA CLINIC</span>
              <span className="text-[10px] font-mono text-accent">UKRAINE</span>
            </div>
            <p className="text-white text-xs font-bold mb-2 uppercase tracking-wider">{t("common.zygomaCert") as string}</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Хірургічний супровід пацієнтів з повною резорбцією за сертифікованими європейськими ліцензіями.
            </p>
          </div>
        </div>

      </div>

      {/* FLANKING MINI-COPY & SCROLL CUE (Layers 10 & 6) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-end pt-12 border-t border-white/5 mt-auto">
        
        {/* Flanking copy left - Organically holds the clinic credential kickers */}
        <div className="hidden md:block">
          <p className="text-[9px] font-mono text-white/40 leading-relaxed uppercase tracking-widest">
            {t("hero.kicker") as string}<br />
            ХАРКІВ · ЦЕНТР · ПРОСПЕКТ НАУКИ 77
          </p>
        </div>

        {/* Center: Scroll Cue */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-mono font-bold animate-pulse">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>

        {/* Flanking copy right */}
        <div className="hidden md:block text-right">
          <p className="text-[9px] font-mono text-white/40 leading-relaxed uppercase tracking-widest">
            ОФІЦІЙНА ГАРАНТІЯ<br />
            НА ХІРУРГІЮ ДО 15 РОКІВ
          </p>
        </div>

      </div>

      {/* BASE MARQUEE TICKER (Layer 12) */}
      <div className="w-full bg-accent/10 border-t border-white/5 py-2.5 mt-6 overflow-hidden select-none">
        <div className="flex whitespace-nowrap gap-8 text-[9px] font-mono text-accent font-bold tracking-widest uppercase animate-[marquee_20s_linear_infinite]">
          <span>ПРОТОКОЛИ ALL-ON-4/ALL-ON-6 · ВИЛИЦЕВА ІМПЛАНТАЦІЯ ZYGOMA · ЛІКУВАННЯ В СЕДАЦІЇ · ЦИФРОВЕ ПЛАНУВАННЯ 3D КТ ·</span>
          <span>ПРОТОКОЛИ ALL-ON-4/ALL-ON-6 · ВИЛИЦЕВА ІМПЛАНТАЦІЯ ZYGOMA · ЛІКУВАННЯ В СЕДАЦІЇ · ЦИФРОВЕ ПЛАНУВАННЯ 3D КТ ·</span>
        </div>
      </div>

    </section>
  );
}
