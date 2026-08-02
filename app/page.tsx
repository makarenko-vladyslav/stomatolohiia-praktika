import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import TechPrecision from "@/components/TechPrecision";
import PricingCalculator from "@/components/PricingCalculator";
import Sedation from "@/components/Sedation";
import Advantages from "@/components/Advantages";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-x-hidden">
        <Hero />
        
        <Reveal>
          <SocialProof />
        </Reveal>
        
        {/* INTERSTITIAL 1: Horizontal Drifting Ticker */}
        <div className="relative z-30 bg-bg-dark py-4 border-b border-white/10 overflow-hidden select-none">
          <div className="flex whitespace-nowrap gap-12 text-[10px] uppercase font-bold tracking-widest text-white/40 animate-[marquee_25s_linear_infinite]">
            <span>3D НАВІГАЦІЯ ДЛЯ КОЖНОГО ПАЦІЄНТА · 3D НАВІГАЦІЯ ДЛЯ КОЖНОГО ПАЦІЄНТА · 3D НАВІГАЦІЯ ДЛЯ КОЖНОГО ПАЦІЄНТА · 3D НАВІГАЦІЯ ДЛЯ КОЖНОГО ПАЦІЄНТА ·</span>
            <span>3D НАВІГАЦІЯ ДЛЯ КОЖНОГО ПАЦІЄНТА · 3D НАВІГАЦІЯ ДЛЯ КОЖНОГО ПАЦІЄНТА · 3D НАВІГАЦІЯ ДЛЯ КОЖНОГО ПАЦІЄНТА · 3D НАВІГАЦІЯ ДЛЯ КОЖНОГО ПАЦІЄНТА ·</span>
          </div>
        </div>

        <Reveal>
          <Services />
        </Reveal>

        <Reveal>
          <BeforeAfter />
        </Reveal>

        <Reveal>
          <TechPrecision />
        </Reveal>

        {/* INTERSTITIAL 2: Hairline divider with small caps metadata label */}
        <div className="relative z-30 bg-white py-6">
          <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
            <span className="text-[10px] text-accent font-bold tracking-widest whitespace-nowrap uppercase">ДІАГНОСТИКА ТА ЦИФРОВЕ ПЛАНУВАННЯ — БЕЗКОШТОВНО ПРИ ЛІКУВАННІ</span>
            <div className="w-full h-[1px] bg-border-subtle" />
          </div>
        </div>

        <Reveal>
          <PricingCalculator />
        </Reveal>

        <Reveal>
          <Sedation />
        </Reveal>

        <Reveal>
          <Advantages />
        </Reveal>

        <Reveal>
          <Process />
        </Reveal>

        {/* INTERSTITIAL 3: Standalone statement band */}
        <Reveal>
          <div className="relative z-30 bg-primary py-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/20 to-accent/5 pointer-events-none" />
            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <span className="text-accent text-[10px] font-bold tracking-widest uppercase block mb-3">ФІЛОСОФІЯ РЕКОНСТРУКЦІЇ</span>
              <p className="font-display font-medium text-xl sm:text-2xl text-white/95 leading-relaxed">
                Посмішка — це єдина крива, що здатна повернути впевненість у будь-якому віці.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <Reviews />
        </Reveal>

        <Reveal>
          <Team />
        </Reveal>

        <Reveal>
          <FAQ />
        </Reveal>

        <Reveal>
          <BookingForm />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
