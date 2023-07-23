import React from 'react'
import { EMAIL_KEY, getItem } from '../localStorageConfig';
import { Navigate, Outlet } from 'react-router-dom';

function NotLoggedIn() { 
  const user = getItem(EMAIL_KEY);
    return (
    user? <Navigate to="/" /> : <Outlet/>
  )
}

export default NotLoggedIn
