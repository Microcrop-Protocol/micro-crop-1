import FaqsSection from "@/components/Faqs";
import PlatformFeatures from "@/components/Farmers";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import LogoClouds from "@/components/LogoClouds";
import PartnerCTA from "@/components/Newsletter";
import ForOrganizations from "@/components/Partners";
import WhyMicroCrop from "@/components/PracticeAreas";
import TrustedAllies from "@/components/TrustedAllies";

export default function Home() {
  return (
    <div className="font-poppins">
      <HeroSection />
      <LogoClouds />
      <HowItWorks />
      <PlatformFeatures />
      {/* <TrustedAllies /> */}
      <ForOrganizations />
      <WhyMicroCrop />
      <FaqsSection />
      <PartnerCTA />
      <Footer />
    </div>
  );
}
