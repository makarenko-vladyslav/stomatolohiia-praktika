
"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function BeforeAfter() {
  const { t } = useLocale();
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);

  interface Case {
    title: string;
    desc: string;
    before: string;
    after: string;
  }

  const cases = t("beforeAfter.cases") as Case[] || [];

  return (
    <section id="cases" className="py-12 md:py-20 lg:py-24 bg-bg-dark text-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
            {t("beforeAfter.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight mb-6">
            {t("beforeAfter.title") as string}
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            {t("beforeAfter.subtitle") as string}
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex gap-4 border-b border-white/10 pb-4 mb-12 overflow-x-auto hide-scrollbar">
          {cases.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCaseIdx(idx)}
              className={`text-sm font-semibold tracking-wider uppercase whitespace-nowrap pb-2 border-b-2 transition-all duration-300 ${
                activeCaseIdx === idx 
                  ? "border-accent text-accent" 
                  : "border-transparent text-white/50 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Before/After Layout */}
        {cases.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Split Media Panel */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded border border-white/10">
                <div className="absolute top-4 left-4 z-20 bg-bg-dark/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                  ДО ЛІКУВАННЯ
                </div>
                <img
                  src={cases[activeCaseIdx].before}
                  alt="До лікування"
                  loading="lazy"
                  className="w-full h-80 sm:h-96 object-cover grayscale brightness-90 transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('img-fallback');
                  }}
                />
              </div>

              <div className="relative group overflow-hidden rounded border border-accent/20">
                <div className="absolute top-4 left-4 z-20 bg-accent px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                  ПІСЛЯ РЕКОНСТРУКЦІЇ
                </div>
                <img
                  src={cases[activeCaseIdx].after}
                  alt="Після лікування"
                  loading="lazy"
                  className="w-full h-80 sm:h-96 object-cover transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('img-fallback');
                  }}
                />
              </div>
            </div>

            {/* Case Details */}
            <div className="lg:col-span-4 flex flex-col justify-center gap-6">
              <span className="text-accent text-xs font-bold tracking-widest uppercase">
                КЛІНІЧНИЙ КЕЙС №{activeCaseIdx + 124}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">
                {cases[activeCaseIdx].title}
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {cases[activeCaseIdx].desc}
              </p>
              
              <div className="bg-white/5 border border-white/10 p-5 rounded mt-4">
                <span className="text-white/50 text-[11px] font-semibold tracking-wider block mb-2 uppercase">Отримані переваги:</span>
                <p className="text-white/80 text-xs leading-relaxed">
                  Повна регенерація жувальної активності, позбавлення від дискомфорту, омолодження контуру обличчя та відновлення впевненості.
                </p>
              </div>

              <a
                href="#booking"
                className="bg-accent hover:bg-accent-dark text-white text-center py-4 font-bold uppercase tracking-wider text-xs transition-colors glow-accent mt-4"
              >
                Отримати консультацію щодо аналогічного випадку
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
