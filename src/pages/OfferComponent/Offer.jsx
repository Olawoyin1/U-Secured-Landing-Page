import React from 'react'
import OfferData from './OfferData';
import "./offer.css"
import Each from './Each';

const Offer = () => {

    const OfferDatas = OfferData


  return (
    <div class="what-we-offer">
        <div class="container what-we-offer-container">
            <div class="offer-header">
                <div class="header-content">
                    <h1>How we make the world a safer place</h1>
                    <p>U-secured offers some highly unique features designed to keep you safe and connected to other users.</p>
                </div>
            </div>

            {
                OfferDatas.map(data => {
                    return(
                        <Each 
                            key={data.id}
                            {...data}
                        />
                    )
                })
            }

        </div>
    </div>
  )
}

export default Offer