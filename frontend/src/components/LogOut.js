import React from "react";

function LogOut() {
    const handleLogout = (e) => {
        console.log("Hello you're logged out :)")
    }
    return (
        <section>
            <button onClick={handleLogout}> Log Out </button>
        </section>
    )
  }
  
  export default LogOut;