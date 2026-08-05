"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from './motion';

export default function Testimonials() {
  const { t } = useLocale();
  const reviews = t('reviews.items') as Array<{
    name: string;
    role: string;
    rating: string;
    text: string;
  }>;

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="reviews" className="py-20 bg-bg-tint border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-left max-w-3xl mb-14">
          <span className="text-xs font-body uppercase tracking-[0.2em] text-accent font-bold">
            {t('reviews.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-text-main mt-2">
            {t('reviews.title') as string}
          </h2>
          <p className="text-xs sm:text-sm font-body text-text-muted mt-3">
            {t('reviews.subtitle') as string}
          </p>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <Reveal className="bg-bg-light border border-border-light/80 p-8 sm:p-10 rounded-2xl space-y-6 shadow-md relative">
            
            {/* Oversized Quotation Mark Background */}
            <div aria-hidden="true" className="absolute top-4 right-8 text-8xl font-display text-accent/10 pointer-events-none select-none">
              “
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-light pb-4">
              <div>
                <h3 className="font-display font-semibold text-xl text-text-main">
                  {reviews[activeIndex].name}
                </h3>
                <span className="text-xs font-body text-text-muted block mt-0.5">
                  {reviews[activeIndex].role}
                </span>
              </div>
              <div className="text-xs font-body font-bold text-accent tabular-nums bg-accent/10 px-3 py-1.5 rounded">
                {reviews[activeIndex].rating}
              </div>
            </div>

            <p className="font-display text-lg sm:text-xl text-text-main leading-relaxed italic">
              "{reviews[activeIndex].text}"
            </p>

            {/* Pagination Dots (NO prev/next arrows) */}
            <div className="flex items-center justify-between pt-4 border-t border-border-light/60">
              <span className="text-[10px] font-body uppercase text-text-muted tracking-wider tabular-nums">
                ВІДГУК 0{activeIndex + 1} З 0{reviews.length}
              </span>
              <div className="flex gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeIndex === idx ? 'bg-accent w-8' : 'bg-border-light hover:bg-text-muted w-2.5'
                    }`}
                    aria-label={`Відгук ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </Reveal>
        </div>

      </div>
    </section>
  );
}
