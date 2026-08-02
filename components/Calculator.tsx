
"use client";
import { useState, useEffect } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";

export default function Calculator() {
  const { t } = useLocale();
  const [units, setUnits] = useState(pricing.estimationLogic.defaultUnits);
  const [implantType, setImplantType] = useState<"single" | "all_on_4" | "all_on_6" | "zygoma">("single");
  const [useSleep, setUseSleep] = useState(false);
  const [useCT, setUseCT] = useState(true);
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    let price = 0;
    
    if (implantType === "single") {
      price = pricing.basePrices.implantation_single * units;
      // Add standard crowns for units
      price += pricing.basePrices.crown_zirconia * units;
    } else if (implantType === "all_on_4") {
      price = pricing.basePrices.implantation_all_4;
    } else if (implantType === "all_on_6") {
      price = pricing.basePrices.implantation_all_6;
    } else if (implantType === "zygoma") {
      price = pricing.basePrices.implantation_zygoma;
    }

    if (useSleep) {
      price += pricing.basePrices.medication_sleep_hour * 2; // Default estimation is 2 hours
    }

    if (useCT) {
      price += pricing.basePrices.computed_tomography;
    }

    setEstimate(price);
  }, [units, implantType, useSleep, useCT]);

  return (
    <section id="calculator" className="py-20 bg-bg-alt border-y border-border-subtle/30">
      <div className="container-custom max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <span className="font-body text-xs font-bold text-accent uppercase tracking-widest">
            {t("calculator.kicker") as string}
          </span>
          <h2 className="font-display text-text-main text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-bold">
            {t("calculator.title") as string}
          </h2>
        </div>

        {/* Clean crisp solid card */}
        <div className="bg-bg-light p-6 md:p-10 rounded border border-border-subtle shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Controls Column */}
          <div className="space-y-6">
            
            {/* Preferred System */}
            <div className="space-y-2">
              <label className="font-body text-xs text-text-main font-semibold uppercase tracking-wider block">
                {t("calculator.implant_type") as string}
              </label>
              
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => { setImplantType("single"); }}
                  className={`p-3 text-left font-body text-xs rounded border transition-all ${
                    implantType === "single" ? "bg-accent/10 border-accent text-accent font-bold" : "border-border-subtle text-text-muted"
                  }`}
                >
                  {t("calculator.single_opt") as string}
                </button>
                <button
                  onClick={() => { setImplantType("all_on_4"); }}
                  className={`p-3 text-left font-body text-xs rounded border transition-all ${
                    implantType === "all_on_4" ? "bg-accent/10 border-accent text-accent font-bold" : "border-border-subtle text-text-muted"
                  }`}
                >
                  {t("calculator.all4_opt") as string}
                </button>
                <button
                  onClick={() => { setImplantType("all_on_6"); }}
                  className={`p-3 text-left font-body text-xs rounded border transition-all ${
                    implantType === "all_on_6" ? "bg-accent/10 border-accent text-accent font-bold" : "border-border-subtle text-text-muted"
                  }`}
                >
                  {t("calculator.all6_opt") as string}
                </button>
                <button
                  onClick={() => { setImplantType("zygoma"); }}
                  className={`p-3 text-left font-body text-xs rounded border transition-all ${
                    implantType === "zygoma" ? "bg-accent/10 border-accent text-accent font-bold" : "border-border-subtle text-text-muted"
                  }`}
                >
                  {t("calculator.zygoma_opt") as string}
                </button>
              </div>
            </div>

            {/* Units range slider — only active when single unit selected */}
            {implantType === "single" && (
              <div className="space-y-2 pt-2">
                <div className="flex justify-between font-body text-xs text-text-main font-semibold">
                  <span>{t("calculator.param_label") as string}</span>
                  <span className="text-accent">{units}</span>
                </div>
                <input 
                  type="range" 
                  min={pricing.estimationLogic.minUnits}
                  max={pricing.estimationLogic.maxUnits}
                  value={units}
                  onChange={(e) => setUnits(parseInt(e.target.value))}
                  className="w-full accent-accent bg-border-subtle/60 rounded-lg appearance-none h-1.5 cursor-pointer"
                />
              </div>
            )}

            {/* Support Addons */}
            <div className="space-y-3 pt-2">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox"
                  checked={useSleep}
                  onChange={(e) => setUseSleep(e.target.checked)}
                  className="w-4 h-4 rounded text-accent border-border-subtle focus:ring-accent"
                />
                <span className="font-body text-[0.7rem] text-text-main font-medium">
                  {t("calculator.sleep_option") as string}
                </span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox"
                  checked={useCT}
                  onChange={(e) => setUseCT(e.target.checked)}
                  className="w-4 h-4 rounded text-accent border-border-subtle focus:ring-accent"
                />
                <span className="font-body text-[0.7rem] text-text-main font-medium">
                  {t("calculator.ct_option") as string}
                </span>
              </label>
            </div>

          </div>

          {/* Pricing Display Column */}
          <div className="bg-primary text-white p-6 rounded flex flex-col justify-between border border-white/10">
            <div className="space-y-4">
              <span className="font-body text-[0.6rem] bg-accent text-white px-2 py-1 rounded font-bold uppercase tracking-widest block w-max">
                {t("common.guarantee") as string}
              </span>
              <p className="font-body text-xs text-white/70">
                Остаточний хірургічний протокол визначається хірургом після аналізу комп'ютерної томографії 3D.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-2">
              <span className="font-body text-[0.625rem] text-white/60 uppercase tracking-widest block">
                {t("calculator.total_lbl") as string}
              </span>
              <p className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-accent transition-all duration-300">
                {estimate.toLocaleString()} {pricing.currency}
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#booking"
                className="w-full text-center block bg-accent hover:bg-accent-hover text-white font-body text-xs font-bold uppercase tracking-wider py-3.5 rounded transition-all"
              >
                {t("calculator.cta_calc") as string}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
