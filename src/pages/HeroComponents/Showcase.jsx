import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import { motion } from 'framer-motion'



const slideRight = {
  initial : {
    x : 300,
    opacity :0
  }, 
  animate : {
    x : 0,
    opacity : 1,
    transition : {
      delay : 1,
      duration: 5,
      type : "spring",
      stiffness : 50, 
      bounce : 250,
      when : "beforeChildren",
      staggerChildren : 2,
      ease : "easeInOut",
      // yoyo : Infinity
    }
  }
}

const slideDown = {
  initial : {
    y : [20, 0],
    opacity :0 
  }, 
  animate : {
    y : 0,
    opacity : 1,
    transition : {
      duration: 3,
      delay : 3,
      type : "spring",
      stiffness : 50, 
      bounce : 300,
      // yoyo : Infinity
    }
  }
}

const slideUp = {
  initial : {
    y : [70,-90,0],
    opacity :0 
  }, 
  animate : {
    y : 0,
    opacity : 1,
    transition : {
      duration: 4,
      delay : 2.7,
      type : "spring",
      stiffness : 50, 
      bounce : 200,
      ease : "easeInOut",
      // yoyo : Infinity
    }
  }
}


// const 

const Showcase = () => {
  return (
    <div>
        <div className='hero'>

            <div className="hero-content">
              <motion.div className="container flex-2">

                <div className="image">
                  
                    <motion.img 
                      variants={slideRight}
                      initial="initial"
                      whileInView="animate"
                      src="images/u-secured-bg.png" 
                      alt="" 
                    />
                </div>

                <div className="content">
                  <motion.h1 
                    className='muted'
                    variants={slideDown}
                    initial="initial"
                    whileInView="animate" 
                  >INTRODUCING</motion.h1>
                  <motion.h1 
                    className='bold-text'
                    variants={slideUp}
                    initial="initial"
                    whileInView="animate"
                  >YOUR SAFETY ZONE</motion.h1>
                  <p>The safety tech built to keep you safe and connected with other users around the globe.</p>
                  
                  <Link className='btn' to={"join_waitlist"}>Join The Waitlist</Link>
                </div>
                
              </motion.div>
            </div>

            <img src="images/hero-image.png" className='hero-image' alt="" />
        </div>
    </div>
  )
}

export default Showcase