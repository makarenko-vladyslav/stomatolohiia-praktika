
"use client";

// Distinct Type 1: Text Ticker Band
export function InterstitialTicker() {
  return (
    <div className="w-full border-y border-border-soft bg-white py-3.5 overflow-hidden select-none pointer-events-none">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex gap-16 text-text-main/25 font-mono text-[0.65rem] uppercase tracking-[0.25em]">
          <span>· NOBEL BIOCARE SWITZERLAND</span>
          <span>· STRAUMANN PREMIUM IMPLANTS</span>
          <span>· CAD/CAM DIGITAL MILLING LABORATORY</span>
          <span>· MEDICAL SLEEP sedation CONTROL</span>
          <span>· ZYGOMA MAXILLARY STABILIZATION</span>
        </div>
        <div className="flex gap-16 text-text-main/25 font-mono text-[0.65rem] uppercase tracking-[0.25em] pl-16">
          <span>· NOBEL BIOCARE SWITZERLAND</span>
          <span>· STRAUMANN PREMIUM IMPLANTS</span>
          <span>· CAD/CAM DIGITAL MILLING LABORATORY</span>
          <span>· MEDICAL SLEEP sedation CONTROL</span>
          <span>· ZYGOMA MAXILLARY STABILIZATION</span>
        </div>
      </div>
    </div>
  );
}

// Distinct Type 2: Massive standalone statements band (Low contrast Watermark)
export function InterstitialWatermark() {
  return (
    <div className="relative w-full h-36 bg-bg-light overflow-hidden flex items-center justify-center select-none pointer-events-none">
      <span className="font-display uppercase tracking-[0.3em] text-text-main/[0.025] text-[10rem] font-black whitespace-nowrap">
        STERILE THEATER
      </span>
    </div>
  );
}

// Distinct Type 3: Labeled Hairline Separator with Standalone Statement
export function InterstitialStatement() {
  return (
    <div className="w-full bg-white py-12 border-y border-border-soft">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-mono">
        <span className="text-[0.6rem] tracking-[0.25em] text-accent uppercase">
          КЛІНІЧНЕ ПІДТВЕРДЖЕННЯ
        </span>
        <p className="font-display italic text-1.15rem text-primary max-w-2xl leading-relaxed">
          Сучасний операційний блок клініки та зуботехнічна лабораторія функціонують в одному єдиному технологічному контурі.
        </p>
      </div>
    </div>
  );
}
