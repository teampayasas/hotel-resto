import React, { useState } from "react";
import './App.css'
// import Cal from '../components/cal/calendar';
import AdminForm from '../components/forms/adminForm';
import useAlan from '../components/alan/useAlan';
import DataTable from '../components/table/adminTable';

function Admin() {
  useAlan()
  return (
    <div className="wrapper">
      {/* <AdminForm /> */}
      <h1>Manually Change Bookings</h1>
      <form>
        <input type="text" placeholder="Insert ID number"></input>
        
        <button>Search</button>
      </form> 
      <h2>Clients Booked</h2>
      <DataTable />
      <h1>Overview of Bookings</h1>
      {/* <Cal /> */}
    </div>
  )
}

export default Admin;