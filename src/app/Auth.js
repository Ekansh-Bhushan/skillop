import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { useSelector } from 'react-redux';
// import { createUser } from '../server/controllers/Users';
import { EMAIL_KEY, getItem, removeItem, setItem } from '../localStorageConfig';
import { db } from "../server/firebaseConfig";
import { doc, setDoc } from 'firebase/firestore/lite';



function Auth() {

    const myProfile = useSelector(s => s.userReducer.myProfile)
 
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
   

    async function createUser() {
        try {


            setItem(EMAIL_KEY, user.email)
            const userRef = doc(db, "users", user.email);
            console.log(getItem(EMAIL_KEY));
            await setDoc(userRef, {
                name: user.name,
                email: user.email,
                picture: user.picture,
                sub: user.sub
            });
            // navigate(`/profile/${getItem(EMAIL_KEY)}/info`)

        } catch (e) {
            // console.log(e);

        }

    }
    
    function authorize() {
        try {
            loginWithRedirect();
    
    
            createUser({ user });
            console.log(user);
            
        } catch (e) {
            
        }

    }





    // useEffect(() => {
    //     try {

    //         setCurUser(user)
    //         createUser({ user: curUser });

    //     } catch (e) {

    //     }
    // }, [user, curUser,isAuthenticated])

    return (
        <div>
            <button onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } }
                    , removeItem(EMAIL_KEY)
                )
            }}
            >btn</button>
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
                    <button onClick={authorize} >login</button>
            }

        </div >
    )
}

export default Auth
