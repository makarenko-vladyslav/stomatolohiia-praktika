"use client";
import { useLocale } from '@/lib/i18n';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const { t } = useLocale();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-28"
    >
      {/* LAYER 1: Giant watermark behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-center opacity-[0.02]" aria-hidden="true">
        <span className="font-display font-bold text-[24vw] tracking-wider text-white whitespace-nowrap">
          PRAKTIKA
        </span>
      </div>

      {/* LAYER 2: Background Video Stack with parallax and darkened gradient mask */}
      <motion.div 
        style={{ y: videoY }}
        className="absolute inset-0 z-0 w-full h-full"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/6192977/bank-card-calculation-caries-caries-removal-6192977.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          className="w-full h-full object-cover scale-105"
        >
          <source src="https://videos.pexels.com/video-files/6192977/6192977-hd_1280_720_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary/95" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
        
        {/* LAYER 3: Main Text Area */}
        <motion.div 
          style={{ y: textY }}
          className="lg:col-span-8 flex flex-col justify-center"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* LAYER 4: Kicker with real metadata */}
          <span className="text-accent text-[10px] tracking-[0.25em] uppercase font-bold mb-6 block border-l-2 border-accent pl-4 font-mono">
            {t('hero.kicker') as string}
          </span>
          
          {/* LAYER 5: Multi-line poster H1 with one italic serif line */}
          <h1 className="font-display font-bold text-white leading-[1.05] mb-8 text-balance">
            <span className="block text-4xl sm:text-6xl lg:text-7xl">
              {t('hero.title1') as string}
            </span>
            <span className="block italic font-normal text-3xl sm:text-5xl lg:text-6xl text-accent/90 my-3">
              {t('hero.titleItalic') as string}
            </span>
            <span className="block text-4xl sm:text-6xl lg:text-7xl">
              {t('hero.title2') as string}
            </span>
          </h1>

          {/* LAYER 6: 1-2 line subtitle */}
          <p className="text-white/75 text-sm sm:text-base max-w-xl leading-relaxed mb-12">
            {t('hero.subtitle') as string}
          </p>

          {/* LAYER 7: CTA Pair with restored geometry padding */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="px-8 py-4 bg-accent hover:bg-white hover:text-primary transition-all duration-300 text-center font-bold text-xs tracking-widest uppercase"
            >
              {t('hero.primaryCta') as string}
            </a>
            <a
              href="#calculator"
              className="px-8 py-4 border border-white/20 hover:border-white hover:bg-white/5 transition-all duration-300 text-center font-bold text-xs tracking-widest uppercase"
            >
              {t('hero.secondaryCta') as string}
            </a>
          </div>

          {/* LAYER 8: 3-item meta strip with hairline separators */}
          <div className="border-t border-white/10 pt-6 flex flex-wrap gap-8 text-[11px] font-bold tracking-wider text-white/50 uppercase font-mono">
            <div className="flex items-center gap-2">
              <span className="text-accent">ПН-СБ</span> 09:00 - 20:00
            </div>
            <div className="w-[1px] h-4 bg-white/10 self-center hidden sm:block" />
            <div>ХАРКІВ, НАУКИ 77</div>
            <div className="w-[1px] h-4 bg-white/10 self-center hidden sm:block" />
            <div className="flex items-center gap-1.5">
              <span>РЕЙТИНГ</span> <span className="text-accent">4.9 GOOGLE</span>
            </div>
          </div>
        </motion.div>

        {/* LAYER 9: Flanking mini-copy columns and CSS seal */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col justify-between items-center lg:items-end gap-12"
        >
          {/* Rotating Text Seal (With magnetic spring micro-interactions) */}
          <motion.div 
            className="relative w-36 h-36 select-none cursor-pointer hidden lg:block group/seal"
            whileHover={{ scale: 1.1, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow group-hover/seal:[animation-duration:12s] transition-all duration-500">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="text-[7px] font-mono font-bold fill-white/40 tracking-[0.2em] uppercase transition-colors duration-300 group-hover/seal:fill-white/80">
                <textPath href="#circlePath" startOffset="0%">
                  • КЛІНІКА ПОВНОГО ЦИКЛУ • ХАРКІВ • EST. 2018
                </textPath>
              </text>
            </svg>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              whileHover={{ scale: 1.15 }}
            >
              <span className="font-display font-bold text-accent text-lg group-hover/seal:text-white transition-colors duration-300">P</span>
            </motion.div>
          </motion.div>

          {/* Clinical info cards / Mini copy columns */}
          <div className="bg-primary/95 border border-white/10 p-8 w-full max-w-sm flex flex-col gap-6">
            <span className="text-white/40 text-[9px] tracking-[0.25em] uppercase block border-b border-white/10 pb-2 font-mono">
              PRAKTIKA CLINICAL FILE
            </span>
            <div className="grid grid-cols-1 gap-4 text-xs font-mono">
              <div>
                <span className="text-accent block mb-1">Спеціалізація</span>
                <p className="text-white font-display font-semibold text-sm">All-on-4 / Zygoma хірургія</p>
              </div>
              <div>
                <span className="text-accent block mb-1">Діагностика</span>
                <p className="text-white font-display font-semibold text-sm">Planmeca 3D КТ у кріслі</p>
              </div>
              <div>
                <span className="text-accent block mb-1">Анестезія</span>
                <p className="text-white font-display font-semibold text-sm">Медикаментозний супровід сну</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* LAYER 10: Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-10">
        <span className="text-[8px] tracking-[0.3em] text-white/40 uppercase font-bold font-mono">
          {t('hero.scroll') as string}
        </span>
        <div className="w-[1px] h-10 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-accent origin-top animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
