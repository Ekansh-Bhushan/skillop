import { Avatar } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/post.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import { useDispatch } from 'react-redux';
import { likePost } from './redux/slices/postSlice';
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from './server/firebaseConfig';
import { EMAIL_KEY, getItem } from './localStorageConfig';

function Post({ name, description, message, photoURl, id }) {
    const dispatch = useDispatch();

    async function likeClicked() {
        try {
            const userId = getItem(EMAIL_KEY)

           
           
            const docRef = doc(db, "posts", id);
            const docSnap = await getDoc(docRef);
    
            const data = docSnap.data()
            const preLikes = data.likes
            if (preLikes.includes(userId)) {
                const index = preLikes.indexOf(userId);
                preLikes.splice(index, 1);
               
              } else {
                preLikes.push(userId);
                
                
              }
              await updateDoc(docRef,{
                likes:preLikes

              })
       
            dispatch(likePost(preLikes));
        } catch (e) {
            console.log(e);

        }

    }
    return (
        <div className='posts'>
            <div className='post__header'>
                <div className='"post__headerleft'>
                    <Avatar src={photoURl} />
                    <div className='post_profile_details'>

                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <MoreVertIcon />
            </div>


            <div className='post__body'>
                <p>{message}
                </p>
            </div>


            <div className='post__footer'>
                <div onClick={likeClicked} className='post__footer__option'>
                    <ThumbUpIcon />
                    <span>Like</span>
                </div>

                <div className='post__footer__option'>
                    <CommentIcon />
                    <span>Comment</span>
                </div>

                <div className='post__footer__option'>
                    <ShareIcon />
                    <span>Share</span>
                </div>

                <div className='post__footer__option'>
                    <SendIcon />
                    <span>Send</span>
                </div>
            </div>
        </div>
    )
}

export default Post
