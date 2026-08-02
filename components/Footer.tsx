"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-white/70 py-20 border-t border-white/10 relative z-10 overflow-hidden">
      
      {/* GIANT BRAND WORDMARK BLEEDING OFF THE FOOTER BOTTOM EDGE */}
      <div className="absolute bottom-0 left-0 right-0 text-center pointer-events-none select-none z-0 translate-y-1/3 overflow-hidden" aria-hidden="true">
        <span className="font-display font-extrabold text-[15vw] leading-none text-white/5 uppercase select-none tracking-widest">
          PRAKTIKA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* UPPER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* COLUMN 1 */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display font-bold text-white text-3xl tracking-tight">Praktika</span>
            <p className="text-xs text-white/50 max-w-sm leading-relaxed font-mono">
              Харківський стоматологічний центр складної ортопедичної реабілітації. Повна імплантація All-on-4 / All-on-6 за один візит.
            </p>
            <div className="pt-2 text-[10px] uppercase tracking-widest text-accent font-mono">
              {t("footer.license")}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="md:col-span-3 space-y-4 font-mono">
            <span className="text-[10px] text-accent font-bold uppercase tracking-widest block">Контакти</span>
            <ul className="space-y-2 text-xs text-white/60">
              <li>{t("footer.address")}</li>
              <li>+38 050 771 75 35</li>
              <li>praktika.kh@gmail.com</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="md:col-span-2 space-y-4 font-mono">
            <span className="text-[10px] text-accent font-bold uppercase tracking-widest block">Прийомні години</span>
            <ul className="space-y-2 text-xs text-white/60">
              <li>{t("footer.hours")}</li>
              <li>Неділя: Зачинено</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className="md:col-span-2 space-y-4 font-mono">
            <span className="text-[10px] text-accent font-bold uppercase tracking-widest block">Соціальні мережі</span>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <a href="#" className="hover:text-accent transition-colors">INSTAGRAM</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">FACEBOOK</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM METADATA & LINKS */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <span className="text-[9px] uppercase tracking-wider text-white/40">
            © 2026 Стоматологія Praktika. {t("footer.copyright")}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-white/40">
            Клінічна точність та стандарти Planmeca.
          </span>
          <span className="text-[9px] uppercase tracking-wider text-white/40">
            Розроблено <a href="https://makarich.framer.website" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Студія Тест</a>
          </span>
        </div>

      </div>
    </footer>
  );
}
