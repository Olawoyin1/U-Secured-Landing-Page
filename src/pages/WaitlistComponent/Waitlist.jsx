import React from 'react'
import Footer from '../Footer/Footer'
import AwaitingForm from '../WaitlistPageComponent/AwaitingForm/AwaitingForm'
import WaitlistScreen from "../WaitlistPageComponent/WaitlistScreen/waitlistScreen"
import { motion } from 'framer-motion'
import Contact from '../ContactUs/Contact'
import {  AnimatePresence } from "framer-motion"

const Waitlist = ({openNav, setOpenNav, modal, setModal}) => {


  const transition = { duration: 0.6, ease: "easeInOut" ,delay : 0.7};

  const waitMotion = {
    initial: { y: 100, opacity: 0 ,scale : 0},
    animate: { y: 0, opacity: 1, transition,scale: 1},
    exit: { x: -100, opacity: 0, transition:{delay : 0, duration: 0.3} }
  };


  return (
    <motion.div variants={waitMotion} initial="initial" animate="animate" exit={"exit"} className='waitlist-component'>
      <AnimatePresence>
        {
          modal ? <Contact modal={modal} setModal={setModal} /> :  null
        }
      </AnimatePresence>
      <WaitlistScreen openNav = {openNav} setOpenNav={setOpenNav}/>
      <AwaitingForm openNav = {openNav} setOpenNav={setOpenNav}/>
      <Footer openNav = {openNav} setOpenNav={setOpenNav}/>
    </motion.div>
  )
}

export default Waitlist