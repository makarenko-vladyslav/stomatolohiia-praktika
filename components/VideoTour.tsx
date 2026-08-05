"use client";
import { useLocale } from '@/lib/i18n';

export default function VideoTour() {
  const { t } = useLocale();

  return (
    <section className="relative w-full py-24 bg-white border-b border-border-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            {/* Abolished pill design: Clean uppercase tracking-widest editorial kicker */}
            <span className="text-accent font-mono text-[0.75rem] tracking-[0.2em] uppercase block mb-4">
              {t('videoTour.kicker')}
            </span>
            <h2 className="text-[2.5rem] md:text-[3.2rem] font-display font-bold leading-tight">
              {t('videoTour.title')}
            </h2>
            <p className="text-[1.125rem] text-text-main/70 leading-relaxed font-sans">
              {t('videoTour.subtitle')}
            </p>
            <div className="mt-4 p-4 border-l-2 border-accent bg-bg-light rounded-r">
              <span className="text-[0.75rem] font-mono text-text-main/60 uppercase block">СТЕРИЛІЗАЦІЙНА КЛАСУ В</span>
              <p className="text-[0.8rem] text-text-main/80 font-sans mt-1">Використовуємо триступеневий цикл знезараження інструментів за стандартами ISO.</p>
            </div>
          </div>

          <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-border-soft shadow-2xl bg-primary">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover"
              poster={t('videoTour.posterUrl')}
            >
              <source src={t('videoTour.videoUrl')} type="video/mp4" />
            </video>
            {/* Video shadow scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
