import React from 'react'
import "./style.css"

const Offer = () => {
  return (
    <div className='offers'>
        <div className="container">
            
            <div className="header">
                <button className='btn2 grey-shadow' >What We Offer</button>
                <p>U-Secured offers some highly unique features designed to keep you safe and connected to other users</p>
            </div>

            <div className="offers-container">
                <div className="left gap">
                    <h1 className='big-heading'>CALL FOR AMBULANCE</h1>
                    <p>The Call For Ambulance feature allows users access to several ambulance services with users’ location.</p>
                    <button className='btn'>Learn More</button>
                </div>

                <div className="right">
                    <img src="images/ambulance.svg" alt="Ambulance-image" />
                </div>
            </div>

            <img className='arrow1' src="images/arrow1.png" alt="" />

            <div className="offers-container">
                <div className="left">
                    <img src="images/live.svg" alt="" />
                </div>
                <div className="right gap">
                <h1 className='big-heading'>GO LIVE</h1>
                    <p>The Go-Live Is a real time broadcast feature that allows users who are eyewitnesses to life threatening situations to record/broadcast live.</p>
                    <button className='btn'>Learn More</button>
                </div>
            </div>

            <img className='arrow2' src="images/arrow2.png" alt="" />


            <div className="offers-container last">
                <div className="left gap">
                    <h1 className='big-heading'>CALL LOCAL AUTHORITY</h1>
                    <p>The Call Local Authority feature allows users to make distress calls to the nearest local authority within user location.</p>
                    <button className='btn'>Learn More</button>
                </div>

                <div className="right">
                    <img src="images/what-we-offer.svg" alt="Ambulance-image" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Offer