"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from './motion';

export default function Hero() {
  const { t } = useLocale();

  const stats = t('hero.stats') as Array<{ value: string; label: string }>;
  const metaStrip = t('hero.metaStrip') as string[];
  const videoSrc = (t('hero.heroVideo.src') as string) || "https://videos.pexels.com/video-files/6192977/6192977-hd_1280_720_30fps.mp4";
  const posterUrl = (t('hero.heroVideo.poster') as string) || "https://images.pexels.com/videos/6192977/bank-card-calculation-caries-caries-removal-6192977.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200";

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-primary-dark border-b border-border-light/10">
      
      {/* Layer 1: Background Video with Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
          className="w-full h-full object-cover opacity-30"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 scrim-dark" />
      </div>

      {/* Layer 2: Giant Watermark Background Word (Absolute, zero height, pointer-events-none, aria-hidden) */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full text-center overflow-hidden"
      >
        <span className="font-display text-[16vw] font-bold leading-none text-bg-light/[0.03] uppercase tracking-tighter whitespace-nowrap block">
          PRAKTIKA
        </span>
      </div>

      {/* Main Hero Content Stack */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        
        {/* Top Kicker with Real Meta */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-border-light/10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-[11px] font-body uppercase tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {t('hero.kicker') as string}
            </div>
          </Reveal>

          {/* Floating Circular Rotating Text Seal — NO glyphs */}
          <div className="hidden md:block relative w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-20 h-20 animate-[spin_25s_linear_infinite]">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="text-[8.5px] font-body uppercase tracking-[0.22em] fill-accent font-bold">
                <textPath href="#circlePath">• ЦЕНТР ІМПЛАНТОЛОГІЇ • ХАРКІВ </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Main Grid: Headline + Flanking Columns */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Headline & CTAs */}
          <div className="lg:col-span-9 space-y-6 text-left">
            <Reveal>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-semibold leading-[1.08] text-bg-light tracking-tight">
                {t('hero.titleWord1') as string}{' '}
                <span className="italic font-normal text-accent font-display underline decoration-accent/40 underline-offset-8">
                  {t('hero.titleItalic') as string}
                </span>{' '}
                {t('hero.titleWord2') as string}
              </h1>
            </Reveal>

            <Reveal>
              <p className="text-sm sm:text-base font-body text-bg-light/80 max-w-2xl leading-relaxed">
                {t('hero.lede') as string}
              </p>
            </Reveal>

            {/* CTA Pair: Solid Primary + Quiet Text Link */}
            <Reveal>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2">
                <a
                  href="#booking"
                  className="px-8 py-4 rounded font-body font-bold text-xs uppercase tracking-widest bg-accent text-primary-dark hover:bg-accent-hover transition-all shadow-lg hover:shadow-accent/25 text-center"
                >
                  {t('hero.ctaPrimary') as string}
                </a>
                <a
                  href="#calculator"
                  className="text-xs font-body uppercase tracking-wider text-bg-light/80 hover:text-accent transition-colors underline decoration-border-light/40 underline-offset-4 text-center sm:text-left py-2"
                >
                  {t('hero.ctaSecondary') as string}
                </a>
              </div>
            </Reveal>

            {/* 3-Item Meta Strip with Hairline Separators */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 text-xs font-body text-bg-light/70 border-t border-border-light/10">
                {metaStrip.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="tabular-nums">{item}</span>
                    {idx < metaStrip.length - 1 && (
                      <span className="text-border-light/30">|</span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Flanking Mini-Copy Column */}
          <div className="lg:col-span-3 hidden lg:flex flex-col gap-4 text-left border-l border-border-light/10 pl-6">
            <Reveal>
              <div className="space-y-1">
                <span className="text-[10px] font-body uppercase tracking-widest text-accent font-bold">
                  3D КТ-СКТ ДІАГНОСТИКА
                </span>
                <p className="text-xs font-body text-bg-light/75 leading-snug">
                  {t('hero.flankLeft') as string}
                </p>
              </div>
            </Reveal>

            <div className="w-full h-[1px] bg-border-light/10" />

            <Reveal>
              <div className="space-y-1">
                <span className="text-[10px] font-body uppercase tracking-widest text-accent font-bold">
                  CAD/CAM ФРЕЗЕРУВАННЯ
                </span>
                <p className="text-xs font-body text-bg-light/75 leading-snug">
                  {t('hero.flankRight') as string}
                </p>
              </div>
            </Reveal>
          </div>

        </div>

        {/* Stats Strip */}
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-6 border-t border-border-light/10">
          {stats.map((stat, idx) => (
            <StaggerItem key={idx} className="p-3.5 rounded bg-primary-dark/50 border border-border-light/10 text-left">
              <div className="font-display text-2xl sm:text-3xl font-bold text-accent tabular-nums">
                {stat.value}
              </div>
              <div className="text-[10px] font-body uppercase tracking-wider text-bg-light/70 mt-1">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Hero Base Ticker & Classic Scroll Cue */}
      <div className="relative z-10 w-full mt-8 pt-4 border-t border-border-light/10">
        <div className="overflow-hidden whitespace-nowrap opacity-40 mb-6">
          <div className="animate-marquee text-[10px] font-body uppercase tracking-[0.25em] text-bg-light flex gap-12">
            <span>Zygoma Protocol Kharkiv</span>
            <span>•</span>
            <span>All-on-4 & All-on-6 Restoration</span>
            <span>•</span>
            <span>3D Medit Intraoral Scan</span>
            <span>•</span>
            <span>Zeiss Endodontic Microscopy</span>
            <span>•</span>
            <span>CAD/CAM Zirconium Lab</span>
            <span>•</span>
            <span>Zygoma Protocol Kharkiv</span>
            <span>•</span>
            <span>All-on-4 & All-on-6 Restoration</span>
          </div>
        </div>

        {/* Scroll Cue (Classic bottom center) */}
        <div className="flex flex-col items-center gap-1.5 opacity-60 pointer-events-none">
          <span className="text-[8px] font-body uppercase tracking-[0.3em] text-bg-light">SCROLL</span>
          <div className="w-[1px] h-5 bg-gradient-to-b from-accent to-transparent animate-pulse" />
        </div>
      </div>

    </section>
  );
}
