import React from 'react'
import img1 from './img/QR.jpeg'
import "./css/Login.css"
function Payment() {
  return (
    <div className='loginScreen'>
      <img src={img1} alt='QR'/>
      <h4>After the Verification of the payment</h4>
      <h4>We will send you Meeting link and rest details shortly</h4>
    </div>

  )
}

export default Payment
