import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — The Team Building Global Parametric Insurance Infrastructure',
  description: 'Meet the founders of MicroCrop — Mary Gathoni and Moses Timbwa — and the mission to make parametric crop and livestock insurance accessible to farmers and pastoralists worldwide.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About MicroCrop',
    description: 'Meet the founders of MicroCrop and the mission to make parametric crop and livestock insurance accessible worldwide.',
    url: 'https://microcrop.app/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main id="main">
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
