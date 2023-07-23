import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { EMAIL_KEY, getItem } from '../localStorageConfig';

function RequireUser() {
    const user = getItem(EMAIL_KEY);

    return (
          user? <Outlet/>: <Navigate to='/auth' />
        
    )
}

export default RequireUser
