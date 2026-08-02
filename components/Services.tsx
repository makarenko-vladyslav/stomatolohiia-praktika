
"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Services() {
  const { t, locale } = useLocale();
  const [activeCategory, setActiveCategory] = useState<"implants" | "prosthetics" | "therapy">("implants");

  // Dense row-based price-list layout data (8-10 items with metadata)
  const items = {
    implants: [
      { key: "all_on_4", tag: "X-RAY / ALL-ON-4", rating: "ПОПУЛЯРНО", hasBadge: true },
      { key: "all_on_6", tag: "PREMIUM RESTORATION", rating: "РЕКОМЕНДОВАНО", hasBadge: true },
      { key: "zygoma", tag: "ВИЛИЦЕВІ ІМПЛАНТИ", rating: "ЕКСКЛЮЗИВНО", hasBadge: true },
      { key: "single", tag: "ОДНОЕТАПНА ХІРУРГІЯ", rating: "★ 4.9", hasBadge: false }
    ],
    prosthetics: [
      { key: "zirconia", tag: "CAD/CAM ЦИФРОВЕ ФРЕЗЕРУВАННЯ", rating: "★ 4.9", hasBadge: false },
      { key: "veneers", tag: "E-MAX УЛЬТРАТОНКІ ВІНІРИ", rating: "ЕСТЕТИЧНО", hasBadge: true }
    ],
    therapy: [
      { key: "microscope", tag: "ZEISS 40X ЕНДОДОНТІЯ", rating: "ПОПУЛЯРНО", hasBadge: true },
      { key: "hygiene", tag: "EMS SWISS AIRFLOW", rating: "★ 5.0", hasBadge: false }
    ]
  };

  return (
    <section id="services" className="py-24 bg-bg-alt border-y border-border-subtle/30">
      <div className="container-custom">
        
        {/* Headings — High density V3 setup */}
        <div className="max-w-4xl mb-12 space-y-4">
          <span className="font-body text-xs font-bold text-accent uppercase tracking-[0.3em]">
            {t("services_catalog.kicker") as string}
          </span>
          <h2 className="font-display text-text-main text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-tight">
            {t("services_catalog.title") as string}
          </h2>
          <p className="font-body text-text-muted text-xs font-normal leading-relaxed max-w-2xl">
            {t("services_catalog.desc") as string}
          </p>
        </div>

        {/* Tab Selection — Element 4 */}
        <div className="flex border-b border-border-subtle mb-10 overflow-x-auto hide-scrollbar select-none">
          {(["implants", "prosthetics", "therapy"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-4 px-6 font-body text-xs uppercase tracking-widest font-bold border-b-2 transition-all shrink-0 ${
                activeCategory === cat 
                  ? "border-accent text-accent" 
                  : "border-transparent text-text-muted hover:text-text-main"
              }`}
            >
              {t(`services_catalog.categories.${cat}`) as string}
            </button>
          ))}
        </div>

        {/* Highlighted Signature Spotlight Card — Element 7 */}
        <div className="mb-12 bg-primary text-white p-8 rounded-lg border border-white/5 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-3 max-w-2xl">
            <span className="font-body text-[0.55rem] bg-accent text-white px-2 py-0.5 rounded uppercase tracking-[0.3em] font-bold inline-block">
              {t("services_catalog.spotlight_title") as string || "Рекомендований вибір хірурга"}
            </span>
            <h3 className="font-display font-medium text-lg md:text-xl text-white">
              Німецький пакет All-on-6 з довічною гарантією
            </h3>
            <p className="font-body text-white/70 text-xs leading-normal">
              {t("services_catalog.spotlight_desc") as string || "Тотальний пакет All-on-6 з преміальними імплантатами Straumann та довічною гарантією стабільності кістки."}
            </p>
          </div>
          <div className="relative z-10 mt-6 md:mt-0 flex flex-col items-end shrink-0">
            <span className="font-body text-xs text-white/50 uppercase tracking-widest">пакет &quot;під ключ&quot;</span>
            <span className="font-display text-2xl font-bold text-accent tracking-tighter mt-1">від 135 000 UAH</span>
            <a 
              href="#booking"
              className="mt-3 font-body text-[0.625rem] font-bold uppercase tracking-[0.2em] bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded transition-all shadow-lg"
            >
              План лікування →
            </a>
          </div>
        </div>

        {/* Directory Row-based List Layout — Element 5 */}
        <div className="space-y-3">
          {items[activeCategory].map((item) => {
            const data = t(`services_catalog.items.${item.key}`) as { title: string; desc: string; price: string };
            return (
              <div 
                key={item.key}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-bg-light rounded border border-border-subtle/30 hover:border-accent/30 transition-all duration-300"
              >
                <div className="space-y-2 md:max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-body text-[0.55rem] bg-accent/5 text-accent px-2 py-0.5 rounded font-bold uppercase tracking-widest">
                      {item.tag}
                    </span>
                    {item.hasBadge && (
                      <span className="font-body text-[0.55rem] bg-primary text-white/90 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                        {item.rating}
                      </span>
                    )}
                    <h3 className="font-display font-semibold text-text-main text-base group-hover:text-accent transition-colors ml-1">
                      {data.title}
                    </h3>
                  </div>
                  <p className="font-body text-xs text-text-muted leading-relaxed">
                    {data.desc}
                  </p>
                </div>
                
                {/* Price layout using dots Leader Lines */}
                <div className="mt-4 md:mt-0 flex items-center justify-between md:space-x-12 shrink-0">
                  <div className="flex flex-col md:items-end">
                    <span className="font-body text-[0.55rem] text-text-muted uppercase tracking-widest">Вартість</span>
                    <span className="font-body text-xs md:text-sm font-bold text-text-main tabular-nums mt-0.5">
                      {data.price}
                    </span>
                  </div>
                  
                  <a 
                    href="#booking"
                    className="font-body text-[0.65rem] uppercase font-bold tracking-[0.25em] text-accent border-b border-transparent group-hover:border-accent transition-all pb-0.5"
                  >
                    ЗАПИСАТИСЬ →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote (Element 8) & Secondary CTA (Element 9) */}
        <div className="mt-12 pt-6 border-t border-border-subtle/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-text-muted">
          <p className="font-body text-[0.6rem] leading-normal uppercase tracking-wider">
            {locale === "uk"
              ? "* Усі ціни є пакетними та включають комп'ютерне моделювання, діагностику, роботу хірурга та ортопеда."
              : "* All quoted pricing includes complete CT modeling, sterile supplies, surgical and orthopedic work."}
          </p>
          <a 
            href="#calculator"
            className="font-body text-xs text-accent font-bold uppercase tracking-[0.2em] hover:text-primary transition-colors flex items-center shrink-0"
          >
            {locale === "uk" ? "РОЗРАХУВАТИ ІНШИЙ ВАРІАНТ →" : "ESTIMATE CUSTOM PROTOCOL →"}
          </a>
        </div>

      </div>
    </section>
  );
}
