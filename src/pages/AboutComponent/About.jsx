import React from 'react'
import "./about.css"
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import AboutData from './AboutData';
import { InfoCircle } from 'iconsax-react';
import { animate, delay, motion } from 'framer-motion';


const About = ({openNav, setOpenNav}) => {

    const AboutDatas = AboutData

    const [width, setWidth] = React.useState(window.innerWidth)
  

    React.useEffect(()=>{
      window.addEventListener("resize", ()=>{
        setWidth(window.innerWidth)
      })
    }, [])

    // console.log(width);


    const mainVariant = {
      initial : {
        // x : width > 0 ? -100 : "0",
        x : -100,
        opacity : 0
      },
      animate : {
        opacity : 1,
        x: 0,
        transition : {
          duration: 0.5,
          staggerChildren : 0.7
        } , 
      }
    }

    const transition = { duration: 0.5, ease: "easeInOut", type : "tween" };


    const bigVar = {
      initial : {
        // x : width > 0 ? -100 : "0",
        x : -100,
        opacity : 0
      },
      animate : {
        opacity : 1,
        x: 0,
        transition
      }
    }



    const aboutVariant = {


      initial : {
        x : 100,
        opacity : 0
      },
      animate : {
        x : 0,
        opacity : 1,
        // rotate : [0 , 45 , -45, 0],
        // transition 
        transition : {
          duration: 0.5,
          staggerChildren : 1
        } , 
      }
    }
  

    const slideIn = {

      initial : {
        x : 100,
        opacity : 0
      },
      animate : {
        x : 0,
        opacity : 1,
        transition
      }
    }





  return (
    <motion.div 
      className='about' 
      id='about' 
      onClick={()=>setOpenNav(true)}
      
    >
      
      <motion.div variants={mainVariant}
      initial={"initial"}
      whileInView={"animate"} className="container about-container">
        <motion.div variants={bigVar} className="box bigger-box">
          <img src="images/about-arrow.svg" className='about-arrow' alt="" />
          <p>Unique features</p>
          <h1>All about <br/>  U-secured</h1>
          <div className="buttons">
            <p>swipe <i className="uil uil-angle-double-right"></i> </p>
          </div>
        </motion.div>

        <motion.div 
          className="about-scroll"
          variants={aboutVariant}
        >

          {
            AboutDatas.map(data =>{
              return(
                <div variants={slideIn}  key={data.id} className={data.class}>
                  <button className='icon-btn'>
                    <i className={data.icon}></i>
                    </button>
                  <h3>{data.title}</h3>
                  <p>{data.content}</p>
                </div>
              )
            })
          }

        </motion.div>


      </motion.div>
    </motion.div>
  )
}

export default About