"use client";

import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { Reveal } from './motion';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  price: string;
  desc: string;
  photo: string;
  tag?: string;
  featured?: boolean;
}

export default function Services() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState('Всі послуги');

  const categories = t('services.categories') as string[];
  const items = t('services.items') as ServiceItem[];
  const footnote = t('services.footnote') as string;
  const ctaSecondary = t('services.ctaSecondary') as string;

  const filteredItems = activeTab === 'Всі послуги'
    ? items
    : items.filter(item => item.category === activeTab);

  const featuredItems = items.filter(i => i.featured);

  return (
    <section id="services" className="py-20 bg-bg-light border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-left max-w-3xl mb-12">
          <span className="text-xs font-body uppercase tracking-[0.2em] text-accent font-bold">
            {t('services.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-text-main mt-2">
            {t('services.title') as string}
          </h2>
          <p className="text-xs sm:text-sm font-body text-text-muted mt-3 leading-relaxed">
            {t('services.subtitle') as string}
          </p>
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-border-light">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded text-xs font-body font-semibold uppercase tracking-wider transition-all ${
                activeTab === cat
                  ? 'bg-primary text-bg-light shadow-md'
                  : 'bg-bg-tint text-text-muted hover:text-text-main hover:bg-border-light/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Signature Featured Item Banner (One item highlighted differently) */}
        {activeTab === 'Всі послуги' && featuredItems.length > 0 && (
          <Reveal className="mb-12 bg-primary text-bg-light rounded-xl overflow-hidden border border-border-light/20 shadow-xl grid lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 space-y-4 flex flex-col justify-between">
              <div>
                <div className="inline-block px-2.5 py-1 rounded bg-accent/20 text-accent text-[10px] font-body uppercase tracking-widest font-bold mb-3">
                  {featuredItems[0].tag || 'Ключовий Протокол'}
                </div>
                <h3 className="font-display font-semibold text-2xl text-bg-light">
                  {featuredItems[0].title}
                </h3>
                <p className="font-body text-xs text-bg-light/80 mt-2 leading-relaxed max-w-xl">
                  {featuredItems[0].desc}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border-light/10">
                <span className="font-display font-bold text-2xl text-accent tabular-nums">
                  {featuredItems[0].price}
                </span>
                <a
                  href="#booking"
                  className="px-6 py-3 rounded text-xs font-body font-bold uppercase tracking-widest bg-accent text-primary-dark hover:bg-accent-hover transition-colors"
                >
                  Записатись на консультацію
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative min-h-[220px]">
              <img
                src={featuredItems[0].photo}
                alt={featuredItems[0].title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('img-fallback');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60 lg:opacity-30" />
            </div>
          </Reveal>
        )}

        {/* Price / Offer List as Dense Rows with Leader Lines */}
        <Reveal className="space-y-4 bg-bg-light">
          <div className="divide-y divide-border-light/60 border-t border-b border-border-light">
            {filteredItems.map((item) => (
              <div key={item.id} className="py-4 hover:bg-bg-tint/50 transition-colors px-2 rounded sm:px-4 space-y-2">
                
                {/* Main Row: Title, Dotted Leader, Price */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display font-semibold text-base text-text-main">
                      {item.title}
                    </h3>
                    {item.tag && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-body uppercase tracking-wider bg-accent/15 text-accent font-bold">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  
                  {/* Dotted Leader Line */}
                  <div className="hidden sm:block flex-1 border-b border-dotted border-border-light/80 mx-4 my-1.5" />
                  
                  <span className="font-body font-bold text-sm text-accent whitespace-nowrap tabular-nums">
                    {item.price}
                  </span>
                </div>

                {/* Description & Action Link */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-body text-text-muted">
                  <p className="max-w-2xl leading-relaxed">{item.desc}</p>
                  <a
                    href="#booking"
                    className="text-primary hover:text-accent transition-colors font-semibold uppercase text-[10px] tracking-wider whitespace-nowrap pt-1 sm:pt-0"
                  >
                    Забронювати →
                  </a>
                </div>

              </div>
            ))}
          </div>
        </Reveal>

        {/* Footnote & Secondary CTA */}
        <Reveal className="mt-8 pt-4 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-text-muted">
          <p className="max-w-2xl text-[11px] leading-relaxed">
            {footnote}
          </p>
          <a
            href="#booking"
            className="text-accent font-bold uppercase text-xs tracking-wider hover:underline whitespace-nowrap"
          >
            {ctaSecondary}
          </a>
        </Reveal>

      </div>
    </section>
  );
}
