"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  price: string;
  tag?: string;
}

export default function Services() {
  const { t } = useLocale();
  const services = t('services.items') as ServiceItem[] || [];
  const categories = t('services.categories') as Record<string, string> || {};
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  // Find signature item for highlighted container display (e.g., zygoma)
  const signatureItem = services.find(s => s.id === 'zygoma');

  return (
    <section id="services" className="py-16 lg:py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layer 1: Kicker */}
        <span className="text-[10px] tracking-[0.25em] text-accent font-bold uppercase block mb-3 font-mono">
          КЛІНІЧНИЙ ПРАЙС-ЛИСТ ТА ПОСЛУГИ
        </span>

        {/* Layer 2: Heading & Lede */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          <div className="lg:col-span-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.1]">
              {t('services.title') as string}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-primary/75 text-sm sm:text-base leading-relaxed">
              {t('services.subtitle') as string}
            </p>
          </div>
        </div>

        {/* Layer 3: Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-primary/10 pb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all font-mono ${
              activeTab === 'all' ? 'bg-primary text-white' : 'bg-primary/5 text-primary/70 hover:bg-primary/10'
            }`}
          >
            Всі послуги
          </button>
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all font-mono ${
                activeTab === key ? 'bg-primary text-white' : 'bg-primary/5 text-primary/70 hover:bg-primary/10'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Layer 4: Interactive List Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 flex flex-col">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="border-b border-primary/10 py-6 flex flex-col group hover:bg-primary/[0.02] transition-colors duration-300 px-4"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-bold text-base sm:text-lg text-primary group-hover:text-accent transition-colors duration-200">
                        {service.title}
                      </h3>
                      {service.tag && (
                        <span className="px-2 py-0.5 bg-accent/10 text-accent text-[9px] font-bold tracking-widest uppercase font-mono">
                          {service.tag}
                        </span>
                      )}
                    </div>
                    <div className="flex-grow border-b border-dotted border-primary/25 mx-2 min-w-[20px]" />
                    <div className="font-mono font-bold text-sm sm:text-base text-primary tabular-nums">
                      {parseInt(service.price).toLocaleString()} UAH
                    </div>
                  </div>
                  
                  <p className="text-primary/60 text-xs leading-relaxed max-w-xl mt-2">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Layer 5: Highlighted signature item block */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            {signatureItem && (
              <div className="bg-primary text-white p-8 border border-white/10 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                <span className="px-2.5 py-1 bg-accent text-white text-[9px] font-bold tracking-widest uppercase block w-fit mb-6 font-mono">
                  Рекомендоване рішення атрофії
                </span>
                <h4 className="font-display font-bold text-2xl mb-4 text-white leading-tight">
                  {signatureItem.title}
                </h4>
                <p className="text-white/70 text-xs leading-relaxed mb-6">
                  Повне протезування верхньої щелепи за наявності протипоказань до звичайної остеоінтеграції. Робота ведеться виключно виличними імплантатами в глибоких відділах.
                </p>
                <div className="border-t border-white/10 pt-4 mb-6 flex items-baseline justify-between">
                  <span className="text-[10px] tracking-widest text-white/45 font-bold uppercase font-mono">Вартість:</span>
                  <span className="font-mono font-bold text-lg text-accent tabular-nums">від {parseInt(signatureItem.price).toLocaleString()} UAH</span>
                </div>
                <a
                  href="#contact"
                  className="w-full py-4 bg-accent hover:bg-white hover:text-primary transition-all duration-300 text-center font-bold text-xs tracking-widest uppercase block font-mono"
                >
                  Отримати консультацію
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Layer 6: Footnote info line & secondary CTA */}
        <div className="mt-12 pt-6 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <p className="text-primary/60 text-[11px] leading-relaxed max-w-2xl">
            {t('services.footnote') as string}
          </p>
          <a
            href="#calculator"
            className="text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors duration-200 border-b border-accent pb-0.5 font-mono"
          >
            {t('services.secondaryCta') as string} →
          </a>
        </div>

      </div>
    </section>
  );
}
