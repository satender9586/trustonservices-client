import AccordionSection from "./compontens/AccordionSection";
import Footer from "./compontens/Footer";
import Header from "./compontens/Header";
import HeroSection from "./compontens/HeroSection";
import IndustriesSection from "./compontens/IndustriesSection";
import ServicesSection from "./compontens/ServicesSection";
import TestimonialsSection from "./compontens/TestimonialsSection";
import TrustedPartnersSection from "./compontens/TrustedPartnersSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#181818]">
      <Header />
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <TrustedPartnersSection />
      <TestimonialsSection />
      <AccordionSection />
      <Footer />
    </main>
  );
}
