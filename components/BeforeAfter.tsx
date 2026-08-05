"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from './motion';

export default function BeforeAfter() {
  const { t } = useLocale();
  const cases = t('beforeAfter.cases') as Array<{
    id: string;
    title: string;
    desc: string;
    photoBefore: string;
    photoAfter: string;
  }>;

  return (
    <section id="cases" className="py-20 bg-bg-tint border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-left max-w-3xl mb-14">
          <span className="text-xs font-body uppercase tracking-[0.2em] text-accent font-bold">
            {t('beforeAfter.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-text-main mt-2">
            {t('beforeAfter.title') as string}
          </h2>
          <p className="text-xs sm:text-sm font-body text-text-muted mt-3">
            {t('beforeAfter.subtitle') as string}
          </p>
        </Reveal>

        {/* Large Full-Width Cases */}
        <div className="space-y-12">
          {cases.map((c) => (
            <Reveal key={c.id} className="bg-bg-light border border-border-light p-6 sm:p-8 rounded-2xl space-y-6 shadow-md">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-border-light pb-4">
                <div>
                  <span className="text-[10px] font-body uppercase tracking-widest text-accent font-bold">
                    КЛІНІЧНИЙ КЕЙС № 0{c.id}
                  </span>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-text-main mt-1">
                    {c.title}
                  </h3>
                </div>
                <div className="text-xs font-body text-text-muted tabular-nums">
                  Протокол: All-on-4 / Zygoma
                </div>
              </div>

              <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed max-w-4xl">
                {c.desc}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                
                {/* Before Photo Container */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-body uppercase tracking-wider text-text-muted font-bold">
                    <span>Вихідний стан (До)</span>
                    <span className="text-border-light/80">Рис. A</span>
                  </div>
                  <div className="h-64 rounded-xl overflow-hidden bg-primary-dark relative">
                    <img
                      src={c.photoBefore}
                      alt="До лікування"
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute bottom-2 left-2 bg-primary-dark/80 px-2 py-1 text-[10px] font-body text-bg-light rounded">
                      Атрофія / Втрата зубів
                    </div>
                  </div>
                </div>

                {/* After Photo Container */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-body uppercase tracking-wider text-accent font-bold">
                    <span>Клінічний результат (Після)</span>
                    <span>Рис. B</span>
                  </div>
                  <div className="h-64 rounded-xl overflow-hidden bg-primary border-2 border-accent relative shadow-lg">
                    <img
                      src={c.photoAfter}
                      alt="Після лікування"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-accent text-primary-dark px-2.5 py-1 text-[10px] font-body font-bold rounded">
                      Незнімний цирконієвий міст
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
