
"use client";
import { useLocale } from '@/lib/i18n';

export default function CasesGallery() {
  const { t } = useLocale();

  // Selected client images representing actual treatment room diagnostics, setups and clinic views
  const cases = [
    {
      url: "https://praktika.dentist/wp-content/uploads/2026/07/frame-99.jpg.webp",
      alt: "Цифровий знімок",
      tag: "Ортодонтія"
    },
    {
      url: "https://praktika.dentist/wp-content/uploads/2026/06/metalevi-instrumenty-na-sterylnomu-pidnosu-1.jpg.webp",
      alt: "Стерильні інструменти",
      tag: "Хірургія"
    },
    {
      url: "https://praktika.dentist/wp-content/uploads/2025/12/2-800x533.jpg",
      alt: "Діагностична зона",
      tag: "Контроль"
    },
    {
      url: "https://praktika.dentist/wp-content/uploads/2025/12/3-800x533.jpg",
      alt: "Ортопедичний кабінет",
      tag: "Протезування"
    },
    {
      url: "https://praktika.dentist/wp-content/uploads/2025/12/4-800x533.jpg",
      alt: "Робоче місце лікаря",
      tag: "Мікроскоп"
    },
    {
      url: "https://praktika.dentist/wp-content/uploads/2025/12/5-800x533.jpg",
      alt: "Операційний блок",
      tag: "Імплантація"
    }
  ];

  return (
    <section id="cases" className="py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-2xs font-bold uppercase tracking-widest text-accent">
            {t('cases.kicker')}
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl leading-tight tracking-tight text-primary">
            {t('cases.title')}
          </h2>
          <p className="text-sm text-text-main/70 leading-relaxed max-w-2xl">
            {t('cases.subtitle')}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((img, idx) => (
            <div 
              key={idx} 
              className="bg-white p-3 rounded-lg border border-primary/5 shadow-sm group hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="overflow-hidden rounded relative">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-primary text-white text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  {img.tag}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-primary">{img.alt}</span>
                <span className="text-2xs text-text-main/50 uppercase tracking-widest font-body">Кейс #{idx + 104}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
