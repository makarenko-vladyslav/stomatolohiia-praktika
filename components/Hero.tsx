"use client";
import { useLocale } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-primary text-white pt-24 pb-6">
      {/* 1. Background video & overlay stack (>=2 layers) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-25 scale-102 animate-kenburns"
          poster={t('hero.posterUrl')}
        >
          <source src={t('hero.videoUrl')} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/75 to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(195_45%_8%/_0.85)_90%)]" />
      </div>

      {/* 2. Giant background decorative watermark */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 overflow-hidden w-full text-center" aria-hidden="true">
        <span className="font-display uppercase tracking-[0.2em] text-white/[0.015] text-[15rem] font-extrabold whitespace-nowrap block">
          PRAKTIKA
        </span>
      </div>

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto pt-8">
        {/* Left Column Content */}
        <div className="lg:col-span-8 flex flex-col items-start gap-6">
          {/* Clean minimal kicker without pill borders or backgrounds */}
          <span className="text-accent font-mono text-[0.75rem] tracking-[0.2em] uppercase block">
            {t('hero.kicker')}
          </span>
          
          {/* Poster H1 with differently styled word */}
          <h1 className="text-[2.2rem] sm:text-[3.5rem] md:text-[4.8rem] lg:text-[5.5rem] font-display font-light leading-[1.05] tracking-tight text-white max-w-4xl">
            {t('hero.title')}{" "}
            <span className="italic font-normal text-accent font-display block sm:inline">
              {t('hero.titleItalic')}
            </span>
          </h1>

          {/* Lede Sub-headline */}
          <p className="text-[1.1rem] md:text-[1.2rem] text-white/70 max-w-2xl leading-relaxed font-sans">
            {t('hero.subtitle')}
          </p>

          {/* CTA Pair */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mt-4">
            <a 
              href="#calculator" 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white font-mono tracking-widest uppercase px-10 py-4.5 rounded text-[0.8rem] font-semibold text-center transition-all duration-300 hover:shadow-[0_0_30px_hsl(162_90%_36%/_0.4)]"
            >
              {t('hero.ctaPrimary')}
            </a>
            <a 
              href="tel:+380507717535" 
              className="text-white hover:text-accent font-mono text-[0.8rem] tracking-wider uppercase transition-colors flex items-center gap-2 border-b border-white/20 pb-1"
            >
              {t('hero.ctaSecondary')} — +38 050 771 75 35
            </a>
          </div>
        </div>

        {/* Right Column: Flanking visual stats block & Seal */}
        <div className="lg:col-span-4 flex flex-col gap-8 items-center lg:items-end relative">
          
          {/* Rotating Text Seal (Opaque SVG) */}
          <div className="absolute -top-16 -right-8 w-32 h-32 select-none pointer-events-none hidden xl:block" aria-hidden="true">
            <svg className="w-full h-full animate-spin-slow text-white/10" viewBox="0 0 100 100">
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text className="font-mono text-[7px] tracking-[0.15em] fill-accent uppercase">
                <textPath href="#circlePath">
                  DIAGNOSTICS · SURGERY · IMPLANTATION ·
                </textPath>
              </text>
            </svg>
          </div>

          {/* Side Mini-copy Column Info block */}
          <div className="bg-white/[0.03] border border-white/10 p-8 rounded-xl backdrop-blur-md w-full max-w-sm">
            <div className="border-b border-white/10 pb-6 mb-6">
              <span className="text-[0.7rem] tracking-widest font-mono text-accent uppercase block mb-1">НОРМА СТЕРИЛЬНОСТІ</span>
              <h3 className="font-display font-medium text-[1.4rem] text-white">Клас В (ISO)</h3>
              <p className="text-[0.8rem] text-white/60 mt-2 font-sans">Повна триступенева стерилізація операційного інструментарію перед кожною хірургічною фазою.</p>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <span className="text-[1.8rem] font-display font-semibold text-accent block tracking-tight">587+</span>
                <span className="text-[0.65rem] font-mono text-white/50 block uppercase tracking-wider">КЛІНІЧНИХ ВІДГУКІВ</span>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <span className="text-[1.8rem] font-display font-semibold text-white block tracking-tight">16 г</span>
                <span className="text-[0.65rem] font-mono text-white/50 block uppercase tracking-wider">ПРОТЕЗ НА ІМПЛАНТАХ</span>
              </div>
            </div>
          </div>

          {/* Flanking Secondary Small Text Panel */}
          <div className="hidden lg:block text-right max-w-xs font-mono text-[0.7rem] text-white/40 leading-relaxed">
            Автоматизований хірургічний шаблон CT-Guide мінімізує похибку прилягання нижче ніж 10 мікронів.
          </div>
        </div>
      </div>

      {/* 3-Item Meta Strip with hairlines */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-y border-white/10 text-white/70 font-mono text-[0.75rem] tracking-wider">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <span className="text-accent">ПН - СБ:</span>
            <span>09:00 - 19:00</span>
          </div>
          <div className="flex items-center gap-3 justify-center border-y md:border-y-0 md:border-x border-white/10 py-3 md:py-0">
            <span className="text-accent">ЛОКАЦІЯ:</span>
            <span>ПРОСПЕКТ НАУКИ, 77, ХАРКІВ</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-end">
            <span className="text-accent">РЕЙТИНГ MAPS:</span>
            <span>4.9 / 5.0 (587 ВІДГУКІВ)</span>
          </div>
        </div>
      </div>

      {/* Ticker at hero base */}
      <div className="relative z-10 w-full border-t border-white/5 bg-primary/80 backdrop-blur-sm mt-8 py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex gap-16 text-white/30 font-mono text-[0.65rem] uppercase tracking-[0.25em]">
            <span>· NOBEL BIOCARE ORIGINAL</span>
            <span>· STRAUMANN PREMIUM SYSTEM</span>
            <span>· CAD/CAM ЦИФРОВА ЛАБОРАТОРІЯ</span>
            <span>· ЛІКУВАННЯ УВІ СНІ БЕЗ СТРЕСУ</span>
            <span>· БЕЗ КІСТКОВОЇ ПЛАСТИКИ ZYGOMA</span>
          </div>
          <div className="flex gap-16 text-white/30 font-mono text-[0.65rem] uppercase tracking-[0.25em] pl-16">
            <span>· NOBEL BIOCARE ORIGINAL</span>
            <span>· STRAUMANN PREMIUM SYSTEM</span>
            <span>· CAD/CAM ЦИФРОВА ЛАБОРАТОРІЯ</span>
            <span>· ЛІКУВАННЯ УВІ СНІ БЕЗ СТРЕСУ</span>
            <span>· БЕЗ КІСТКОВОЇ ПЛАСТИКИ ZYGOMA</span>
          </div>
        </div>
      </div>

      {/* Centered Scroll Cue */}
      <div className="relative flex flex-col items-center justify-end self-center z-10 pointer-events-none mt-6">
        <span className="text-[0.55rem] tracking-[0.3em] font-mono text-white/40 mb-2">{t('hero.scroll')}</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
