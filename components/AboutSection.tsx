
"use client";
import { useLocale } from '@/lib/i18n';

export default function AboutSection() {
  const { t } = useLocale();

  return (
    <section id="about" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Subtle watermark in background */}
      <div className="absolute bottom-10 left-5 text-watermark text-[8rem] opacity-5 select-none pointer-events-none tracking-tighter">
        EST. 2018
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual Collages using Client Images 4 & 5 */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            <div className="col-span-8">
              <img 
                src="https://praktika.dentist/wp-content/uploads/2025/12/4-800x533.jpg" 
                alt={t('about.image1_alt')}
                className="w-full rounded-lg shadow-xl object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="col-span-7 col-start-5 -mt-20">
              <img 
                src="https://praktika.dentist/wp-content/uploads/2025/12/5-800x533.jpg" 
                alt={t('about.image2_alt')}
                className="w-full rounded-lg shadow-2xl object-cover aspect-[4/3] border-4 border-bg-light relative z-10"
              />
            </div>
            
            {/* Signature detail: mini text panel */}
            <div className="absolute right-0 bottom-[-20px] bg-primary text-white p-4 rounded shadow-lg max-w-[200px] z-20">
              <p className="text-2xs font-bold text-accent uppercase tracking-widest">ЛОКАЛЬНЕ СЛОВО</p>
              <p className="font-display font-semibold italic text-sm mt-1">«Харків вартий найкращої цифрової медицини»</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-2xs font-bold uppercase tracking-widest text-accent">
              {t('about.kicker')}
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl leading-tight tracking-tight text-primary">
              {t('about.title')}
            </h2>
            <div className="w-12 h-1 bg-accent" />
            
            <p className="text-sm text-text-main/80 leading-relaxed pt-2">
              {t('about.text1')}
            </p>
            <p className="text-sm text-text-main/80 leading-relaxed">
              {t('about.text2')}
            </p>

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
