
"use client";
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();
  const stats = t('stats') as Array<{ value: string; label: string }>;

  return (
    <section className="bg-primary/95 border-y border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:text-left relative group">
              <div className="font-display font-extrabold text-4xl lg:text-5xl text-accent leading-none tracking-tight">
                {stat.value}
              </div>
              <div className="text-2xs uppercase tracking-widest text-white/60 mt-3 leading-relaxed max-w-[180px] mx-auto md:mx-0">
                {stat.label}
              </div>
              {i < 3 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
