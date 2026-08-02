"use client";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();

  return (
    <div className="bg-primary border-y border-white/10 py-8 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white/80 text-[10px] tracking-[0.2em] uppercase font-mono">
          
          <div className="flex items-center gap-4 border-l border-accent/40 pl-4 py-1">
            <span className="text-accent font-bold text-base">587+</span>
            <span className="leading-tight text-white/60">{t("socialProof.reviews")}</span>
          </div>
          
          <div className="flex items-center gap-4 border-l border-accent/40 pl-4 py-1">
            <span className="text-accent font-bold text-base">МОЗ</span>
            <span className="leading-tight text-white/60">{t("socialProof.license")}</span>
          </div>

          <div className="flex items-center gap-4 border-l border-accent/40 pl-4 py-1">
            <span className="text-accent font-bold text-base">2018</span>
            <span className="leading-tight text-white/60">{t("socialProof.est")}</span>
          </div>

          <div className="flex items-center gap-4 border-l border-accent/40 pl-4 py-1">
            <span className="text-accent font-bold text-base">CAD</span>
            <span className="leading-tight text-white/60">{t("socialProof.equipment")}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
