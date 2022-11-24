import React from 'react'
import Footer from './Footer/Footer'
import About from './AboutComponent/About'
import Showcase from './HeroComponents/Showcase'
import Offer from './WhatWeOfferComponent/Offer'
import Founders from './FoundersComponent/Founders'
import Mobile from './MobileComponent/Mobile'

const Hero = () => {
  return (
    <section className='showcase'>
      <Showcase />
      <About />
      <Offer />
      <Mobile />
      <Footer />
   
    </section>
  )
}

export default Hero