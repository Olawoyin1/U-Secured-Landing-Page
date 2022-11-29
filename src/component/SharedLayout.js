import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/NavbarComponent/Navbar'

const SharedLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default SharedLayout