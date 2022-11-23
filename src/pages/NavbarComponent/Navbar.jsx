import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container navbar-container">

            <img src="images/u-secured-logo.png" className='desktop' alt="" />
            <img src="images/mobile-logo.png" className='mobile-logo' alt="" />
            
           
            <ul className="links">
                <li className="first"><a href="">About Us</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Contact</a></li>
                <button className="btn last">Join the waitlist</button>
            </ul>

            <i class="uil uil-bars menu"></i>

        
        </div>
      </div>
  )
}

export default Navbar