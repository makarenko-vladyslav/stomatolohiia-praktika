"use client";
import { useLocale } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center bg-primary text-white overflow-hidden pt-28 pb-16">
      {/* Background CAD/CAM and 3D precision medical diagnostics visual */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="https://images.pexels.com/videos/7581135/pexels-photo-7581135.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105 select-none pointer-events-none opacity-25"
        >
          <source src="https://videos.pexels.com/video-files/7581135/7581135-hd_1280_720_30fps.mp4" type="video/mp4" />
        </video>
        {/* Single explicit multi-level gradient overlay to secure typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary/95" />
      </div>

      {/* Watermark in background layer */}
      <div className="absolute top-[25%] right-[-5%] text-watermark text-[14rem] hidden lg:block select-none pointer-events-none">
        PRAKTIKA
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            {/* Kicker */}
            <div className="inline-flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-2xs font-bold uppercase tracking-[0.25em] text-accent">
                {t('hero.kicker')}
              </span>
            </div>

            {/* Title where *without* is italicized and styled dynamically */}
            <h1 className="font-display font-semibold text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white max-w-4xl text-wrap">
              {(() => {
                const parts = t('hero.title').split('*');
                if (parts.length >= 3) {
                  return (
                    <>
                      {parts[0]}
                      <span className="italic font-normal text-accent font-display">{parts[1]}</span>
                      {parts[2]}
                    </>
                  );
                }
                return t('hero.title');
              })()}
            </h1>

            {/* Description */}
            <p className="font-body text-white/70 text-sm leading-[1.6] max-w-2xl">
              {t('hero.description')}
            </p>

            {/* Actions Block */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex bg-accent text-primary hover:bg-white hover:text-primary transition-all duration-300 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded shadow-lg shadow-accent/20"
              >
                {t('common.cta')}
              </a>
              <a 
                href="#calculator" 
                className="inline-flex border border-white/20 hover:border-accent text-white hover:text-accent transition-all duration-300 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded"
              >
                {t('common.calculate')}
              </a>
            </div>

            {/* Info bar at bottom */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-3xl">
              <div>
                <p className="text-2xs uppercase tracking-wider text-white/40">{t('hero.phoneLabel')}</p>
                <p className="text-sm font-semibold text-white mt-1">{t('common.phone')}</p>
              </div>
              <div>
                <p className="text-2xs uppercase tracking-wider text-white/40">Локація:</p>
                <p className="text-sm font-semibold text-white mt-1">{t('common.address')}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-2xs uppercase tracking-wider text-white/40">Рейтинг довіри:</p>
                <p className="text-sm font-semibold text-accent mt-1">4.9 ★ 587+ відгуків</p>
              </div>
            </div>
          </div>

          {/* Side card containing real diagnostic center image */}
          <div className="lg:col-span-4 relative">
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-primary/40 p-2 shadow-2xl backdrop-blur-md">
              <img 
                src="https://praktika.dentist/wp-content/uploads/2025/12/2-800x533.jpg" 
                alt="Praktika Clinic Diagnostics" 
                className="w-full aspect-[4/3] object-cover rounded"
                loading="eager"
              />
              <div className="mt-3 p-3 text-2xs text-white/65 uppercase tracking-wider bg-black/30 rounded border border-white/5">
                • {t('hero.addressShort')} • Засновано у 2018 році • Сучасні мікроскопи
              </div>
            </div>
          </div>
        </div>

        {/* Silent scroll cue */}
        <div className="flex flex-col items-center justify-center mt-12 gap-2 select-none">
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}