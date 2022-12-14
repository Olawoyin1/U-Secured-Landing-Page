import React from 'react'
import { Link } from 'react-router-dom'
import "./showcase.css"
import { HiArrowLongDown } from "react-icons/hi2";
import { ArrowDown } from 'iconsax-react';




const Showcase = ({openNav, setOpenNav}) => {
  return (
    <div className="hero" onClick={()=>setOpenNav(true)}>
      <div className="container  reverse-grid">
        <div className="reverse-content">
            <h1>Safety made <br /> just for <span className="color">you</span></h1>
            <p>The Safety tech built to keep you safe and connected with other users around the globe</p>
            <div className='waitlist-arrow'>
              <Link to={"waitlist"} className="btn last">Join the waitlist</Link>
              
              <a href="#footer" className=' arrow-mobile'>
                <ArrowDown />
              </a>

            </div>
        </div>

        <div className="reverse-image">

          <img className='large-screen' src="images/hero-large.svg" alt="" />
          <img className='mobile-screen' src="images/hero-mobile.svg" alt="" />

        </div>

         

          <a href="#footer" className='arrow arrow-pc'>
            <ArrowDown />
          </a>
      </div>


      
    </div>
  )
}

export default Showcase