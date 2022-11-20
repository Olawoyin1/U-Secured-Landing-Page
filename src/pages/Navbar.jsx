import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className="nav">
      <div className='container'>
        <div className="navbar">
          <Link to={"/"}>
            <img src="images/u-secured-logo.svg" alt="U-secured Logo" />
          </Link>

          <nav>
            <ul className='navlinks'>
              <NavLink className={"links"} to="about_us">About Us</NavLink>
              <NavLink className={"links"} to="features">Features</NavLink>
              <NavLink className={"links"} to="news">News</NavLink>
              <NavLink className={"links"} to="contact">Contact</NavLink>
              <Link className='btn' to="join_waitlist">Join Waitlist</Link>
            </ul>
          </nav>

          <i class="uil uil-bars nav-open"></i>

        </div>
      </div>

    </div>
  )
}

export default Navbar