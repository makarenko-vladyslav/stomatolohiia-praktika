
"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';

export default function Calculator() {
  const { t } = useLocale();
  
  // States
  const [selectedProduct, setSelectedProduct] = useState<'implantationBasic' | 'allOn4' | 'allOn6' | 'zygoma'>('allOn4');
  const [atrophy, setAtrophy] = useState<boolean>(false);
  const [techGuided, setTechGuided] = useState<boolean>(true);

  // Compute estimate dynamically based on pricing.json
  const calculateResult = () => {
    let price = pricing.basePrices[selectedProduct];
    
    // Multipliers
    if (atrophy) price = price * pricing.multipliers.complexBoneAtrophy;
    if (techGuided) price = price * pricing.multipliers.guidedSurgery3D;

    const minEstimate = Math.round(price);
    const maxEstimate = Math.round(price * 1.1);

    return { minEstimate, maxEstimate };
  };

  const { minEstimate, maxEstimate } = calculateResult();

  return (
    <section id="calculator" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-center mx-auto">
          <span className="text-2xs font-bold uppercase tracking-widest text-accent">
            {t('calculator.kicker')}
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl leading-tight tracking-tight text-primary">
            {t('calculator.title')}
          </h2>
          <p className="text-sm text-text-main/70 leading-relaxed max-w-2xl mx-auto">
            {t('calculator.subtitle')}
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-bg-light p-8 rounded-lg border border-primary/5 space-y-8 shadow-sm">
            
            {/* Implantation type select list */}
            <div className="space-y-3">
              <label className="text-2xs font-bold uppercase tracking-widest text-primary/60 block">
                {t('calculator.fieldVolume')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button 
                  onClick={() => setSelectedProduct('implantationBasic')}
                  className={`p-4 text-left rounded border transition-all ${
                    selectedProduct === 'implantationBasic' 
                      ? 'border-accent bg-accent/5 text-primary' 
                      : 'border-primary/10 bg-white hover:border-accent text-text-main/80'
                  }`}
                >
                  <p className="text-xs font-bold">Один імплантат</p>
                  <p className="text-2xs font-body text-text-main/60 mt-1">базова хірургія</p>
                </button>

                <button 
                  onClick={() => setSelectedProduct('allOn4')}
                  className={`p-4 text-left rounded border transition-all ${
                    selectedProduct === 'allOn4' 
                      ? 'border-accent bg-accent/5 text-primary' 
                      : 'border-primary/10 bg-white hover:border-accent text-text-main/80'
                  }`}
                >
                  <p className="text-xs font-bold">All-on-4</p>
                  <p className="text-2xs font-body text-text-main/60 mt-1">4 опори + протез</p>
                </button>

                <button 
                  onClick={() => setSelectedProduct('allOn6')}
                  className={`p-4 text-left rounded border transition-all ${
                    selectedProduct === 'allOn6' 
                      ? 'border-accent bg-accent/5 text-primary' 
                      : 'border-primary/10 bg-white hover:border-accent text-text-main/80'
                  }`}
                >
                  <p className="text-xs font-bold">All-on-6</p>
                  <p className="text-2xs font-body text-text-main/60 mt-1">6 опор + протез</p>
                </button>

                <button 
                  onClick={() => setSelectedProduct('zygoma')}
                  className={`p-4 text-left rounded border transition-all ${
                    selectedProduct === 'zygoma' 
                      ? 'border-accent bg-accent/5 text-primary' 
                      : 'border-primary/10 bg-white hover:border-accent text-text-main/80'
                  }`}
                >
                  <p className="text-xs font-bold">Zygoma</p>
                  <p className="text-2xs font-body text-text-main/60 mt-1">вилицева імплантація</p>
                </button>
              </div>
            </div>

            {/* Bone Atrophy radio options */}
            <div className="space-y-3">
              <label className="text-2xs font-bold uppercase tracking-widest text-primary/60 block">
                {t('calculator.fieldAtrophy')}
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-white rounded border border-primary/10 cursor-pointer">
                  <input 
                    type="radio" 
                    checked={!atrophy} 
                    onChange={() => setAtrophy(false)}
                    className="accent-accent"
                  />
                  <span className="text-2xs font-semibold text-text-main/80">
                    {t('calculator.atrophyNormal')}
                  </span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-white rounded border border-primary/10 cursor-pointer">
                  <input 
                    type="radio" 
                    checked={atrophy} 
                    onChange={() => setAtrophy(true)}
                    className="accent-accent"
                  />
                  <span className="text-2xs font-semibold text-text-main/80">
                    {t('calculator.atrophySevere')}
                  </span>
                </label>
              </div>
            </div>

            {/* Guided Surgery selection toggle */}
            <div className="space-y-3">
              <label className="text-2xs font-bold uppercase tracking-widest text-primary/60 block">
                {t('calculator.fieldTech')}
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-white rounded border border-primary/10 cursor-pointer">
                  <input 
                    type="radio" 
                    checked={!techGuided} 
                    onChange={() => setTechGuided(false)}
                    className="accent-accent"
                  />
                  <span className="text-2xs font-semibold text-text-main/80">
                    {t('calculator.techStandard')}
                  </span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-white rounded border border-primary/10 cursor-pointer">
                  <input 
                    type="radio" 
                    checked={techGuided} 
                    onChange={() => setTechGuided(true)}
                    className="accent-accent"
                  />
                  <span className="text-2xs font-semibold text-text-main/80">
                    {t('calculator.techGuided')}
                  </span>
                </label>
              </div>
            </div>

          </div>

          {/* Estimates Display Panel */}
          <div className="lg:col-span-5 bg-primary text-white p-8 rounded-lg shadow-xl space-y-6">
            <h4 className="text-2xs font-bold uppercase tracking-[0.2em] text-accent">
              {t('calculator.labelResult')}
            </h4>
            
            <div className="space-y-2">
              <p className="text-2xs text-white/50 uppercase tracking-widest">Прогнозована вартість:</p>
              <p className="font-display font-extrabold text-3xl sm:text-4xl text-accent transition-all">
                {minEstimate.toLocaleString()} - {maxEstimate.toLocaleString()} {pricing.currency}
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div className="space-y-3 text-2xs text-white/75 leading-relaxed">
              <p className="font-semibold text-white">У вартість включено:</p>
              <ul className="space-y-2 font-body list-disc pl-4 text-white/70">
                <li>Дентальні імплантати обраного бренду</li>
                <li>Виготовлення індивідуального навігаційного шаблону</li>
                <li>Робота хірургічної бригади</li>
                <li>Створення ортопедичного протеза в CAD/CAM лабі</li>
              </ul>
            </div>

            <p className="text-3xs text-white/40 leading-relaxed font-body italic pt-4">
              {t('calculator.disclaimer')}
            </p>

            <a 
              href="#contact" 
              className="block text-center bg-accent text-primary hover:bg-white hover:text-primary transition-all duration-300 font-bold text-2xs uppercase tracking-widest py-4 rounded"
            >
              {t('common.cta')}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
