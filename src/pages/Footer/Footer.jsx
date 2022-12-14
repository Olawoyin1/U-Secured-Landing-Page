import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

const Footer = ({openNav, setOpenNav}) => {
    
    const [readMore, setReadMore] = React.useState(false)



    const FooterText = `U-Secured is a Safety Tech App owned by Sphere.co
    Developed for Safety and Health Emergency Responses.
    The app allows users to access ambulance services, place direct calls to local authority and live capture of eyewitness experiences.
    U-Secured seeks to provide a Safer and More habitable environment for Individuals.`

    


  return (
    <div className="footer" id='footer' onClick={()=>setOpenNav(true)}>
        <div className="container footer-container">
            <div className="footer-waitlist-container">
                <h3>Get ready for the big launch.</h3>
                <button className="btn2">
                    <Link to={"waitlist"} className="btn2 last">Join the waitlist</Link>
                </button>
            </div>
            <div className="footer-grid">
                <div className="footer-content">
                   
                    <img src="images/large-logo.svg" alt="" />

                    <div>

                        <p>
                            {
                                readMore ? FooterText : `${FooterText.substring(0,150)}....`
                                
                            }

                            <button className='btn3' onClick={()=>{setReadMore(!readMore)}}>
                                {
                                    readMore ? "Show less" : "Read more"
                                }
                            </button>
                        </p>

                    </div>
                    
                  
                    <div className="socials">
                        <a href="" target={'blank'}>
                            <i className="uil uil-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/Usecured_" target={'blank'}>
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://mobile.twitter.com/U_secured" target={'blank'}>
                            <i className="uil uil-twitter-alt"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/u-secured-750b1a237" target={'blank'}>
                        <i className="uil uil-linkedin-alt"></i>
                        </a>
                    </div>
                </div>
                <div className="others">
                    <div className="col-3">

                        <div className="each">
                            <h3>Company</h3>
                            <a href="#about">About Us</a>
                            <a href="">FAQs</a>
                        </div>
                        <div className="each">
                            <h3>Legal</h3>
                            <a href="">Terms of Use</a>
                            <a href="">Privacy Policy</a>
                        </div>
                        {/* <div className="each">
                            <h3>Contact Us</h3>
                            <div className="flex">
                                <a href="">Tel</a>
                                <p className="color">+234 916 1661 731</p>
                            </div>
                            <div className="flex">
                                <a href="">Mail</a>
                                <p className="color email">usecured.safety.ng@outlook.com</p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>

            <small className="muted end">&copy;2022 U-Secured, All Rights Reserved</small>
        </div>


    </div>
  )
}

export default Footer