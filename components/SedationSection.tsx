
"use client";
import { useLocale } from '@/lib/i18n';

export default function SedationSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-[10%] left-[-5%] text-watermark text-[16rem] hidden lg:block select-none pointer-events-none">
        SLEEP
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <span className="text-2xs font-bold uppercase tracking-widest text-accent">
              {t('sedation.kicker')}
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl leading-tight tracking-tight text-white">
              {t('sedation.title')}
            </h2>
            <div className="w-12 h-1 bg-accent" />
            <p className="font-body text-white/70 text-sm leading-[1.6]">
              {t('sedation.desc')}
            </p>

            {/* Checklist items using typographic markers */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <span className="text-accent font-extrabold text-xs">✓</span>
                <span className="text-sm font-semibold text-white">{t('sedation.point1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-extrabold text-xs">✓</span>
                <span className="text-sm font-semibold text-white">{t('sedation.point2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-extrabold text-xs">✓</span>
                <span className="text-sm font-semibold text-white">{t('sedation.point3')}</span>
              </li>
            </ul>

            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex bg-accent text-primary hover:bg-white hover:text-primary transition-all duration-300 font-bold text-2xs uppercase tracking-widest px-6 py-3.5 rounded"
              >
                {t('common.cta')}
              </a>
            </div>
          </div>

          {/* Client Image 7 - Damon Q brace representation */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-primary/40 p-2 shadow-2xl">
              <img 
                src="https://praktika.dentist/wp-content/uploads/2026/07/damon-q-chy-damon-clear.jpg.webp" 
                alt="Complex Sedation Dentistry" 
                className="w-full object-cover rounded aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-6 right-6 bg-accent/90 text-primary px-3 py-1 rounded text-2xs font-bold uppercase tracking-wider">
                100% Безпека
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
