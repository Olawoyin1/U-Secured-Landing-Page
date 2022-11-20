import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container footer-flex">
            <div className="left">
                <div className="logo">
                    <img src="images/footer-image.png" alt="" />
                    <h3>U-Secured</h3>
                </div>

                <div className="footer-text">
                    <p>U-Secured is a Safety Tech App owned by Sphere.co developed for Safety and Health Emergency Responses. The app allows users to access ambulance services, place direct calls to local authority and live capture of eyewitness experiences.  <br/> U-Secured seeks to provide a Safer and More habitable environment for Individuals</p>
                </div>

                <small>U-Secured 2022 Sphere.co</small>
            </div>

            <div className="right">
                <div className="col-3">
                    <div className="col">
                        <h3>Company</h3>
                        <Link to={"/"}>FAQS</Link>
                        <Link to={"/"}>About</Link>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <Link to={"/"}>Terms</Link>
                        <Link to={"/"}>Privacy Policy</Link>
                    </div>
                    <div className="col">
                        <h3>Contact</h3>
                        <Link to={"/"}>Email</Link>
                        <Link to={"/"}>Phone</Link>
                    </div>
                </div>

                <div className="socials">
                    <img src="images/follow.png" alt="" />
                    <div className="icons">
                        <a href="">
                            <img src="images/twitter.png" alt="" />
                        </a>
                        <a href="">
                            <img src="images/facebook.png" alt="" />
                        </a>
                        <a href="">
                            <img src="images/linkedin.png" alt="" />
                        </a>
                        <a href="">
                            <img src="images/instagram.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer