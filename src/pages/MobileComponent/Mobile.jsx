import React from 'react'
import "./mobile.css"
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";


const Mobile = () => {
  return (
    <div className='mobile'>

        <div className="container mobile-container">

        <div className="mobile-content">
          <p>Coming soon</p>
          <h1>U-Secured Mobile App</h1>
        </div>

        <div className="mobile-image-container">
        <img className='background' src="images/background.png" alt="" />
        <img className='background bg2' src="images/background.png" alt="" />
        <img className='background bg3' src="images/background.png" alt="" />
        <img className='background bg4' src="images/background.png" alt="" />

        <Swiper
        breakpoints={{
          850: {
            width: 850,
            slidesPerView: 1,
            pagination:true
          },
            1024: {
              width: 1024,
              spaceBetween:30,
            slidesPerView: 2,
          },
            1280: {
              width: 1280,
              // spaceBetween:30,
            slidesPerView: 3,
          },


        }}
          freeMode={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="images/mobile.svg"  className='one' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/mobile1.svg" className='two' alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/mobile2.svg" className='three' alt="" />
          </SwiperSlide>
        </Swiper>





        </div>

        </div>
        
    </div>
  )
}

export default Mobile