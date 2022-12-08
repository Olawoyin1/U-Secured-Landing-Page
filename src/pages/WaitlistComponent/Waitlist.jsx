import React from 'react'
import Footer from '../Footer/Footer'
import AwaitingForm from '../WaitlistPageComponent/AwaitingForm/AwaitingForm'
import WaitlistScreen from "../WaitlistPageComponent/WaitlistScreen/waitlistScreen"
import { motion } from 'framer-motion'

const Waitlist = () => {

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
      <WaitlistScreen />
      <AwaitingForm />
      <Footer />
    </motion.div>
  )
}

export default Waitlist