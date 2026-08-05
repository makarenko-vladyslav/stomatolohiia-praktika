"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from './motion';

export default function SocialProof() {
  const { t } = useLocale();
  const badges = t('socialProof.badges') as string[];

  return (
    <section className="py-10 bg-bg-tint border-b border-border-light/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-border-light/40">
          <div>
            <span className="text-[10px] font-body uppercase tracking-[0.2em] text-accent font-bold block">
              {t('socialProof.kicker') as string}
            </span>
            <h2 className="text-lg sm:text-xl font-display font-semibold text-text-main mt-0.5">
              {t('socialProof.heading') as string}
            </h2>
          </div>
          <div className="text-xs font-body text-text-muted tabular-nums">
            АКРЕДИТАЦІЯ МОЗ № 684/18 · 587 ВІДГУКІВ
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {badges.map((badge, idx) => (
            <StaggerItem key={idx}>
              <div className="h-full bg-bg-light border border-border-light/80 p-3 rounded text-left flex flex-col justify-between hover:border-accent transition-colors">
                <span className="text-[9px] font-body text-accent font-bold uppercase tracking-widest">
                  АКТ 0{idx + 1}
                </span>
                <span className="text-[11px] font-body font-medium text-text-main leading-snug mt-2">
                  {badge}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
