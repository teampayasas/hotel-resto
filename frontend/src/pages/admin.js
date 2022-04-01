import React, { useState } from "react";
import './admin.css'
// import Cal from '../components/cal/calendar';
// import AdminForm from '../components/forms/adminForm';
// import useAlan from '../components/alan/useAlan';
import DataTable from '../components/table/adminTable';

function Admin() {
  // useAlan()
  return (
    <div className="wrapper">
      <h1>Welcome to Booking System</h1>
      <p>here we will use voice commands to complete simple tasks</p>
      <DataTable />
    </div>
  )
}

export default Admin;