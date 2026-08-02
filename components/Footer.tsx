
"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-primary text-white border-t border-white/5 pt-20 pb-24 lg:pb-12 relative overflow-hidden">
      
      {/* High decorative interstitial hairline banner at footer top */}
      <div className="max-w-7xl mx-auto px-6 border-b border-white/10 pb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div>
            <span className="text-2xs font-bold text-accent uppercase tracking-[0.2em]">ПРАКТИКА СТОМАТОЛОГІЇ</span>
            <p className="font-display font-medium text-xl sm:text-2xl text-white mt-1 leading-snug">
              Робимо відновлення зубів надійним, прогнозованим та безболісним.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:${t('common.phone')}`} 
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded font-bold text-2xs uppercase tracking-widest transition-colors"
            >
              Зателефонувати
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-accent hover:bg-white text-primary rounded font-bold text-2xs uppercase tracking-widest transition-colors"
            >
              Записатись
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-16">
        
        {/* Brand Meta Block */}
        <div className="lg:col-span-4 space-y-6">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-accent flex items-center justify-center font-display font-extrabold text-primary text-base">
              P
            </div>
            <span className="font-display font-extrabold text-xl tracking-wide text-white">
              PRAKTIKA
            </span>
          </a>
          <p className="font-body text-2xs text-white/50 leading-relaxed">
            Центр складної імплантації та естетичного протезування. Засновано у Харкові в 2018 році. Працюємо автономно на базі власних генераторних потужностей.
          </p>
          <p className="text-3xs text-white/30 tracking-wide">
            Ліцензія Міністерства Охорони Здоров'я України (МОЗ) серія АЕ №587391
          </p>
        </div>

        {/* Navigation columns */}
        <div className="lg:col-span-3 space-y-4">
          <p className="text-2xs font-bold uppercase tracking-widest text-accent">Навігація</p>
          <ul className="space-y-2 text-2xs text-white/70">
            <li><a href="#about" className="hover:text-white transition-colors">{t('nav.about')}</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">{t('nav.services')}</a></li>
            <li><a href="#calculator" className="hover:text-white transition-colors">{t('nav.calculator')}</a></li>
            <li><a href="#cases" className="hover:text-white transition-colors">{t('nav.cases')}</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">{t('nav.faq')}</a></li>
          </ul>
        </div>

        {/* Contact info column */}
        <div className="lg:col-span-3 space-y-4">
          <p className="text-2xs font-bold uppercase tracking-widest text-accent">Контакти</p>
          <ul className="space-y-2 text-2xs text-white/70 font-body">
            <li>{t('common.address')}</li>
            <li>{t('common.phone')}</li>
            <li>{t('common.email')}</li>
            <li className="text-accent">{t('common.hours')}</li>
          </ul>
        </div>

        {/* Social feeds */}
        <div className="lg:col-span-2 space-y-4">
          <p className="text-2xs font-bold uppercase tracking-widest text-accent">Ми в соцмережах</p>
          <ul className="space-y-2 text-2xs text-white/70">
            <li><a href="https://www.instagram.com/praktika.dentist/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="https://www.facebook.com/praktika.dentist" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
          </ul>
        </div>

      </div>

      {/* Footer copyright, studio credit & compliance */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-3xs text-white/40 font-body">
        <p>© 2026 Стоматологія Praktika. Харків. Всі права захищено.</p>
        
        {/* Mandatory Studio Credit linked dynamically */}
        <p>
          Розроблено — <a href="https://makarich.framer.website" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Студія Тест</a>
        </p>
      </div>

    </footer>
  );
}
