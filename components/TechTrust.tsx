"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

interface TechItem {
  num: string;
  title: string;
  desc: string;
}

export default function TechTrust() {
  const { t } = useLocale();
  const items = t('tech.items') as TechItem[] || [];

  return (
    <section id="technology" className="py-16 lg:py-24 bg-primary text-white relative overflow-hidden">
      {/* Dynamic low-contrast background watermarks */}
      <div className="absolute right-0 top-1/4 translate-x-1/3 opacity-[0.01] pointer-events-none select-none z-0">
        <span className="font-display font-bold text-[18vw] leading-none text-white whitespace-nowrap uppercase">ZEISS</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Layer 1: Kicker */}
        <span className="text-[10px] tracking-[0.25em] text-accent font-bold uppercase block mb-3 font-mono">
          {t('tech.kicker') as string}
        </span>

        {/* Layer 2: Heading & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              {t('tech.title') as string}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              {t('tech.subtitle') as string}
            </p>
          </div>
        </div>

        {/* Advanced Layer Composition: Pull quote + Interactive Photo Grid & Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left Column: Pull quote, statistics & medical authority caption */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
            <div className="border-l-2 border-accent pl-6">
              <blockquote className="font-display italic text-lg sm:text-xl text-white/90 leading-relaxed mb-4">
                &ldquo;{t('tech.statement') as string}&rdquo;
              </blockquote>
              <cite className="not-italic text-[11px] tracking-wider text-accent font-bold uppercase block font-mono">
                {t('tech.author') as string}
              </cite>
            </div>

            {/* Micro stat row of 3 real numerals - Monospaced values */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-left font-mono">
              <div>
                <span className="block text-2xl font-bold text-accent tabular-nums">40x</span>
                <span className="text-[9px] tracking-wider text-white/40 uppercase font-semibold">Оптичне збільшення</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-accent tabular-nums">15s</span>
                <span className="text-[9px] tracking-wider text-white/40 uppercase font-semibold">Час 3D КТ знімку</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-accent tabular-nums">0.1мм</span>
                <span className="text-[9px] tracking-wider text-white/40 uppercase font-semibold">Точність шаблону</span>
              </div>
            </div>
          </div>

          {/* Right Column: 2-Photo Overlapped Cluster (Framed) with captions */}
          <div className="lg:col-span-7 relative h-[400px] hidden md:block">
            {/* Background structural rule */}
            <div className="absolute left-10 top-1/2 right-10 h-[1px] bg-white/10 z-0 pointer-events-none" />

            {/* Photo 1: Microscopic diagnostics */}
            <div className="absolute left-0 top-0 w-3/5 h-[280px] bg-primary border border-white/10 p-2 shadow-2xl z-10 transition-transform hover:-translate-y-2 duration-500">
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600&h=400"
                alt="Operating microscopy ZEISS"
                className="w-full h-full object-cover grayscale"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-primary/90 px-3 py-1 border border-white/10 text-[9px] tracking-widest text-white uppercase font-bold font-mono">
                Оптика ZEISS Extaro
              </div>
            </div>

            {/* Photo 2: Milled surgical guide */}
            <div className="absolute right-0 bottom-0 w-1/2 h-[250px] bg-primary border border-white/10 p-2 shadow-2xl z-20 rotate-2 transition-transform hover:rotate-0 duration-500">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=500&h=350"
                alt="Guided surgical templates mapping"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-accent px-3 py-1 text-[9px] tracking-widest text-white uppercase font-bold font-mono">
                Навігація Planmeca
              </div>
            </div>
          </div>

        </div>

        {/* Layer 3: Tech Grid Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
          {items.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-primary/40 border border-white/5 p-8 flex flex-col justify-between aspect-square group hover:border-accent/30 transition-colors duration-300"
            >
              <div className="font-mono font-extrabold text-4xl text-accent/20 group-hover:text-accent transition-colors duration-300 tabular-nums">
                {item.num.padStart(2, '0')}
              </div>
              <div className="mt-8">
                <h3 className="font-display font-semibold text-lg text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors duration-200 border-b border-accent pb-1 inline-block font-mono"
          >
            Записатись на високоточну діагностику →
          </a>
        </div>

      </div>
    </section>
  );
}
