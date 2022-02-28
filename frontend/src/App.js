import React from 'react';
import './App.css'
import Cal from './components/calendar';
import useAlan from './components/alan/hook/useAlan';
//Front-end user components
import Header from './components/Header';
import Menu from './components/Navmen';
import Gallery from './components/slider/Slider'
import Content from './components/Main';
import Footer from './components/Footer';
//Forms
import SignUp from './components/SignUpForm';
import Login from './components/LoginForm';
import Booking from './components/BookForm';



function App() {
  // useAlan()
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      {/* <SignUp /> */}
      <Login />
      {/* <Booking /> */}
      <Gallery />
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