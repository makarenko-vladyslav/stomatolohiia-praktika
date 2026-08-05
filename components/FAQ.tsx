"use client";
import { useLocale } from '@/lib/i18n';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const { t } = useLocale();
  const faqList = t('faq.list') as FAQItem[];

  return (
    <section id="faq" className="relative w-full py-24 bg-white border-b border-border-soft scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-start gap-4 mb-16">
          {/* Abolished pill design: Clean uppercase tracking-widest editorial kicker */}
          <span className="text-accent font-mono text-[0.75rem] tracking-[0.2em] uppercase block mb-4">
            {t('faq.kicker')}
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-display font-bold leading-tight">
            {t('faq.title')}
          </h2>
          <p className="text-[1.125rem] text-text-main/70 max-w-2xl font-sans">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* High Density Accordions using Native HTML Details tag */}
        <div className="flex flex-col gap-4 max-w-4xl">
          {faqList.map((item, index) => (
            <details 
              key={index} 
              className="group border border-border-soft rounded-xl bg-bg-light overflow-hidden transition-all duration-300"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer font-display font-bold text-[1.2rem] text-primary select-none list-none group-open:bg-primary group-open:text-white transition-colors duration-200">
                <span>{item.q}</span>
                <span className="font-mono text-[1.25rem] text-accent group-open:text-white transition-transform duration-200 group-open:rotate-45">[+]</span>
              </summary>
              <div className="p-6 border-t border-border-soft bg-white text-[0.95rem] text-text-main/80 font-sans leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
