
"use client";
import { useLocale } from "@/lib/i18n";

export default function Implantology() {
  const { t } = useLocale();

  return (
    <section id="implantology" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Structural hair-lines decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full border-l border-white/5 pointer-events-none select-none" />

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column info illustration */}
        <div className="lg:col-span-5 relative aspect-square rounded-lg overflow-hidden bg-primary-light border border-white/10 p-6 flex flex-col justify-between">
          <div>
            <span className="font-body text-[0.6rem] text-accent uppercase tracking-widest block mb-4">
              {t("implantology_detail.kicker") as string}
            </span>
            <h3 className="font-display font-medium text-white text-xl leading-tight mb-4">
              {t("implantology_detail.zygoma_title") as string}
            </h3>
            <p className="font-body text-xs text-white/70 leading-relaxed">
              {t("implantology_detail.zygoma_desc") as string}
            </p>
          </div>
          
          <div className="pt-6 border-t border-white/10">
            <p className="font-body text-[0.625rem] uppercase tracking-wider text-accent font-bold">
              {t("common.guarantee") as string}
            </p>
            <p className="font-display italic text-white text-base">
              Довічна офіційна гарантія на матеріали
            </p>
          </div>
        </div>

        {/* Right column text content */}
        <div className="lg:col-span-7 space-y-6">
          <span className="font-body text-xs font-bold text-accent uppercase tracking-widest">
            All-on-4 / All-on-6 / Zygoma
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-bold">
            {t("implantology_detail.title") as string}
          </h2>
          <p className="font-body text-white/85 text-xs leading-relaxed">
            {t("implantology_detail.desc") as string}
          </p>

          <div className="space-y-4 pt-4 border-t border-white/10">
            <h4 className="font-body text-xs uppercase tracking-wider text-accent font-bold">
              {t("implantology_detail.all_on_title") as string}
            </h4>
            
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-white/80">
                <span className="font-body text-accent font-bold select-none">•</span>
                <p className="font-body text-xs">
                  {t("implantology_detail.all_on_p1") as string}
                </p>
              </li>
              <li className="flex items-start space-x-3 text-white/80">
                <span className="font-body text-accent font-bold select-none">•</span>
                <p className="font-body text-xs">
                  {t("implantology_detail.all_on_p2") as string}
                </p>
              </li>
              <li className="flex items-start space-x-3 text-white/80">
                <span className="font-body text-accent font-bold select-none">•</span>
                <p className="font-body text-xs">
                  {t("implantology_detail.all_on_p3") as string}
                </p>
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <a 
              href="#booking"
              className="inline-flex bg-accent hover:bg-accent-hover text-white font-body text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded transition-all"
            >
              Отримати план лікування
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
