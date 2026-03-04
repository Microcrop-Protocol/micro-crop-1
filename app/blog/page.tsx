import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — MicroCrop',
  description: 'Insights on parametric insurance, climate resilience, and agricultural technology in Africa.',
}

export default function BlogPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <BlogSection />
      <Footer />
    </div>
  )
}
