
"use client";
import { useLocale } from "@/lib/i18n";

export default function SleepDentistry() {
  const { t } = useLocale();

  return (
    <section className="py-20 bg-bg-light relative overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left details */}
        <div className="lg:col-span-7 space-y-6">
          <span className="font-body text-xs font-bold text-accent uppercase tracking-widest">
            {t("sleep.kicker") as string}
          </span>
          <h2 className="font-display text-text-main text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-bold">
            {t("sleep.title") as string}
          </h2>
          <p className="font-body text-text-muted text-xs leading-relaxed">
            {t("sleep.desc") as string}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border-subtle">
            <div className="space-y-2">
              <h4 className="font-display font-semibold text-text-main text-base">
                {t("sleep.benefit1_lbl") as string}
              </h4>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed">
                {t("sleep.benefit1_desc") as string}
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-display font-semibold text-text-main text-base">
                {t("sleep.benefit2_lbl") as string}
              </h4>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed">
                {t("sleep.benefit2_desc") as string}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-display font-semibold text-text-main text-base">
                {t("sleep.benefit3_lbl") as string}
              </h4>
              <p className="font-body text-[0.7rem] text-text-muted leading-relaxed">
                {t("sleep.benefit3_desc") as string}
              </p>
            </div>
          </div>
        </div>

        {/* Right cinematic video demo element */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-primary">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover opacity-75"
              poster="https://images.pexels.com/videos/4490546/pexels-photo-4490546.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
            >
              <source src="https://videos.pexels.com/video-files/4490546/4490546-hd_1280_720_50fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-bg-alt border border-border-subtle/40 p-4 rounded shadow-lg hidden md:block">
            <p className="font-body text-[0.65rem] text-accent uppercase tracking-widest font-bold">
              Власна операційна
            </p>
            <p className="font-display text-xs text-text-main font-semibold">
              Контроль життєвих показників за стандартами МОЗ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
