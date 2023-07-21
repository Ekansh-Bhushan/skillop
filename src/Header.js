import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Header()
{
  return (
    <div className='header'>
        <div className='header__left'>
            <div className='header__logo'>
                <img src='' alt ="skillop"/>
            </div>
            <div className='header__search'>
              <SearchIcon/>
            </div>
        </div>

        <div className='header__right'>
            
        </div>
    </div>
  )
}

export default Header;
