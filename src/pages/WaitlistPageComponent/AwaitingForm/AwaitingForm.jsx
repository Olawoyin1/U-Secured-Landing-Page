import React from 'react'
import "./await.css"
import { HiOutlineEnvelope } from "react-icons/hi2";

const AwaitingForm = () => {
  return (
    <div className='awaiting-list'>
        <div className="container reverse-grid await-container">

            <img src="images/form-image.png" alt="" />
            
            <div className="await-content">
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
                        <div className="input-field">
                            <select name="" id="">
                                <option value="">+234</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder='000 000 0000' />
                    </div>
                    </div>

                    <div className="form-buttons">
                        <button className='btn btn4'>Add referral code</button>
                        <button className='btn'>Join The Waitlist</button>
                    </div>



                </form>
            </div>

        </div>
    </div>
  )
}

export default AwaitingForm