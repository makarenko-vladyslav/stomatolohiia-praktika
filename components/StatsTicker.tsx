
"use client";
import { useLocale } from "@/lib/i18n";

export default function StatsTicker() {
  const { t } = useLocale();

  return (
    <section className="bg-bg-alt border-y border-border-subtle/30 py-4 overflow-hidden relative select-none">
      {/* Endless smooth drifting typography row */}
      <div className="flex whitespace-nowrap space-x-12 animate-[marquee_30s_linear_infinite] w-max">
        <span className="font-body text-[0.7rem] uppercase tracking-widest text-text-muted">
          Стоматологія Praktika • {t("stats.google_rating") as string} • All-on-4 • All-on-6 • Вилицева імплантація Zygoma • Лікування під мікроскопом ZEISS • Харків • проспект Науки 77
        </span>
        <span className="font-body text-[0.7rem] uppercase tracking-widest text-text-muted">
          Стоматологія Praktika • {t("stats.google_rating") as string} • All-on-4 • All-on-6 • Вилицева імплантація Zygoma • Лікування під мікроскопом ZEISS • Харків • проспект Науки 77
        </span>
        <span className="font-body text-[0.7rem] uppercase tracking-widest text-text-muted">
          Стоматологія Praktika • {t("stats.google_rating") as string} • All-on-4 • All-on-6 • Вилицева імплантація Zygoma • Лікування під мікроскопом ZEISS • Харків • проспект Науки 77
        </span>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
      `}</style>
    </section>
  );
}
