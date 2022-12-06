import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import "./navbar.css"
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import { motion } from 'framer-motion';

const Navbar = () => {

  const [openNav, setOpenNav] = React.useState(true)


  const navVariant = {
    initial : {
      y : -10,
      opacity : 0 
    },
    animate : {
      y : [0 , 30, 0],
      opacity : 1,
      transition : {
        type : "spring",
        duration: 1.5,
        
        stifness : 150,
        bounce : 100
      }
    }
  }


  return (
    <motion.div 
      className="navbar"
      variants={navVariant}
      initial="initial"
      animate="animate"
    >
        <div className="container navbar-container">
          <Link className='desktop'  to={"/"}>
            <img src="images/large-logo.svg" alt="" />
          </Link>
          
          <Link className='mobile-logo' to={"/"}>
            <img src="images/mobile-logo.svg"  alt="" />
          </Link>
            
           
          <ul className={openNav ? "links" : "links show"}>
              <li className="first"><a onClick={()=> setOpenNav(true)} href="#about">About Us</a></li>
              <li><a onClick={()=> setOpenNav(true)} href="#offer">Features</a></li>
              <li><a onClick={()=> setOpenNav(true)} href="">News</a></li>
              <li><a onClick={()=> setOpenNav(true)} href="">Contact</a></li>
              <li className='last'><Link className='btn btn-nav' to={"waitlist"} onClick={()=> setOpenNav(true)}>Join the waitlist</Link></li>
              <HiOutlineX 
                className="close-btn" 
                onClick={()=> setOpenNav(true)}
              />
          </ul>

          <HiBars3BottomRight 
            className='menu' 
            onClick={()=> setOpenNav(false)}
          />

      
        </div>
      </motion.div>
  )
}

export default Navbar