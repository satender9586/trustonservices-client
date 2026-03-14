import React from 'react'
import Navbar from '@/app/components/layout/Navbar'
import HeroSection from './components/HeroSection'
import Footer from '@/app/components/layout/Footer'
import TestomonialSection from './components/TestomonialSection'
import FeedbackSection from './components/FeedbackSection'

const Landing = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <TestomonialSection/>
        <Footer/>
        <FeedbackSection/>
    </>
  )
}

export default Landing