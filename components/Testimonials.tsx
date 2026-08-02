
"use client";
import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t, locale } = useLocale();

  return (
    <section className="py-24 bg-bg-alt border-y border-border-subtle/30">
      <div className="container-custom">
        
        {/* Headings */}
        <div className="max-w-4xl mb-12 space-y-4">
          <span className="font-body text-xs font-bold text-accent uppercase tracking-[0.3em]">
            {t("testimonials.kicker") as string}
          </span>
          <h2 className="font-display text-text-main text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-tight">
            {t("testimonials.title") as string}
          </h2>
          <p className="font-body text-text-muted text-xs leading-relaxed max-w-2xl">
            {t("testimonials.desc") as string}
          </p>
        </div>

        {/* V3 Mandate: ONE prominent quote in display type with oversized quotation mark */}
        <div className="mb-12 bg-bg-light border border-border-subtle p-8 md:p-12 rounded-lg relative overflow-hidden shadow-sm">
          {/* Stylized oversized quote mark */}
          <span className="font-display text-[8rem] text-accent/10 absolute -top-8 -left-4 leading-none select-none pointer-events-none">
            «
          </span>
          
          <div className="relative z-10 space-y-6">
            <p className="font-display italic text-text-main text-[clamp(1.3rem,2.8vw,1.8rem)] leading-relaxed max-w-3xl">
              {t("testimonials.quote_featured") as string || "«Якість життя вимірюється здатністю вільно посміхатися і не думати про їжу. У Praktika мені повернули це відчуття за один візит. Хірурги клініки створили диво, в яке я спочатку не вірив.»"}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border-subtle/40">
              <div className="space-y-1">
                <p className="font-body text-xs font-bold text-text-main">
                  {t("testimonials.quote_author") as string || "Марія К. — постійна гостя з 2019 року"}
                </p>
                <p className="font-body text-[0.55rem] text-accent uppercase tracking-[0.2em] font-semibold">
                  ЛИЦЕНЗОВАНА ВИЛИЦЕВА ІМПЛАНТАЦІЯ ZYGOMA
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-body text-xs font-bold text-text-main">4.9/5</span>
                <span className="font-body text-[0.625rem] text-text-muted uppercase tracking-[0.25em]">· GOOGLE REVIEWS · 587 ВІДГУКІВ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Review Grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Review 1 */}
          <div className="bg-bg-light border border-border-subtle p-6 rounded flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border-subtle/60">
                <span className="font-body text-xs font-bold text-text-main">
                  {t("testimonials.t1_name") as string}
                </span>
                <span className="font-body text-[0.6rem] bg-accent/15 text-accent px-2 py-0.5 rounded font-bold">
                  ★ 5.0 GOOGLE
                </span>
              </div>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed italic">
                &quot;{t("testimonials.t1_text") as string}&quot;
              </p>
            </div>
            
            <div className="pt-4 border-t border-border-subtle/60 mt-4 flex items-center justify-between">
              <span className="font-body text-[0.55rem] text-text-muted uppercase tracking-wider">
                Послуга:
              </span>
              <span className="font-body text-[0.55rem] text-text-main font-semibold">
                {t("testimonials.t1_service") as string}
              </span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-bg-light border border-border-subtle p-6 rounded flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border-subtle/60">
                <span className="font-body text-xs font-bold text-text-main">
                  {t("testimonials.t2_name") as string}
                </span>
                <span className="font-body text-[0.6rem] bg-accent/15 text-accent px-2 py-0.5 rounded font-bold">
                  ★ 5.0 GOOGLE
                </span>
              </div>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed italic">
                &quot;{t("testimonials.t2_text") as string}&quot;
              </p>
            </div>
            
            <div className="pt-4 border-t border-border-subtle/60 mt-4 flex items-center justify-between">
              <span className="font-body text-[0.55rem] text-text-muted uppercase tracking-wider">
                Послуга:
              </span>
              <span className="font-body text-[0.55rem] text-text-main font-semibold">
                {t("testimonials.t2_service") as string}
              </span>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-bg-light border border-border-subtle p-6 rounded flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-border-subtle/60">
                <span className="font-body text-xs font-bold text-text-main">
                  {t("testimonials.t3_name") as string}
                </span>
                <span className="font-body text-[0.6rem] bg-accent/15 text-accent px-2 py-0.5 rounded font-bold">
                  ★ 5.0 GOOGLE
                </span>
              </div>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed italic">
                &quot;{t("testimonials.t3_text") as string}&quot;
              </p>
            </div>
            
            <div className="pt-4 border-t border-border-subtle/60 mt-4 flex items-center justify-between">
              <span className="font-body text-[0.55rem] text-text-muted uppercase tracking-wider">
                Послуга:
              </span>
              <span className="font-body text-[0.55rem] text-text-main font-semibold">
                {t("testimonials.t3_service") as string}
              </span>
            </div>
          </div>

        </div>

        {/* Dot Indicators (V3 Slider requirement) */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="w-1.5 h-1.5 rounded-full bg-border-subtle" />
          <span className="w-1.5 h-1.5 rounded-full bg-border-subtle" />
        </div>

      </div>
    </section>
  );
}
