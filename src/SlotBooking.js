import React from 'react'
import "./css/Login.css"
import img1 from './img/skillop.png'

function SlotBooking() {


  return (

    <div className='loginScreen'>
      <div>
      <img src={img1} alt="skillop" />
      </div>
      <form >
        <input required type='text' placeholder='Name Of the Mentor' ></input>
        <input required type='text' placeholder='Enter the Day' ></input>
        <input required type='text' placeholder='Enter the Time Slot' ></input>

        <h4>Note: Please carefully Enter the detials</h4>
        <h4>Changes Won't be possible after the successful payment</h4>
        <input type='submit' placeholder='Continue'></input>

      </form>

    </div>
  )
}

export default SlotBooking
