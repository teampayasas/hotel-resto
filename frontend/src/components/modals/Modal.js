import React, { useState } from 'react';
import Login from '../forms/LoginForm';
import './Modal.css'

function Modal({ closeModal }) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseButton'>
        <button onClick={() => closeModal(false)}> X </button>
            </div>
        <div className='body'>
            <Login/>
        </div>
        </div>
    </div>
  )
}

export default Modal