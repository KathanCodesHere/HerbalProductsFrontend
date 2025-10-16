import React from 'react'
import Hero from '../Hero'
import FeaturedProducts from '../FeaturedProducts'
import AboutHome from '../AboutHome'
import Ingredients from '../Ingredients'
import WhyChooseKeshHerbal from '../WhyChooseKeshHerbal'


const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
      <WhyChooseKeshHerbal/>
      <Ingredients/>
      <AboutHome/>
    </div>
  )
}

export default Home