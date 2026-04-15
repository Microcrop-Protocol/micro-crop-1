import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — MicroCrop',
  description: 'Meet the team behind MicroCrop — building global parametric crop and livestock insurance infrastructure, launching first in Africa.',
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
