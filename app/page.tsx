import FaqsSection from "@/components/Faqs";
import ForFarmers from "@/components/Farmers";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import LogoClouds from "@/components/LogoClouds";
import NewsletterPage from "@/components/Newsletter";
import Partners from "@/components/Partners";
import PracticeAreas from "@/components/PracticeAreas";
import TrustedAllies from "@/components/TrustedAllies";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <LogoClouds />
      <HowItWorks />
      <ForFarmers />
      <TrustedAllies />
      <Partners />
      <PracticeAreas />
      <FaqsSection />
      <NewsletterPage />
      <Footer />
    </div>
  );
}
