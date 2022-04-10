import React, { useState } from 'react';
import Sign from '../forms/SignUpForm';
import './Modal.css'

function SignModal({ closeModal }) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseButton'>
        <button onClick={() => closeModal(false)}> X </button>
            </div>
        <div className='body'>
            <Sign/>
        </div>
        </div>
    </div>
  )
}

export default SignModal