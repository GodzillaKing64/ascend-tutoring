import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TeamSection from "./components/TeamSection";
import CredentialsSection from "./components/CredentialsSection";
import HowItWorksSection from "./components/HowItWorks";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";

export default function AscendTutoring() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <div className="font-sans bg-site-bg text-dark">
      <Navbar />
      <HeroSection onOpenModal={openModal} />
      <TeamSection />
      <CredentialsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <PricingSection onOpenModal={openModal} />
      <ContactSection onOpenModal={openModal} />
      <Footer />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
