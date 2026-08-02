
"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [1, 2, 3, 4, 5, 6];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-bg-light">
      <div className="container-custom">
        {/* Title */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="font-body text-xs font-bold text-accent uppercase tracking-widest">
            {t("faq.kicker") as string}
          </span>
          <h2 className="font-display text-text-main text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-bold">
            {t("faq.title") as string}
          </h2>
        </div>

        {/* Clean semantic accordions spanning full container width */}
        <div className="border-t border-border-subtle">
          {faqItems.map((itemNum) => {
            const q = t(`faq.q${itemNum}`) as string;
            const a = t(`faq.a${itemNum}`) as string;
            const isOpen = openIndex === itemNum;

            return (
              <div key={itemNum} className="border-b border-border-subtle">
                <button
                  onClick={() => toggle(itemNum)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                >
                  <span className="font-display font-medium text-text-main text-sm md:text-base group-hover:text-accent transition-colors">
                    {q}
                  </span>
                  
                  {/* Custom Minimal Toggle Sign */}
                  <span className="font-body text-accent font-bold text-sm ml-4 select-none">
                    {isOpen ? "—" : "+"}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="font-body text-xs text-text-muted leading-relaxed">
                    {a}
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
