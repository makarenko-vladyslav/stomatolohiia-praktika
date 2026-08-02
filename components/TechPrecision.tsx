
"use client";
import { useLocale } from "@/lib/i18n";

export default function TechPrecision() {
  const { t } = useLocale();

  interface Block {
    title: string;
    desc: string;
  }

  const blocks = t("techPrecision.blocks") as Block[] || [];

  return (
    <section id="tech" className="py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden scroll-mt-20">
      
      {/* DECORATIVE WATERMARK */}
      <div className="absolute top-0 right-0 z-0 pointer-events-none select-none h-0" aria-hidden="true">
        <span className="text-[14vw] font-display font-bold text-primary/[0.01] tracking-widest uppercase whitespace-nowrap block -translate-x-12 translate-y-12">
          PRECISION
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-accent text-[10px] font-mono font-bold tracking-widest uppercase block mb-3">
            {t("techPrecision.kicker") as string}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary leading-tight tracking-tight mb-4">
            {t("techPrecision.title") as string}
          </h2>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed">
            {t("techPrecision.subtitle") as string}
          </p>
        </div>

        {/* Dynamic 2-Column Split Details (Layer 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Overlapping Images Cluster & Pull Quote */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            
            {/* 2-Photo Overlapped/Tilted framed Cluster */}
            <div className="relative h-[450px] w-full max-w-md mx-auto lg:mx-0">
              
              {/* Back Tilted/Framed Image */}
              <div className="absolute top-0 left-0 w-[75%] h-[75%] rounded border-2 border-primary/10 overflow-hidden shadow-lg transform -rotate-3 transition-transform hover:rotate-0 duration-500 z-10 bg-bg-light">
                <img
                  src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Діагностика під мікроскопом"
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('img-fallback');
                  }}
                />
              </div>

              {/* Front Overlapped Tilted Image */}
              <div className="absolute bottom-0 right-0 w-[70%] h-[70%] rounded border-2 border-accent/20 overflow-hidden shadow-2xl transform rotate-3 transition-transform hover:rotate-0 duration-500 z-20 bg-bg-light">
                <img
                  src="https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="3D хірургічне планування"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.classList.add('img-fallback');
                  }}
                />
                <div className="absolute bottom-2 left-2 z-30 bg-accent px-2 py-0.5 rounded text-[8px] text-white font-mono uppercase tracking-widest font-bold">
                  DSD ПЛАНУВАННЯ
                </div>
              </div>

            </div>

            {/* Pull-Quote with framed styling & Author details */}
            <div className="border-l-4 border-accent pl-6 py-2 bg-bg-light/60 pr-4 rounded-r">
              <p className="font-display italic text-lg text-primary leading-relaxed mb-4">
                «Точність у стоматології — це не метафора, а сорокакратне оптичне збільшення робочого поля та повна автоматизація КТ-планування.»
              </p>
              <div className="flex flex-col font-mono">
                <span className="text-[11px] font-bold text-primary uppercase">Доктор Олексій Радченко</span>
                <span className="text-[9px] text-text-muted uppercase">Головний хірург, анестезіолог, імплантолог Praktika</span>
              </div>
            </div>

          </div>

          {/* Right Column: Key Diagnostic features details + Numerical stats stack */}
          <div className="lg:col-span-6 flex flex-col gap-12">
            
            {/* Numerical Stats row (Layer 5) */}
            <div className="grid grid-cols-3 gap-4 border-b border-border-subtle pb-8">
              <div className="flex flex-col gap-1">
                <span className="font-display font-bold text-4xl text-accent">40x</span>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Збільшення Zeiss</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display font-bold text-4xl text-accent">14 c</span>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">3D КТ щелепи</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display font-bold text-4xl text-accent">0 мм</span>
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Помилки шаблону</span>
              </div>
            </div>

            {/* Blocks list */}
            <div className="flex flex-col gap-6">
              {blocks.map((block, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-2 relative pl-12 border-l border-border-subtle"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border border-accent bg-white flex items-center justify-center font-mono text-[8px] font-bold text-accent">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold font-display text-primary">
                    {block.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed max-w-xl">
                    {block.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Secondary CTA anchor */}
            <div className="pt-6">
              <a href="#booking" className="text-primary hover:text-accent font-mono text-[11px] font-bold uppercase tracking-widest transition-colors">
                Дізнатись детальніше про діагностику на першому прийомі →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
