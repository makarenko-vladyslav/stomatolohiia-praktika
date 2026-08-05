"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';
import { Reveal } from './motion';

export default function Calculator() {
  const { t } = useLocale();

  const [selectedType, setSelectedType] = useState('single');
  const [quantity, setQuantity] = useState(1);
  const [withSedation, setWithSedation] = useState(false);
  const [withBoneGraft, setWithBoneGraft] = useState(false);

  const types = [
    { key: 'single', name: 'Одиночні імпланти (за 1 шт)', basePrice: pricing.basePrices.single_implant },
    { key: 'all_4', name: 'Протокол All-on-4 (ціла щелепа)', basePrice: pricing.basePrices.all_on_4 },
    { key: 'all_6', name: 'Протокол All-on-6 (посилена фіксація)', basePrice: pricing.basePrices.all_on_6 },
    { key: 'zygoma', name: 'Zygoma (скулова імплантація)', basePrice: pricing.basePrices.zygoma },
  ];

  const currentType = types.find(t => t.key === selectedType) || types[0];

  let calculatedPrice = currentType.basePrice * quantity;
  if (withSedation) calculatedPrice += pricing.basePrices.sedation_hour;
  if (withBoneGraft) calculatedPrice *= pricing.multipliers.bone_graft;

  return (
    <section id="calculator" className="py-20 bg-bg-tint border-b border-border-light relative overflow-hidden">
      
      {/* Decorative Watermark Word */}
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] font-display text-[15vw] font-bold uppercase text-text-main whitespace-nowrap">
        CALCULATOR
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-left max-w-3xl mb-12">
          <span className="text-xs font-body uppercase tracking-[0.2em] text-accent font-bold">
            {t('calculator.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-text-main mt-2">
            {t('calculator.title') as string}
          </h2>
          <p className="text-xs sm:text-sm font-body text-text-muted mt-3 leading-relaxed">
            {t('calculator.subtitle') as string}
          </p>
        </Reveal>

        <Reveal className="max-w-5xl mx-auto bg-bg-light border border-border-light p-6 sm:p-10 rounded-2xl shadow-xl">
          <div className="grid md:grid-cols-12 gap-8 items-stretch">
            
            {/* Input Controls */}
            <div className="md:col-span-7 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Type Selection */}
                <div>
                  <label className="block text-xs font-body font-bold uppercase tracking-wider text-text-main mb-3">
                    {t('calculator.typeLabel') as string}
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {types.map((type) => (
                      <button
                        key={type.key}
                        onClick={() => setSelectedType(type.key)}
                        className={`p-3 text-left rounded text-xs font-body transition-all border ${
                          selectedType === type.key
                            ? 'border-accent bg-accent/10 text-text-main font-semibold'
                            : 'border-border-light hover:border-text-muted text-text-muted'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{type.name}</span>
                          <span className="text-accent font-bold tabular-nums">від {type.basePrice.toLocaleString('uk-UA')} грн</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Range Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2 font-body text-xs">
                    <span className="font-bold uppercase tracking-wider text-text-main">
                      {t('calculator.quantityLabel') as string}
                    </span>
                    <span className="text-accent font-bold text-base tabular-nums">{quantity}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full accent-accent cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-body text-text-muted mt-1">
                    <span>1 одиниця</span>
                    <span>2 щелепи</span>
                    <span>4 блоки</span>
                  </div>
                </div>

                {/* Options Checkboxes */}
                <div className="space-y-3 pt-2 font-body text-xs border-t border-border-light/60">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={withSedation}
                      onChange={(e) => setWithSedation(e.target.checked)}
                      className="w-4 h-4 accent-accent rounded"
                    />
                    <span className="text-text-main">{t('calculator.sedationLabel') as string} (+4 500 грн/год)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={withBoneGraft}
                      onChange={(e) => setWithBoneGraft(e.target.checked)}
                      className="w-4 h-4 accent-accent rounded"
                    />
                    <span className="text-text-main">{t('calculator.boneGraftLabel') as string} (+25% до вартості)</span>
                  </label>
                </div>
              </div>

              <div className="text-[10px] font-body text-text-muted pt-2 border-t border-border-light">
                Фіксація ціни у договору під час 3D КТ-сканування
              </div>

            </div>

            {/* Price Output Display Card */}
            <div className="md:col-span-5 bg-primary p-6 sm:p-8 rounded-xl text-bg-light flex flex-col justify-between h-full space-y-6 text-left border border-border-light/20">
              <div className="space-y-4">
                <span className="text-[10px] font-body uppercase tracking-[0.2em] text-accent font-semibold block">
                  {t('calculator.estimateTitle') as string}
                </span>
                <div className="text-3xl sm:text-4xl font-display font-bold text-accent tabular-nums">
                  {Math.round(calculatedPrice).toLocaleString('uk-UA')} грн
                </div>
                <div className="w-full h-[1px] bg-border-light/10" />
                <p className="text-[11px] font-body text-bg-light/70 leading-relaxed">
                  {t('calculator.estimateNotice') as string}
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="#booking"
                  className="block w-full py-3.5 text-center text-xs font-body font-bold uppercase tracking-widest bg-accent text-primary-dark hover:bg-accent-hover transition-colors rounded shadow-md"
                >
                  {t('calculator.cta') as string}
                </a>
                <span className="text-[9px] font-body text-bg-light/50 text-center block">
                  *Безкоштовна консультація при записі сьогодні
                </span>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
