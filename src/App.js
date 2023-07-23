import React, { useEffect, useState } from 'react';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { getMyInfo } from './redux/slices/userConfigSlice';
import { Route, Routes } from "react-router-dom";
import RequireUser from './app/RequireUser';
import Home from './app/Home';
import NotLoggedIn from './app/NotLoggedIn';
import Auth from './app/Auth';
import { createUser } from './server/controllers/Users';
import { useAuth0 } from '@auth0/auth0-react';




function App() {

  const dispatch = useDispatch();
  const [curUser, setCurUser] = useState();

  const { user } = useAuth0();


  useEffect(() => {
    try {

      setCurUser(user)
      createUser({ user: curUser });
    } catch (e) {

    }


  }, [user, curUser])

  useEffect(() => {
    dispatch(getMyInfo())


  }, [dispatch, curUser])


  return (<>

    <Header />

    <Routes>
      <Route path='/' element={<Home />} >
        <Route element={<RequireUser />}>
          {/* <Route path="/profile/:userId" element={<Profile />}  ></Route>
          <Route path="/profile/update" element={<Updateprofile />}  ></Route> */}

        </Route>


      </Route>


      <Route element={<NotLoggedIn />}>
        <Route path="/auth" element={<Auth />} />


      </Route>

      {/* <Route path="/auth" element={<Auth />} /> */}
    </Routes>
    <Auth />







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
