import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import "./navbar.css"
import { HiBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container navbar-container">
          <Link className='desktop'  to={"/"}>
            <img src="images/large-logo.svg" alt="" />
          </Link>
          
          <Link className='mobile-logo' to={"/"}>
            <img src="images/mobile-logo.svg"  alt="" />
          </Link>
            
           
          <ul className="links">
              <li className="first"><a href="#about">About Us</a></li>
              <li><a href="">Features</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Contact</a></li>
              <Link to={"join-waitlist"} className="btn last">Join the waitlist</Link>
          </ul>

          <HiBars3BottomRight className='menu' />

      
        </div>
      </div>
  )
}

export default Navbar