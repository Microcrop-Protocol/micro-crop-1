import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const BlogPage = () => {
  return (
        <div className="font-poppins">
            <Navbar />
            <BlogSection />
            <Footer />
        </div>
  )
}

export default BlogPage