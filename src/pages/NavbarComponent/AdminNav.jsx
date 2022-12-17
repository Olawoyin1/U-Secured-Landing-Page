import { Menu } from 'iconsax-react'
import React from 'react'
import { HiOutlineChartPie } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import "./adminnav.css"

const AdminNav = () => {

    const [active, SetActive] = React.useState("dashboard")



    const handeNav = (value) => {
        SetActive(value)
    }
    



  return (
    <>

        <div className='admin-nav'>
                <NavLink to={"/"}>
                    <img src="images/mobile-logo.svg" alt="" />
                </NavLink>

                <NavLink to={"/dashboard"} >
                    <Menu size="32" color="#000" variant="TwoTone"/>
                </NavLink>

                <NavLink to={"report"}>
                    <HiOutlineChartPie 
                        size="32" color="#000" 
                    />
                </NavLink>
        </div>

    </>
  )
}

export default AdminNav