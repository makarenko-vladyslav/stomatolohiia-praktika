"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import BeforeAfter from "@/components/BeforeAfter";
import Trust from "@/components/Trust";
import Process from "@/components/Process";
import VideoTour from "@/components/VideoTour";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { Reveal } from "@/components/motion";

// Interstitials to prevent consecutive identical grounds
import { 
  InterstitialTicker, 
  InterstitialWatermark, 
  InterstitialStatement 
} from "@/components/Interstitials";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg-light text-text-main selection:bg-accent selection:text-white">
      <Header />
      <main>
        {/* Ground alternation chronology schema with thin interstitials */}
        <Reveal>
          <Hero />
        </Reveal>
        
        <Reveal>
          <SocialProof />
        </Reveal>
        
        <InterstitialTicker />
        
        <Reveal>
          <Services />
        </Reveal>
        
        <InterstitialStatement />
        
        <Reveal>
          <Calculator />
        </Reveal>
        
        <InterstitialWatermark />
        
        <Reveal>
          <BeforeAfter />
        </Reveal>
        
        <Reveal>
          <Trust />
        </Reveal>
        
        <Reveal>
          <Process />
        </Reveal>
        
        <Reveal>
          <VideoTour />
        </Reveal>
        
        <Reveal>
          <Gallery />
        </Reveal>
        
        <Reveal>
          <FAQ />
        </Reveal>
        
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
