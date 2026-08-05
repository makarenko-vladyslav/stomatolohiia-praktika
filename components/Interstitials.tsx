"use client";

export function TickerStrip() {
  return (
    <div className="py-3 bg-primary text-bg-light border-y border-border-light/10 overflow-hidden select-none">
      <div className="animate-marquee text-[11px] font-body uppercase tracking-[0.25em] text-accent font-semibold flex gap-12 whitespace-nowrap">
        <span>3D КТ-Томографія</span>
        <span>—</span>
        <span>Скулові Імпланти Zygoma</span>
        <span>—</span>
        <span>Протокол All-on-4 / All-on-6</span>
        <span>—</span>
        <span>Власна CAD/CAM Лабораторія</span>
        <span>—</span>
        <span>Мікроскопія Zeiss 25x</span>
        <span>—</span>
        <span>3D КТ-Томографія</span>
        <span>—</span>
        <span>Скулові Імпланти Zygoma</span>
      </div>
    </div>
  );
}

export function WatermarkStrip() {
  return (
    <section aria-hidden="true" className="py-12 bg-bg-tint border-y border-border-light/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-text-main/10 block select-none">
          DENTISTRY & SURGERY PROTOCOLS
        </span>
        <p className="text-xs font-body uppercase tracking-widest text-text-muted mt-2">
          Хірургічна стоматологія сертифікованого рівня у м. Харків
        </p>
      </div>
    </section>
  );
}

export function HairlineLabelStrip({ label }: { label: string }) {
  return (
    <div className="py-6 bg-bg-light border-y border-border-light/50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 w-full">
        <div className="flex-1 h-[1px] bg-border-light/60" />
        <span className="text-[10px] font-body uppercase tracking-[0.25em] text-accent font-bold whitespace-nowrap">
          {label}
        </span>
        <div className="flex-1 h-[1px] bg-border-light/60" />
      </div>
    </div>
  );
}

export function RatingStrip() {
  return (
    <section className="py-8 bg-primary-dark text-bg-light border-y border-border-light/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="font-display text-xl sm:text-2xl font-semibold text-bg-light">
          Рейтинг <span className="text-accent font-bold">4.9 / 5.0</span> на основі 587 реальних відгуків
        </div>
        <div className="text-xs font-body text-bg-light/70 uppercase tracking-widest tabular-nums">
          м. Харків, пр. Науки, 77
        </div>
      </div>
    </section>
  );
}
