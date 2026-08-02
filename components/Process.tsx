
"use client";
import { useLocale } from "@/lib/i18n";

export default function Process() {
  const { t } = useLocale();

  interface Step {
    num: string;
    title: string;
    desc: string;
  }

  const steps = t("process.steps") as Step[] || [];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-bg-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
            {t("process.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight mb-6">
            {t("process.title") as string}
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            {t("process.subtitle") as string}
          </p>
        </div>

        {/* Process Steps Timeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Timeline background connectors (horizontal on large screens) */}
          <div className="hidden lg:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-white/10 z-0" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-6 rounded relative z-10 flex flex-col gap-4 group hover:bg-white/10 transition-colors"
            >
              {/* Order Numerals in clinical design style */}
              <div className="w-12 h-12 rounded bg-accent text-white flex items-center justify-center font-bold font-display text-lg relative z-20 group-hover:scale-105 transition-transform">
                {step.num}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold font-display text-white">
                  {step.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
