"use client";
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();

  return (
    <section className="relative w-full bg-primary text-white py-16 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Proof Layer 1: Clean kicker & Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-accent font-mono text-[0.7rem] tracking-[0.2em] uppercase block mb-2">
            {t('socialProof.reviewsBadge')}
          </span>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
            <span className="text-[2.8rem] font-display font-semibold tracking-tight text-white leading-none">
              {t('socialProof.rating')}
            </span>
            <span className="text-[0.75rem] font-mono text-white/50 uppercase tracking-widest">
              {t('socialProof.reviewsCount')}
            </span>
          </div>
        </div>

        {/* Proof Layers 2, 3, 4: Display Quote with Oversized Mark & Attribution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative mb-12">
          
          {/* Large decorative quotation mark background */}
          <div className="absolute -top-12 -left-4 select-none pointer-events-none text-white/[0.03] font-display text-[15rem] leading-none z-0" aria-hidden="true">
            “
          </div>

          <div className="lg:col-span-8 relative z-10">
            <blockquote className="font-display italic text-[1.4rem] md:text-[1.7rem] lg:text-[2rem] text-white/95 leading-relaxed">
              "Ми шукали рішення для батька, якому скрізь відмовляли через резорбцію кістки щелепи. Хірурги клініки розробили та втілили концепцію Zygoma за 24 години. Жодного болю, батько знову посміхається."
            </blockquote>
            
            <div className="mt-6 flex flex-col gap-1">
              <span className="font-mono text-[0.85rem] text-accent font-semibold">
                Марія К. — пацієнтка клініки з 2019 року
              </span>
              <span className="font-sans text-[0.7rem] text-white/40">
                Харків, Україна · Проведено протокол All-on-4 та вилицеву стабілізацію.
              </span>
            </div>
          </div>

          {/* Side stats & verification source (Layer 5) */}
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/10 p-6 rounded-lg flex flex-col gap-4 font-mono text-[0.75rem] text-white/60">
            <span className="text-accent uppercase tracking-widest block border-b border-white/5 pb-2">ВЕРИФІКОВАНІ ДАНІ</span>
            <div className="flex flex-col gap-2 leading-relaxed">
              <span>Джерело: Google Maps Clinical Reviews</span>
              <span>Модерація: Клінічний відділ контролю якості</span>
              <span>Кількість унікальних кейсів: 587+</span>
            </div>
            {/* Dots navigation block simulator (Layer 6) */}
            <div className="flex gap-2 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
