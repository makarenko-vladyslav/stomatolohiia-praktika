"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from './motion';

export default function FAQ() {
  const { t } = useLocale();
  const items = t('faq.items') as Array<{ q: string; a: string }>;

  return (
    <section id="faq" className="py-20 bg-bg-light border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-left max-w-3xl mb-14">
          <span className="text-xs font-body uppercase tracking-[0.2em] text-accent font-bold">
            {t('faq.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-text-main mt-2">
            {t('faq.title') as string}
          </h2>
        </Reveal>

        {/* Accordion spanning full container width */}
        <div className="w-full space-y-4">
          {items.map((item, idx) => (
            <Reveal key={idx}>
              <details className="group bg-bg-tint border border-border-light/80 rounded-xl p-6 [&_summary::-webkit-details-marker]:none">
                <summary className="flex items-center justify-between cursor-pointer font-display font-semibold text-base sm:text-lg text-text-main">
                  <span>{item.q}</span>
                  <span className="text-accent group-open:rotate-180 transition-transform font-body text-base font-bold ml-4">↓</span>
                </summary>
                <p className="font-body text-xs sm:text-sm text-text-muted mt-4 leading-relaxed border-t border-border-light/60 pt-4">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center sm:text-left text-xs font-body text-text-muted">
          Не знайшли відповіді? Зателефонуйте лікарю напряму: <a href="tel:+380507717535" className="text-accent font-bold hover:underline tabular-nums">+38 050 771 75 35</a>
        </Reveal>

      </div>
    </section>
  );
}
