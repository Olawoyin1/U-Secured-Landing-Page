import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import "./navbar.css"
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import { motion } from 'framer-motion';

const Navbar = () => {

  const [openNav, setOpenNav] = React.useState(true)
  
  const [scroll, SetScroll] = React.useState(false)

  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
      SetScroll(true)
    }else{
      SetScroll(false)
    }
    
  })


  const navVariant = {
    initial : {
      y : -100,
      opacity : 0 
    },
    animate : {
      y : 0,
      opacity : 1,
      transition : {
        type : "tween",
        duration: 1.35,
        bounce: 0,
        ease: "linear",
        stifness : 0,
      }
    }
  }


  return (
    <motion.div 
      className={scroll ? "navbar scrolled" : "navbar" }
      
    >
        <motion.div 
          className="container navbar-container"
          variants ={navVariant}
          initial="initial"
          animate="animate"
        >
          <Link className='desktop'  to={"/"}>
            <img src="images/large-logo.svg" alt="" />
          </Link>
          
          <Link className='mobile-logo' to={"/"}>
            <img src="images/mobile-logo.svg"  alt="" />
          </Link>
            
           
          <ul className={openNav ? "links" : "links show"}>


            <div className="nav-mobile-top">
              <Link onClick={()=> setOpenNav(true)} className='mobile-logo' to={"/"}>
                <img src="images/mobile-logo.svg"  alt="" />
              </Link>

              <HiOutlineX 
                className="close-btn" 
                onClick={()=> setOpenNav(true)}
              />

            </div>

              <li className="first"><a onClick={()=> setOpenNav(true)} href="#about">About Us</a></li>
              <li><a onClick={()=> setOpenNav(true)} href="#offer">Features</a></li>
              <li><a onClick={()=> setOpenNav(true)} href="">News</a></li>
              <li><a onClick={()=> setOpenNav(true)} href="">Contact</a></li>
              <li className='last'><Link className='btn btn-nav' to={"waitlist"} onClick={()=> setOpenNav(true)}>Join the waitlist</Link></li>
              
          </ul>
              <HiBars3BottomRight 
              className='menu' 
              onClick={()=> setOpenNav(false)}
               />

          

      
        </motion.div>
      </motion.div>
  )
}

export default Navbar