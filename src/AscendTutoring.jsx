import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TeamSection from "./components/TeamSection";
import CredentialsSection from "./components/CredentialsSection";
import HowItWorksSection from "./components/HowItWorks";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function AscendTutoring() {
  return (
    <div className="font-sans bg-site-bg text-dark">
      <Navbar />
      <HeroSection />
      <TeamSection />
      <CredentialsSection />
      <HowItWorksSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
