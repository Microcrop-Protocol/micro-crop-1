import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const AboutPage = () => {
  return (
    <div className="font-poppins">
        <Navbar />
        <AboutSection />
        <Footer />
    </div>
  )
}

export default AboutPage