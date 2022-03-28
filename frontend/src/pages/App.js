import React, { useState } from 'react';
import './App.css'
//Pages
import UserPage from '../pages/userPage'
import Admin from '../pages/admin'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes} from "react-router-dom";



function App() {
  return (
    <div className="wrapper">

    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>

    </div>
  )
}

export default App;