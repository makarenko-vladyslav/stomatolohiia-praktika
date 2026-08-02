
"use client";
import { useLocale } from "@/lib/i18n";

export default function Process() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-bg-alt border-y border-border-subtle/30">
      <div className="container-custom">
        {/* Headings */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="font-body text-xs font-bold text-accent uppercase tracking-widest">
            {t("process.kicker") as string}
          </span>
          <h2 className="font-display text-text-main text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-bold">
            {t("process.title") as string}
          </h2>
          <p className="font-body text-text-muted text-xs">
            {t("process.desc") as string}
          </p>
        </div>

        {/* Process Steps List — Clean alignment, Banned alternating zigzag voids */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-bg-light p-6 rounded border border-border-subtle flex flex-col justify-between relative">
            <div className="space-y-4">
              <span className="font-body text-4xl font-bold text-accent/30 block">01</span>
              <h3 className="font-display font-semibold text-text-main text-base">
                {t("process.step1_title") as string}
              </h3>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed">
                {t("process.step1_desc") as string}
              </p>
            </div>
          </div>

          <div className="bg-bg-light p-6 rounded border border-border-subtle flex flex-col justify-between relative">
            <div className="space-y-4">
              <span className="font-body text-4xl font-bold text-accent/30 block">02</span>
              <h3 className="font-display font-semibold text-text-main text-base">
                {t("process.step2_title") as string}
              </h3>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed">
                {t("process.step2_desc") as string}
              </p>
            </div>
          </div>

          <div className="bg-bg-light p-6 rounded border border-border-subtle flex flex-col justify-between relative">
            <div className="space-y-4">
              <span className="font-body text-4xl font-bold text-accent/30 block">03</span>
              <h3 className="font-display font-semibold text-text-main text-base">
                {t("process.step3_title") as string}
              </h3>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed">
                {t("process.step3_desc") as string}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
