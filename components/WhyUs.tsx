"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from './motion';

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as Array<{ num: string; title: string; desc: string }>;

  return (
    <section className="py-20 bg-bg-light border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-left max-w-3xl mb-14">
          <span className="text-xs font-body uppercase tracking-[0.2em] text-accent font-bold">
            {t('whyUs.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-text-main mt-2">
            {t('whyUs.title') as string}
          </h2>
          <p className="text-xs sm:text-sm font-body text-text-muted mt-3">
            {t('whyUs.subtitle') as string}
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <StaggerItem key={idx}>
              <div className="h-full p-6 bg-bg-tint border border-border-light/80 rounded-xl space-y-4 hover:border-accent transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-display text-3xl font-bold text-accent tabular-nums block">
                    {it.num}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-text-main">
                    {it.title}
                  </h3>
                  <p className="font-body text-xs text-text-muted leading-relaxed">
                    {it.desc}
                  </p>
                </div>
                <div className="text-[10px] font-body text-text-muted uppercase border-t border-border-light/60 pt-2">
                  Стандарт Praktika № {idx + 1}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
