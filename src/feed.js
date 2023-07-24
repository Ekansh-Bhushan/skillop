import React, { useState } from 'react'
import { Avatar } from "@mui/material"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./css/feed.css"
import Post from './Post';
import { FieldValue, doc, setDoc, updateDoc } from 'firebase/firestore/lite';
import { EMAIL_KEY, getItem } from './localStorageConfig';
import { db } from './server/firebaseConfig';
import { useId } from 'react';


function Feed() {

    const [input, setInput] = useState("");
    const postId = useId();

    const handlePostSubmit = async (e) => {
        e.preventDeafault();
        try {
            const userId = getItem(EMAIL_KEY);

            const postRef = doc(db, "posts", `${postId}`);
            await setDoc(postRef, {
                message: input,
                owner: userId,
                // timestamp: FieldValue.serverTimestamp()


            })

            setInput("");

            const userRef = doc(db, "user", userId);
            await updateDoc(userRef, {
                myposts: FieldValue.arrayUnion(`${postId}`)


            })

        } catch (e) {

        }


    }





    return (
        <div className='feed'>
            <div className='feed__input'>

                <div className='feed__form'>
                    <Avatar />
                    <form onSubmit={handlePostSubmit}>
                        <input type='text' placeholder='Start a post' />
                        {/* <input type='text' placeholder='Start a post' value={input} onChange={e => setInput(e.target.value)} /> */}
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

            <Post name='Krissmann ' description="THis is test" message=" We are looking forward " photoURl="https://pps.whatsapp.net/v/t61.24694-24/317667431_573334008043895_4036489706529949770_n.jpg?ccb=11-4&oh=01_AdR5IH8plXaHsbTOJ1QFbUV-Jtdlh7e9BB3AI16GUlACsw&oe=64C7937C" />

        </div>
    )
}

export default Feed
