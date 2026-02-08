import ContactHero from "@/components/contact/ContactHero";
import ContactBooking from "@/components/contact/ContactBooking";
import OfficeSection from "@/components/contact/OfficeSection";
import SocialGallery from "@/components/contact/SocialGallery";
import Footer from "@/components/Footer";
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBooking />
      <OfficeSection />
      <SocialGallery />
      <Footer />
    </>
  );
}
