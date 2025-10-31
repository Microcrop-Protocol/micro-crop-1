import ForFarmers from "@/components/Farmers";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import LogoClouds from "@/components/LogoClouds";
import TrustedAllies from "@/components/TrustedAllies";

export default function Home() {
  return (
    <div className="font-poppins">
      <HeroSection />
      <LogoClouds />
      <HowItWorks />
      <ForFarmers />
      <TrustedAllies />
    </div>
  );
}
