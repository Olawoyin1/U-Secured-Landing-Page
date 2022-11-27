import React from 'react'
import { Link } from 'react-router-dom'
import "./showcase.css"
import { HiArrowLongDown } from "react-icons/hi2";




const Showcase = () => {
  return (
    <div className="hero">
      <div className="container reverse-grid">
        <div className="hero-content">
            <h1 className='bold'>Safety made <br /> just for <span className="color">you</span></h1>
            <p>The Safety tech built to keep you safe and connected with other users around the globe</p>
            <div className='waitlist-arrow'>
              <Link to={"join-waitlist"} className="btn last">Join the waitlist</Link>
              
              <a href="" className=' arrow-mobile'>
                <HiArrowLongDown />
              </a>

            </div>
        </div>

        <div className="hero-section-image">

          <img className='large-screen' src="images/hero-image.png" alt="" />
          <img className='mobile-screen' src="images/hero-mobile.svg" alt="" />

        </div>

         

          <a href="" className='arrow arrow-pc'>
            <HiArrowLongDown />
          </a>
      </div>


      
    </div>
  )
}

export default Showcase