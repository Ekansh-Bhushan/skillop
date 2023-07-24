import React from 'react'
import "./css/Login.css"
import img1 from './img/skillop.png'
import img2 from './img/upi.jpg'
function UPI() {


  return (

    <div className='loginScreen'>
      <div>
      <img src={img1} alt="skillop" />
      </div>
      <img src={img2} alt="skillop" />
      <form >
        <input required type='text' placeholder='Enter the UPI ID' ></input>
        <input type='submit' placeholder='Continue'></input>

      </form>

    </div>
  )
}

export default UPI
