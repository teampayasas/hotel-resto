import React, { useState } from 'react';
import './App.css'
//Front-end user components
import Header from './components/Header';
import Menu from './components/Navmen';
import Gallery from './components/slider/ImageSlider';
import { SliderData } from './components/slider/SliderData';
import Content from './components/Main';
import Footer from './components/Footer';
//Forms
import SignUp from './components/SignUpForm';
import Login from './components/LoginForm';
import Booking from './components/BookForm';
import BookingF from './components/Booking';



function App() {
  // useAlan()
  const [BookOpen, setBookOpen] = useState(null)
  const [SignUpOpen, setSignUpOpen] = useState(null)
  const [LoginOpen, setLoginOpen] = useState(null)
  return (
    <div className="wrapper">
      <Header />
      <nav>
        <a href="#"> Home </a>
        <a href="#"> About Us </a>
        <button className='booking' onClick={() => { if (BookOpen === null) {setBookOpen(<Booking />)}
        else {
          setBookOpen(null)
        }}}> Book Now </button>
        <button className='login' onClick={() => { if (LoginOpen === null) { setLoginOpen(<Login />)} 
        else {
            setLoginOpen(null)
        }}}> Login </button>
        <button className='sign-up' onClick={() => { if(SignUpOpen === null) {setSignUpOpen(<SignUp />)}
        else {
          setSignUpOpen(null)
        }}}> Sign Up </button>
    </nav>
    {BookOpen}
    {SignUpOpen}
    {LoginOpen}
      <Gallery slides={SliderData} />
      {/* <BookingF/> */}
      <Content />
      <Footer />

      {/* <h1>Manually Change Bookings</h1>
      <form>
        <input type="text" placeholder="Insert ID number"></input>
        <button>Search</button>
      </form> */}
      {/* <Cal/> */}

    </div>
  )
}

export default App;