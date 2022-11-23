import React from 'react'
import "./mobile.css"

const Mobile = () => {
  return (
    <div className='mobile'>

        <div className="container mobile-container">

        <div className="mobile-content">
          <p>Coming soon</p>
          <h1>U-Secured Mobile App</h1>
        </div>

        <div className="mobile-image-container">
          <img src="images/mobile.png"  className='one' alt="" />
          <img src="images/mobile1.png" className='two' alt="" />
          <img src="images/mobile2.png" className='three' alt="" />
        </div>

        </div>
        
    </div>
  )
}

export default Mobile