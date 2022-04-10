import React, { useState } from "react";
import './admin.css'
import DataTable from '../components/adminLayout/adminTable';

function Admin() {
  return (
    <>
      <h1>Welcome to the new Booking System</h1>
      <p>Start of by clicking on the blue button on the right hand side and say <i>"Hello"</i>.</p>
      <DataTable />
    </>
  )
}

export default Admin;