import React from 'react'
import Sidebar from '../Sidebar';
import Feed from '../feed';
import Widget from '../widget';
function Home() {
    return (
        <div className='app_body'>

            <Sidebar />
            <Feed />
            <Widget />

        </div>
    )
}

export default Home
