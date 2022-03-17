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
      <h1>Welcome Back</h1>
      <DataTable />
      {/* <Cal /> */}
    </div>
  )
}

export default Admin;