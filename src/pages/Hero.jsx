import React from 'react'
import Footer from './Footer/Footer'
import About from './AboutComponent/About'
import Showcase from './HeroComponents/Showcase'
import Founders from './FoundersComponent/Founders'
import Mobile from './MobileComponent/Mobile'
import Offer from './OfferComponent/Offer'
import Loading from './Loading'

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