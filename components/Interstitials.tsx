"use client";

interface LineInterstitialProps {
  label: string;
}

export function TickerInterstitial({ reverse = false }: { reverse?: boolean }) {
  const marqueeItems = [
    "ЦИФРОВА ЛАБОРАТОРІЯ",
    "3D ТОМОГРАФІЯ PLANMECA",
    "ШВЕЙЦАРСЬКІ ІМПЛАНТАТИ STRAUMANN",
    "СЕДАЦІЯ ТА МЕДИЧНИЙ СОН",
    "МІКРОСКОП ZEISS 30X",
    "ПРИЛЯГАННЯ КОРОНОК ДО 0.01 ММ"
  ];

  return (
    <div className="bg-primary border-y border-white/10 py-4 overflow-hidden relative z-10 select-none">
      <div className="flex whitespace-nowrap">
        <div className={`flex gap-12 font-mono text-[9px] tracking-[0.3em] uppercase text-white/65 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
          {marqueeItems.concat(marqueeItems).map((text, i) => (
            <div key={i} className="flex items-center gap-6">
              <span>{text}</span>
              <span className="text-accent">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LineInterstitial({ label }: LineInterstitialProps) {
  return (
    <div className="bg-bg-light py-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8 font-mono text-[9px] tracking-[0.3em] uppercase text-text-muted/60">
        <div className="h-px bg-border-subtle flex-grow" />
        <span className="whitespace-nowrap">{label}</span>
        <div className="h-px bg-border-subtle flex-grow" />
      </div>
    </div>
  );
}

export function StatementInterstitial({ text }: { text: string }) {
  return (
    <div className="bg-primary/95 text-white py-12 border-y border-white/15 relative z-10 overflow-hidden text-center select-none">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-[8px] font-mono tracking-widest text-accent uppercase block mb-3">
          Клінічна філософія Praktika
        </span>
        <p className="font-display italic text-lg sm:text-2xl text-white/90 leading-relaxed">
          "{text}"
        </p>
      </div>
    </div>
  );
}
