import React from 'react'
import "./waitlist.css"
import { Link } from 'react-router-dom'
import Countdown from 'react-countdown';

const WaitlistScreen = () => {
  return (
    <div className="hero waitlist-bg">
      <div className="container waitlist-container">


        <div class="col-2 reverse">
            <div class="col-content live-cont">
              <h1 className='bold'>Get ready for the <span className='color'>BIG</span> launch!</h1>
              <p>We’ll let you know when eveything’s ready</p>


            <div className="countdown">

              <div className="countdown-el">
                <h1>04</h1>
                <small className="muted">MONTHS</small>
              </div>

              <span className='big-colon'>:</span>

              <div className="countdown-el">
                <h1>09</h1>
                <small className="muted">DAYS</small>
              </div>

              <span className='big-colon'>:</span>

              <div className="countdown-el">
                <h1>13</h1>
                <small className="muted">HOURS</small>
              </div>

              <span className='big-colon'>:</span>

              <div className="countdown-el">
                <h1>34</h1>
                <small className="muted">MINUTES</small>
              </div>

              <span className='big-colon'>:</span>

              <div className="countdown-el">
                <h1 className='color'>59</h1>
                <small className="muted color"><b>SECONDS</b></small>
              </div>
            </div>
            </div>
            <div class="col-image live-broadcast">
                <img className='large-screen' src="images/waitlist.png" alt="" />
                <img className="mobile-screen" src="images/waitlist-mobile-image.png" alt="" />
            </div>
        </div>

      
      </div>


      
    </div>
  )
}

export default WaitlistScreen