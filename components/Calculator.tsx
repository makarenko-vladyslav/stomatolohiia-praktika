"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';

// Static mapping to avoid ReferenceError and prevent runtime/build crashes
const serviceMap: Record<string, number> = {
  allOn4: 0,
  allOn6: 1,
  zygoma: 2,
  singleImplant: 3
};

export default function Calculator() {
  const { t } = useLocale();
  const [treatment, setTreatment] = useState<keyof typeof pricing.basePrices>('allOn4');
  const [premiumImplant, setPremiumImplant] = useState<boolean>(true);
  const [sedationHours, setSedationHours] = useState<number>(2);
  const [guideTemplate, setGuideTemplate] = useState<boolean>(true);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    let base = pricing.basePrices[treatment];
    let multiplier = premiumImplant ? pricing.multipliers.premiumSwiss : pricing.multipliers.standardKorean;
    let guideCost = guideTemplate ? pricing.multipliers.digitalGuide : 0;
    let sedationCost = sedationHours * pricing.basePrices.sedationPerHour;

    let computed = Math.round((base * multiplier) + guideCost + sedationCost);
    setTotalPrice(computed);
  }, [treatment, premiumImplant, sedationHours, guideTemplate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setFormData({ name: '', phone: '' });
    }, 5000);
  };

  return (
    <section id="calculator" className="relative w-full py-24 bg-bg-dark text-white border-b border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Controls Panel */}
          <div className="w-full lg:w-7/12 flex flex-col gap-8">
            <div className="flex flex-col items-start gap-4">
              {/* Abolished pill design: Clean uppercase tracking-widest editorial kicker */}
              <span className="text-accent font-mono text-[0.75rem] tracking-[0.2em] uppercase block mb-2">
                {t('calculator.kicker')}
              </span>
              <h2 className="text-[2.5rem] md:text-[3.5rem] font-display font-bold leading-tight text-white">
                {t('calculator.title')}
              </h2>
              <p className="text-[1rem] text-white/70">
                {t('calculator.subtitle')}
              </p>
            </div>

            <div className="flex flex-col gap-6 bg-white/[0.02] p-8 rounded-2xl border border-white/10">
              
              {/* Restoration Type Selection */}
              <div className="flex flex-col gap-3">
                <label className="text-[0.75rem] tracking-[0.2em] font-mono text-white/50 uppercase">
                  {t('calculator.labels.treatmentType')}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(['allOn4', 'allOn6', 'zygoma', 'singleImplant'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setTreatment(key)}
                      className={`p-4 rounded-xl text-left border font-sans transition-all duration-200 cursor-pointer ${treatment === key ? 'border-accent bg-accent/15 text-white' : 'border-white/10 bg-white/[0.01] text-white/80 hover:border-white/20'}`}
                    >
                      <span className="font-semibold block text-[0.95rem]">
                        {t(`services.list.${serviceMap[key]}.title`)}
                      </span>
                      <span className="text-[0.75rem] text-white/40 font-mono mt-1 block">
                        Базова ціна: {pricing.basePrices[key].toLocaleString()} ₴
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Implant System Choice */}
              <div className="flex flex-col gap-3">
                <label className="text-[0.75rem] tracking-[0.2em] font-mono text-white/50 uppercase">
                  {t('calculator.labels.implantSystem')}
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <button
                    onClick={() => setPremiumImplant(true)}
                    className={`p-4 rounded-xl text-left border font-sans transition-all duration-200 cursor-pointer ${premiumImplant ? 'border-accent bg-accent/15 text-white' : 'border-white/10 bg-white/[0.01] text-white/80 hover:border-white/20'}`}
                  >
                    <span className="font-semibold block text-[0.95rem]">Швейцарія (Straumann / Nobel)</span>
                    <span className="text-[0.75rem] text-white/40 font-mono mt-1 block">Коефіцієнт: 1.35x</span>
                  </button>
                  <button
                    onClick={() => setPremiumImplant(false)}
                    className={`p-4 rounded-xl text-left border font-sans transition-all duration-200 cursor-pointer ${!premiumImplant ? 'border-accent bg-accent/15 text-white' : 'border-white/10 bg-white/[0.01] text-white/80 hover:border-white/20'}`}
                  >
                    <span className="font-semibold block text-[0.95rem]">Південна Корея (Osstem / MegaGen)</span>
                    <span className="text-[0.75rem] text-white/40 font-mono mt-1 block">Базовий тариф: 1.0x</span>
                  </button>
                </div>
              </div>

              {/* Slider for sedation hours */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <label className="text-[0.75rem] tracking-[0.2em] font-mono text-white/50 uppercase">
                    {t('calculator.labels.sedation')}
                  </label>
                  <span className="text-[0.9rem] font-mono font-bold text-accent">{sedationHours} год</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="6"
                  step="1"
                  value={sedationHours}
                  onChange={(e) => setSedationHours(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <span className="text-[0.7rem] font-mono text-white/40">Лікування під медикаментозним сном (седацією). Рекомендовано від 2 годин.</span>
              </div>

              {/* Navigation Guide Checkbox */}
              <div className="flex items-center gap-3 py-2">
                <input
                  id="guide"
                  type="checkbox"
                  checked={guideTemplate}
                  onChange={(e) => setGuideTemplate(e.target.checked)}
                  className="w-5 h-5 rounded border-white/10 text-accent focus:ring-accent accent-accent cursor-pointer"
                />
                <label htmlFor="guide" className="text-[0.875rem] font-sans text-white/80 cursor-pointer select-none">
                  {t('calculator.labels.guide')} (+8,000 ₴)
                </label>
              </div>

            </div>
          </div>

          {/* Pricing Panel */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-28 flex flex-col gap-6 bg-white/[0.03] text-white p-8 rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div>
              <span className="text-[0.75rem] tracking-[0.2em] font-mono text-white/50 uppercase block mb-2">ПОПЕРЕДНІЙ КОШТОРИС</span>
              <p className="text-[0.95rem] text-white/85 font-sans leading-relaxed">
                Розрахунок включає хірургічну роботу лікаря, анестезію, тимчасову адаптивну ортопедичну конструкцію та сервісне супроводження клініки.
              </p>
            </div>

            <div className="border-y border-white/10 py-6 my-2">
              <span className="text-[0.75rem] tracking-[0.2em] font-mono text-white/50 uppercase block mb-1">
                {t('calculator.labels.total')}
              </span>
              <span className="text-[2.5rem] md:text-[3rem] font-mono font-bold text-accent">
                {totalPrice.toLocaleString()} ₴
              </span>
            </div>

            {/* Quick Request Form inside Calculator */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder={t('calculator.labels.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-accent text-white rounded p-3 font-sans text-[0.875rem] focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  required
                  placeholder={t('calculator.labels.phone')}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-accent text-white rounded p-3 font-sans text-[0.875rem] focus:outline-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-mono uppercase tracking-wider p-4 rounded text-[0.875rem] transition-all duration-300 cursor-pointer"
              >
                {t('calculator.labels.submit')}
              </button>

              {success && (
                <p className="text-[0.8rem] text-accent font-mono text-center">
                  {t('calculator.labels.success')}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
