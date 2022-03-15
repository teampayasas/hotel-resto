import React from 'react';
import './App.css'
import Cal from '../components/cal/calendar';
import useAlan from '../components/alan/useAlan';

function Admin() {
  useAlan()
  return (
    <div className="wrapper">
      <h1>Manually Change Bookings</h1>
      <form>
        <input type="text" placeholder="Insert ID number"></input>
        <button>Search</button>
      </form> 
      <Cal/>
    </div>
  )
}

export default Admin;