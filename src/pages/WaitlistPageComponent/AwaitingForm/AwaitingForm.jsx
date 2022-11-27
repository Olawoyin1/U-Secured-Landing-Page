import React from 'react'
import "./await.css"
import { HiOutlineEnvelope } from "react-icons/hi2";

const AwaitingForm = () => {
  return (
    <div className='awaiting-list'>
        <div className="container">
       
            <div class="col-2">
                <div class="col-image">
                    <img className='large-screen' src="images/form-image.png" alt="" />
                    <img className='mobile-screen' src="images/awaiting-mobile.svg" alt="" />
                </div>
                <div class="col-content">
                <form action="">
                        <h3>Enter your details below</h3>

                        <div className="input-field">
                            <input type="text" placeholder='First name' />
                        </div>

                        <div className="input-field">
                            <input type="text" placeholder='E-mail address' />
                        </div>

                        <div className="input-field">
                        <select name="" id="">
                                <option value="">State of residence</option>
                        </select>
                        </div>

                        <div className="input-flex">
                            
                            <select name="" id="">
                                <option value="">+234</option>
                            </select>
                        
                            
                            <input type="text" placeholder='000 000 0000' />
                        
                        </div>

                        <div className="form-buttons">
                            <button className='btn btn4'>Add referral code</button>
                            <button className='btn'>Join The Waitlist</button>
                        </div>



                    </form>
                </div>
            </div>

        </div>

        </div>

  )
}

export default AwaitingForm