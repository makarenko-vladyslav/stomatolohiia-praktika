"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rectLeft: number, rectWidth: number) => {
    const x = clientX - rectLeft;
    const position = Math.max(0, Math.min(100, (x / rectWidth) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect.left, rect.width);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX, rect.left, rect.width);
    }
  };

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-3 font-mono">
            [ CLINICAL EVIDENCE ]
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-6">
            {t('beforeAfter.title') as string}
          </h2>
          <p className="text-primary/70 text-sm">
            {t('beforeAfter.subtitle') as string}
          </p>
        </div>

        {/* High Precision Interactive Slider Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div 
              className="relative aspect-video w-full overflow-hidden select-none cursor-ew-resize border border-primary/10"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* Before Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=1200&h=675"
                  alt="Clinical state before surgery"
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
                <span className="absolute bottom-4 left-4 px-3 py-1.5 bg-primary text-white text-[10px] font-bold tracking-widest font-mono">
                  ДО
                </span>
              </div>

              {/* After Image (Clipped) */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200&h=675"
                  alt="Clinical state after restoration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-4 right-4 px-3 py-1.5 bg-accent text-white text-[10px] font-bold tracking-widest font-mono">
                  ПІСЛЯ
                </span>
              </div>

              {/* Drag bar line */}
              <div 
                className="absolute top-0 bottom-0 w-[1px] bg-white cursor-ew-resize z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent border border-white shadow-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold font-mono">&lt;&gt;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Details & Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="border-l-2 border-accent pl-4">
              <span className="text-xs uppercase tracking-widest text-primary/40 block mb-1 font-mono">Клінічний випадок A</span>
              <p className="font-display font-semibold text-primary text-lg">
                {t('beforeAfter.case1') as string}
              </p>
            </div>
            <div className="border-l-2 border-primary/20 pl-4">
              <span className="text-xs uppercase tracking-widest text-primary/40 block mb-1 font-mono">Клінічний випадок B</span>
              <p className="font-display font-semibold text-primary/60 text-lg">
                {t('beforeAfter.case2') as string}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
