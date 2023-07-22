import React from 'react'
// import img2 from './img/background__profile.jpeg'
import "./css/sidebar.css"
import { Avatar } from "@mui/material"
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGuTboKmMCqLY3hlNJYtQzLUckTosF9xzcA&usqp=CAU" alt ="profile"/>
            <div className='profile__details'>
                <Avatar/>
                <h4>Skill_Op</h4>
                <p>Mentor</p>
            </div>

            <div className='profile__stats'>
                <span>Who Viewed your profile</span>
                <span className='stat__number'>20</span>
            </div>

            <div className='profile__stats'>
                <span><b>Analytics & tools</b></span>
                <span className='stat__number'>150</span>
            </div>
        </div>

        <div className='sidebar__recent'>
            <p>Recent</p>
            <p className='hash'><span>#</span> Webdev</p>
            <p className='hash'><span>#</span> programming</p>
            <p className='hash'><span>#</span> Webdev</p>
            <p className='hash'><span>#</span> Webdev</p>
            <p className='hash'><span>#</span> Webdev</p>
        </div>
    </div>
  )
}

export default Sidebar
