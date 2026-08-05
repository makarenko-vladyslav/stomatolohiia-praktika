"use client";
import { useLocale } from '@/lib/i18n';

export default function Gallery() {
  const { t } = useLocale();

  // Selected client photographs representing clinical excellence
  const galleryImages = [
    { url: "https://praktika.dentist/wp-content/uploads/2025/12/2-800x533.jpg", alt: "Clinical environment hallway and reception" },
    { url: "https://praktika.dentist/wp-content/uploads/2025/12/3-800x533.jpg", alt: "In house CAD/CAM digital lab" },
    { url: "https://praktika.dentist/wp-content/uploads/2025/12/4-800x533.jpg", alt: "Implantation center operations block" },
    { url: "https://praktika.dentist/wp-content/uploads/2025/12/5-800x533.jpg", alt: "Advanced microscopic treatment bay" },
    { url: "https://praktika.dentist/wp-content/uploads/2025/12/7-800x533.jpg", alt: "CAD/CAM teeth milling technician process" },
    { url: "https://praktika.dentist/wp-content/uploads/2026/06/metalevi-instrumenty-na-sterylnomu-pidnosu-1.jpg.webp", alt: "Sterilized clinical instruments on sterile tray" }
  ];

  return (
    <section className="relative w-full py-24 bg-bg-light border-b border-border-soft">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-start gap-4 mb-16">
          {/* Abolished pill design: Clean uppercase tracking-widest editorial kicker */}
          <span className="text-accent font-mono text-[0.75rem] tracking-[0.2em] uppercase block mb-4">
            {t('gallery.kicker')}
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-display font-bold leading-tight">
            {t('gallery.title')}
          </h2>
          <p className="text-[1.125rem] text-text-main/70 max-w-2xl font-sans">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Dense Masonry Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-xl border border-border-soft group aspect-video ${i === 1 || i === 4 ? 'md:col-span-2 aspect-auto md:h-[300px] lg:h-auto' : ''}`}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-[0.8rem] font-mono uppercase tracking-wider">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
