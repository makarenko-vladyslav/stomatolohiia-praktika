import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import Calculator from '@/components/Calculator';
import ZygomaShowcase from '@/components/ZygomaShowcase';
import DigitalLab from '@/components/DigitalLab';
import BeforeAfter from '@/components/BeforeAfter';
import WhyUs from '@/components/WhyUs';
import VideoSection from '@/components/VideoSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { TickerStrip, WatermarkStrip, HairlineLabelStrip, RatingStrip } from '@/components/Interstitials';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <WatermarkStrip />
        <Calculator />
        <HairlineLabelStrip label="ХІРУРГІЧНІ ПРОТОКОЛИ СВІТОВОГО РІВНЯ" />
        <ZygomaShowcase />
        <DigitalLab />
        <RatingStrip />
        <BeforeAfter />
        <WhyUs />
        <VideoSection />
        <TickerStrip />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
