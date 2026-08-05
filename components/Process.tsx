"use client";
import { useLocale } from '@/lib/i18n';

interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as ProcessStep[];

  return (
    <section className="relative w-full py-24 bg-primary text-white border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-start gap-4 mb-20">
          {/* Abolished pill design: Clean uppercase tracking-widest editorial kicker */}
          <span className="text-accent font-mono text-[0.75rem] tracking-[0.2em] uppercase block mb-4">
            {t('process.kicker')}
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-display font-bold leading-tight">
            {t('process.title')}
          </h2>
          <p className="text-[1.125rem] text-white/70 max-w-2xl font-sans">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Steps Connection Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle line background for connectivity */}
          <div className="hidden lg:block absolute top-[1.5rem] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative z-10 flex flex-col items-start gap-4 bg-white/5 border border-white/10 hover:border-accent p-6 rounded-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/40 text-accent font-mono font-bold text-[1rem] flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                {step.num}
              </div>

              <h3 className="font-display font-bold text-[1.25rem] text-white leading-snug">
                {step.title}
              </h3>

              <p className="text-[0.85rem] text-white/70 font-sans leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
