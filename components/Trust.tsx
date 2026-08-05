"use client";
import { useLocale } from '@/lib/i18n';

interface TrustItem {
  title: string;
  description: string;
}

export default function Trust() {
  const { t } = useLocale();
  const trustList = t('trust.list') as TrustItem[];

  return (
    <section id="about" className="relative w-full py-24 bg-white border-b border-border-soft scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* About Header Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            {/* Abolished pill design: Clean uppercase tracking-widest editorial kicker */}
            <span className="text-accent font-mono text-[0.75rem] tracking-[0.2em] uppercase block mb-4">
              {t('trust.kicker')}
            </span>
            <h2 className="text-[2.5rem] md:text-[3.8rem] lg:text-[4.2rem] font-display font-bold leading-tight text-primary">
              {t('trust.title')}
            </h2>
            <p className="text-[1.1rem] text-text-main/70 max-w-2xl font-sans leading-relaxed">
              {t('trust.subtitle')}
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <div className="border border-accent/20 bg-accent-soft rounded-xl p-6 flex flex-col gap-2 items-start max-w-sm">
              <span className="text-[0.65rem] font-mono text-accent uppercase tracking-widest font-bold">МОЗ УКРАЇНИ</span>
              <p className="text-[0.8rem] font-mono leading-relaxed text-primary">
                Офіційний медичний суб'єкт з ліцензованим операційним блоком для тотальних імплантацій під наркозом. Серія АЕ № 571435.
              </p>
            </div>
          </div>
        </div>

        {/* 7-Layer Immersive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Statements & Narrative Cards (Layers 3, 4, 5) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Pull Quote Line (Layer 3) */}
            <blockquote className="border-l-4 border-accent pl-6 py-2">
              <p className="font-display italic text-[1.35rem] md:text-[1.5rem] text-primary leading-relaxed">
                "Точність у десять мікронів — це різниця між коронкою, яка служить один рік, та тією, що інтегрується на все життя пацієнта."
              </p>
              <cite className="font-mono text-[0.7rem] text-text-main/40 uppercase block mt-3 tracking-wider">
                Костянтин Ковальчук — Головний лікар-хірург клініки
              </cite>
            </blockquote>

            {/* List with clean numbering */}
            <div className="flex flex-col gap-6">
              {trustList.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-xl bg-bg-light border border-border-soft"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-soft border border-accent/10 flex items-center justify-center font-mono text-accent text-[0.85rem] font-bold">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[1.2rem] text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[0.85rem] text-text-main/60 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Numeric Stat Row (Layer 5) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-border-soft mt-4">
              <div>
                <span className="text-[2rem] font-display font-bold text-primary block tracking-tight">25x</span>
                <span className="text-[0.6rem] font-mono text-text-main/50 uppercase block tracking-wider mt-1">ОПТИКА МІКРОСКОПА</span>
              </div>
              <div>
                <span className="text-[2rem] font-display font-bold text-primary block tracking-tight">10 μm</span>
                <span className="text-[0.6rem] font-mono text-text-main/50 uppercase block tracking-wider mt-1">КРАЙОВЕ ПРИЛЯГАННЯ</span>
              </div>
              <div>
                <span className="text-[2rem] font-display font-bold text-accent block tracking-tight">98.4%</span>
                <span className="text-[0.6rem] font-mono text-text-main/50 uppercase block tracking-wider mt-1">ОСТЕОІНТЕГРАЦІЯ</span>
              </div>
              <div>
                <span className="text-[2rem] font-display font-bold text-primary block tracking-tight">15+ л</span>
                <span className="text-[0.6rem] font-mono text-text-main/50 uppercase block tracking-wider mt-1">ГАРАНТІЯ НА РОБОТУ</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Multilayer Photo Cluster & Captioning (Layers 6, 7) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Tilted / Overlapped 2-Photo Cluster */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto h-[480px]">
              
              {/* Back Photo (Milling Lab) */}
              <div className="absolute top-0 left-0 w-4/5 h-[320px] rounded-xl overflow-hidden border border-border-soft shadow-lg z-10 transition-transform hover:-translate-y-2 duration-300">
                <img 
                  src="https://praktika.dentist/wp-content/uploads/2025/12/3-800x533.jpg" 
                  alt="CAD/CAM фрезерувальний комплекс" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Front Photo (Microscopic Treatment - Tilted/Overlapped) */}
              <div className="absolute bottom-0 right-0 w-[85%] h-[280px] rounded-xl overflow-hidden border border-white shadow-2xl z-20 rotate-2 translate-x-2 translate-y-2 hover:rotate-0 hover:translate-x-0 duration-300 bg-white">
                <img 
                  src="https://praktika.dentist/wp-content/uploads/2025/12/4-800x533.jpg" 
                  alt="Оперблок з високоточною оптикою" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

            </div>

            {/* Photo Caption-with-rule & Secondary Link */}
            <div className="border-t border-border-soft pt-4 font-mono text-[0.7rem] text-text-main/40 mt-4">
              <span className="text-accent uppercase tracking-wider block mb-1">СВІТЛИНИ ПІДРОЗДІЛІВ:</span>
              <p className="font-sans leading-relaxed mb-4">
                Зліва вгорі — 5-вісний фрезерувальний комплекс Imes-Icore. Справа внизу — оперблок із оптикою Carl Zeiss.
              </p>
              <a 
                href="#contact" 
                className="text-primary hover:text-accent font-bold uppercase tracking-widest block border-b border-border-soft pb-1 w-fit"
              >
                ЗАПИСАТИСЯ НА ТЕХНОЛОГІЧНУ ЕКСКУРСІЮ —
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
