import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Insights on Parametric Insurance & Climate Resilience',
  description: 'Insights on parametric insurance, climate resilience, and agricultural technology from markets around the world.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'MicroCrop Blog',
    description: 'Insights on parametric insurance, climate resilience, and agricultural technology from markets around the world.',
    url: 'https://microcrop.app/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main id="main">
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
