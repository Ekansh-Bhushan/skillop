import React, { useEffect } from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { getMyInfo } from './redux/slices/userConfigSlice';
import {  Link, Route, Routes } from "react-router-dom";
import RequireUser from './app/RequireUser';
import Home from './app/Home';
import NotLoggedIn from './app/NotLoggedIn';
import Auth from './app/Auth';
import Infocollector from './infocollector';
import { EMAIL_KEY, getItem } from './localStorageConfig';





function App() {
  
  const myProfile = useSelector(s => s.userReducer.myProfile)

  const dispatch = useDispatch();


  
  useEffect(() => {
    dispatch(getMyInfo())


  }, [dispatch])
  




  return (<>

    <Header />

    <Routes>

      <Route element={<RequireUser />}>
        <Route path='/' element={<Home />} ></Route>
        {/* <Route path="/profile/:userId" element={<Profile />}  ></Route>
          <Route path="/profile/update" element={<Updateprofile />}  ></Route> */}
        <Route path="/profile/:userId/info" element={<Infocollector />}  ></Route>


      </Route>
      <Route element={<NotLoggedIn />}>
        <Route path="/auth" element={<Auth />} />


      </Route>

    </Routes>
    <Auth />
    <Link to={`/profile/${getItem(EMAIL_KEY)}/info`}>Info</Link>







    {/* <div className='app_wrapper'> */}
    {/* <div className='app_body'>
        {<Sidebar />}
        {<Feed />}
        {<Widget />}
      </div> */}
    {/* </div> */}
  </>
  );
}

export default App;
