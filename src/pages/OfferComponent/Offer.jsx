import React from 'react'
import OfferData from './OfferData';
import "./offer.css"

const Offer = () => {

    const OfferDatas = OfferData

    const [readMore, setReadMore] = React.useState(false)

    const Offers = OfferDatas.map(data => {
        return(

            <div class={data.class}>
                <div class="col-image">
                    <img className='large-screen' src={data.large_screen} alt="" />
                    <img className='mobile-screen' src={data.small_screen}alt="" />
                </div>
                <div class="col-content">
                    <h2 class="col-headings">{data.title}</h2>
                    <p> 
                           {
                            readMore ? data.content : `${data.content.substring(0,250)}....`
                           }

                            <button className='btn3' onClick={()=>{setReadMore(!readMore)}}>
                                {
                                    readMore ? "Show less" : "Read more"
                                }
                            </button>
                        </p>
                </div>
            </div>

        )
    })


  return (
    <div class="what-we-offer">
        <div class="container what-we-offer-container">
            <div class="offer-header">
                <div class="header-content">
                    <h1>How we make the world a safer place</h1>
                    <p>U-secured offers some highly unique features designed to keep you safe and connected to other users.</p>
                </div>
            </div>

            {Offers}

        </div>
    </div>
  )
}

export default Offer