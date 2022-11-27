import React from 'react'
import "./about.css"
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";

const About = () => {
  return (
    <div className='about'>
      <div className="about-container">
        <div className="box bigger-box">
          <img src="images/about-arrow.png" className='about-arrow' alt="" />
          <p>Unique features</p>
          <h1>All about <br/>  U-secured</h1>
          <div className="buttons">
            <button>
              <HiChevronLeft />
            </button>
            <button>
              <HiChevronRight />
            </button>
          </div>
        </div>

        <div className="push box smaller-box">
          <button className='icon-btn'></button>
          <h3>Built to keep <br /> individuals safe</h3>
          <p>U-Secured is a safety web app and a mobile application that is built to keep individuals safe by connecting users around the globe together with the intention to make the world a better and safer place.</p>
        </div>

        <div className="box smaller-box">
          <button className='icon-btn'></button>
          <h3>Our mission statement</h3>
          <p>To create a community free from Insecurities and access to first responders on the Go!</p>
        </div>
        
        
        <div className="box smaller-box">
          <button className='icon-btn'></button>
          <h3>Our vision statement</h3>
          <p>To enhance security and quicken emergency responses</p>
        </div>

      </div>
    </div>
  )
}

export default About