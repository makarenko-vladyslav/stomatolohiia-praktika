"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function VideoShowcase() {
  const { t } = useLocale();

  return (
    <section className="py-16 lg:py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Description */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-3 font-mono">
              [ INSIDE THE LAB ]
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight mb-6">
              {t('video.title') as string}
            </h2>
            <p className="text-primary/70 text-sm leading-relaxed mb-8">
              {t('video.desc') as string}
            </p>
          </div>

          {/* Action Video Loop #2 */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video overflow-hidden border border-primary/10">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.pexels.com/videos/4490546/pexels-photo-4490546.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
                className="w-full h-full object-cover scale-102"
              >
                <source src="https://videos.pexels.com/video-files/4490546/4490546-hd_1280_720_50fps.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-primary/20 hover:bg-primary/0 transition-colors duration-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
