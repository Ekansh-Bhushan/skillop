import React from 'react'
import { Avatar } from "@mui/material"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TodayIcon from '@mui/icons-material/Today';
import AssignmentIcon from '@mui/icons-material/Assignment';
import "./css/feed.css"
import Post from './Post';
// import { db } from './firebase'
// import firebase from "firebase"


function feed() {

    // const [input, setInput] = useState();
    // const submitPost = (e) => {
    //         e.preventDeafault();
    //         // alert(input)
    //         db.collection("posts").add({
    //             name:"skillopop",
    //             description:"this is test",
    //             message:input,
    //             photoURl:'https://pps.whatsapp.net/v/t61.24694-24/317667431_573334008043895_4036489706529949770_n.jpg?ccb=11-4&oh=01_AdR5IH8plXaHsbTOJ1QFbUV-Jtdlh7e9BB3AI16GUlACsw&oe=64C7937C',
    //             timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    //         });
    //         setInput("");

    // }
    return (
        <div className='feed'>
            <div className='feed__input'>

                <div className='feed__form'>
                    <Avatar />
                    {/* <form onSubmit={submitPost}> */}
                    <form>
                        <input type='text' placeholder='Start a post'/>
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

export default feed
