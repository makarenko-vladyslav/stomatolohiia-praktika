
"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();
  const currentYear = 2026;

  return (
    <footer className="bg-bg-dark text-white pt-12 md:pt-20 lg:pt-24 pb-8 relative overflow-hidden">
      
      {/* Background Subtle Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/10 to-primary/45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1 Brand wordmark */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-1 w-fit uppercase">
              <span className="font-display font-bold text-xl tracking-wider">Praktika</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            </a>
            <p className="text-white/50 text-xs leading-relaxed max-w-sm">
              Центр сучасної імплантології та щелепно-лицевої хірургії у Харкові. Відновлення посмішок при критичному браку кістки.
            </p>
            <span className="text-white/40 text-[9px] font-mono tracking-widest uppercase font-bold">
              {t("common.since") as string}
            </span>
          </div>

          {/* Col 2 Quick navigation links details */}
          <div className="md:col-span-3 flex flex-col gap-4 font-mono">
            <span className="text-[10px] font-bold tracking-widest text-accent uppercase">навігація</span>
            <div className="flex flex-col gap-2.5">
              <a href="#services" className="text-xs text-white/70 hover:text-white transition-colors">Послуги клініки</a>
              <a href="#cases" className="text-xs text-white/70 hover:text-white transition-colors">Портфоліо кейсів</a>
              <a href="#tech" className="text-xs text-white/70 hover:text-white transition-colors">Наші технології</a>
              <a href="#calculator" className="text-xs text-white/70 hover:text-white transition-colors">Розрахунок вартості</a>
            </div>
          </div>

          {/* Col 3 Contacts info columns */}
          <div className="md:col-span-4 flex flex-col gap-4 font-mono">
            <span className="text-[10px] font-bold tracking-widest text-accent uppercase">контакти у харкові</span>
            <div className="flex flex-col gap-2.5 text-xs text-white/70">
              <span className="text-white font-semibold block">{t("common.address") as string}</span>
              <a href={`tel:${t("common.phone")}`} className="hover:text-accent block transition-colors">{t("common.phone") as string}</a>
              <span>{t("common.email") as string}</span>
              <span className="text-white/40">{t("common.schedule") as string}</span>
            </div>
          </div>

        </div>

        {/* Map & Social Links Plain text row (No icons) */}
        <div className="py-12 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Iframe location layout */}
          <div className="lg:col-span-7 h-48 rounded overflow-hidden border border-white/10 relative">
            <iframe 
              src="https://www.google.com/maps?q=Kharkiv,Nauky+Avenue+77&output=embed" 
              className="w-full h-full border-0 grayscale brightness-90 contrast-125" 
              allowFullScreen={false} 
              loading="lazy" 
              title="Google Map Location"
            />
          </div>

          {/* Plain TEXT Social Links Details */}
          <div className="lg:col-span-5 flex flex-col gap-4 font-mono">
            <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">соціальні мережі клініки</span>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.facebook.com/praktika.dentist" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/5 border border-white/10 hover:border-accent text-[10px] font-bold uppercase tracking-wider transition-colors text-center">
                FACEBOOK
              </a>
              <a href="https://www.instagram.com/praktika.dentist" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/5 border border-white/10 hover:border-accent text-[10px] font-bold uppercase tracking-wider transition-colors text-center">
                INSTAGRAM
              </a>
            </div>
          </div>

        </div>

        {/* Brand Voice Credit & Legal Row (Layer 7 & 6) */}
        <div className="pt-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white/40 border-t border-white/5">
          <div className="flex flex-col gap-1">
            <span>&copy; {currentYear} СТОМАТОЛОГІЯ PRAKTIKA. УСІ ПРАВА ЗАХИЩЕНО.</span>
            <span className="uppercase text-white/20 tracking-wider">Турбота про здоров'я пацієнтів з 2018 року</span>
          </div>
          <span className="uppercase">
            Розроблено —{" "}
            <a 
              href="https://makarich.framer.website" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-accent font-semibold transition-colors"
            >
              Студія Тест
            </a>
          </span>
        </div>

        {/* GIANT FULL-WIDTH WORDMARK (Layer 1 - Bleeding bottom edge) */}
        <div className="w-full text-center overflow-hidden select-none pointer-events-none mt-12 -mb-8" aria-hidden="true">
          <span className="font-display font-bold text-[14vw] leading-none text-white/[0.02] tracking-widest uppercase block whitespace-nowrap">
            PRAKTIKA
          </span>
        </div>

      </div>
    </footer>
  );
}
