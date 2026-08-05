"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  tag?: string;
}

export default function Services() {
  const { t } = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const servicesList = t('services.list') as ServiceItem[];
  
  const filteredServices = activeCategory === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === activeCategory);

  const categories = ['all', 'implants', 'ortho', 'general'];

  return (
    <section id="services" className="relative w-full py-24 bg-bg-light border-b border-border-soft scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layer 1: Eyebrow/Kicker (Abolished Pill Badge) */}
        <span className="text-accent font-mono text-[0.75rem] tracking-[0.2em] uppercase block mb-4">
          {t('services.kicker')}
        </span>

        {/* Layer 2: Main Display Heading */}
        <h2 className="text-[2.5rem] md:text-[3.8rem] lg:text-[4.2rem] font-display font-bold leading-tight text-primary max-w-4xl mb-4">
          {t('services.title')}
        </h2>

        {/* Layer 3: Lede Sub-headline */}
        <p className="text-[1.1rem] text-text-main/70 max-w-2xl font-sans mb-12">
          {t('services.subtitle')}
        </p>

        {/* Layer 4: Category Filters (Interactive Controls) */}
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-border-soft pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded font-mono text-[0.75rem] uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeCategory === cat ? 'bg-primary text-white' : 'bg-white hover:bg-border-soft/60 text-text-main/80 border border-border-soft'}`}
            >
              {t(`services.categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Two-Column Layout: Left Highlight (Layer 5) & Right Rows (Layer 6) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Highlight Spotlight (Signature item represented differently) */}
          <div className="lg:col-span-4 bg-primary text-white p-8 rounded-xl border border-white/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <span className="text-[0.65rem] tracking-[0.2em] font-mono text-accent uppercase block mb-3">ХІРУРГІЧНИЙ ФЛАГМАН</span>
            <h3 className="font-display font-medium text-[1.8rem] leading-tight mb-4">
              Вилицева імплантація Zygoma
            </h3>
            <p className="text-[0.85rem] text-white/70 leading-relaxed font-sans mb-6">
              Революційне рішення для тотального відновлення при критичному дефіциті щелепної кістки. Хірургія проводиться безпосередньо у вилицеву кістку без кісткової пластики.
            </p>
            <div className="border-t border-white/10 pt-4 mb-6">
              <span className="text-[0.65rem] font-mono text-white/50 block uppercase mb-1">ТЕРМІН ОПЕРАЦІЇ</span>
              <span className="text-[1.1rem] font-mono font-semibold text-accent">До 24 годин під ключем</span>
            </div>
            <a 
              href="#calculator" 
              className="inline-block w-full text-center bg-accent hover:bg-accent/90 text-white font-mono tracking-widest text-[0.75rem] py-3 px-6 rounded uppercase transition-all"
            >
              Конфігурувати кошторис
            </a>
          </div>

          {/* RIGHT: High density rows list with leaders & tabular prices */}
          <div className="lg:col-span-8 flex flex-col border-t border-border-soft">
            {filteredServices.map((service, index) => (
              <div 
                key={service.id} 
                className="group py-6 border-b border-border-soft transition-all duration-300 hover:px-2"
              >
                {/* Header row: Title + Leader + Price */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.7rem] text-text-main/40">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h4 className="text-[1.15rem] font-display font-bold text-primary group-hover:text-accent transition-colors">
                      {service.title}
                    </h4>
                    {service.tag && (
                      <span className="text-[0.55rem] font-mono bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded uppercase">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  
                  {/* Leader dots & numeric alignment */}
                  <div className="hidden sm:block flex-grow mx-4 leader-dots h-4" aria-hidden="true" />
                  
                  <div className="text-right flex-shrink-0">
                    <span className="font-mono text-[0.95rem] font-semibold text-primary">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Description Row */}
                <p className="text-[0.85rem] text-text-main/60 leading-relaxed font-sans max-w-2xl">
                  {service.description}
                </p>

                {/* Inline checklist with custom clean markers */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-[0.7rem] font-mono text-text-main/40">
                  {service.features.map((feat, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <span className="text-accent font-bold">·</span> {feat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footnote & Secondary CTA (Layer 7 & 8) */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border-soft pt-6 font-mono text-[0.7rem] text-text-main/50">
          <span>
            * Усі хірургічні та ортопедичні ціни є фіксованими та включають клінічний анестезіологічний супровід.
          </span>
          <a 
            href="#calculator" 
            className="text-accent hover:text-primary font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            ВІДКРИТИ КОНФІГУРАТОР КЛІНІЧНОГО КОШТОРИСУ —
          </a>
        </div>

      </div>
    </section>
  );
}
