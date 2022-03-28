import React, { useState } from 'react';
import './App.css'
//Front-end user components
import Header from '../components/Header';
import Gallery from '../components/slider/ImageSlider';
import { SliderData } from '../components/slider/SliderData';
import Content from '../components/Main';
import Footer from '../components/Footer';
//Forms
import Nav from '../components/Navbar'
//Pages
import Admin from '../pages/admin'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes} from "react-router-dom";



function UserPage() {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Gallery slides={SliderData} />
      <Content />
      <Footer />
    </div>
  )
}

export default UserPage;