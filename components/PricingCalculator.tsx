
"use client";
import { useState, useEffect, useTransition } from "react";
import { useLocale } from "@/lib/i18n";
import pricing from "@/lib/pricing.json";

export default function PricingCalculator() {
  const { t } = useLocale();
  const [teethCount, setTeethCount] = useState(1);
  const [sedationHours, setSedationHours] = useState(0);
  const [boneGraft, setBoneGraft] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [isPending, startTransition] = useTransition();

  // Dynamic live calculation
  useEffect(() => {
    startTransition(() => {
      let total = 0;
      
      // If full arch restoration estimation requested
      if (teethCount >= 10) {
        total = pricing.basePrices.allOn4; // flat rate All on 4 base
        if (teethCount >= 12) {
          total = pricing.basePrices.allOn6; // flat rate All on 6 base
        }
      } else {
        total = teethCount * pricing.basePrices.implantationSingle;
      }

      total += sedationHours * pricing.multipliers.sedationPerHour;
      
      if (boneGraft) {
        total += pricing.multipliers.boneGrafting;
      }

      setEstimatedPrice(total);
    });
  }, [teethCount, sedationHours, boneGraft]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("uk-UA").format(value);
  };

  return (
    <section id="calculator" className="py-12 md:py-20 lg:py-24 bg-bg-light relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent text-xs font-bold tracking-widest uppercase block mb-3">
            {t("calculator.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary leading-tight tracking-tight mb-6">
            {t("calculator.title") as string}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("calculator.subtitle") as string}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Controls Card */}
          <div className="lg:col-span-7 bg-white p-8 rounded border border-border-subtle flex flex-col gap-8 shadow-sm">
            
            {/* Implants slider */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-primary">{t("calculator.labelTeeth") as string}</span>
                <span className="text-accent font-bold font-display text-lg">{teethCount}</span>
              </div>
              <input
                type="range"
                min="1"
                max="14"
                value={teethCount}
                onChange={(e) => setTeethCount(parseInt(e.target.value))}
                className="w-full accent-accent h-2 bg-bg-light rounded-lg cursor-pointer"
                aria-label={t("calculator.labelTeeth") as string}
              />
              <div className="flex justify-between text-[10px] text-text-muted font-semibold uppercase">
                <span>1 Імплантат</span>
                <span>Все на 4 ( All on 4 )</span>
                <span>Повна щелепа ( All on 6 )</span>
              </div>
            </div>

            {/* Sedation slider */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-primary">{t("calculator.labelSedation") as string}</span>
                <span className="text-accent font-bold font-display text-lg">{sedationHours} год</span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                value={sedationHours}
                onChange={(e) => setSedationHours(parseInt(e.target.value))}
                className="w-full accent-accent h-2 bg-bg-light rounded-lg cursor-pointer"
                aria-label={t("calculator.labelSedation") as string}
              />
              <div className="flex justify-between text-[10px] text-text-muted font-semibold uppercase">
                <span>Місцева анестезія</span>
                <span>2 години наркозу</span>
                <span>5 годин ( Складна операція )</span>
              </div>
            </div>

            {/* Bone Graft Toggle */}
            <div className="flex flex-col gap-3 border-t border-border-subtle pt-6">
              <span className="text-sm font-bold text-primary">{t("calculator.labelBoneGraft") as string}</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => setBoneGraft(false)}
                  className={`py-3 px-4 rounded text-xs font-bold uppercase tracking-wider text-center border transition-all ${
                    !boneGraft 
                      ? "bg-primary border-primary text-white" 
                      : "bg-white border-border-subtle text-text-muted hover:border-primary/40"
                  }`}
                >
                  {t("calculator.boneGraftNo") as string}
                </button>
                <button
                  type="button"
                  onClick={() => setBoneGraft(true)}
                  className={`py-3 px-4 rounded text-xs font-bold uppercase tracking-wider text-center border transition-all ${
                    boneGraft 
                      ? "bg-primary border-primary text-white" 
                      : "bg-white border-border-subtle text-text-muted hover:border-primary/40"
                  }`}
                >
                  {t("calculator.boneGraftYes") as string}
                </button>
              </div>
            </div>

          </div>

          {/* Right Calculations Panel */}
          <div className="lg:col-span-5 bg-primary text-white p-8 rounded border border-white/5 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-accent text-[11px] font-semibold tracking-wider uppercase block mb-4">
                ПОПЕРЕДНІЙ РЕЗУЛЬТАТ
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display mb-8">
                {t("calculator.estimatedTitle") as string}
              </h3>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className={`text-4xl sm:text-6xl font-bold text-accent font-display tracking-tight transition-opacity ${isPending ? 'opacity-50' : 'opacity-100'}`}>
                  {formatCurrency(estimatedPrice)}
                </span>
                <span className="text-lg font-bold font-display text-white/60">{pricing.currency}</span>
              </div>
              
              <p className="text-white/50 text-xs leading-relaxed mt-4">
                {t("calculator.estimationsNote") as string}
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <a
                href="#booking"
                className="block w-full bg-accent hover:bg-accent-dark text-white text-center py-4 text-xs font-bold uppercase tracking-wider transition-colors glow-accent"
              >
                {t("calculator.cta") as string}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
