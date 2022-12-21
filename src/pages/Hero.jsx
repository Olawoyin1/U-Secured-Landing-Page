import React, { Suspense } from 'react'
import Footer from './Footer/Footer'
import About from './AboutComponent/About'
import Showcase from './HeroComponents/Showcase'
import Offer from './OfferComponent/Offer'
import Loading from './Loading'
import Contact from './ContactUs/Contact'
import { toast } from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'
const Mobile = React.lazy(()=>import("./MobileComponent/Mobile"))

const Hero = ({openNav, setOpenNav, modal , setModal}) => {
  
const transition = { duration: 0.5, ease: "easeInOut" };

const heroMotion = {
  initial: { y: -150, opacity: 0 },
  animate: { y: 0, opacity: 1, transition},
  exit: { x: 150, opacity: 0, transition: { staggerChildren: 1 , duration: 0.8} }
};


  return (
    <motion.section variants={heroMotion} initial="initial" animate="animate" exit={"exit"} className='showcase'>
      <AnimatePresence>

      {
        modal ? <Contact modal={modal} setModal={setModal} /> :  null
      }
      </AnimatePresence>
      <Showcase 
        openNav = {openNav} 
        setOpenNav={setOpenNav}
      />
      <About 
        openNav = {openNav} 
        setOpenNav={setOpenNav}
      />
      <Offer 
        openNav = {openNav} 
        setOpenNav={setOpenNav}
      />

      <Suspense fallback={<Loading />}>
        <Mobile 
          openNav = {openNav} 
          setOpenNav={setOpenNav}
        />
      </Suspense>
      
      <Footer 
        openNav = {openNav} 
        setOpenNav={setOpenNav}
      />
   
    </motion.section>
  )
}

export default Hero