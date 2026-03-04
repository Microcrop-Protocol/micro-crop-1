import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — MicroCrop',
  description: 'Meet the team behind MicroCrop — building parametric crop insurance infrastructure for Africa.',
}

export default function AboutPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  )
}
