import React from 'react'
import Footer from '../Footer/Footer'
import AwaitingForm from '../WaitlistPageComponent/AwaitingForm/AwaitingForm'
import WaitlistScreen from "../WaitlistPageComponent/WaitlistScreen/waitlistScreen"

const Waitlist = () => {
  return (
    <div>
      <WaitlistScreen />
      <AwaitingForm />
      <Footer />
    </div>
  )
}

export default Waitlist