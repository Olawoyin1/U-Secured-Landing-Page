import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/NavbarComponent/Navbar'

const SharedLayout = ({openNav, setOpenNav, modal, setModal}) => {
  return (
    <>
        <Navbar 
          openNav = {openNav} 
          setOpenNav={setOpenNav}  
          modal = {modal}
          setModal = {setModal}
        />
        <Outlet />
    </>
  )
}

export default SharedLayout