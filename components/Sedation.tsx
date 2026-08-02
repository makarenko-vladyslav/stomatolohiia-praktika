
"use client";
import { useLocale } from "@/lib/i18n";

export default function Sedation() {
  const { t } = useLocale();

  interface Benefit {
    title: string;
    desc: string;
  }

  const benefits = t("sedation.benefits") as Benefit[] || [];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-primary text-white relative overflow-hidden">
      {/* Background glow blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout Pattern: Asymmetric Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block Content info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-accent text-xs font-bold tracking-widest uppercase">
              {t("sedation.kicker") as string}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
              {t("sedation.title") as string}
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              {t("sedation.subtitle") as string}
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="bg-accent hover:bg-accent-dark text-white text-center py-4 px-8 font-bold uppercase tracking-wider text-xs transition-colors glow-accent"
              >
                Запитати про лікування в наркозі
              </a>
            </div>
          </div>

          {/* Right Block benefits list */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded flex gap-4 items-start hover:border-accent/40 transition-colors"
              >
                {/* Large serial order numerals */}
                <span className="font-display font-bold text-xl text-accent">0{idx + 1}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold font-display text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
