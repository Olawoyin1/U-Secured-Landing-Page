import React from 'react'
import "./style.css"

const Mobile = () => {
  return (
    <div className='mobile'>
        <div className="container">
            <div className="mobile-image-container">
                <img src="images/mobile.png"  className='one' alt="" />
                <img src="images/mobile1.png" className='two' alt="" />
                <img src="images/mobile2.png" className='three' alt="" />
            </div>

            <div className="mobile-content">
                <p>COMING SOON!</p>
                <h1 className='bold color'>U-SECURED MOBILE APP</h1>
                <small>Soon available for download on Google PlayStore and Apple App Store.</small>
            </div>

        </div>
    </div>
  )
}

export default Mobile