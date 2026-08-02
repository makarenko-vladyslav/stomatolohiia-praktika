
"use client";
import { useLocale } from '@/lib/i18n';

export default function VideoShowcase() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-2xs font-bold uppercase tracking-widest text-accent">
              КЛІНІЧНА ДОКАЗОВІСТЬ
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl leading-tight tracking-tight text-white">
              Робота під мікроскопом з 30-кратним збільшенням
            </h2>
            <div className="w-12 h-1 bg-accent" />
            <p className="font-body text-white/70 text-sm leading-[1.6]">
              Ми знімаємо на відео та документуємо складні хірургічні маніпуляції. Це дає пацієнту повну впевненість у відповідності лікування світовим стандартам мікрохірургії та імплантології.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex bg-accent text-primary hover:bg-white hover:text-primary transition-all duration-300 font-bold text-2xs uppercase tracking-widest px-6 py-3.5 rounded"
              >
                {t('common.cta')}
              </a>
            </div>
          </div>

          {/* Standard playable Stock Video 2 showing microscopic detail */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/40 p-2 shadow-2xl">
              <video 
                controls 
                preload="none"
                poster="https://images.pexels.com/videos/4490546/pexels-photo-4490546.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
                className="w-full aspect-video object-cover rounded"
              >
                <source src="https://videos.pexels.com/video-files/4490546/4490546-hd_1280_720_50fps.mp4" type="video/mp4" />
              </video>
              <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md text-white border border-white/10 text-3xs font-semibold uppercase tracking-widest px-3 py-1 rounded">
                відео процесу лікування
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
