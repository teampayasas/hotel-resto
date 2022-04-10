import React, { useState } from "react";
import './admin.css'
// import useAlan from '../components/alan/useAlan';
import DataTable from '../components/table/adminTable';

function Admin() {
  return (
    <>
      <h1>Welcome to Booking System</h1>
      <p>here we will use voice commands to complete simple tasks</p>
      <DataTable />
    </>
  )
}

export default Admin;