import React from "react";
import { useNavigate } from 'react-router-dom';

function LogOut() {
    const navigate = useNavigate();
    function RedirectHome () {navigate("/")}
    

    const handleLogout = (e) => {
        // console.log("Hello you're logged out :)")
        RedirectHome()
    }
    return (
            <button className="logout" onClick={handleLogout}> Log Out </button>
        )
  }
  
  export default LogOut;