"use client";
import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();
  const currentYear = 2026;

  return (
    <footer className="relative w-full bg-bg-dark text-white pt-24 pb-12 border-t border-white/5 overflow-hidden">
      
      {/* Giant full-width background brand wordmark bleeding off the bottom */}
      <div className="absolute bottom-[-4rem] left-1/2 -translate-x-1/2 w-full text-center select-none pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <span className="font-display font-black text-white/[0.015] text-[18vw] tracking-tighter leading-none whitespace-nowrap block uppercase">
          PRAKTIKA
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Column 1: Brand descriptor */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-3 text-white group" aria-label="Home link">
              <svg className="w-8 h-8 text-accent group-hover:scale-105 transition-transform duration-300" viewBox="0 0 32 32" fill="none">
                <path d="M9 11C9 18.5 13 23 16 23C19 23 23 18.5 23 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="16" cy="11" r="2" fill="currentColor"/>
              </svg>
              <span className="font-display font-bold text-[1.5rem] tracking-tight">Praktika</span>
            </a>
            <p className="text-[0.8rem] text-white/50 font-sans leading-relaxed max-w-xs mt-2">
              Центр сучасної хірургічної стоматології та тотальної реабілітації у Харкові. Власна зуботехнічна CAD/CAM лабораторія цифрового фрезерування.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <span className="text-[0.65rem] font-mono text-accent uppercase tracking-[0.2em] block mb-1">НАВІГАЦІЯ</span>
            <div className="grid grid-cols-1 gap-2.5 text-[0.8rem] font-mono text-white/60">
              <a href="#services" className="hover:text-white transition-colors">Спектр рішень</a>
              <a href="#calculator" className="hover:text-white transition-colors">Розрахунок вартості</a>
              <a href="#beforeAfter" className="hover:text-white transition-colors">Клінічні результати</a>
              <a href="#about" className="hover:text-white transition-colors">Про технології</a>
              <a href="#faq" className="hover:text-white transition-colors">Довідковий розділ</a>
              <a href="#contact" className="hover:text-white transition-colors">Реєстрація пацієнтів</a>
            </div>
          </div>

          {/* Column 3: Contacts list (separate lines) */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <span className="text-[0.65rem] font-mono text-accent uppercase tracking-[0.2em] block mb-1">КОНТАКТИ</span>
            <div className="flex flex-col gap-2 text-[0.8rem] font-mono text-white/60">
              <span>{t('contact.info.address')}</span>
              <span>+38 050 771 75 35</span>
              <span>praktika.kh@gmail.com</span>
            </div>
          </div>

          {/* Column 4: Clinical Hours list */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <span className="text-[0.65rem] font-mono text-accent uppercase tracking-[0.2em] block mb-1">РОБОЧИЙ ЧАС</span>
            <div className="flex flex-col gap-1 text-[0.8rem] font-mono text-white/60">
              <span>ПН - СБ:</span>
              <span className="text-white font-semibold">09:00 - 19:00</span>
              <span className="text-white/40 text-[0.7rem] mt-1">НД — За запитом чергового хірурга</span>
            </div>
          </div>

        </div>

        {/* Separator Line */}
        <div className="border-t border-white/10 w-full my-8" />

        {/* Social raw TEXT links row */}
        <div className="flex flex-wrap gap-6 font-mono text-[0.65rem] text-accent uppercase tracking-widest mb-12">
          <a href="https://google.com/maps" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GOOGLE MAPS REVIEWS</a>
          <span className="text-white/20">·</span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">FACEBOOK PAGE</a>
          <span className="text-white/20">·</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INSTAGRAM FEED</a>
        </div>

        {/* Legal block, accreditation, and developer details */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[0.7rem] font-mono text-white/40">
          <div className="flex flex-col gap-1.5">
            <span>&copy; {currentYear} {t('footer.copyright')}</span>
            <span className="text-white/20 uppercase text-[0.6rem] tracking-wider leading-relaxed">
              {t('footer.license')}
            </span>
          </div>
          
          {/* Standard legal credit link */}
          <div className="border-t md:border-t-0 border-white/5 pt-4 md:pt-0 w-full md:w-auto">
            Розробка та архітектура <a href="https://makarich.framer.website" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Студія Тест</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
