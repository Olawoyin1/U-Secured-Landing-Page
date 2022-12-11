import React from 'react'
import Footer from '../Footer/Footer'
import AwaitingForm from '../WaitlistPageComponent/AwaitingForm/AwaitingForm'
import WaitlistScreen from "../WaitlistPageComponent/WaitlistScreen/waitlistScreen"
import { motion } from 'framer-motion'

const Waitlist = ({openNav, setOpenNav}) => {

  const waitlistVariant = {
    initial : {
      opacity : 0
    },
    animate : {
      opacity : 1
    },
    transition : {
      delay : 1.5,
      duration : 1,
    },
    exit : {
      x: "-100vw",
      transition : {
        ease : "easeInOut"
      }
    }
  }




  return (
    <motion.div className='waitlist-component'>
      <WaitlistScreen openNav = {openNav} setOpenNav={setOpenNav}/>
      <AwaitingForm openNav = {openNav} setOpenNav={setOpenNav}/>
      <Footer openNav = {openNav} setOpenNav={setOpenNav}/>
    </motion.div>
  )
}

export default Waitlist