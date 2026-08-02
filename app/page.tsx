import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import About from "@/components/About";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Calculator from "@/components/Calculator";
import TrustSection from "@/components/TrustSection";
import VideoSection from "@/components/VideoSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { 
  TickerInterstitial, 
  LineInterstitial, 
  StatementInterstitial 
} from "@/components/Interstitials";
import { Reveal } from "@/components/motion";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        
        <Reveal>
          <SocialProof />
        </Reveal>
        
        <TickerInterstitial />
        
        <Reveal>
          <About />
        </Reveal>
        
        <LineInterstitial label="ХІРУРГІЧНЕ ПЛАНУВАННЯ ТА КЛІНІЧНИЙ КОНТРОЛЬ" />
        
        <Reveal>
          <Services />
        </Reveal>
        
        <StatementInterstitial text="Кожен мікрон має значення для довговічності ортопедичної конструкції." />
        
        <Reveal>
          <Cases />
        </Reveal>
        
        <Reveal>
          <Calculator />
        </Reveal>
        
        <LineInterstitial label="СЕРТИФІКОВАНІ СТАНДАРТИ МОЗ УКРАЇНИ" />
        
        <Reveal>
          <TrustSection />
        </Reveal>
        
        <Reveal>
          <VideoSection />
        </Reveal>
        
        <TickerInterstitial reverse />
        
        <Reveal>
          <Gallery />
        </Reveal>
        
        <Reveal>
          <Testimonials />
        </Reveal>
        
        <StatementInterstitial text="Анатомічна точність відновлення вашої посмішки за 1 візит." />
        
        <Reveal>
          <FAQ />
        </Reveal>
        
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
