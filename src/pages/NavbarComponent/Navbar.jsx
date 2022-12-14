import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import "./navbar.css"
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";
import { motion } from 'framer-motion';

const Navbar =({openNav, setOpenNav, modal, setModal}) => {

  
  const [scroll, SetScroll] = React.useState(false)
  const [width, setWidth] = React.useState(window.innerWidth)
  

  React.useEffect(()=>{
    window.addEventListener("resize", ()=>{
      setWidth(window.innerWidth)
    })
  }, [])


  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
      SetScroll(true)
    }else{
      SetScroll(false)
    }
    
  })


  const handleClick = ()=> {
    setOpenNav(true)
    setModal(true)
  }


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
        ease: "easeIn",
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
          
          <Link onClick={()=>setOpenNav(true)} className='mobile-logo' to={"/"}>
            <img src="images/mobile-logo.svg"  alt="" />
          </Link>
            
           
          <ul className={openNav ? "links" : "links show"}>


              <li className="first">
                <a 
                  onClick={()=>setOpenNav(true) } 
                  href="#about"
                >About Us</a>
              </li>


              <li>
                <a 
                  onClick={()=> setOpenNav(true)} 
                  href="#offer"
                >Features</a>
              </li>


              <li>
                <a 
                  onClick={()=> setOpenNav(true)} 
                  href="#news"
                >News</a>
              </li>


              <li>
                {
                  width > 500 ? 
                  <a 
                  onClick={handleClick} 
                  // href="#contact"

                >Contact Us</a>
                  :
                  <Link onClick={()=>setOpenNav(true)} to={"contact"}>Contact Us</Link>
                }
                
              </li>


              <li className='last'>
                <Link 
                  className='btn btn-nav' 
                  to={"waitlist"} 
                  onClick={()=> setOpenNav(true)}
                >Join the waitlist</Link>
              </li>
              

          </ul>
          

              {
                openNav ?  
                <HiBars3BottomRight 
                className='menu' 
                onClick={()=> setOpenNav(false)}
            /> :
            <HiOutlineX 
                className="menu close-btn" 
                onClick={()=> setOpenNav(true)}
              />

              }
              
         

          

      
        </motion.div>
      </motion.div>
  )
}

export default Navbar