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
  title: "Climate cover that works for customers",
  description:
    "MicroCrop helps insurance and distribution teams offer clear, practical crop and livestock climate cover.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MicroCrop — Climate cover that works for customers",
    description:
      "A clearer way for insurance teams and distribution partners to support customers facing climate risk.",
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
  name: "Crop and livestock climate cover platform",
  serviceType: "Climate cover platform",
  description:
    "A partner platform that helps insurance and distribution teams offer, manage, and support crop and livestock climate cover.",
  provider: {
    "@type": "Organization",
    name: "MicroCrop",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  audience: {
    "@type": "BusinessAudience",
    name: "Insurance and distribution teams",
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
