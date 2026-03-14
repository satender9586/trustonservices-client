import React from 'react'
import Navbar from '@/app/components/layout/Navbar'
import HeroSection from './components/HeroSection'
import Footer from '@/app/components/layout/Footer'
import TestomonialSection from './components/TestomonialSection'

const Landing = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <TestomonialSection/>
        <Footer/>
    </>
  )
}

export default Landing