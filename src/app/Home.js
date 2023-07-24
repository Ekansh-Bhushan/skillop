import React, { useEffect } from 'react'
import Sidebar from '../Sidebar';
import Feed from '../Feed.js';
import Widget from '../widget';
import { useDispatch } from 'react-redux';
import { getMyFeed, getMyInfo } from '../redux/slices/userConfigSlice';

function Home() {

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getMyInfo())


    // }, [dispatch])

    return (
        <div className='app_body'>

            <Sidebar />
            <Feed/>
            <Widget />
        </div>
    )
}

export default Home
