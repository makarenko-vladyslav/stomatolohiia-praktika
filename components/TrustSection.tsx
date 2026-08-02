"use client";
import { useLocale } from "@/lib/i18n";

export default function TrustSection() {
  const { t } = useLocale();
  const steps = t("trust.steps") as Array<{ num: string; title: string; text: string }>;

  return (
    <section className="py-24 bg-bg-light relative border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent tracking-[0.25em] uppercase mb-4 block font-mono">
            {t("trust.kicker")}
          </span>
          <h2 className="heading-display text-3xl sm:text-5xl text-text-main max-w-2xl mx-auto">
            {t("trust.title")}
          </h2>
        </div>

        {/* CHOREOGRAPHY MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps && steps.map((st, i) => (
            <div key={i} className="bg-card-light p-8 border border-border-subtle shadow-sm flex flex-col justify-between h-64">
              <div>
                <span className="block font-display text-5xl text-accent/20 leading-none mb-4">{st.num}</span>
                <h3 className="font-display font-medium text-lg text-text-main mb-3">{st.title}</h3>
                <p className="text-text-muted text-xs font-mono leading-relaxed">{st.text}</p>
              </div>
              <div className="border-t border-border-subtle pt-3">
                <span className="text-[8px] font-mono tracking-widest uppercase text-text-muted">Контроль МОЗ України</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
