import PlatformFeatures from '@/components/Farmers'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import Navbar from '@/components/Navbar'
import WhyMicroCrop from '@/components/PracticeAreas'
import React from 'react'

const ServicePage = () => {
  return (
    <div>
        <Navbar />
        <HowItWorks />
        <PlatformFeatures />
        <WhyMicroCrop />
        <Footer />
    </div>
  )
}

export default ServicePage
