import React,{ useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import {useTable} from 'react-table';
// import Realm from "realm"

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
            {users.map(() => (
              <tbody key={users.id}>
                    <tr>
                        <td>{users.name}</td>
                        <td>{users.surname}</td>
                        {/* <td>{users._id.$oid}</td> */}
                        <td>{users.bookingDate}</td>
                        {/* <td key={users.id}>{users.name} {users.surname}- {users.bookingDate}</td>
                        {console.log(users.id)} */}
                    </tr>
                    </tbody>
            ))}
            </table>
            )}
        {users.length > 0 && (
        <div className="Cal">
          <div className="calendarLayout">
            <FullCalendar
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin]}
              events={[{                
                title: users.name,start: users.bookingDate,// id:users._id.$oid,
              }]}
              // events={[
              //   { title: 'event 1', date: '2022-03-03' },
              //   { title: 'event 2', date: '2022-03-02' }
              // ]}
                />
          </div>
        </div>
          )}
      </div>
      
    )
  }
    export default DataTable
    

