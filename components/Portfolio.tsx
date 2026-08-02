
"use client";
import { useLocale } from "@/lib/i18n";

export default function Portfolio() {
  const { t } = useLocale();

  return (
    <section id="portfolio" className="py-20 bg-bg-light">
      <div className="container-custom">
        {/* Headings block */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="font-body text-xs font-bold text-accent uppercase tracking-widest">
            {t("portfolio.kicker") as string}
          </span>
          <h2 className="font-display text-text-main text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-bold">
            {t("portfolio.title") as string}
          </h2>
          <p className="font-body text-text-muted text-xs">
            {t("portfolio.desc") as string}
          </p>
        </div>

        {/* Modular Grid Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Case 1 */}
          <div className="bg-bg-alt border border-border-subtle p-6 rounded flex flex-col justify-between">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded overflow-hidden shadow bg-primary">
                <img 
                  src="https://picsum.photos/seed/full-arch-restoration/600/450" 
                  alt={t("portfolio.case1_title") as string} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('img-fallback');
                  }}
                />
              </div>
              <h3 className="font-display font-semibold text-text-main text-base leading-tight">
                {t("portfolio.case1_title") as string}
              </h3>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed">
                {t("portfolio.case1_desc") as string}
              </p>
            </div>
            <div className="pt-4 border-t border-border-subtle/60 mt-4">
              <span className="font-body text-[0.6rem] uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded font-bold">
                All-on-4 / All-on-6
              </span>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-bg-alt border border-border-subtle p-6 rounded flex flex-col justify-between">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded overflow-hidden shadow bg-primary">
                <img 
                  src="https://picsum.photos/seed/zygoma-case/600/450" 
                  alt={t("portfolio.case2_title") as string} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('img-fallback');
                  }}
                />
              </div>
              <h3 className="font-display font-semibold text-text-main text-base leading-tight">
                {t("portfolio.case2_title") as string}
              </h3>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed">
                {t("portfolio.case2_desc") as string}
              </p>
            </div>
            <div className="pt-4 border-t border-border-subtle/60 mt-4">
              <span className="font-body text-[0.6rem] uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded font-bold">
                Zygoma Upper Arch
              </span>
            </div>
          </div>

          {/* Case 3 */}
          <div className="bg-bg-alt border border-border-subtle p-6 rounded flex flex-col justify-between">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded overflow-hidden shadow bg-primary">
                <img 
                  src="https://picsum.photos/seed/veneers-smile/600/450" 
                  alt={t("portfolio.case3_title") as string} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('img-fallback');
                  }}
                />
              </div>
              <h3 className="font-display font-semibold text-text-main text-base leading-tight">
                {t("portfolio.case3_title") as string}
              </h3>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed">
                {t("portfolio.case3_desc") as string}
              </p>
            </div>
            <div className="pt-4 border-t border-border-subtle/60 mt-4">
              <span className="font-body text-[0.6rem] uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded font-bold">
                E-max Veneers
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
