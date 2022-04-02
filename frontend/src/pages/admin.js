import React, { useState } from "react";
import './admin.css'
// import useAlan from '../components/alan/useAlan';
import DataTable from '../components/table/adminTable';

function Admin() {
  return (
    <div className="wrapper">
      <h1>Welcome to Booking System</h1>
      <p>here we will use voice commands to complete simple tasks</p>
      <DataTable />
    </div>
  )
}

export default Admin;