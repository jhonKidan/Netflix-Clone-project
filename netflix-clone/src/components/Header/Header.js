import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header-outer-container'>
        <div className='header-container'>
            <div className='header-left'>
                <ul>
                    {/* img */}
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Latests</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>

                </ul>
            </div>
            <div className='header-right'>
                <ul>
                    {/* <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><AccountBOxIcon/></li>
                    <li><ArrowDropDownIcon/></li> */}

                </ul>

            </div>

        </div>


    </div>
  )
}

export default Header