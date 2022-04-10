import React, { useState } from 'react';
import './App.css'
//Front-end user components
import Header from '../components/Header';
import Gallery from '../components/slider/ImageSlider';
import { SliderData } from '../components/slider/SliderData';
import Content from '../components/Main';
import Footer from '../components/Footer';
import FunInfo from '../components/HotelFun'
//Header
import Modal from '../components/modals/Modal'
import SignModal from '../components/modals/SignModal'
import Logo from '../images/hotel-resto-logo.png'



function HomePage() {
      //LOGIN    
      const [openModal, setOpenModal] = useState(false);
      //SIGN
      const [signModal, setSignModal] = useState(false);
  return (
    <div className="wrapper">
      {/* <Header /> */}
      <header>
        <img src={Logo} alt={'Hotel Logo'} id={'logo'} />
        <nav>
            <button className='login' onClick={() => {setOpenModal(true)}}> LOGIN </button>
            <button className='sign-up' onClick={() => {setSignModal(true)}}> SIGN-UP </button>
        </nav>
        </header>
        {openModal && <Modal closeModal={setOpenModal} />}
        {signModal && <SignModal closeModal={setSignModal} />}
      {/* <Nav /> */}
      <Gallery slides={SliderData} />
      <FunInfo />
      <Content />
      <Footer />
    </div>
  )
}

export default HomePage;