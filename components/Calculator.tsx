"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();

  const [treatmentType, setTreatmentType] = useState<"implantSingle" | "allOn4" | "allOn6">("implantSingle");
  const [implantCount, setImplantCount] = useState<number>(1);
  const [sedation, setSedation] = useState<boolean>(false);
  const [boneGraft, setBoneGraft] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let price = 0;
    
    if (treatmentType === "implantSingle") {
      price = pricing.basePrices.implantSingle * implantCount;
    } else if (treatmentType === "allOn4") {
      price = pricing.basePrices.allOn4;
    } else if (treatmentType === "allOn6") {
      price = pricing.basePrices.allOn6;
    }

    if (sedation) {
      price += pricing.multipliers.sedationPerHour * 2;
    }

    if (boneGraft) {
      price += pricing.multipliers.boneGrafting;
    }

    setTotalPrice(price);
  }, [treatmentType, implantCount, sedation, boneGraft]);

  return (
    <section id="calculator" className="py-24 bg-card-light border-y border-border-subtle relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent tracking-[0.25em] uppercase mb-4 block font-mono">
            {t("calculator.kicker")}
          </span>
          <h2 className="heading-display text-3xl sm:text-5xl text-text-main max-w-2xl mx-auto">
            {t("calculator.title")}
          </h2>
        </div>

        {/* CALCULATOR CONSOLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-bg-light p-8 sm:p-12 rounded-none border border-border-subtle shadow-sm">
          
          <div className="lg:col-span-7 space-y-8">
            
            {/* STEP 1: Treatment Selector */}
            <div>
              <label className="block text-[10px] font-bold font-mono text-text-main uppercase tracking-wider mb-4">
                {t("calculator.step1")}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => { setTreatmentType("implantSingle"); setImplantCount(1); }}
                  className={`px-4 py-3.5 text-[10px] font-bold font-mono uppercase tracking-wider text-center transition-all ${treatmentType === "implantSingle" ? "bg-primary text-white border-primary" : "bg-card-light border border-border-subtle text-text-muted hover:text-text-main"}`}
                >
                  Один імплантат
                </button>
                <button
                  type="button"
                  onClick={() => setTreatmentType("allOn4")}
                  className={`px-4 py-3.5 text-[10px] font-bold font-mono uppercase tracking-wider text-center transition-all ${treatmentType === "allOn4" ? "bg-primary text-white border-primary" : "bg-card-light border border-border-subtle text-text-muted hover:text-text-main"}`}
                >
                  All-on-4
                </button>
                <button
                  type="button"
                  onClick={() => setTreatmentType("allOn6")}
                  className={`px-4 py-3.5 text-[10px] font-bold font-mono uppercase tracking-wider text-center transition-all ${treatmentType === "allOn6" ? "bg-primary text-white border-primary" : "bg-card-light border border-border-subtle text-text-muted hover:text-text-main"}`}
                >
                  All-on-6
                </button>
              </div>
            </div>

            {/* STEP 2: Implant Slider */}
            {treatmentType === "implantSingle" && (
              <div>
                <div className="flex justify-between items-center mb-4 font-mono text-xs">
                  <label className="block text-[10px] font-bold text-text-main uppercase tracking-wider">
                    {t("calculator.step2")}
                  </label>
                  <span className="text-xs font-bold text-accent">{implantCount} од.</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="14"
                  value={implantCount}
                  onChange={(e) => setImplantCount(parseInt(e.target.value))}
                  className="w-full accent-accent bg-border-subtle h-1 cursor-pointer"
                />
                <div className="flex justify-between text-[8px] text-text-muted font-mono mt-1">
                  <span>1 од.</span>
                  <span>14 од. (повний ряд)</span>
                </div>
              </div>
            )}

            {/* STEP 3: Add-ons */}
            <div>
              <label className="block text-[10px] font-bold font-mono text-text-main uppercase tracking-wider mb-4">
                {t("calculator.step3")}
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-4 p-4 bg-card-light border border-border-subtle rounded-none cursor-pointer hover:border-accent/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={sedation}
                    onChange={(e) => setSedation(e.target.checked)}
                    className="w-4 h-4 accent-accent rounded-none cursor-pointer"
                  />
                  <div className="text-xs font-mono">
                    <span className="block font-bold text-text-main">{t("calculator.anesthesia")}</span>
                    <span className="text-text-muted text-[10px] block mt-0.5">Внутрішньовенна анестезія (2 години за замовчуванням)</span>
                  </div>
                </label>

                <label className="flex items-center gap-4 p-4 bg-card-light border border-border-subtle rounded-none cursor-pointer hover:border-accent/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={boneGraft}
                    onChange={(e) => setBoneGraft(e.target.checked)}
                    className="w-4 h-4 accent-accent rounded-none cursor-pointer"
                  />
                  <div className="text-xs font-mono">
                    <span className="block font-bold text-text-main">{t("calculator.grafting")}</span>
                    <span className="text-text-muted text-[10px] block mt-0.5">Синус-ліфтинг або спрямована регенерація кістки</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* ESTIMATION BOARD */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-primary text-white p-8 sm:p-12 border border-white/5 font-mono">
            <div>
              <span className="text-[10px] tracking-widest text-accent uppercase block mb-4">Цифровий кошторис</span>
              <h3 className="text-xs text-white/50 uppercase tracking-widest mb-6">
                {t("calculator.estTitle")}
              </h3>
              <div className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 tabular-nums">
                {totalPrice.toLocaleString()} <span className="text-accent">{pricing.currency}</span>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/10">
              <p className="text-[9px] text-white/50 leading-relaxed font-light">
                {t("calculator.disclaimer")}
              </p>
              <a
                href="#contact"
                className="block text-center bg-accent hover:bg-accent-deep text-white text-xs font-bold py-4 tracking-wider uppercase transition-colors"
              >
                Отримати детальний PDF-план
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
