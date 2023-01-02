import React, { useEffect, useState } from 'react'
import "./waitlist.css"
import { Link } from 'react-router-dom'
import Countdown from 'react-countdown';

const WaitlistScreen = ({openNav, setOpenNav}) => {

    const [month, setMonth] = useState("00")
    const [days, setDays] = useState("00")
    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")

    let interval;

    const staartTimer = () =>{
      const countDownDate = new Date("Feb 1 2023").getTime();

      interval = setInterval(() => {

        const now = new Date().getTime();
        const distance = countDownDate - now;

        const month = Math.floor(distance / (24*60*60*1000)/(30))
        const newmonth = month < 10 ? "0" + month : month
        
        const days = Math.floor(distance / (24*60*60*1000))

     
      

        const newday = days > 30 ? days - 30 : days

        const newdays = newday < 10 ? "0" + newday : newday

        
        const hours = Math.floor(distance % (24*60*60*1000)/(60*60*1000))
        const newhours = hours < 10 ? "0" + hours : hours
        
        const minutes = Math.floor(distance % (60*60*1000)/(60*1000))
        const newminutes = minutes < 10 ? "0" + minutes : minutes
        
        const seconds = Math.floor(distance % (60*1000)/(1000))
        const newseconds = seconds < 10 ? "0" + seconds : seconds

        

        // console.log(days, hours, minutes, seconds);

        if(distance < 0){
          clearInterval(interval.current)
        }else{
          setMonth(newmonth);
          setDays(newdays);
          setHours(newhours);
          setMinutes(newminutes);
          setSeconds(newseconds);
        }


      }, 1000);
    }

    useEffect(()=>{
      staartTimer();
    },[])
  

  return (
    <div className="hero waitlist-bg" onClick={()=>setOpenNav(true)}>
      <div className="container waitlist-container">


        <div className=" reverse-grid ">
            <div className="reverse-content">
              <h1>Get ready for <br /> the <span className='color'>BIG</span> launch!</h1>
              <p>We’ll let you know when eveything’s ready</p>
            

              <div className="countdown">

                <div className="countdown-el">
                  <h1>{month}</h1>
                  <small className="muted">MONTHS</small>
                </div>

                <span className='big-colon'>:</span>

                <div className="countdown-el">
                  <h1>{days}</h1>
                  <small className="muted">DAYS</small>
                </div>

                <span className='big-colon'>:</span>

                <div className="countdown-el">
                  <h1>{hours}</h1>
                  <small className="muted">HOURS</small>
                </div>

                <span className='big-colon'>:</span>

                <div className="countdown-el">
                  <h1>{minutes}</h1>
                  <small className="muted">MINUTES</small>
                </div>

                <span className='big-colon'>:</span>

                <div className="countdown-el">
                  <h1 className='color'>{seconds}</h1>
                  <small className="muted color"><b>SECONDS</b></small>
                </div>
              </div>

            </div>
            <div className="reverse-image">
                <img className='large-screen' src="images/waitlist-large.svg" alt="" />
                <img className="mobile-screen" src="images/waitlist-mobile.svg" alt="" />
            </div>
        </div>

      
      </div>


      
    </div>
  )
}

export default WaitlistScreen