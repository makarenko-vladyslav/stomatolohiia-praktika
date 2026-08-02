
"use client";
import { useLocale } from "@/lib/i18n";

export default function Advantages() {
  const { t } = useLocale();

  interface Item {
    title: string;
    desc: string;
  }

  const items = t("advantages.items") as Item[] || [];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
            {t("advantages.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary leading-tight tracking-tight mb-6">
            {t("advantages.title") as string}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("advantages.subtitle") as string}
          </p>
        </div>

        {/* Content Layout: Responsive Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((advantage, idx) => (
            <div
              key={idx}
              className="bg-bg-light border border-border-subtle hover:border-accent/40 p-8 rounded transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Accent marker line */}
                <div className="w-8 h-[2px] bg-accent mb-6" />
                <h3 className="text-lg sm:text-xl font-bold font-display text-primary mb-3">
                  {advantage.title}
                </h3>
                <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                  {advantage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
