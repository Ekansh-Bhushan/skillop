import React from 'react'
import "./css/widget.css"
import InfoIcon from '@mui/icons-material/Info';
function widget() {
  return (
    <div className='widget'>
        <div className='widget__top'>
            <div className='widget__header'>
                <h4>Skillop News</h4>
                <InfoIcon/>
            </div>

            <div className='widget__body'>
                <ul className='widget__options'>
                    <li>
                        <h4>Website phase 2 </h4>
                        <p>comming soon</p>
                    </li>

                    <li>
                        <h4>A new mentor joined</h4>
                        <p>see how it's going to help</p>
                    </li>

                    <li>
                        <h4>A new mentor joined</h4>
                        <p>see how it's going to help</p>
                    </li>

                    <li>
                        <h4>A new mentor joined</h4>
                        <p>see how it's going to help</p>
                    </li>

                    <li>
                        <h4>A new mentor joined</h4>
                        <p>see how it's going to help</p>
                    </li>
                </ul>
            </div>
        </div>


        {/* <div className='widget__bottom'>
            <div className='widget__header'>
                
            </div>
        </div> */}
    </div>
  )
}

export default widget
