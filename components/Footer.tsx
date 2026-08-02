
"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t, locale } = useLocale();

  return (
    <footer className="bg-primary text-white pt-24 pb-28 md:pb-16 border-t border-white/5 relative overflow-hidden z-10">
      
      {/* Structural horizontal hairline decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Brand Block */}
        <div className="md:col-span-4 space-y-4">
          <a href="#hero" className="flex flex-col">
            <span className="font-display font-bold text-3xl tracking-wider text-white">
              PRAKTIKA
            </span>
            <span className="font-body text-[0.65rem] text-accent tracking-[0.2em] uppercase font-bold">
              стоматологія
            </span>
          </a>
          <p className="font-body text-[0.7rem] text-white/60 leading-relaxed max-w-sm">
            Стоматологічна клініка повного циклу у Харкові. Спеціалізоване хірургічне лікування, КТ-діагностика та імплантація вилицевих систем Nobel і Straumann.
          </p>
          <p className="font-body text-[0.625rem] text-white/40">
            {t("common.since") as string}
          </p>
        </div>

        {/* Contacts column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-body text-xs uppercase tracking-[0.2em] text-accent font-bold">
            {t("nav.contacts") as string}
          </h4>
          <ul className="space-y-3 font-body text-[0.7rem] text-white/80 leading-relaxed">
            <li>
              <span className="text-accent font-bold select-none">•</span> {t("common.address") as string}
            </li>
            <li>
              <span className="text-accent font-bold select-none">•</span> <a href="tel:+380507717535" className="hover:text-accent font-semibold transition-colors">+38 050 771 75 35</a>
            </li>
            <li>
              <span className="text-accent font-bold select-none">•</span> <a href="mailto:praktika.kh@gmail.com" className="hover:text-accent font-semibold transition-colors">praktika.kh@gmail.com</a>
            </li>
            <li>
              <span className="text-accent font-bold select-none">•</span> {t("common.hours") as string}
            </li>
          </ul>
        </div>

        {/* Navigation column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-body text-xs uppercase tracking-[0.2em] text-accent font-bold">
            Навігація
          </h4>
          <div className="grid grid-cols-2 gap-3 font-body text-[0.65rem] text-white/70 uppercase tracking-widest font-medium">
            <a href="#about" className="hover:text-accent transition-colors">{t("nav.about") as string}</a>
            <a href="#services" className="hover:text-accent transition-colors">{t("nav.services") as string}</a>
            <a href="#implantology" className="hover:text-accent transition-colors">{t("nav.implantology") as string}</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">{t("nav.portfolio") as string}</a>
            <a href="#faq" className="hover:text-accent transition-colors">{t("nav.faq") as string}</a>
            <a href="#booking" className="hover:text-accent transition-colors font-bold text-accent">{t("common.book") as string}</a>
          </div>

          {/* Social Row as text-links */}
          <div className="pt-4 border-t border-white/10 flex items-center space-x-4 select-none">
            <span className="font-body text-[0.6rem] text-white/40 uppercase tracking-wider">Слідкуйте за нами:</span>
            <div className="flex space-x-3 font-body text-[0.65rem] font-bold text-accent">
              <a href="https://instagram.com" className="hover:underline transition-all">IG</a>
              <span className="text-white/20 select-none">/</span>
              <a href="https://facebook.com" className="hover:underline transition-all">FB</a>
              <span className="text-white/20 select-none">/</span>
              <a href="https://youtube.com" className="hover:underline transition-all">YT</a>
            </div>
          </div>
        </div>

      </div>

      {/* Structured Google Maps Integration with non-neutral background container */}
      <div className="container-custom mb-12">
        <div className="w-full h-64 rounded overflow-hidden border border-white/10 shadow-inner relative bg-primary-light">
          <iframe 
            src="https://www.google.com/maps?q=Kharkiv,Nauky+Avenue,77&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            title="Google Maps Location"
          />
        </div>
      </div>

      {/* Huge Typographic wordmark bleeding off the bottom edge (Footer Signature Moment) */}
      <div className="w-full text-center overflow-hidden pointer-events-none select-none my-6">
        <span className="font-display font-bold text-[14vw] text-white/5 tracking-tight leading-none uppercase block translate-y-6">
          PRAKTIKA
        </span>
      </div>

      {/* Bottom Legal bar */}
      <div className="container-custom border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 font-body text-[0.625rem] space-y-4 md:space-y-0 uppercase tracking-widest">
        <p>
          &copy; 2026 Стоматологія Praktika. Всі права захищено. Ліцензія МОЗ АЕ №571344.
        </p>
        <p>
          Розроблено <a href="https://makarich.framer.website" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Студія Тест</a>
        </p>
      </div>
    </footer>
  );
}
