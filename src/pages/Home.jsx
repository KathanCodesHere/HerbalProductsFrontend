import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Ingradient from '../components/Ingradient'
import AboutHome from '../components/AboutHome'


const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutHome/>
      <FeaturedProducts/>
      <Ingradient/>
    </div>
    
    //  <div className="min-h-screen bg-background text-textPrimary flex flex-col items-center justify-center">
      
    // </div>
  )
}

export default Home