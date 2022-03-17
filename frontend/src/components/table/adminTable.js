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
    // const [events, setEvents] = useState([]);
    // console.log(users)
  // const onEventAdded = (event) => {
  //   setEvents([...events, event]);
  // };
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
      {/* {users.length > 0 && ( */}
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
        {/* )} */}
    </div>
      
    )
  }
    export default DataTable
    
// events={[users = {
//   title: users.name,
//   date: '2022-03-03'
// }]}
// events={[{                
//   title: users.name,start: users.bookingDate,// id:users._id.$oid,
// }]}
// events={[
//   { title: 'jessie', date: '2022-03-03' }
// ]}
{/* <td>{user.bookingDate}</td> */}
{/* {/* <td key={users.id}>{users.name} {users.surname}- {users.bookingDate}</td> */}