"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLocale();
  const list = t("testimonials.list") as Array<{ name: string; text: string; city: string; years?: string }>;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % list.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [list.length]);

  return (
    <section className="py-24 bg-card-light border-y border-border-subtle relative overflow-hidden">
      
      {/* OVERSIZED TYPOGRAPHIC BACKGROUND METAPHOR */}
      <div className="absolute left-12 top-6 pointer-events-none select-none z-0 overflow-hidden text-border-subtle/40" aria-hidden="true">
        <span className="font-display text-[250px] font-extrabold leading-none select-none">“</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent tracking-[0.25em] uppercase mb-4 block font-mono">
            {t("testimonials.kicker")}
          </span>
          <h2 className="heading-display text-3xl sm:text-5xl text-text-main max-w-2xl mx-auto">
            {t("testimonials.title")}
          </h2>
        </div>

        {/* FEEDBACK SLATE - SINGLE ENHANCED DISPLAY ROW */}
        <div className="max-w-4xl mx-auto bg-bg-light p-8 sm:p-12 border border-border-subtle relative min-h-[300px] flex flex-col justify-between">
          
          <div className="space-y-6">
            <span className="text-accent text-3xl block font-serif leading-none">“</span>
            <p className="font-display italic text-lg sm:text-2xl text-text-main leading-relaxed">
              {list[activeIndex]?.text}
            </p>
          </div>

          <div className="pt-8 border-t border-border-subtle/70 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
            <div>
              <span className="block font-display font-bold text-text-main text-base leading-tight">
                {list[activeIndex]?.name}
              </span>
              <span className="text-[10px] text-text-muted uppercase tracking-wider block mt-1">
                {list[activeIndex]?.city} · {list[activeIndex]?.years}
              </span>
            </div>

            <div className="text-[10px] uppercase text-accent tracking-widest font-bold">
              Верифіковано Google Reviews (4.9 / 5)
            </div>
          </div>

        </div>

        {/* CAROUSEL CONTROLLER DOTS (NO PREV/NEXT ARROWS) */}
        <div className="flex justify-center gap-2 mt-8">
          {list && list.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 transition-all ${idx === activeIndex ? "w-8 bg-accent" : "w-2 bg-border-subtle"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
