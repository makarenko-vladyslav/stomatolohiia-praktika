"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-bg-dark text-white pt-16 lg:pt-24 pb-8 border-t border-white/5 relative z-20 overflow-hidden">
      
      {/* Layer 1: Giant full-width brand wordmark bleeding off the bottom edge */}
      <div className="absolute left-0 right-0 bottom-0 pointer-events-none select-none z-0 translate-y-12 md:translate-y-24 opacity-[0.01]">
        <span className="font-display font-extrabold text-[22vw] leading-none text-white whitespace-nowrap block text-center">
          PRAKTIKA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main 4-column stack */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand details & metadata */}
          <div>
            <span className="font-display font-bold text-2xl tracking-widest block mb-4 text-white">
              PRAKTIKA
            </span>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs font-mono mb-6">
              {t('meta.tagline') as string}. Центральна стоматологічна хірургія та повний цикл протезування в Харкові. Засновано у 2018.
            </p>
            <div className="text-[10px] tracking-wider text-accent font-bold uppercase font-mono">
              ЛІЦЕНЗІЯ МОЗ УКРАЇНИ №124-ХР
            </div>
          </div>

          {/* Column 2: Structural Navigation Links */}
          <div>
            <span className="text-[10px] tracking-widest uppercase text-accent font-bold block mb-4 font-mono">
              {t('nav.services') as string}
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-white/60 font-mono">
              <li><a href="#services" className="hover:text-accent transition-colors">All-on-4 / All-on-6</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Імплантація Zygoma</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Хірургічний сон</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Ендодонтія під мікроскопом</a></li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div>
            <span className="text-[10px] tracking-widest uppercase text-accent font-bold block mb-4 font-mono">
              Координати клініки
            </span>
            <address className="not-italic text-xs text-white/60 flex flex-col gap-2.5 font-mono">
              <span className="text-white">Харків, проспект Науки, 77</span>
              <span>Метро 23 Серпня</span>
              <a href="tel:+380507717535" className="hover:text-accent transition-colors font-bold text-white">+38 050 771 75 35</a>
              <a href="mailto:praktika.kh@gmail.com" className="hover:text-accent transition-colors">praktika.kh@gmail.com</a>
            </address>
          </div>

          {/* Column 4: Text Social Connections */}
          <div>
            <span className="text-[10px] tracking-widest uppercase text-accent font-bold block mb-4 font-mono">
              Цифрові Медіа
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-white/60 font-mono">
              <li><a href="https://www.instagram.com/praktika.dentist/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram Profile</a></li>
              <li><a href="https://www.facebook.com/praktika.dentist" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook Page</a></li>
              <li><a href="https://t.me/praktika_kh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Telegram Channel</a></li>
            </ul>
          </div>

        </div>

        {/* Separator Hairline */}
        <div className="border-t border-white/5 my-8" />

        {/* Legal block, Year, Credit & Brand Statement */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] text-white/40 font-mono">
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <span>&copy; {new Date().getFullYear()} Стоматологія Praktika. Всі права застережено.</span>
            <span>•</span>
            <span className="text-accent uppercase font-bold tracking-widest">EST. 2018</span>
          </div>
          <div className="text-center sm:text-right">
            <span>Турбота про біологічну стабільність імплантів. </span>
            <span>Розроблено </span>
            <a 
              href="https://makarich.framer.website" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/60 hover:text-accent font-bold underline underline-offset-4"
            >
              Студія Тест
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
