"use client";
import { useLocale } from "@/lib/i18n";

export default function About() {
  const { t, locale } = useLocale();

  return (
    <section id="about" className="relative py-24 bg-bg-light overflow-hidden">
      {/* Technical structural line drawing and axis indicators */}
      <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none select-none z-0 opacity-[0.05] flex items-center justify-between px-12">
        <div className="h-full w-px bg-gradient-to-b from-transparent via-text-main to-transparent" />
        <div className="h-full w-px bg-gradient-to-b from-transparent via-text-main to-transparent" />
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column content details — Exceeding 7 elements for density */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Element 1: Kicker */}
          <div className="inline-flex items-center space-x-2 border-b border-border-subtle pb-2">
            <span className="font-body text-xs font-bold text-accent uppercase tracking-[0.3em]">
              {t("about.kicker") as string}
            </span>
          </div>

          {/* Element 2: Display Heading */}
          <h2 className="font-display text-text-main text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-tight">
            {t("about.title") as string}
          </h2>

          {/* Element 3: Lede / Body copy */}
          <p className="font-body text-text-muted text-xs leading-relaxed max-w-2xl">
            {t("about.desc1") as string}
          </p>

          {/* Element 4: Secondary paragraphs */}
          <p className="font-body text-text-muted text-[0.7rem] leading-relaxed max-w-2xl">
            {t("about.desc2") as string}
          </p>

          {/* Element 5: High-density Pull-Quote / Oversized Statement Line */}
          <div className="border-l-2 border-accent pl-6 py-2 my-4">
            <blockquote className="font-display italic text-text-main text-[clamp(1.1rem,2vw,1.4rem)] leading-relaxed">
              {t("about.pull_quote") as string || "«Найвища точність починається там, де закінчується людське око. Кожен міліметр оптичного наближення — це додаткові роки вашого безтурботного комфорту»"}
            </blockquote>
            <p className="font-body text-[0.625rem] text-text-muted uppercase tracking-wider mt-2 font-bold">
              {t("about.surgeon_caption") as string || "Д-р медичних наук, провідний щелепно-лицевий хірург клініки"}
            </p>
          </div>

          {/* Element 6: Stat Row of 4 real numeric metrics with tabular-nums style */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border-subtle pt-6">
            <div className="space-y-1">
              <span className="font-body text-xl font-bold text-accent block">10+</span>
              <span className="font-body text-[0.55rem] text-text-muted uppercase tracking-wider">
                {locale === "uk" ? "років досвіду хірургів" : "years surgeon experience"}
              </span>
            </div>
            <div className="space-y-1">
              <span className="font-body text-xl font-bold text-accent block">4,350+</span>
              <span className="font-body text-[0.55rem] text-text-muted uppercase tracking-wider">
                {locale === "uk" ? "встановлених імплантів" : "implants placed"}
              </span>
            </div>
            <div className="space-y-1">
              <span className="font-body text-xl font-bold text-accent block">99.2%</span>
              <span className="font-body text-[0.55rem] text-text-muted uppercase tracking-wider">
                {locale === "uk" ? "успішність інтеграції" : "successful integration"}
              </span>
            </div>
            <div className="space-y-1">
              <span className="font-body text-xl font-bold text-accent block">СЕДАЦІЯ</span>
              <span className="font-body text-[0.55rem] text-text-muted uppercase tracking-wider">
                {locale === "uk" ? "Безболісне лікування уві сні" : "Painless dental sleep treatment"}
              </span>
            </div>
          </div>

          {/* Element 7: Point List */}
          <div className="border-t border-border-subtle pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="font-body text-accent font-bold text-xs select-none">•</span>
              <p className="font-body text-xs text-text-main font-semibold">
                {t("about.point1") as string}
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="font-body text-accent font-bold text-xs select-none">•</span>
              <p className="font-body text-xs text-text-main font-semibold">
                {t("about.point2") as string}
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="font-body text-accent font-bold text-xs select-none">•</span>
              <p className="font-body text-xs text-text-main font-semibold">
                {t("about.point3") as string}
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="font-body text-accent font-bold text-xs select-none">•</span>
              <p className="font-body text-xs text-text-main font-semibold">
                {t("about.point4") as string}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: High Density 2-Photo Overlapped Cluster (Layer 9 & 10) */}
        <div className="lg:col-span-5 relative mt-10 lg:mt-0 select-none">
          
          {/* Main Photo (Layer 1) */}
          <div className="relative aspect-[4/5] w-full rounded overflow-hidden shadow-2xl bg-primary">
            <img 
              src="https://picsum.photos/seed/company-workspace/800/1000" 
              alt="Стоматологія Praktika Харків — Кабінет Хірургії" 
              className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('img-fallback');
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent pointer-events-none" />
          </div>

          {/* Overlapped Smaller Tilted Photo (Layer 2) */}
          <div className="absolute -bottom-8 -left-10 w-2/3 aspect-[4/3] rounded overflow-hidden shadow-2xl border-4 border-white bg-primary z-20 transform -rotate-3 hidden sm:block">
            <img 
              src="https://picsum.photos/seed/dental-workspace/600/450" 
              alt="Діагностичне обладнання Sirona" 
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('img-fallback');
              }}
            />
            {/* Soft dark tinted overlay over photo */}
            <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
          </div>

          {/* Structured photo caption-with-rule */}
          <div className="absolute -right-4 -bottom-4 bg-primary-light/95 backdrop-blur border border-white/10 p-5 rounded z-30 max-w-xs shadow-lg">
            <p className="font-body text-[0.55rem] text-accent uppercase tracking-[0.2em] font-bold mb-1">
              {t("about.badge_title") as string}
            </p>
            <h3 className="font-display font-medium text-white text-xs leading-normal">
              {t("common.since") as string}
            </h3>
            <div className="w-12 h-px bg-accent mt-3" />
            <p className="font-body text-[0.55rem] text-white/40 uppercase tracking-widest mt-2">
              НАУКИ 77 • ХАРКІВ
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
