"use client";
import { useLocale } from "@/lib/i18n";

export default function Services() {
  const { t } = useLocale();
  const items = t("services.items") as Array<{ title: string; description: string; price: string; tag?: string }>;

  return (
    <section id="services" className="py-24 bg-card-light border-y border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-left mb-16 border-b border-border-subtle pb-8">
          <span className="text-xs font-bold text-accent tracking-[0.25em] uppercase mb-4 block font-mono">
            {t("services.kicker")}
          </span>
          <h2 className="heading-display text-3xl sm:text-5xl text-text-main max-w-3xl">
            {t("services.title")}
          </h2>
          <p className="text-text-muted text-xs font-mono tracking-wide mt-2">
            *Усі маніпуляції виконуються за стандартами європейських протоколів реабілітації.
          </p>
        </div>

        {/* PRICE/OFFER LIST - EDITORIAL SCHEME IN ROWS */}
        <div className="flex flex-col gap-0 border-t border-border-subtle">
          {items && items.map((srv, i) => {
            const isSignature = i === 0; // Highlight Swiss protocol as primary
            return (
              <div 
                key={i} 
                className={`group grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start py-8 border-b border-border-subtle transition-all duration-300 ${isSignature ? "bg-bg-light/80 -mx-6 px-6 border-x border-accent/10" : "hover:bg-bg-light/30"}`}
              >
                {/* Meta block */}
                <div className="lg:col-span-3 flex items-center gap-3">
                  <span className="text-[10px] font-mono text-text-muted">0{i+1} —</span>
                  {srv.tag && (
                    <span className="text-[8px] font-mono tracking-widest uppercase bg-accent/10 text-accent px-2 py-0.5 border border-accent/20">
                      {srv.tag}
                    </span>
                  )}
                  {isSignature && (
                    <span className="text-[8px] font-mono tracking-widest uppercase bg-primary text-white px-2 py-0.5">
                      Ключовий протокол
                    </span>
                  )}
                </div>

                {/* Service Specs */}
                <div className="lg:col-span-6 space-y-2">
                  <h3 className="font-display font-medium text-lg sm:text-xl text-text-main group-hover:text-accent transition-colors leading-tight">
                    {srv.title}
                  </h3>
                  <p className="text-text-muted text-xs font-mono leading-relaxed max-w-xl">
                    {srv.description}
                  </p>
                </div>

                {/* Leader line decoration for large screens */}
                <div className="hidden lg:block lg:col-span-1 border-b border-dashed border-border-subtle h-6"></div>

                {/* Pricing / CTA row */}
                <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-4 lg:text-right pt-2 lg:pt-0">
                  <span className="text-sm font-bold text-text-main font-mono whitespace-nowrap">
                    {srv.price}
                  </span>
                  <a href="#contact" className="text-[10px] font-bold text-accent hover:text-accent-deep transition-colors tracking-wider uppercase font-mono lg:pl-4">
                    Запис ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTNOTE & HIGH-CONTRAST DIGITAL CTA BANNER */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono border-b border-border-subtle pb-8">
          <span className="text-text-muted leading-relaxed max-w-lg">
            *Вартість лікування розраховується індивідуально за результатами комп'ютерної томографії та складання хірургічного шаблону в 3D.
          </span>
          <a href="#calculator" className="inline-flex items-center gap-2 text-accent font-bold hover:underline tracking-wider uppercase whitespace-nowrap">
            Перейти до калькулятора <span>→</span>
          </a>
        </div>

        {/* DIAGONAL ACTION DECORATOR BAND */}
        <div className="mt-16 bg-primary text-white p-8 rounded-none border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[9px] font-mono text-accent tracking-widest uppercase block mb-1">Потрібен детальний аналіз?</span>
            <p className="font-display text-xl sm:text-2xl text-white/90 font-normal">Діагностичне 3D-КТ сканування при першому візиті клініки</p>
          </div>
          <a href="#contact" className="bg-accent hover:bg-accent-deep text-white px-6 py-3.5 text-[10px] font-bold tracking-wider uppercase transition-colors whitespace-nowrap font-mono rounded-none">
            Записатись на КТ
          </a>
        </div>

      </div>
    </section>
  );
}
