"use client";
import { useLocale } from "@/lib/i18n";

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden border-y border-white/10">
      
      {/* WATERMARK BACKGROUND METAPHOR */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        <span className="font-display text-[22vw] font-bold text-white/1 leading-none whitespace-nowrap">
          CAD/CAM
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-accent tracking-[0.25em] uppercase mb-4 block font-mono">
              {t("video.kicker")}
            </span>
            <h2 className="heading-display text-3xl sm:text-5xl text-white mb-6 leading-tight">
              {t("video.title")}
            </h2>
            <p className="text-white/75 text-xs font-mono leading-relaxed mb-8">
              {t("video.desc")}
            </p>
            
            {/* Inline statistics block overlay */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-[10px] font-mono">
              <div>
                <span className="block text-accent font-bold">12 МІКРОНІВ</span>
                <span className="text-white/50">точність прилягання коронки</span>
              </div>
              <div>
                <span className="block text-accent font-bold">1 ГОДИНА</span>
                <span className="text-white/50">час виготовлення у клініці</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative group overflow-hidden border border-white/10 shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={t("video.posterSrc")}
              className="w-full h-96 object-cover"
            >
              <source src={t("video.videoSrc")} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary/35 pointer-events-none mix-blend-multiply" />
            
            <div className="absolute bottom-4 right-4 bg-primary/95 border border-white/10 p-3 text-[9px] font-mono uppercase tracking-widest">
              Digital Milling Live
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
