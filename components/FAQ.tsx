
"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ() {
  const { t } = useLocale();
  const faqList = t('faq.list') as Array<FAQItem>;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-2xs font-bold uppercase tracking-widest text-accent">
            {t('faq.kicker')}
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl leading-tight tracking-tight text-primary">
            {t('faq.title')}
          </h2>
        </div>

        {/* Accordion list */}
        <div className="max-w-4xl space-y-4">
          {faqList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border-b border-primary/10 pb-4 transition-all ${
                  isOpen ? 'bg-primary/[0.01]' : ''
                }`}
              >
                <button 
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-primary group-hover:text-accent transition-colors">
                    {faq.q}
                  </span>
                  <span className="font-bold text-primary text-sm ml-4">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}>
                  <p className="font-body text-xs sm:text-sm text-text-main/75 leading-relaxed pl-1 max-w-3xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
