import ForFarmers from '@/components/Farmers'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import Navbar from '@/components/Navbar'
import PracticeAreas from '@/components/PracticeAreas'
import React from 'react'

const ServicePage = () => {
  return (
    <div>
        <Navbar />
        <HowItWorks />
        <ForFarmers />
        <PracticeAreas />
        <Footer />
    </div>
  )
}

export default ServicePage