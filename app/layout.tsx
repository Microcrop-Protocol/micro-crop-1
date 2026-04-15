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
  title: "MicroCrop — Global Parametric Crop & Livestock Insurance Infrastructure",
  description:
    "MicroCrop enables insurance companies, cooperatives, agri-lenders, and NGOs worldwide to launch automated, blockchain-powered parametric crop and livestock insurance for farmers and pastoralists. Launching first in Africa, built for every market exposed to climate risk.",
  openGraph: {
    title: "MicroCrop — Global Parametric Insurance Infrastructure",
    description:
      "Automated, blockchain-powered parametric crop & livestock insurance infrastructure for farmers and pastoralists worldwide.",
    siteName: "MicroCrop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MicroCrop — Global Parametric Insurance Infrastructure",
    description:
      "Automated, blockchain-powered parametric crop & livestock insurance infrastructure for farmers and pastoralists worldwide.",
  },
};

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
      >
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
