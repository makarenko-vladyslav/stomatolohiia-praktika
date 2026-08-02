import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import BeforeAfter from "@/components/BeforeAfter";
import TechTrust from "@/components/TechTrust";
import VideoShowcase from "@/components/VideoShowcase";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <SocialProof />
        
        {/* INTERSTITIAL 1: Styled Marquee Ticker */}
        <div className="bg-primary text-accent py-5 overflow-hidden border-t border-b border-white/5 relative z-20 select-none">
          <div className="animate-marquee whitespace-nowrap flex gap-12 text-[10px] tracking-[0.3em] font-bold uppercase">
            <span>NOBEL BIOCARE ALL-ON-4 • PLANMECA 3D CT • ZEISS OPTICAL • NOBEL BIOCARE ALL-ON-4 • PLANMECA 3D CT • ZEISS OPTICAL •</span>
            <span>NOBEL BIOCARE ALL-ON-4 • PLANMECA 3D CT • ZEISS OPTICAL • NOBEL BIOCARE ALL-ON-4 • PLANMECA 3D CT • ZEISS OPTICAL •</span>
          </div>
        </div>

        <Services />
        
        {/* INTERSTITIAL 2: Standalone oversized statement band */}
        <div className="bg-bg-dark py-12 text-center relative overflow-hidden border-t border-b border-white/5">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none select-none">
            <span className="font-display font-bold text-[8rem] tracking-wider text-white">ALL ON FOUR</span>
          </div>
          <p className="font-display italic text-white/80 text-xl md:text-2xl tracking-wide max-w-4xl mx-auto px-6 relative z-10 leading-relaxed">
            «Реабілітація зубного ряду за один хірургічний день — це ліквідація дискомфорту та повернення жувальної функції відразу після встановлення опор»
          </p>
        </div>

        <Calculator />

        {/* INTERSTITIAL 3: Labeled Hairline */}
        <div className="bg-bg-light py-8 relative">
          <div className="max-w-7xl mx-auto px-6 flex items-center">
            <span className="text-[10px] tracking-[0.25em] text-primary/40 font-bold uppercase whitespace-nowrap mr-6">ПОРТФОЛІО ТА ДОКАЗОВА ХІРУРГІЯ</span>
            <div className="w-full h-[1px] bg-primary/10" />
            <span className="text-[10px] tracking-[0.25em] text-primary/40 font-bold uppercase whitespace-nowrap ml-6">CASE 124 / 2024</span>
          </div>
        </div>

        <BeforeAfter />
        <TechTrust />
        <VideoShowcase />

        {/* INTERSTITIAL 4: Rating / Press Strip */}
        <div className="bg-primary py-10 relative overflow-hidden border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-xs tracking-[0.2em] text-white/50 font-bold uppercase">СВІТОВІ СТАНДАРТИ ІМПЛАНТАЦІЇ В ХАРКОВІ</span>
            <div className="flex gap-10 text-accent font-display font-semibold text-lg">
              <span>99.2% успішних інтеграцій</span>
              <span>•</span>
              <span>100% сертифіковані імплантати Nobel</span>
              <span>•</span>
              <span>Штатний анестезіолог</span>
            </div>
          </div>
        </div>

        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}