import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from '../pages/NavbarComponent/AdminNav'

const SharedLayout2 = () => {

    

  return (
    <div className='admin-flex dash-container'>
        <AdminNav />
        <Outlet />
    </div>
  )
}

export default SharedLayout2