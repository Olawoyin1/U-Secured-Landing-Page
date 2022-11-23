import React from 'react'
import "./offer.css"

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
                <img src="images/ambulance.png" alt="" />
            </div>
            <div class="col-content">
                <h2 class="col-headings">Call For Ambulance</h2>
                <p>The Call For Ambulance feature allows users access to several ambulance services with users' location.</p>
                <button class="offer-btn">Learn more</button>
            </div>
        </div>

        <div class="col-2 reverse">
            <div class="col-content live-cont">
                <h2 class="col-headings">Live Broadcast</h2>
                <p>The Call For Ambulance feature allows users access to several ambulance services with users' location.</p>
                <button class="offer-btn">Learn more</button>
            </div>
            <div class="col-image live-broadcast">
                <img src="images/live.png" alt="" />
            </div>
        </div>

        <div class="col-2">
            <div class="col-image">
                <img src="images/local-authority.png" alt="" />
            </div>
            <div class="col-content">
                <h2 class="col-headings">Reach Local Authorities</h2>
                <p>The Call For Ambulance feature allows users access to several ambulance services with users' location.</p>
                <button class="offer-btn">Learn more</button>
            </div>
        </div>

    </div>
</div>
  )
}

export default Offer