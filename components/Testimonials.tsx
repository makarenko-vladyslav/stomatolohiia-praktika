"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialItem {
  author: string;
  role: string;
  descriptor: string;
  quote: string;
}

export default function Testimonials() {
  const { t } = useLocale();
  const list = t('testimonials.list') as TestimonialItem[] || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-bg-light text-primary relative overflow-hidden">
      
      {/* Absolute giant watermark */}
      <div className="absolute left-0 bottom-0 opacity-[0.01] pointer-events-none select-none">
        <span className="font-display font-bold text-[20vw] leading-none text-primary whitespace-nowrap uppercase">REVIEWS</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Layer 1: Kicker */}
        <span className="text-[10px] tracking-[0.25em] text-accent font-bold uppercase block mb-3 font-mono">
          ВІДГУКИ ТА ІСТОРІЇ РЕАБІЛІТАЦІЇ
        </span>

        {/* Layer 2: Heading & Subtitle */}
        <div className="mb-20 max-w-3xl">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 text-primary leading-[1.1]">
            {t('testimonials.title') as string}
          </h2>
          <p className="text-primary/75 text-sm sm:text-base leading-relaxed">
            {t('testimonials.subtitle') as string}
          </p>
        </div>

        {/* Layer 3: Main Proof Quotation Area */}
        <div className="bg-white border border-primary/10 p-8 sm:p-16 shadow-sm mb-12 relative">
          <div className="absolute right-8 top-6 font-display text-[7rem] leading-none text-accent/10 select-none pointer-events-none" aria-hidden="true">
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Attribution details */}
              <div className="lg:col-span-4 border-l-2 border-accent pl-5">
                <div className="font-display font-bold text-lg text-primary">
                  {list[currentIndex]?.author}
                </div>
                <div className="text-[10px] text-primary/50 mt-1 uppercase tracking-widest font-bold font-mono">
                  {list[currentIndex]?.role}
                </div>
                <div className="text-[9px] text-accent mt-2 uppercase tracking-widest font-bold block font-mono">
                  {list[currentIndex]?.descriptor}
                </div>

                {/* Rating component with monospaced numbers */}
                <div className="border-t border-primary/10 pt-4 mt-6 text-xs text-primary/70">
                  <div className="font-bold text-primary">Рейтинг пацієнта:</div>
                  <div className="flex items-center gap-1.5 mt-1 font-mono">
                    <span className="font-mono font-bold text-accent tabular-nums">4.9/5</span>
                    <span className="text-primary/40">•</span>
                    <span className="font-bold text-primary/60">Google My Business</span>
                  </div>
                </div>
              </div>

              {/* Quote block */}
              <div className="lg:col-span-8">
                <blockquote className="font-display text-lg sm:text-xl italic text-primary/80 leading-relaxed">
                  &ldquo;{list[currentIndex]?.quote}&rdquo;
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Layer 4: Custom DOT selectors */}
        <div className="flex justify-center items-center gap-3">
          {list.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-2.5 transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-accent' : 'w-2.5 bg-primary/10 hover:bg-primary/20'
              }`}
              aria-label={`Show testimonial block ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
