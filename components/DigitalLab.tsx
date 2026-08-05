"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal, Stagger, StaggerItem } from './motion';

export default function DigitalLab() {
  const { t } = useLocale();
  const features = t('lab.features') as Array<{ title: string; desc: string }>;

  return (
    <section id="lab" className="py-20 bg-bg-light border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <Reveal className="text-left max-w-3xl mb-14">
          <span className="text-xs font-body uppercase tracking-[0.2em] text-accent font-bold">
            {t('lab.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-text-main mt-2">
            {t('lab.title') as string}
          </h2>
          <p className="text-xs sm:text-sm font-body text-text-muted mt-3 leading-relaxed">
            {t('lab.subtitle') as string}
          </p>
        </Reveal>

        {/* Feature Cards Grid */}
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <StaggerItem key={idx}>
              <div className="h-full p-6 bg-bg-tint border border-border-light/80 rounded-xl hover:border-accent transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-border-light/60 pb-2">
                    <span className="text-accent font-body font-bold text-xs tabular-nums">
                      ОД-0{idx + 1}
                    </span>
                    <span className="text-[9px] font-body uppercase text-text-muted">
                      CAD/CAM SPEC
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text-main">
                    {feat.title}
                  </h3>
                  <p className="font-body text-xs text-text-muted leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="text-[10px] font-body text-accent font-semibold">
                  Точність фрезерування: 5 мікронів
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
