"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();

  interface Stat {
    value: string;
    label: string;
  }

  const stats = t("socialProof.stats") as Stat[] || [];

  return (
    <section className="relative z-30 bg-primary py-12 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <span className="font-display font-bold text-3xl sm:text-5xl text-accent mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-white/70 text-xs font-medium max-w-[200px] leading-relaxed">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
