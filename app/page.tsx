import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsTicker from "@/components/StatsTicker";
import About from "@/components/About";
import Services from "@/components/Services";
import Implantology from "@/components/Implantology";
import SleepDentistry from "@/components/SleepDentistry";
import Calculator from "@/components/Calculator";
import PrecisionMicroscope from "@/components/PrecisionMicroscope";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";

// High density interstitials
import { StatementBand, LabeledHairline, WatermarkStrip } from "@/components/Interstitials";

// Scroll motion wrapper
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-x-hidden">
        {/* Layer 1: Epic Cinematic Hero */}
        <Hero />
        
        {/* Interstitial 1: Running Brand Marquee */}
        <StatsTicker />
        
        {/* Layer 2: Elaborate About & Manifest */}
        <Reveal>
          <About />
        </Reveal>
        
        {/* Interstitial 2: Structural Hairline */}
        <LabeledHairline label="ЕКСПЕРТНИЙ ПРАЙС-ЛИСТ" />
        
        {/* Layer 3: Comprehensive Service Catalog */}
        <Reveal>
          <Services />
        </Reveal>
        
        {/* Interstitial 3: Grand Statement Band */}
        <Reveal>
          <StatementBand text="«Хірургія без компромісів та штучних обмежень. Повертаємо здоров'я вашим зубам навіть у безнадійних випадках атрофії кістки»" />
        </Reveal>
        
        {/* Layer 4: Deep Specialization (All-on-X / Zygoma) */}
        <Reveal>
          <Implantology />
        </Reveal>
        
        {/* Layer 5: Sleep Dentistry Section */}
        <Reveal>
          <SleepDentistry />
        </Reveal>
        
        {/* Interstitial 4: Tiny Hairline separator */}
        <LabeledHairline label="ОЦІНКА ВАРТОСТІ ПАКЕТУ" />
        
        {/* Layer 6: Interactive Package Calculator */}
        <Reveal>
          <Calculator />
        </Reveal>
        
        {/* Layer 7: German Precision Endodontics */}
        <Reveal>
          <PrecisionMicroscope />
        </Reveal>
        
        {/* Layer 8: Before / After Clinical Portfolio */}
        <Reveal>
          <Portfolio />
        </Reveal>
        
        {/* Layer 9: Treatment Workflow Journey */}
        <Reveal>
          <Process />
        </Reveal>
        
        {/* Interstitial 5: Massive Background Watermark Ticker */}
        <WatermarkStrip word="PRAKTIKA DENTAL" />
        
        {/* Layer 10: State-of-the-Art FAQ Accordions */}
        <Reveal>
          <FAQ />
        </Reveal>
        
        {/* Layer 11: Real High-Contrast Testimonials with Featured review */}
        <Reveal>
          <Testimonials />
        </Reveal>
        
        {/* Layer 12: Conversion optimized stateful Booking Form with NAP */}
        <Reveal>
          <BookingForm />
        </Reveal>
      </main>
      <BottomNav />
      <Footer />
    </>
  );
}
