
"use client";
import { useLocale } from "@/lib/i18n";

export default function Reviews() {
  const { t } = useLocale();

  interface ReviewItem {
    name: string;
    role: string;
    quote: string;
    rating: string;
  }

  const reviews = t("reviews.items") as ReviewItem[] || [];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white relative scroll-mt-20 overflow-hidden">
      
      {/* DECORATIVE WATERMARK */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none h-0" aria-hidden="true">
        <span className="text-[15vw] font-display font-bold text-primary/[0.01] tracking-widest uppercase whitespace-nowrap block">
          REVIEWS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase block mb-3">
            {t("reviews.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary leading-tight tracking-tight mb-6">
            {t("reviews.title") as string}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("reviews.subtitle") as string}
          </p>
        </div>

        {/* Dynamic Masonry Columns Stack (Layer 4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-bg-light border border-border-subtle p-8 rounded flex flex-col justify-between shadow-sm relative overflow-hidden group hover:border-accent/40 transition-colors duration-300"
            >
              <div>
                {/* Numeric Star Rating representation (No icons) */}
                <div className="flex justify-between items-center mb-6 border-b border-border-subtle pb-3">
                  <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">
                    RECONSTRUCTION CASE
                  </span>
                  <span className="font-mono text-xs font-bold text-primary">
                    Рейтинг {item.rating}
                  </span>
                </div>
                
                {/* Quotation quote display */}
                <p className="text-text-main text-xs sm:text-sm leading-relaxed italic mb-8 font-serif">
                  «{item.quote}»
                </p>
              </div>

              {/* Attribution descriptor */}
              <div className="pt-4 border-t border-border-subtle flex flex-col gap-1">
                <span className="font-bold text-primary text-sm font-display tracking-wide">{item.name}</span>
                <span className="text-text-muted text-[10px] font-mono font-bold uppercase tracking-wider mt-0.5">{item.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Slider dots indicator & Rating Meta footer details (Layer 5) */}
        <div className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-border-subtle font-mono">
          
          {/* Custom state indicators */}
          <div className="flex gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="w-2 h-2 rounded-full bg-border-subtle" />
            <span className="w-2 h-2 rounded-full bg-border-subtle" />
          </div>

          {/* Rating Meta Info details */}
          <div className="text-right text-[10px] text-text-muted uppercase tracking-widest font-bold">
            Google Maps Rating: <span className="text-accent">4.9 / 5.0</span> · на базі 587 відгуків пацієнтів
          </div>

        </div>

      </div>
    </section>
  );
}
