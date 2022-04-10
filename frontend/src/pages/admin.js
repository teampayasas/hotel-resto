import React, { useState } from "react";
import './admin.css'
import DataTable from '../components/adminLayout/adminTable';

function Admin() {
  return (

    <div className="adminContainer">
    <div  className="adminContentDisplay">
      <h1>Welcome to the new Booking System</h1>
      <p>Start of by clicking on the blue button on the right hand side and say <i>"Hello"</i>.</p>
      </div>
      <DataTable />
      </div>
  )
}

export default Admin;