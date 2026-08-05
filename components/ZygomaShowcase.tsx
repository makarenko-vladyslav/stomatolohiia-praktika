"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from './motion';

export default function ZygomaShowcase() {
  const { t } = useLocale();
  const points = t('zygoma.points') as Array<{ num: string; title: string; desc: string }>;
  const pullQuote = t('zygoma.pullQuote') as string;
  const docRole = t('zygoma.docRole') as string;
  const photoCaption = t('zygoma.photoCaption') as string;
  const secondaryLink = t('zygoma.secondaryLink') as string;

  return (
    <section id="zygoma" className="py-20 bg-primary-dark text-bg-light relative overflow-hidden border-b border-border-light/10">
      
      {/* Background Watermark Word */}
      <div aria-hidden="true" className="absolute top-10 right-0 pointer-events-none select-none opacity-[0.03] font-display text-[18vw] font-bold text-bg-light uppercase whitespace-nowrap leading-none">
        ZYGOMA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <Reveal className="max-w-3xl mb-12 space-y-3">
          <div className="inline-block px-3 py-1 rounded bg-accent/20 border border-accent/40 text-accent text-[10px] font-body uppercase tracking-widest font-bold">
            {t('zygoma.badgeText') as string}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-bg-light leading-snug">
            {t('zygoma.title') as string}
          </h2>
          <p className="text-xs sm:text-sm font-body text-bg-light/80 leading-relaxed">
            {t('zygoma.subtitle') as string}
          </p>
        </Reveal>

        {/* 2-Column Editorial Grid: Points + Photo Cluster */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Points & Pull Quote */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Pull Quote */}
            <Reveal className="p-6 rounded-lg bg-primary/80 border-l-4 border-accent text-bg-light space-y-2">
              <p className="font-display italic text-lg sm:text-xl text-accent leading-snug">
                "{pullQuote}"
              </p>
              <span className="text-[10px] font-body uppercase tracking-wider text-bg-light/60 block">
                — {docRole}
              </span>
            </Reveal>

            {/* Points List */}
            <Stagger className="space-y-4">
              {points.map((pt, i) => (
                <StaggerItem key={i} className="flex gap-4 p-4 rounded bg-primary/50 border border-border-light/10">
                  <span className="font-display text-2xl font-bold text-accent tabular-nums min-w-[3.5rem]">
                    {pt.num}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-display font-semibold text-base text-bg-light">{pt.title}</h3>
                    <p className="font-body text-xs text-bg-light/70 leading-relaxed">{pt.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* Secondary Action Link */}
            <Reveal className="pt-2">
              <a
                href="#booking"
                className="text-accent font-body text-xs font-bold uppercase tracking-wider hover:underline"
              >
                {secondaryLink}
              </a>
            </Reveal>

          </div>

          {/* Right Column: 2-Photo Cluster (Overlapped/Tilted) & Caption */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal className="relative">
              
              {/* Main Primary Photo */}
              <div className="rounded-xl overflow-hidden border border-border-light/20 shadow-2xl bg-primary">
                <img
                  src="https://praktika.dentist/wp-content/uploads/2025/12/3-800x533.jpg"
                  alt="Zygoma Implantation Case Praktika Kharkiv"
                  loading="lazy"
                  className="w-full h-[360px] object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('img-fallback');
                  }}
                />
              </div>

              {/* Overlapped Secondary Tilted Photo */}
              <div className="absolute -bottom-6 -left-6 w-2/3 rounded-lg overflow-hidden border-2 border-accent shadow-2xl bg-primary-dark hidden sm:block">
                <img
                  src="https://praktika.dentist/wp-content/uploads/2025/12/5-800x533.jpg"
                  alt="Zygoma Protocol CT Scan"
                  loading="lazy"
                  className="w-full h-[180px] object-cover opacity-90"
                />
              </div>

            </Reveal>

            {/* Photo Caption with Rule */}
            <Reveal className="pt-8 sm:pt-10 space-y-2 border-t border-border-light/10">
              <p className="text-[11px] font-body text-bg-light/70 italic leading-relaxed">
                {photoCaption}
              </p>
              <div className="flex items-center gap-2 text-[10px] font-body text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>3D КТ-контроль стабільності імпланта у виличній кістці</span>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}
