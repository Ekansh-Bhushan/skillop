import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { createUser } from '../server/controllers/Users';
import { EMAIL_KEY, getItem, removeItem, setItem } from '../localStorageConfig';
import { db } from "../server/firebaseConfig";
import { FieldValue, Timestamp, collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { getMyInfo } from '../redux/slices/userConfigSlice';
import { useNavigate } from 'react-router-dom';



function Auth() {

    const myProfile = useSelector(s => s.userReducer.myProfile)
    const [curUser, setCurUser] = useState();
    const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();
    const dispatch = useDispatch()
    const navigate = useNavigate();


    async function createUser({ user }) {
        try {

            const userRef = doc(db, 'users', user.email);
            await setDoc(userRef, {
                name: user.name,
                email: user.email,
                picture: user.picture,
                sub: user?.sub,
                myposts:[],
                // createdAt: FieldValue.serverTimestamp()
            });
            

            // navigate(`/profile/${getItem(EMAIL_KEY)}/info`)

        } catch (e) {
            console.log(e);

        }

    }

    async function authorize() {
        try {
            await loginWithPopup()


            navigate('/')



        } catch (e) {

        }

    }

    // useEffe


    

    useEffect(() => {
        if (user?.email) {

            setItem(EMAIL_KEY, user?.email)

            dispatch(getMyInfo())

            setCurUser(user)
            createUser({ user: curUser });

            return () => { }
        }
    }, [isAuthenticated])

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

                            {myProfile?.name}
                        </p>
                    </div>
                    :
                    <button onClick={authorize} >login</button>
            }

        </div >
    )
}

export default Auth
