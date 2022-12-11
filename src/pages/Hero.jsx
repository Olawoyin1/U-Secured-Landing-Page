import React from 'react'
import Footer from './Footer/Footer'
import About from './AboutComponent/About'
import Showcase from './HeroComponents/Showcase'
import Mobile from './MobileComponent/Mobile'
import Offer from './OfferComponent/Offer'
import Loading from './Loading'

const Hero = ({openNav, setOpenNav}) => {
  return (
    <section className='showcase'>
      <Showcase openNav = {openNav} setOpenNav={setOpenNav}/>
      <About openNav = {openNav} setOpenNav={setOpenNav}/>
      <Offer openNav = {openNav} setOpenNav={setOpenNav}/>
      <Mobile openNav = {openNav} setOpenNav={setOpenNav}/>
      <Footer openNav = {openNav} setOpenNav={setOpenNav}/>
   
    </section>
  )
}

export default Hero