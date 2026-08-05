"use client";

import { useLocale } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-primary-dark text-bg-light pt-16 pb-12 border-t border-border-light/10 font-body text-xs relative overflow-hidden">
      
      {/* Densest Band: Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info Column */}
          <div className="space-y-4">
            <span className="font-display font-bold text-2xl text-bg-light block">
              {t('brand.fullName') as string}
            </span>
            <p className="text-bg-light/70 leading-relaxed text-[11px]">
              {t('footer.desc') as string}
            </p>
            <div className="text-[10px] font-body text-accent font-semibold pt-1">
              {t('footer.licenseInfo') as string}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-base text-bg-light">
              {t('footer.addressTitle') as string}
            </h4>
            <p className="text-bg-light/80">{t('footer.address') as string}</p>
            <p className="text-accent font-bold tabular-nums">
              <a href="tel:+380507717535">{t('footer.phone') as string}</a>
            </p>
            <p className="text-bg-light/60">{t('footer.email') as string}</p>
          </div>

          {/* Hours Column */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-base text-bg-light">
              Режим роботы
            </h4>
            <p className="text-bg-light/80">{t('footer.hours') as string}</p>
            <p className="text-bg-light/60 text-[10px]">
              Власна автопарковка біля входу
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-base text-bg-light">
              {t('footer.navTitle') as string}
            </h4>
            <ul className="space-y-2 text-bg-light/70 uppercase text-[10px] tracking-wider">
              <li><a href="#services" className="hover:text-accent">{t('nav.services') as string}</a></li>
              <li><a href="#calculator" className="hover:text-accent">{t('nav.calculator') as string}</a></li>
              <li><a href="#zygoma" className="hover:text-accent">{t('nav.zygoma') as string}</a></li>
              <li><a href="#lab" className="hover:text-accent">{t('nav.lab') as string}</a></li>
              <li><a href="#cases" className="hover:text-accent">{t('nav.cases') as string}</a></li>
              <li><a href="#faq" className="hover:text-accent">{t('nav.faq') as string}</a></li>
            </ul>
          </div>

        </div>

        {/* Social Row as Text Links */}
        <div className="pt-6 border-t border-border-light/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-[10px] uppercase font-body text-bg-light/50 tracking-widest">
            ОФІЦІЙНІ КАНАЛИ ТА РЕЙТИНГ:
          </span>
          <div className="flex flex-wrap gap-6 text-[11px] font-body text-accent font-bold">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Google Maps (587 Відгуків)</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Telegram Channel</a>
          </div>
        </div>

        {/* Legal Row & Studio Credit */}
        <div className="pt-6 border-t border-border-light/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-bg-light/50 text-[11px]">
          <div>{t('footer.rights') as string}</div>
          <div>
            <a
              href="https://makarich.framer.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent underline transition-colors font-semibold"
            >
              {t('footer.credit') as string}
            </a>
          </div>
        </div>

        {/* Giant Full-Width Brand Wordmark Bleeding off bottom edge */}
        <div aria-hidden="true" className="pt-8 text-center overflow-hidden select-none pointer-events-none -mb-16">
          <span className="font-display text-[15vw] font-bold text-bg-light/[0.04] leading-none uppercase tracking-tighter whitespace-nowrap block">
            PRAKTIKA DENTISTRY
          </span>
        </div>

      </div>
    </footer>
  );
}
