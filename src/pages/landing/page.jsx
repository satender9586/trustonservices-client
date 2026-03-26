import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from './components/HeroSection'
import Faq from '@/components/layout/Faq'


const Landing = () => {
  return (
    <>
        <Navbar/>
        {/* <HeroSection/> */}
        <Faq/>
        <Footer/>
    </>
  )
}

export default Landing