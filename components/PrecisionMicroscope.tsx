
"use client";
import { useLocale } from "@/lib/i18n";

export default function PrecisionMicroscope() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Structural background lines for surgical aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent-hover)_0%,transparent_60%)] opacity-10 pointer-events-none" />

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Optical microscope view or stock details */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-primary-light">
            <img 
              src="https://picsum.photos/seed/dental-microscope/800/600" 
              alt="Стоматологічний мікроскоп Zeiss" 
              className="w-full h-full object-cover opacity-80"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('img-fallback');
              }}
            />
            <div className="absolute top-4 left-4 bg-primary/90 px-3 py-1.5 border border-white/10 rounded">
              <p className="font-body text-[0.6rem] text-accent tracking-widest uppercase font-bold">
                Carl Zeiss Optics
              </p>
            </div>
          </div>
        </div>

        {/* Text descriptions */}
        <div className="lg:col-span-7 space-y-6">
          <span className="font-body text-xs font-bold text-accent uppercase tracking-widest">
            {t("precision.kicker") as string}
          </span>
          
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-bold text-white">
            {t("precision.title") as string}
          </h2>

          <p className="font-body text-white/80 text-xs leading-relaxed">
            {t("precision.desc") as string}
          </p>

          <div className="space-y-3 pt-4 border-t border-white/15">
            <div className="flex items-start space-x-3 text-white/90">
              <span className="font-body text-accent font-bold select-none">—</span>
              <p className="font-body text-xs">
                {t("precision.p1") as string}
              </p>
            </div>
            
            <div className="flex items-start space-x-3 text-white/90">
              <span className="font-body text-accent font-bold select-none">—</span>
              <p className="font-body text-xs">
                {t("precision.p2") as string}
              </p>
            </div>

            <div className="flex items-start space-x-3 text-white/90">
              <span className="font-body text-accent font-bold select-none">—</span>
              <p className="font-body text-xs">
                {t("precision.p3") as string}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
