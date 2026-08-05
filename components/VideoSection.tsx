"use client";

import { useLocale } from '@/lib/i18n';
import { Reveal } from './motion';

export default function VideoSection() {
  const { t } = useLocale();
  const videoSrc = (t('videoShowcase.video.src') as string) || "https://videos.pexels.com/video-files/4490546/4490546-hd_1280_720_50fps.mp4";
  const posterUrl = (t('videoShowcase.video.poster') as string) || "https://images.pexels.com/videos/4490546/pexels-photo-4490546.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200";

  return (
    <section className="py-20 bg-primary-dark text-bg-light border-b border-border-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-left max-w-3xl mb-12">
          <span className="text-xs font-body uppercase tracking-[0.2em] text-accent font-bold">
            {t('videoShowcase.kicker') as string}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-bg-light mt-2">
            {t('videoShowcase.title') as string}
          </h2>
          <p className="text-xs sm:text-sm font-body text-bg-light/70 mt-3">
            {t('videoShowcase.subtitle') as string}
          </p>
        </Reveal>

        <Reveal className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-border-light/20 shadow-2xl bg-primary relative">
          <video
            controls
            poster={posterUrl}
            className="w-full h-auto aspect-video object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Video Metadata Overlay Strip */}
          <div className="p-4 bg-primary-dark/95 border-t border-border-light/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-bg-light/80">
            <div>
              <span className="text-accent font-bold">Хірургічний Блок:</span> Стерилізація повітря та інструментарію за стандартом МОЗ.
            </div>
            <div className="tabular-nums text-accent font-bold">
              ПР. НАУКИ, 77
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
