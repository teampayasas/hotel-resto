import React,{ useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ModalData from '../alan/dataModel'
import useAlan from "../alan/useAlan";
// import "../alan/modal.css";
const DataTable = () => {
// DECLARING DATA
    const [users, setUsers, setName] = useState([])
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
    
    // DISPLAYING DATABASE
    useAlan({
      onCommand: ({command}) => {
        if(command === 'openModal'){
          alert("Modal is popping up?")
          // ModalData()
            // activate modal

            }
            // C/RUD
        // if(command === 'alertCommand'){
        //   alert('you opened the alert!')
            //
    }
  })
  function EditData(e){
    console.log(e.target.id)
    console.log(users)

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
        <div className="tableLayout">
        {users.length > 0 && (
          <table>
                  <thead>
                    <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Unique ID</th>
                    </tr>
                  </thead>
            {users.map(user => (
              <tbody key= {user.id}>
                  <tr>
                      <td>{user.name}</td>
                      <td>{user.surname}</td>
                      <td>{user._id.$oid}</td>
                      <button className="openModalBtn" id={user._id.$oid} onClick={(e) => {EditData(e)}}>Edit</button>
                  </tr>
              </tbody>
            ))}
            </table>
            )}
          </div>
          <div className="EditModal"></div>
        </div>
    </div>
      
    )
  }
    export default DataTable