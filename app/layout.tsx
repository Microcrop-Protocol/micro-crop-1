import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://microcrop.app"),
  title: {
    default:
      "MicroCrop — Global Parametric Crop & Livestock Insurance Infrastructure",
    template: "%s — MicroCrop",
  },
  description:
    "MicroCrop enables insurance companies, cooperatives, agri-lenders, and NGOs worldwide to launch automated, blockchain-powered parametric crop and livestock insurance for farmers and pastoralists. Launching first in Africa, built for every market exposed to climate risk.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MicroCrop — Global Parametric Insurance Infrastructure",
    description:
      "Automated, blockchain-powered parametric crop & livestock insurance infrastructure for farmers and pastoralists worldwide.",
    siteName: "MicroCrop",
    type: "website",
    url: "https://microcrop.app",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MicroCrop — Global Parametric Insurance Infrastructure",
    description:
      "Automated, blockchain-powered parametric crop & livestock insurance infrastructure for farmers and pastoralists worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MicroCrop",
    url: "https://microcrop.app",
    logo: "https://microcrop.app/img/micro-crop-background.jpg",
    description:
      "Global infrastructure layer for parametric crop and livestock insurance. MicroCrop enables insurers, cooperatives, agri-lenders, and NGOs to launch automated, blockchain-powered insurance products for farmers and pastoralists worldwide.",
    foundingDate: "2024",
    founders: [
      { "@type": "Person", name: "Mary Gathoni", email: "gathoni@microcrop.app" },
      { "@type": "Person", name: "Moses Timbwa", email: "moses@microcrop.app" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/microcrop-protocol",
      "https://twitter.com/microcrop_app",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MicroCrop",
    url: "https://microcrop.app",
    inLanguage: "en-US",
    publisher: { "@type": "Organization", name: "MicroCrop" },
  },
];

export const viewport: Viewport = {
  themeColor: "#1D5B37",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-[#1D5B37] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
