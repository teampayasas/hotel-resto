// Functional component
import React from 'react'
import Logo from '../images/hotel-resto-logo.png'

function Header() {
    return <header> 
        <img src={Logo} alt={'Hotel Logo'} id={'logo'} />
        <nav id='header-nav'>
        <a href="#"> Home </a>
        <a href="#about-us"> About Us </a>
        </nav>
        </header>
}

export default Header