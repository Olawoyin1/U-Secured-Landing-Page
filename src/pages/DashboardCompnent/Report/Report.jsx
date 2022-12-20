import React from 'react'
import "./report.css"
import { CiSearch } from 'react-icons/ci'
import { Calendar } from 'iconsax-react'

const Report = () => {
  
  

  const months =  [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ]

  const sort = [
    "Newest",
    "Oldest"
  ]



  return (
    <div className='report'>


      {/* REPORT HEADER STARTS FROM HERE */}
      <div className="r-header">
        <h2>Waitlist Report</h2>
        <div className="r-right">
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
            <div className="admin-log">
              <div className="admin-name">
                <h3>Myke</h3>
                <p>Admin</p>
              </div>
              <div className="admin-photo">

              </div>
            </div>
        </div>
      </div>
      {/* REPORT HEADER ENDS FROM HERE */}




      {/* FILTER SECTION STARTS HERE */}
        <div className="filter">

          <div className="date">
            <div className='f-space'>
              <Calendar />
              <p>Select Timeframe</p>
            </div>
            <div className="select">
              <select 
                name="months" 
                id="months"
                // onChange={formData.handleChange}   
                // onBlur={formData.handleBlur}
              >
                {
                  months.map((data, index)=> <option key={index} value={data}>{data}</option>)
                }
              </select>
            </div>
          </div>


          {/* SORT DATE */}
          <div className="sort">
            <div className='f-space'>
              <Calendar />
              <p>Sort by</p>  
            </div>
            <div className="select">
              <select 
                name="sort" 
                id="sort"
                // onChange={formData.handleChange}   
                // onBlur={formData.handleBlur}
              >
                {
                  sort.map((data, index)=> <option key={index} value={data}>{data}</option>)
                }
              </select>
            </div>
          </div>
        </div>
      {/* FILTER SECTION ENDS HERE */}



      {/* WAITLIST USERS HERE */}
        <div className="waitlist-users">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User ID</th>
                <th>Email Address</th>
                <th>Phone number</th>
                <th>State of Residence</th>
                <th>Date Joined</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Myke</td>
                <td>Awoniran</td>
                <td>U-0111</td>
                <td>mykedev@gmail.com</td>
                <td>09024566783</td>
                <td>Lagos</td>
                <td>17-09-2022</td>
              </tr>
              <tr>
                <td>Clay</td>
                <td>Secured</td>
                <td>U-0114</td>
                <td>matt23@gmail.com</td>
                <td>08024566783</td>
                <td>Osun</td>
                <td>11-09-2022</td>
              </tr>
              <tr>
                <td>Fawas</td>
                <td>User</td>
                <td>U-0113</td>
                <td>fawaz12@gmail.com</td>
                <td>09024566783</td>
                <td>Ogun</td>
                <td>05-09-2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      {/* WAITLIST USERS  ENDSHERE */}

    </div>
  )
}

export default Report