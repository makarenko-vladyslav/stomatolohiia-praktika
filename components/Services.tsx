
"use client";
import { useLocale } from "@/lib/i18n";

export default function Services() {
  const { t } = useLocale();

  interface ServiceItem {
    id: string;
    categoryIdx: number;
    title: string;
    desc: string;
    price: string;
    tag: string;
  }

  const services = t("services.items") as ServiceItem[] || [];
  const categories = t("services.categories") as string[] || [];

  return (
    <section id="services" className="py-12 md:py-20 lg:py-24 bg-white relative scroll-mt-20 overflow-hidden">
      
      {/* DECORATIVE WATERMARK */}
      <div className="absolute top-1/2 left-0 z-0 pointer-events-none select-none h-0" aria-hidden="true">
        <span className="text-[12vw] font-display font-bold text-primary/[0.01] tracking-widest uppercase whitespace-nowrap block translate-x-12">
          PRICING
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase block mb-3">
            {t("services.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary leading-tight tracking-tight mb-6">
            {t("services.title") as string}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("services.subtitle") as string}
          </p>
        </div>

        {/* Dynamic ROW based Layout (Price List style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Price List Column */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {categories.map((category, catIdx) => (
              <div key={catIdx} className="flex flex-col">
                {/* Category Header (Layer 4) */}
                <h3 className="font-display font-bold text-lg text-primary border-b border-border-subtle pb-3 mb-6 tracking-wide">
                  {category}
                </h3>
                
                {/* Category Rows Stack */}
                <div className="flex flex-col gap-8">
                  {services.filter(s => s.categoryIdx === catIdx).map((service) => (
                    <div key={service.id} className="group flex flex-col gap-2">
                      {/* Row Title + Dotted line + Price (Layer 5) */}
                      <div className="flex items-baseline justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="font-display font-bold text-base text-primary group-hover:text-accent transition-colors">
                            {service.title}
                          </span>
                          
                          {/* Micro-tags (Layer 6) */}
                          {service.tag && (
                            <span className="bg-primary/5 text-primary font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                              {service.tag}
                            </span>
                          )}
                        </div>
                        
                        {/* Dotted Leader Line */}
                        <div className="flex-grow border-b border-dotted border-border-subtle mx-2" />
                        
                        <span className="font-display font-bold text-base text-primary whitespace-nowrap">
                          {new Intl.NumberFormat("uk-UA").format(Number(service.price))} {t("common.currency") as string}
                        </span>
                      </div>

                      {/* Row Description - Clean Sans font inherited */}
                      <p className="text-text-muted text-xs leading-relaxed max-w-xl">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Feature Sticky Panel (Layer 7 - Signature Element) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 bg-primary rounded p-8 text-white flex flex-col justify-between border border-white/5 overflow-hidden relative shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl -translate-y-12 translate-x-12" />
            
            <div>
              <span className="text-accent text-[9px] font-mono font-bold tracking-widest uppercase block mb-4">
                ХІТ ХІРУРГІЇ
              </span>
              <h3 className="text-2xl font-bold font-display mb-3 text-white">
                All-on-6 тотальна реконструкція
              </h3>
              <p className="text-white/70 text-xs leading-relaxed mb-6">
                Високотехнологічний швейцарський протокол стабілізації зубного ряду. Ідеально при помірній атрофії без кісткової пластики. Тимчасовий незнімний протез за 24 години.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
              <div className="flex justify-between items-baseline font-mono">
                <span className="text-white/50 text-[10px] uppercase">Орієнтовний бюджет:</span>
                <span className="text-xl font-bold text-accent font-display">165 000 грн</span>
              </div>
              <a href="#booking" className="block w-full bg-accent hover:bg-accent-dark text-white text-center py-4 text-[10px] font-bold uppercase tracking-widest transition-colors glow-accent">
                {t("common.cta") as string}
              </a>
            </div>
          </div>

        </div>

        {/* Footnote and secondary action (Layer 8) */}
        <div className="mt-16 pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-[11px] font-mono">
            *Кінцевий прайс-лист та послідовність етапів формуються виключно після детального аналізу КТ щелепи хірургом у клініці.
          </p>
          <a href="#booking" className="text-primary hover:text-accent font-mono text-[11px] font-bold uppercase tracking-widest transition-colors">
            Отримати детальну калькуляцію по КТ →
          </a>
        </div>

      </div>
    </section>
  );
}
