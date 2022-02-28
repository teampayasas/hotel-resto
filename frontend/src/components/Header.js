// Functional component
import React from 'react'
import Logo from '../images/hotel-resto-logo.png'

function Header() {
    return <header> 
        {/* <i> This is the header </i> <br /> */}
        <img src={Logo} alt={'Hotel Logo'} id={'logo'} />
        </header>
}

export default Header