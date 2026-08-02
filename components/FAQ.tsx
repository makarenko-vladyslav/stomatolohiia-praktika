
"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLocale();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  interface FAQItem {
    question: string;
    answer: string;
  }

  const items = t("faq.items") as FAQItem[] || [];

  return (
    <section id="faq" className="py-12 md:py-20 lg:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout Pattern: Asymmetric Left Column Header & Right Accordeon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Header column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-accent text-xs font-bold tracking-widest uppercase">
              {t("faq.kicker") as string}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary leading-tight tracking-tight">
              {t("faq.title") as string}
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">
              {t("faq.subtitle") as string}
            </p>
            <div className="border border-border-subtle p-5 rounded bg-bg-light mt-4">
              <span className="font-bold text-primary text-xs tracking-wider uppercase block mb-2">ПОТРІБНА ДЕТАЛЬНА КОНСУЛЬТАЦІЯ?</span>
              <p className="text-text-muted text-xs leading-relaxed mb-4">Наші лікарі готові відповісти на специфічні клінічні питання за телефоном.</p>
              <a href={`tel:${t("common.phone")}`} className="text-accent font-bold text-sm tracking-wider hover:opacity-80 block">{t("common.phone") as string}</a>
            </div>
          </div>

          {/* Accordion List Column */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {items.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="border border-border-subtle rounded overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center p-5 bg-bg-light hover:bg-bg-light/60 text-left transition-colors"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-primary pr-4">
                      {item.question}
                    </span>
                    <span className={`text-xl font-bold text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-border-subtle" : "max-h-0"
                    }`}
                  >
                    <div className="p-5 bg-white text-text-muted text-xs sm:text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
