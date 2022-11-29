import React from 'react'
import "./about.css"
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import AboutData from './AboutData';
import { InfoCircle } from 'iconsax-react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from "swiper";


const About = () => {

    const AboutDatas = AboutData

    

    const About = AboutDatas.map(data =>{
      return(
        <div className={data.class}>
          <button className='icon-btn'>
            <data.icon
              size="32" 
              color="#4087EA"
            />
            </button>
          <h3>{data.title}</h3>
          <p>{data.content}</p>
        </div>
      )
    })



  return (
    <div className='about'>
      <div className="container about-container">
        <div className="box bigger-box">
          <img src="images/about-arrow.svg" className='about-arrow' alt="" />
          <p>Unique features</p>
          <h1>All about <br/>  U-secured</h1>
          <div className="buttons">
            <button>
              <HiChevronLeft />
            </button>
            <button>
              <HiChevronRight />
            </button>
          </div>
        </div>

        <div className="about-scroll">

          {About}

        </div>


      </div>
    </div>
  )
}

export default About