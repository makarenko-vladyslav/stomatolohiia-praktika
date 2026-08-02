
"use client";
import { useLocale } from '@/lib/i18n';

export default function BottomNav() {
  const { t } = useLocale();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary/95 border-t border-white/10 py-3 px-4 z-40 backdrop-blur-md flex items-center justify-around">
      <a href="#about" className="flex flex-col items-center gap-1 text-[10px] text-white/70 uppercase tracking-wider font-medium">
        <span className="text-xs text-accent">●</span>
        <span>{t('nav.about')}</span>
      </a>
      <a href="#services" className="flex flex-col items-center gap-1 text-[10px] text-white/70 uppercase tracking-wider font-medium">
        <span className="text-xs text-accent">●</span>
        <span>{t('nav.services')}</span>
      </a>
      <a href="#calculator" className="flex flex-col items-center gap-1 text-[10px] text-white/70 uppercase tracking-wider font-medium">
        <span className="text-xs text-accent">●</span>
        <span>{t('nav.calculator')}</span>
      </a>
      <a href="#contact" className="flex flex-col items-center gap-1 text-[10px] text-accent uppercase tracking-wider font-bold">
        <span className="text-xs animate-ping">●</span>
        <span>{t('common.cta')}</span>
      </a>
    </div>
  );
}
