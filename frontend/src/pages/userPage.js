import React, { useState } from 'react';
import './App.css'
//Front-end user components
import Header from '../components/Header';
import Content from '../components/Main';
import Footer from '../components/Footer';
//Forms
import Nav from '../components/Navbar'
//Pages
import Admin from '../pages/admin'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes} from "react-router-dom";
//Header
import Modal from '../components/modals/Modal'
import SignModal from '../components/modals/SignModal'
import Logo from '../images/hotel-resto-logo.png'

import Logout from '../components/LogOut'
import Booking from '../components/forms/BookForm'


function UserPage() {
    //LOGIN    
    const [openModal, setOpenModal] = useState(false);
    //SIGN
    const [signModal, setSignModal] = useState(false);
    
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