import React,{ useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const DataTable = () => {
    const [users, setUsers] = useState([])
  
    const fetchData = () => {
      fetch("https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }  
    useEffect(() => {
      fetchData()
    }, [])

    return (
      <div>
      {users.length > 0 && (
        <table>
                <thead>
                  <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Unique ID</th>
                  <th>Date Booked</th>
                  </tr>
                </thead>
          {users.map(user => (
            <tbody key= {user.id}>
                  <tr>
                      <td>{user.name}</td>
                      <td>{user.surname}</td>
                      <td>{user._id.$oid}</td>
                      {/* <td>{user.bookingDate}</td> */}
                      {/* {console.log(users)} */}
                  </tr>
                  </tbody>
          ))}
          </table>
          )}
        <div className="Cal">
        <div className="calendarLayout">
        {/* 
            {/* {console.log(users)} */}
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={users.map(user => (
                {title: user.name, 
                  // date: users.bookingDate, 
                  date: '2022-03-01', 
                  id: user._id.$oid}
              ))}

              />
        </div>
      </div>
    </div>
      
    )
  }
    export default DataTable