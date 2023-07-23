import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './feed';
import Widget from './widget';
import { useAuth0 } from '@auth0/auth0-react';
import { createUser } from './server/controllers/Users';
import { useDispatch, useSelector } from 'react-redux';
import { getMyInfo } from './redux/slices/userConfigSlice';
import { EMAIL_KEY, removeItem } from './localStorageConfig';

function App() {
  const [curUser, setCurUser] = useState();

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const dispatch = useDispatch();
  const myProfile = useSelector(s => s.userReducer.myProfile)


  useEffect(() => {
    setCurUser(user)
    createUser({ user: curUser });

  }, [user,curUser])
  useEffect(() => {
    dispatch(getMyInfo())


  }, [dispatch])

  return (
    <div className='app_wrapper'>
      {<Header />}
      <div className='app_body'>
        {<Sidebar />}
        {<Feed />}
        {<Widget />}
      </div>
      {myProfile?.name?.stringValue}
      {
        isAuthenticated ?
          <button onClick={() => { logout({ logoutParams: { returnTo: window.location.origin } }, removeItem(EMAIL_KEY)) }}>logout</button>
          :
          <button onClick={() => loginWithRedirect()} >login</button>
      }
    </div>
  );
}

export default App;
