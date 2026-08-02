
"use client";
import { useLocale } from '@/lib/i18n';

export default function LabSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Client Image 3 - Clinic treatment view representing prosthetic matching */}
          <div className="lg:col-span-6 order-last lg:order-first relative">
            <div className="relative overflow-hidden rounded-lg border border-primary/5 bg-white p-2 shadow-xl">
              <img 
                src="https://praktika.dentist/wp-content/uploads/2025/12/3-800x533.jpg" 
                alt="CAD CAM Dental Lab" 
                className="w-full object-cover rounded aspect-[4/3]"
              />
              <div className="absolute bottom-6 left-6 bg-primary text-white p-4 rounded border border-white/5 shadow-lg">
                <p className="text-[20px] font-display font-extrabold text-accent leading-none">3 ГОДИНИ</p>
                <p className="text-[10px] uppercase tracking-wider text-white/70 mt-1">Виготовлення протеза</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <span className="text-2xs font-bold uppercase tracking-widest text-accent">
              {t('lab.kicker')}
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl leading-tight tracking-tight text-primary">
              {t('lab.title')}
            </h2>
            <div className="w-12 h-1 bg-primary" />
            <p className="text-sm text-text-main/80 leading-relaxed font-body">
              {t('lab.desc')}
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <span className="text-primary font-extrabold text-xs">✓</span>
                <span className="text-sm font-semibold text-text-main/85">{t('lab.benefit1')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-extrabold text-xs">✓</span>
                <span className="text-sm font-semibold text-text-main/85">{t('lab.benefit2')}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-extrabold text-xs">✓</span>
                <span className="text-sm font-semibold text-text-main/85">{t('lab.benefit3')}</span>
              </li>
            </ul>

            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex bg-primary text-white hover:bg-accent hover:text-primary transition-all duration-300 font-bold text-2xs uppercase tracking-widest px-6 py-3.5 rounded"
              >
                {t('common.cta')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
