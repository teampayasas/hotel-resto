// Functional component
import React, { useState } from 'react';
import BookF from './BookForm';
import SignUp from './SignUpForm';
import Login from './LoginForm';

function Nav() {

    const [LoginOpen, setLoginOpen] = useState(null)

    return ( 
    <nav>
        <a href="#"> Home </a>
        <a href="#about-us"> About Us </a>
        <button className='booking'> Book Now </button>
        <button className='login' onClick={() => { if (LoginOpen === null) {
            setLoginOpen(<Login />)
        } else {
            setLoginOpen(null)
        }
        }}> Login </button>
        <button className='sign-up'> Sign Up </button>
        {LoginOpen}
    </nav>
    )}



export default Nav