"use client";
import { useState } from "react";
import { useLocale } from "@/lib/i18n";

export default function Cases() {
  const { t } = useLocale();
  const cases = t("cases.items") as Array<{ title: string; desc: string; beforeUrl: string; afterUrl: string }>;
  
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="cases" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent tracking-[0.25em] uppercase mb-4 block font-mono">
            {t("cases.kicker")}
          </span>
          <h2 className="heading-display text-3xl sm:text-5xl text-text-main max-w-2xl mx-auto">
            {t("cases.title")}
          </h2>
        </div>

        {/* METRICS OF THE ACTIVE CASE */}
        <div className="flex justify-center gap-3 mb-12">
          {cases && cases.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 text-[10px] font-bold font-mono uppercase tracking-wider transition-all ${activeTab === idx ? "bg-primary text-white" : "bg-card-light text-text-muted hover:text-text-main border border-border-subtle"}`}
            >
              Аналіз випадку 0{idx+1}
            </button>
          ))}
        </div>

        {/* COMPARISON SLATE CONTAINER */}
        {cases && cases[activeTab] && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-card-light p-8 border border-border-subtle shadow-sm">
            
            {/* COMPARISON MEDIA BAR */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute top-3 left-3 bg-black/85 text-[8px] font-mono text-white font-bold uppercase px-2.5 py-1 tracking-widest z-10">
                    Стан до лікування
                  </span>
                  <img
                    src={cases[activeTab].beforeUrl}
                    alt="Стан до лікування"
                    className="w-full h-64 object-cover filter grayscale"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('img-fallback');
                    }}
                  />
                  <div className="mt-2 text-[9px] font-mono text-text-muted uppercase tracking-wider">
                    Архівний знімок Planmeca CT
                  </div>
                </div>
                <div className="relative">
                  <span className="absolute top-3 left-3 bg-accent text-[8px] font-mono text-white font-bold uppercase px-2.5 py-1 tracking-widest z-10">
                    Після реабілітації
                  </span>
                  <img
                    src={cases[activeTab].afterUrl}
                    alt="Результат лікування"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('img-fallback');
                    }}
                  />
                  <div className="mt-2 text-[9px] font-mono text-accent uppercase tracking-wider">
                    Результат на 1-й день фіксації
                  </div>
                </div>
              </div>
            </div>

            {/* CASE SPECIFIC DATA */}
            <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border-subtle pt-8 lg:pt-0 lg:pl-10">
              
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-6 bg-accent"></span>
                <span className="text-[10px] font-mono text-accent tracking-widest uppercase">Хірургічний протокол</span>
              </div>
              
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-text-main mb-4 leading-tight">
                {cases[activeTab].title}
              </h3>
              
              <p className="text-text-muted text-xs font-mono leading-relaxed mb-6">
                {cases[activeTab].desc}
              </p>

              <div className="grid grid-cols-2 gap-4 border-y border-border-subtle py-4 mb-6 text-[10px] font-mono text-text-muted">
                <div>
                  <span className="block text-text-main font-bold uppercase">Матеріали:</span>
                  <span>Швейцарія (Straumann)</span>
                </div>
                <div>
                  <span className="block text-text-main font-bold uppercase">Час операції:</span>
                  <span>2 години 40 хв</span>
                </div>
              </div>

              <div>
                <a href="#contact" className="inline-block bg-accent hover:bg-accent-deep text-white px-6 py-3.5 text-[10px] font-mono font-bold tracking-wider uppercase transition-colors">
                  Аналогічний розрахунок випадку <span>↗</span>
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
