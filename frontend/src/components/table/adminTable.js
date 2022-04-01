import React,{ useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Store from "../alan/Store"
// import StoreItems from ""
// import alanBtn from '@alan-ai/alan-sdk-web';
import useAlan from "../alan/useAlan";
// import useAlan from "../alan/useAlan";
// .// import "../alan/modal.css";
const DataTable = () => {
// DECLARING DATA
    const [users, setUsers] = useState([])
// FETCHING DATA FROM DATABASE
    const fetchData = () => {
      fetch("https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)      
          // console.log(data)
        })
    }
    // ACCESSING DATA
    useEffect(() => {
      fetchData()
    }, [])
    
    
    useAlan({
      onCommand: function (commandData) {
        if (commandData.command === "go:back") {
          // Call client code that will react to the received command
        }
      }
      
    })
    // alanBtn({
    //   key:"e98b154fd089d01807425dd7b3d167e72e956eca572e1d8b807a3e2338fdd0dc/stage",
    //  }
    // })
    // let stringID = ""
    // console.log(stringID)
    function EditData(e){
      let selectedID = e.target.id
      //  stringID.push(selectedID)
      useAlan.setVisualState({"data": JSON.stringify(selectedID)})

  }
// USING DATA CALLED TO POPULATE CALENDAR AND TABLE
    return (
      <div>
      <div className="adminLayout">
        <div className="Cal">
          <div className="calendarLayout">
            <FullCalendar
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin]}
              events={users.map(user => (
                  {title: user.name, 
                    start: user.checkIn, 
                    end: user.checkOut,
                    id: user._id.$oid}
                ))}
                />
          </div>
        </div>
        {/* <div className="tableLayout">
        {users.length > 0 && (
          <table>
                  <thead>
                    <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Num of Rooms</th>
                    <th>Adults</th>
                    <th>Kids</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Unique ID</th>
                    </tr>
                  </thead>
            {users.map(user => (
              <tbody key= {user.id}>
                  <tr>
                      <td>{user.name}</td>
                      <td>{user.surname}</td>
                      <td>{user.rooms}</td>
                      <td>{user.adults}</td>
                      <td>{user.kids}</td>
                      <td>{user.checkIn}</td>
                      <td>{user.checkOut}</td>
                      <td>{user._id.$oid}</td>
                      <button className="openModalBtn" id={user._id.$oid} onClick={(e) => {EditData(e)}}>Edit</button>
                  </tr>
              </tbody>
            ))}
            </table>
            )}
          </div> */}
          <Store  />
        </div>
    </div>
      
    )
  }
    export default DataTable