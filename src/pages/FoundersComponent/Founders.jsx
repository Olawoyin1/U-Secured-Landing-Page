import React, { useState } from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css"
import Data from "./Data"
import EachFounderComponent from './EachFounderComponent'
// Import Swiper styles
// import "swiper/css";
// import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";


const Founders = () => {


  // console.log(Founders);

  // const Founder = Data.map(user => {
  //   console.log(user);
  //   return
  //    <EachFounderComponent
  //     key={user.id}
  //     name={user.name}
  //     image={user.image}
  //     position={user.position}
  //   />
    
  // })


  const Founders = Data.map(user => {
    return(
      <EachFounderComponent 
        key={user.id}
        {...user}
      />
    )
  })

  return (
    <div className='founders'>
        <div className="container">
            <h3 className='bold'>Meet The Founders</h3>
            <div className="founder-container">
            <Swiper 
              watchSlidesProgress={true} 
              // slidesPerView={3} 
              // className="mySwiper">
              spaceBetween={90}


              breakpoints={{
                // when window width is >= 640px
                500: {
                  width: 500,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1024: {
                  width: 1024,
                  slidesPerView: 3,
                },


              }}


              // spaceBetween={30}
              // slidesPerGroup={3}
              // loop={true}
              freeMode={true}
              // loopFillGroupWithBlank={true}
              
              // navigation={true}
              // modules={[Pagination, Navigation]}
              // className="mySwiper"

              // centeredSlides={true}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
              >
              {
                 Data.map((user, index) => {
                  return(
                    <SwiperSlide
                      key={user.id}
                      {...user}
                      className="user-slide"
                    >
                      <div className="f-flex">
                        <div className="f-image">
                            <img src={user.image} alt="" />
                        </div>
                        <div className="f-details">
                            <h3>{user.name}</h3>
                            <p>{user.position}</p>
                        </div>
                      </div>

                    </SwiperSlide> 
                  
                  )
              })}
              
            </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Founders



