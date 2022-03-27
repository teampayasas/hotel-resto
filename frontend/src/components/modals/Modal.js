import React, { useState } from 'react';
import Login from '../forms/LoginForm';
import Sign from '../forms/SignUpForm';
import './Modal.css'
import signModal from './SignModal'

function Modal({ closeModal }) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseButton'>
        <button onClick={() => closeModal(false)}> X </button>
            </div>
        {/* <div className='title'>Login </div> */}
        <div className='body'>
            <Login/>
        </div>
        {/* <div className='footer'>
            <p> Don't have an account? <button> Sign up! </button> </p>
        </div> */}
        </div>
    </div>
  )
}

export default Modal