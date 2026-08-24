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
    default: "MicroCrop | Climate cover that works for farmers",
    template: "%s | MicroCrop",
  },
  description:
      "MicroCrop helps insurance and distribution teams offer clear, practical crop and livestock climate cover to the customers they serve.",
  keywords: [
    "crop insurance",
    "livestock insurance",
    "agricultural insurance",
    "climate risk",
    "climate cover",
    "farmer protection",
  ],
  authors: [{ name: "MicroCrop" }],
  creator: "MicroCrop",
  publisher: "MicroCrop",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MicroCrop — Climate cover that works for customers",
    description:
      "A clearer way for insurance teams to offer crop and livestock climate cover.",
    siteName: "MicroCrop",
    type: "website",
    url: "https://microcrop.app",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MicroCrop — Climate cover that works for customers",
    description:
      "A clearer way for insurance teams to offer crop and livestock climate cover.",
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
      "MicroCrop helps insurance and distribution teams offer practical crop and livestock climate cover to the customers they serve.",
    foundingDate: "2024",
    founders: [
      { "@type": "Person", name: "Mary Gathoni", email: "gathoni@microcrop.app" },
      { "@type": "Person", name: "Moses Timbwa", email: "moses@microcrop.app" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "support@microcrop.app",
      url: "https://microcrop.app",
    },
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
  themeColor: "#047857",
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
