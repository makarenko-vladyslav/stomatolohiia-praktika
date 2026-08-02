
"use client";
import { useLocale } from '@/lib/i18n';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  price: string;
  tag: string;
}

export default function ServicesList() {
  const { t } = useLocale();
  const services = t('services.list') as Array<ServiceItem>;

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-2xs font-bold uppercase tracking-widest text-accent">
            {t('services.kicker')}
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl leading-tight tracking-tight text-primary">
            {t('services.title')}
          </h2>
          <p className="text-sm text-text-main/70 leading-relaxed max-w-2xl">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Directory Row List Layout (Pattern 3 variant) */}
        <div className="border-t border-primary/10">
          {services.map((item) => (
            <div 
              key={item.id} 
              className="grid md:grid-cols-12 gap-4 py-8 border-b border-primary/10 items-center hover:bg-primary/[0.01] transition-colors px-2 group"
            >
              {/* Badge/Tag */}
              <div className="md:col-span-2">
                <span className="inline-block px-3 py-1 bg-primary/5 rounded text-[10px] font-bold text-primary/70 uppercase tracking-widest">
                  {item.tag}
                </span>
              </div>

              {/* Title & Description */}
              <div className="md:col-span-6 space-y-1">
                <h3 className="font-display font-semibold text-lg text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-2xs text-text-main/60 max-w-xl font-body">
                  {item.desc}
                </p>
              </div>

              {/* Leader Hairline for Desktop */}
              <div className="hidden md:block md:col-span-1 border-b border-dashed border-primary/25" />

              {/* Price & Action */}
              <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-6">
                <span className="font-display font-extrabold text-base text-primary">
                  {item.price}
                </span>
                <a 
                  href="#contact" 
                  className="w-8 h-8 rounded bg-primary/5 hover:bg-accent text-primary flex items-center justify-center transition-colors text-xs font-bold"
                  aria-label={`Замовити ${item.title}`}
                >
                  →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Base Interstitial text line */}
        <div className="mt-16 text-center">
          <p className="text-2xs text-text-main/50 uppercase tracking-widest">
            * ПОВНИЙ КЛІНІЧНИЙ ПРЕЙСКУРАНТ НАЛІЧУЄ БІЛЬШЕ 50 ПОСЛУГ • КОНСУЛЬТАЦІЯ БЕЗКОШТОВНА ПРИ ЛІКУВАННІ
          </p>
        </div>

      </div>
    </section>
  );
}
