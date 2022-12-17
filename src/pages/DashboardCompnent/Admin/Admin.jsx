import React from 'react'
import "./admin.css"
import { CiSearch } from "react-icons/ci";

const Admin = () => {
  return (
    <div className='admin'>
      <div className=" admin-container">

        <div className="admin-header">
          <h2>Admin Dashboard</h2>
          <form action="">
            <input 
              className='search'
              type="search" 
              placeholder='Search Dashboard'
            />
            <CiSearch 
              className='search-icon'
              size={18}
            /> 

          </form>
        </div>

        {/* ADMIN DASHBOARD CONTENT STARTS FROM HERE */}
          <div className="admin-dashboard-main">

          </div>
        {/* ADMIN DASHBOARD CONTENT ENDS FROM HERE */}

      </div>
    </div>
  )
}

export default Admin