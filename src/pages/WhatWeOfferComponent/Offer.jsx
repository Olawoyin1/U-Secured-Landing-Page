import React from 'react'
import "./offer.css"
import { HiArrowLongRight } from "react-icons/hi2";

const Offer = () => {
  return (
    <div class="what-we-offer">
    <div class="container what-we-offer-container">
        <div class="offer-header">
            <div class="header-content">
                <h1>How we make the world a safer place</h1>
                <p>U-secured offers some highly unique features designed to keep you safe and connected to other users.</p>
            </div>
        </div>

        <div class="col-2">
            <div class="col-image">
                <img className='large-screen' src="images/ambulance.png" alt="" />
                <img className='mobile-screen' src="images/ambulance-mobile.svg" alt="" />
            </div>
            <div class="col-content">
                <h2 class="col-headings">Call For Ambulance</h2>
                <p>The Call For Ambulance feature allows users access to several ambulance services with users' location.</p>
                <button class="offer-btn color">Learn more   <HiArrowLongRight /></button>
            </div>
        </div>

        <div class="col-2 reverse">
            <div class="col-content live-cont">
                <h2 class="col-headings">Live Broadcast</h2>
                <p>The Call For Ambulance feature allows users access to several ambulance services with users' location.</p>
                <button class="offer-btn color">Learn more  <HiArrowLongRight /></button>
            </div>
            <div class="col-image live-broadcast">
                <img className='large-screen' src="images/live.png" alt="" />
                <img className='mobile-screen' src="images/live-mobile.svg" alt="" />
            </div>
        </div>

        <div class="col-2">
            <div class="col-image">
                <img className='large-screen' src="images/local-authority.png" alt="" />
                <img className='mobile-screen' src="images/authority-mobile.svg" alt="" />
            </div>
            <div class="col-content">
                <h2 class="col-headings">Reach Local Authorities</h2>
                <p>The Call For Ambulance feature allows users access to several ambulance services with users' location.</p>
                <button class="offer-btn color">Learn more  <HiArrowLongRight /></button>
            </div>
        </div>

    </div>
</div>
  )
}

export default Offer