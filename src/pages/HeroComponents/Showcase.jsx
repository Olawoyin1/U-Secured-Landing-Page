import React from 'react'
import { Link } from 'react-router-dom'
import "./showcase.css"
import { motion } from 'framer-motion'




const Showcase = () => {
  return (
    <div className="hero">
      <div className="container hero-container">
        <div className="hero-content">
            <h1 className='bold'>Safety made just for <span className="color">you</span></h1>
            <p>The Safety tech built to keep you safe and connected with other users around the globe</p>
            <div className='waitlist-arrow'>
              <button className="btn">Join The Waitlist</button>
              
              <a href="" className=' arrow-mobile'>
                <i className="uil uil-arrow-down"></i>
              </a>

            </div>
        </div>

          <img src="images/hero-image.png" alt="" />
         

          <a href="" className='arrow arrow-pc'>
            <i className="uil uil-arrow-down"></i>
          </a>
      </div>


      
    </div>
  )
}

export default Showcase