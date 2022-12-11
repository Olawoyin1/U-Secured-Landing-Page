import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/NavbarComponent/Navbar'

const SharedLayout = ({openNav, setOpenNav}) => {
  return (
    <>
        <Navbar openNav = {openNav} setOpenNav={setOpenNav}  />
        <Outlet />
    </>
  )
}

export default SharedLayout