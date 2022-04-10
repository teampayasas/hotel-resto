import React, { useState } from 'react';
import './App.css'
//Front-end user components
import Content from '../components/Main';
import Footer from '../components/Footer';
import Logo from '../images/hotel-resto-logo.png'
import Logout from '../components/LogOut'
import Booking from '../components/forms/BookForm'


function UserPage() {
    return (
    <div className="user-wrapper">
        <header>
        <img src={Logo} alt={'Hotel Logo'} id={'logo'} />
        <nav>
            <Logout/>
        </nav>
        </header>
        <Booking />
        <Content />
        <Footer />
    </div>
    )
  }
  
  export default UserPage;