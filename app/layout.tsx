import type { Metadata } from "next";
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
  title: "MicroCrop — Parametric Crop & Livestock Insurance Infrastructure for Africa",
  description:
    "MicroCrop enables insurance companies, cooperatives, agri-lenders, and NGOs to launch automated, blockchain-powered parametric crop and livestock insurance for smallholder farmers and pastoralists across Africa.",
  openGraph: {
    title: "MicroCrop — Parametric Insurance for Africa",
    description:
      "Automated, blockchain-powered parametric crop & livestock insurance infrastructure for smallholder farmers and pastoralists across Africa.",
    siteName: "MicroCrop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MicroCrop — Parametric Insurance for Africa",
    description:
      "Automated, blockchain-powered parametric crop & livestock insurance infrastructure for smallholder farmers and pastoralists across Africa.",
  },
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
        {children}
      </body>
    </html>
  );
}
