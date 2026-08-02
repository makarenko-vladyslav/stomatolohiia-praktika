"use client";
import { useLocale } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLocale();
  const faqList = t("faq.items") as Array<{ question: string; answer: string }>;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent tracking-[0.25em] uppercase mb-4 block font-mono">
            {t("faq.kicker")}
          </span>
          <h2 className="heading-display text-3xl sm:text-5xl text-text-main max-w-2xl mx-auto">
            {t("faq.title")}
          </h2>
        </div>

        {/* ACCORDION (Details & Summary with Spectral / JetBrains architecture) */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqList && faqList.map((faq, i) => (
            <details 
              key={i} 
              className="group bg-card-light border border-border-subtle overflow-hidden [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                <h3 className="font-display font-medium text-text-main text-base sm:text-lg">
                  {faq.question}
                </h3>
                {/* Clean typographic toggle indicator */}
                <span className="text-accent font-mono font-bold text-sm transition-transform duration-300 block">
                  <span className="group-open:hidden">+ Деталі</span>
                  <span className="hidden group-open:inline">− Згорнути</span>
                </span>
              </summary>
              <div className="px-6 pb-6 pt-4 border-t border-border-subtle/50 text-text-muted text-xs sm:text-sm font-mono leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
