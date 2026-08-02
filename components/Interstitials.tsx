"use client";

interface StatementBandProps {
  text: string;
}

export function StatementBand({ text }: StatementBandProps) {
  return (
    <section className="bg-primary text-white py-12 relative overflow-hidden select-none border-y border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
      <div className="container-custom flex justify-center items-center text-center">
        <p className="font-display italic text-[clamp(1.2rem,2.5vw,2rem)] tracking-wide leading-relaxed max-w-4xl text-white/95">
          {text}
        </p>
      </div>
    </section>
  );
}

interface LabeledHairlineProps {
  label: string;
}

export function LabeledHairline({ label }: LabeledHairlineProps) {
  return (
    <div className="relative w-full flex items-center justify-center my-8 select-none">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-border-subtle/40" />
      </div>
      <div className="relative px-6 bg-bg-light">
        <span className="font-body text-[0.625rem] text-text-muted uppercase tracking-[0.3em] font-semibold">
          {label}
        </span>
      </div>
    </div>
  );
}

interface WatermarkStripProps {
  word: string;
}

export function WatermarkStrip({ word }: WatermarkStripProps) {
  return (
    <section className="py-8 bg-bg-alt/50 overflow-hidden relative select-none flex flex-col items-center justify-center">
      {/* High-end technical coordinate axis drawing instead of giant noisy watermark text */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.05] flex items-center justify-center">
        <div className="w-11/12 h-px bg-gradient-to-r from-transparent via-text-main to-transparent" />
      </div>
      <div className="w-full border-y border-border-subtle/20 py-3 relative z-10 flex justify-center">
        <span className="font-body text-[0.55rem] uppercase tracking-[0.4em] text-text-muted/65 text-center">
          • ХІРУРГІЯ • ІМПЛАНТАЦІЯ • ЦИФРОВА ДІАГНОСТИКА • СЕДАЦІЯ •
        </span>
      </div>
    </section>
  );
}
