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
          delay: 0.5,
        } , 
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
        transition : {
          duration : 0.3,
          delay : 1,
          type : "spring",
          stiffness : 200,
          ease : "easeInOut",
          staggerChildren : 1,
          when : "beforeChildren",
        }
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
        transition : {
          type : "spring",
          stifness : 200,
          bounce : 0.6,
          mass : 0.3
        }
      }
    }





  return (
    <motion.div 
      className='about' 
      id='about' 
      onClick={()=>setOpenNav(true)}
      variants={mainVariant}
      initial={"initial"}
      whileInView={"animate"}
    >
      
      <div className="container about-container">
        <div className="box bigger-box">
          <img src="images/about-arrow.svg" className='about-arrow' alt="" />
          <p>Unique features</p>
          <h1>All about <br/>  U-secured</h1>
          <div className="buttons">
            <p>swipe <i className="uil uil-angle-double-right"></i> </p>
          </div>
        </div>

        <motion.div 
          className="about-scroll"
          variants={aboutVariant}
          whileInView="animate"
          initial="initial"
        >

          {
            AboutDatas.map(data =>{
              return(
                <div variants={slideIn} key={data.id} className={data.class}>
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


      </div>
    </motion.div>
  )
}

export default About