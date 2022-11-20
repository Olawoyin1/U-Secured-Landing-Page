import React from 'react'
import "./style.css"

const Waitlist = () => {
  return (
    <div className='waitlist'>
      <div className="container waitlist-flex">
        <div className="left">
          <h1>JOIN <span className='color'>THE WAITLIST</span>  FOR THE TOP SAFETY TECH ON THE <span className='color'>CONTINENT</span> </h1>
        </div>
        <div className="right">
          <img src="images/waitlist.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Waitlist