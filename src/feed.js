import React, { useEffect, useRef, useState } from 'react'
import { Avatar } from "@mui/material"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./css/feed.css"
import Post from './Post';

import { FieldValue, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { EMAIL_KEY, getItem } from './localStorageConfig';
import { db } from './server/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { getMyFeed } from './redux/slices/userConfigSlice';
import { v4 as uuid } from 'uuid'
import { serverTimestamp } from 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


function Feed() {
    const myFeed = useSelector(s => s.userReducer.myFeed)
    const myProfile = useSelector(s => s.userReducer.myProfile)
    const dispatch = useDispatch()
    const inputFeed = useRef(null);


    const handlePostSubmit = async (e) => {
        e.preventDefault();
        try {
            const postId = uuid();
            const userId = getItem(EMAIL_KEY);

            const postRef = doc(db, "posts", postId);

            // db.collection("posts").add({
            //     message: inputFeed.current.value,
            //     owner: userId,
            //     likes: [],
            //     comments: [],
            //     timestamp: serverTimestamp(),
            // });

            await setDoc(postRef, {
                message: inputFeed.current.value,
                owner: userId,
                likes: [],
                name: myProfile.name,
                profilepic: myProfile.picture,
                comments: [],
                id:postId,
                createdAt:serverTimestamp()

            })

            inputFeed.current.value = ""

            const userRef = doc(db, "users", userId);
            const user = await getDoc(userRef)
            const mypostsprev = user.data().myposts;


            await updateDoc(userRef, {
                myposts: [...mypostsprev, `${postId}`]


            })

            dispatch(getMyFeed())

        } catch (e) {
            console.log(e);

        }


    }
    useEffect(() => {
        dispatch(getMyFeed())

    }, [dispatch])






    return (
        <div className='feed'>
            <div className='feed__input'>

                <div className='feed__form'>
                    <Avatar />
                    <form onSubmit={(e) => handlePostSubmit(e)}>
                        <input type='text' placeholder='Start a post' ref={inputFeed} />
                        <input type='submit' />
                    </form>
                </div>


                <div className='feed__options'>
                    <div className='option'>
                        <InsertPhotoIcon style={{ color: '#70b5f9' }} />
                        <span>Photo</span>
                    </div>
                    <div className='option' style={{ color: '#7fc15e' }}>
                        <YouTubeIcon />
                        <span>Video</span>
                    </div>
                    <div className='option' style={{ color: '#e7a33e' }}>
                        <TodayIcon />
                        <span>Event</span>
                    </div>

                    <div className='option' style={{ color: '#fc9295' }}>
                        <AssignmentIcon />
                        <span>Write Article</span>
                    </div>
                </div>
            </div>
            {

                myFeed?.map((item, i) => {
                    return (


                        <Post key={i} id={item.id} name={item.name} description="adg" message={item.message} photoURl={item.profilepic} />
                    )
                })
            }


        </div>
    )
}

export default Feed
