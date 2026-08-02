"use client";
import { useLocale } from "@/lib/i18n";

export default function About() {
  const { t } = useLocale();
  const specs = t("about.specs") as Array<{ val: string; lbl: string }>;

  return (
    <section id="about" className="py-24 bg-bg-light relative overflow-hidden">
      
      {/* BACKGROUND GRAPHIC LAYER */}
      <div className="absolute -right-24 top-24 w-96 h-96 rounded-full border border-accent/5 pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 2-PHOTO CLUSTER WITH FRAMING */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-accent/5 border border-accent/10 -z-10 translate-x-2 translate-y-2 pointer-events-none" />
            <div className="relative">
              <img
                src={t("about.image")}
                alt="Стоматологія Praktika клініка"
                className="w-full h-[450px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('img-fallback');
                }}
              />
              <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm border border-white/10 p-4 max-w-xs">
                <span className="block text-[9px] font-mono tracking-widest text-accent uppercase">Обладнання Zeiss</span>
                <span className="block text-xs text-white/80 font-mono mt-1">Оптичне збільшення до 30х для виключення мікротріщин.</span>
              </div>
            </div>
            {/* Embedded Micro-Caption */}
            <div className="mt-4 flex items-center gap-2">
              <span className="h-px w-8 bg-accent/40"></span>
              <span className="text-[10px] font-mono uppercase text-text-muted tracking-widest">Кабінет Planmeca ProMax 3D</span>
            </div>
          </div>

          {/* COMPREHENSIVE CONTENT BLOCK */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <span className="text-xs font-bold text-accent tracking-[0.25em] uppercase mb-4 block font-mono">
              {t("about.kicker")}
            </span>
            
            <h2 className="heading-display text-3xl sm:text-5xl text-text-main mb-6 leading-tight">
              Архітектура посмішки без компромісів та болю
            </h2>
            
            {/* PULL-QUOTE INTERIOR */}
            <div className="border-l-2 border-accent pl-6 my-6">
              <p className="font-display italic text-lg sm:text-xl text-primary leading-relaxed">
                "Помилка повністю виключається ще на етапі 3D-моделювання майбутнього хірургічного шаблону."
              </p>
              <span className="text-[10px] font-mono uppercase text-text-muted tracking-widest block mt-2">
                — Команда клінічних хірургів Praktika
              </span>
            </div>

            <p className="text-text-muted text-sm font-mono leading-relaxed mb-8">
              {t("about.description")}
            </p>

            {/* SPECS LIST - TABULAR PERFORMANCE */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border-subtle">
              {specs && specs.map((spec, i) => (
                <div key={i} className="border-l border-accent/25 pl-4">
                  <span className="block font-display text-2xl sm:text-3xl text-primary font-bold">{spec.val}</span>
                  <span className="text-[9px] font-mono uppercase text-text-muted tracking-widest mt-1 block leading-tight">{spec.lbl}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:text-accent-deep transition-colors font-mono tracking-wider uppercase">
                Переглянути цифрову інфраструктуру <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
