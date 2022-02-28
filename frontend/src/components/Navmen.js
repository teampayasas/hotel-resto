// Functional component
import React, { useState } from 'react'
import Login from './LoginForm';

function Nav() {
    return <nav>
        <a href="#"> Home </a>
        <a href="#"> About Us </a>
        <button className='booking'> Book Now </button>
        <button className='login'> Login </button>
        <button className='sign-up'> Sign Up </button>
    </nav>
}



export default Nav