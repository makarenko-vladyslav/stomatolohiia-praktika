"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  q: string;
  a: string;
}

export default function Faq() {
  const { t } = useLocale();
  const questions = t('faq.questions') as FaqItem[] || [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Static section description */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-3 font-mono">
              [ FAQ ]
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              {t('faq.title') as string}
            </h2>
            <p className="text-white/70 text-sm">
              {t('faq.subtitle') as string}
            </p>
          </div>

          {/* Clean Accordions */}
          <div className="lg:col-span-7 flex flex-col gap-4 font-body">
            {questions.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border-b border-white/10 pb-4"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left py-4 flex justify-between items-center group"
                  >
                    <span className="font-display font-semibold text-lg text-white group-hover:text-accent transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-accent text-xl font-bold ml-4 font-mono">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/75 text-sm leading-relaxed pb-4 pt-2">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
