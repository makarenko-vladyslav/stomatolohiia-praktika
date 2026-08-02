"use client";
import { useLocale } from "@/lib/i18n";

export default function Gallery() {
  const { t } = useLocale();
  const photos = t("gallery.photos") as string[];

  return (
    <section id="gallery" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-accent tracking-[0.25em] uppercase mb-4 block font-mono">
            {t("gallery.kicker")}
          </span>
          <h2 className="heading-display text-3xl sm:text-5xl text-text-main max-w-2xl mx-auto">
            {t("gallery.title")}
          </h2>
        </div>

        {/* PHOTO MATRIX MASONRY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos && photos.map((url, i) => (
            <div key={i} className="relative group overflow-hidden border border-border-subtle bg-card-light">
              <img
                src={url}
                alt={`Цифрова Стоматологія Praktika клініка простір ${i+1}`}
                className="w-full h-80 object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('img-fallback');
                }}
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <div className="bg-primary/90 border border-white/10 p-4 w-full text-white">
                  <span className="block text-[8px] font-mono tracking-widest text-accent uppercase">Хірургічний кабінет 0{i+1}</span>
                  <span className="block text-xs font-display italic mt-1 text-white/90">Клінічний кабінет цифрового сканування</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
