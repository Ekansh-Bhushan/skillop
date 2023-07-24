import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import img1 from './img/skillop.png'
import "./css/header.css"
import Headeroptions from './Headeroptions';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { EMAIL_KEY, getItem } from './localStorageConfig';


function Header() {
  const myProfile = useSelector(s => s.userReducer.myProfile)

  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className='header__left'>

        <div onClick={() => navigate('/')} className='header__logo'>
          <img src={img1} alt="skillop" />
        </div>

        <div className='header__search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>


      </div>

      <div className='header__right'>
        <Headeroptions Icon={HomeIcon} title="Home" />
        <Headeroptions Icon={MessageIcon} title="Messaging" />
        <Headeroptions Icon={NotificationsIcon} title="Notifications" />
        <span onClick={(() => navigate(`/profile/${getItem(EMAIL_KEY)}/info`))}>

          <Headeroptions avatar={(myProfile?.picture )? myProfile?.picture : Avatar} title={myProfile?.name}  />
        </span>
        {/* avatar add karna hai abhi  */}
      </div>
    </div>
  )
}

export default Header;
