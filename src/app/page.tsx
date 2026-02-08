import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HopeSection from "@/components/HopeSection";
import BioSection from "@/components/BioSection";
import BackgroundSection from "@/components/BackgroundSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Specialties from "@/components/Specialties";
import OfficeSection from "@/components/OfficeSection";

export default function Home() {
  return (
    <>
      <main className="pt-[88px] flex flex-col">
        <Hero />
        <AboutSection />
        <OfficeSection />
        <Specialties />
        <HopeSection />
        <BioSection />
        <FAQSection />
        <BackgroundSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
