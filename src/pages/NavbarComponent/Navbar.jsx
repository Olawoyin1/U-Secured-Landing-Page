import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import "./navbar.css"
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";

const Navbar = () => {

  const [openNav, setOpenNav] = React.useState(true)

  return (
    <div className="navbar">
        <div className="container navbar-container">
          <Link className='desktop'  to={"/"}>
            <img src="images/large-logo.svg" alt="" />
          </Link>
          
          <Link className='mobile-logo' to={"/"}>
            <img src="images/mobile-logo.svg"  alt="" />
          </Link>
            
           
          <ul className={openNav ? "links" : "links show"}>
              <li className="first"><a onClick={()=> setOpenNav(true)} href="#about">About Us</a></li>
              <li><a onClick={()=> setOpenNav(true)} href="">Features</a></li>
              <li><a onClick={()=> setOpenNav(true)} href="">News</a></li>
              <li><a onClick={()=> setOpenNav(true)} href="">Contact</a></li>
              <li><Link to={"join-waitlist"} onClick={()=> setOpenNav(true)} className="btn last">Join the waitlist</Link></li>
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
      </div>
  )
}

export default Navbar