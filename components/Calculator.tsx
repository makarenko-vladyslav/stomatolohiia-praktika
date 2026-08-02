"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';

export default function Calculator() {
  const { t } = useLocale();
  const [selectedType, setSelectedType] = useState('all4');
  const [extraSedation, setExtraSedation] = useState(false);
  const [extraZirconia, setExtraZirconia] = useState(false);
  const [extraBone, setExtraBone] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let base = 0;
    if (selectedType === 'single') base = pricing.basePrices.singleImplant;
    else if (selectedType === 'all4') base = pricing.basePrices.allOn4;
    else if (selectedType === 'all6') base = pricing.basePrices.allOn6;
    else if (selectedType === 'zygoma') base = pricing.basePrices.zygoma;

    if (extraSedation) base += pricing.options.sedation.price;
    if (extraZirconia) base += pricing.options.zirconiaCrown.price;
    if (extraBone) base += pricing.options.boneGrafting.price;

    setTotalCost(base);
  }, [selectedType, extraSedation, extraZirconia, extraBone]);

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Layer 1: Kicker */}
        <span className="text-[10px] tracking-[0.25em] text-accent font-bold uppercase block mb-3 font-mono">
          КЛІНІЧНА ДІАГНОСТИКА ТА ОЦІНКА ВАРТОСТІ
        </span>

        {/* Layer 2: Heading & Subtitle */}
        <div className="mb-16 max-w-3xl">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.1] mb-6">
            {t('calculator.title') as string}
          </h2>
          <p className="text-primary/75 text-sm leading-relaxed">
            {t('calculator.subtitle') as string}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Layer 3: Opaque Light Option Blocks */}
          <div className="lg:col-span-7 bg-white border border-primary/10 p-8 sm:p-12 shadow-sm">
            
            {/* Restoration choices */}
            <div className="mb-10">
              <label className="block text-[10px] uppercase tracking-widest text-primary/50 mb-4 font-bold font-mono">
                {t('calculator.typeLabel') as string}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(Object.keys(pricing.basePrices) as Array<keyof typeof pricing.basePrices>).map((key) => {
                  let mappedKey = 'single';
                  if (key === 'allOn4') mappedKey = 'all4';
                  else if (key === 'allOn6') mappedKey = 'all6';
                  else if (key === 'zygoma') mappedKey = 'zygoma';

                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedType(mappedKey)}
                      className={`p-5 border text-left transition-all duration-300 ${
                        selectedType === mappedKey
                          ? 'border-accent bg-accent/5 text-primary'
                          : 'border-primary/10 hover:border-primary/30 text-primary/70 bg-transparent'
                      }`}
                    >
                      <span className="block text-xs uppercase tracking-wider font-bold font-mono">
                        {t(`calculator.types.${mappedKey}`) as string}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Extra additions selection */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-primary/50 mb-4 font-bold font-mono">
                {t('calculator.optionsLabel') as string}
              </label>
              <div className="flex flex-col gap-4 font-mono">
                <label className="flex items-center gap-4 cursor-pointer p-4 border border-primary/10 hover:border-primary/20 bg-primary/[0.01] transition-all">
                  <input
                    type="checkbox"
                    checked={extraSedation}
                    onChange={(e) => setExtraSedation(e.target.checked)}
                    className="w-4 h-4 accent-accent bg-transparent border-primary/20"
                  />
                  <span className="text-xs sm:text-sm text-primary/80 font-medium">
                    {t('calculator.options.sedation') as string} <span className="text-accent tabular-nums font-bold font-mono">({pricing.options.sedation.price.toLocaleString()} UAH)</span>
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer p-4 border border-primary/10 hover:border-primary/20 bg-primary/[0.01] transition-all">
                  <input
                    type="checkbox"
                    checked={extraZirconia}
                    onChange={(e) => setExtraZirconia(e.target.checked)}
                    className="w-4 h-4 accent-accent bg-transparent border-primary/20"
                  />
                  <span className="text-xs sm:text-sm text-primary/80 font-medium">
                    {t('calculator.options.zirconia') as string} <span className="text-accent tabular-nums font-bold font-mono">({pricing.options.zirconiaCrown.price.toLocaleString()} UAH)</span>
                  </span>
                </label>
                <label className="flex items-center gap-4 cursor-pointer p-4 border border-primary/10 hover:border-primary/20 bg-primary/[0.01] transition-all">
                  <input
                    type="checkbox"
                    checked={extraBone}
                    onChange={(e) => setExtraBone(e.target.checked)}
                    className="w-4 h-4 accent-accent bg-transparent border-primary/20"
                  />
                  <span className="text-xs sm:text-sm text-primary/80 font-medium">
                    {t('calculator.options.bone') as string} <span className="text-accent tabular-nums font-bold font-mono">({pricing.options.boneGrafting.price.toLocaleString()} UAH)</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Layer 4: Floating High-Contrast Cost Preview Card with Standard CTA Geometry */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-primary text-white p-8 sm:p-12 flex flex-col gap-8 shadow-xl border border-white/5 relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              
              <span className="text-[10px] tracking-widest uppercase text-accent font-bold border-b border-white/10 pb-3 font-mono">
                {t('calculator.totalLabel') as string}
              </span>

              <div className="my-2">
                <span className="font-mono font-bold text-4xl sm:text-5xl text-white transition-all duration-300 tabular-nums">
                  {totalCost.toLocaleString()}
                </span>
                <span className="text-base font-bold text-accent ml-2 uppercase font-mono">{pricing.currency}</span>
              </div>

              <p className="text-xs text-white/70 leading-relaxed">
                {t('calculator.note') as string}
              </p>

              <a
                href="#contact"
                className="w-full py-4 bg-accent hover:bg-white hover:text-primary transition-all duration-300 text-center font-bold text-xs tracking-widest uppercase text-white font-mono"
              >
                {t('calculator.cta') as string}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
