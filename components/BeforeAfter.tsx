"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface CaseStudy {
  title: string;
  details: string;
  beforeUrl: string;
  afterUrl: string;
}

export default function BeforeAfter() {
  const { t } = useLocale();
  const cases = t('beforeAfter.cases') as CaseStudy[];
  const [activeCase, setActiveCase] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - container.left;
    const position = Math.max(0, Math.min(100, (x / container.width) * 100));
    setSliderPosition(position);
  };

  return (
    <section id="beforeAfter" className="relative w-full py-24 bg-bg-light border-b border-border-soft scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start gap-4 mb-16">
          {/* Abolished pill design: Clean uppercase tracking-widest editorial kicker */}
          <span className="text-accent font-mono text-[0.75rem] tracking-[0.2em] uppercase block mb-4">
            {t('beforeAfter.kicker')}
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-display font-bold leading-tight">
            {t('beforeAfter.title')}
          </h2>
          <p className="text-[1.125rem] text-text-main/70 max-w-2xl font-sans">
            {t('beforeAfter.subtitle')}
          </p>
        </div>

        {/* Case Studies Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            {cases.map((cs, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCase(index);
                  setSliderPosition(50);
                }}
                className={`p-6 rounded-xl text-left border transition-all duration-300 flex flex-col gap-3 cursor-pointer ${activeCase === index ? 'border-accent bg-white shadow-lg shadow-primary/5' : 'border-border-soft bg-transparent hover:border-text-main/30'}`}
              >
                <span className="font-mono text-[0.75rem] text-accent uppercase tracking-wider">КЕЙС {index + 1}</span>
                <h3 className="font-display font-bold text-[1.25rem] text-primary">{cs.title}</h3>
                <p className="text-[0.8rem] text-text-main/70 leading-relaxed font-sans">{cs.details}</p>
              </button>
            ))}
          </div>

          {/* Interactive slider component */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div 
              className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border-soft shadow-2xl select-none cursor-ew-resize"
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
            >
              {/* After image background */}
              <img 
                src={cases[activeCase].afterUrl} 
                alt="After rehabilitation result" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-accent text-white px-3 py-1 text-[0.75rem] font-mono rounded tracking-widest z-10">РЕЗУЛЬТАТ</div>

              {/* Before image mask */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img 
                  src={cases[activeCase].beforeUrl} 
                  alt="Before treatment" 
                  className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{ width: '100%' }}
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 text-[0.75rem] font-mono rounded tracking-widest z-10">ДО ЛІКУВАННЯ</div>
              </div>

              {/* Drag line */}
              <div 
                className="absolute inset-y-0 w-[2px] bg-white cursor-ew-resize z-20 flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center shadow-lg font-mono text-[0.8rem] font-bold border border-border-soft">⇔</div>
              </div>
            </div>
            <span className="text-[0.7rem] font-mono text-text-main/50 text-center block">Проведіть курсором або пальцем по зображенню для порівняння</span>
          </div>
        </div>
      </div>
    </section>
  );
}
