
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import AboutSection from "@/components/AboutSection";
import ServicesList from "@/components/ServicesList";
import SedationSection from "@/components/SedationSection";
import LabSection from "@/components/LabSection";
import Calculator from "@/components/Calculator";
import CasesGallery from "@/components/CasesGallery";
import VideoShowcase from "@/components/VideoShowcase";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <SocialProof />
        <AboutSection />
        <ServicesList />
        <SedationSection />
        <LabSection />
        <Calculator />
        <CasesGallery />
        <VideoShowcase />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
