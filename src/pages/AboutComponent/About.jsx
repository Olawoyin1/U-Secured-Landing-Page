import React from 'react'
import "./style.css"

const About = () => {
  return (
    <div className='about'>
      <img src="images/patt.svg" className='about-image' alt="" />
      <img src="images/patterns.svg" className='about-image2' alt="" />
      <div className="container about-container">

        <div className="top">
          <button className='btn2'>About U-Secured</button>
          <div className="box">
            <p>Security emergency and Health emergency is a sector that has been neglected which is detrimental to the existence of humans. <br/><br/>U-Secured is a safety web app and a mobile application that is built to keep individuals safe by connecting users around the globe together with the intention to make the world a better and safer place. A product of <span className='color'> Sphere Essential Services Limited.</span></p>
            <button className='btn'>Show More</button>
          </div>
        </div>


        <div className="bottom">

          
          <div className="b-box">
            <h1 className='color'>Mission</h1>
            <div className="flex-options">
              <img src="images/arrow3.png" alt="" />
              <p>To create a community free from Insecurities and access to first responders on the Go!</p>
            </div>
          </div>

          <div className="b-box">
            <h1 className='color'>Vision</h1>
            <div className="flex-options">
              <img src="images/arrow3.png" alt="" />
              <p>To enhance security and quicken emergency response</p>
            </div>
          </div>

         
          
          
        </div>
      </div>
    </div>
  )
}

export default About