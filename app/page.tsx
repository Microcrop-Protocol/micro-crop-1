import type { Metadata } from "next";
import FaqsSection from "@/components/Faqs";
import PlatformFeatures from "@/components/Farmers";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import LogoClouds from "@/components/LogoClouds";
import PartnerCTA from "@/components/Newsletter";
import ForOrganizations from "@/components/Partners";
import WhyMicroCrop from "@/components/PracticeAreas";
import JsonLd from "@/components/seo/JsonLd";
import { faqs } from "@/lib/faqs";

const SITE_URL = "https://microcrop.app";

export const metadata: Metadata = {
  title: "Crop & Livestock Insurance Infrastructure",
  description:
    "MicroCrop is the infrastructure insurers, cooperatives, agri-lenders, and NGOs use to launch automated parametric crop and livestock insurance, first in Africa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MicroCrop — Parametric Crop & Livestock Insurance Infrastructure",
    description:
      "The infrastructure insurers, cooperatives, agri-lenders, and NGOs use to launch automated parametric crop and livestock insurance for farmers and pastoralists.",
    url: SITE_URL,
    type: "website",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Parametric crop & livestock insurance infrastructure",
  serviceType: "Parametric insurance infrastructure",
  description:
    "B2B infrastructure that lets insurers, cooperatives, agri-lenders, and NGOs launch automated parametric crop and livestock insurance for farmers and pastoralists. Flagship markets are in Africa, with the platform built to scale to any market exposed to climate risk.",
  provider: {
    "@type": "Organization",
    name: "MicroCrop",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: "Africa",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Insurers, cooperatives, agri-lenders, MFIs, and NGOs",
  },
};

export default function Home() {
  return (
    <div className="font-poppins">
      <JsonLd data={[faqJsonLd, serviceJsonLd]} />
      <main id="main">
        <HeroSection />
        <LogoClouds />
        <HowItWorks />
        <PlatformFeatures />
        <ForOrganizations />
        <WhyMicroCrop />
        <FaqsSection />
        <PartnerCTA />
      </main>
      <Footer />
    </div>
  );
}
