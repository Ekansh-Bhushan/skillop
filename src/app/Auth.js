import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { createUser } from '../server/controllers/Users';
import { EMAIL_KEY, removeItem } from '../localStorageConfig';

function Auth() {

    const myProfile = useSelector(s => s.userReducer.myProfile)
    const [curUser, setCurUser] = useState();  

    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();


    useEffect(() => {
        try {
            
            setCurUser(user)
            createUser({ user: curUser });
        } catch (e) {
            
        }
    }, [user, curUser])

    return (
        <div>
          
            {
                isAuthenticated ?
                    <div className="div">

                        <button onClick={() => {
                            logout({ logoutParams: { returnTo: window.location.origin } }
                                , removeItem(EMAIL_KEY)
                            )
                        }}
                        >logout</button>
                        <p>

                            {myProfile?.name?.stringValue}
                        </p>
                    </div>
                    :
                    <button onClick={() => loginWithRedirect()} >login</button>
            }

        </div >
    )
}

export default Auth
