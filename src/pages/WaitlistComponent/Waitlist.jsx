import React from 'react'
import AwaitingForm from '../WaitlistPageComponent/AwaitingForm/AwaitingForm'
import WaitlistScreen from "../WaitlistPageComponent/WaitlistScreen/waitlistScreen"

const Waitlist = () => {
  return (
    <div>
      <WaitlistScreen />
      <AwaitingForm />
    </div>
  )
}

export default Waitlist