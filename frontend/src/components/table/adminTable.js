import React,{ useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

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
          console.log(data)
          console.log(data[2].bookingDate)        
        })
    }
    // ACCESSING DATA
    useEffect(() => {
      fetchData()
    }, [])

// Coding in Search Filter by ID values
// Need to figure out how to hide the data until searched

  // the search result
  const [foundUsers, setFoundUsers] = useState(users);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = users.filter((user) => {
        // return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        return user._id.$oid.startsWith(keyword) ;
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(users);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };


// USING DATA CALLED TO POPULATE CALENDAR AND TABLE
    return (
      <div>
        {/* SETTING FILTERED SEARCH */}
        <div className="filterBar">
          <h2>Filter Clients</h2>
          <input type="search" 
          // value={!''}
          onChange={filter} className="input" placeholder="Insert Name or ID"/>
        <div className="user-list">
          {foundUsers && foundUsers.length > 0 ? (
            foundUsers.map((user) => (
              <ul key={user.id} className="user">
                <li className="user-name">Name: {user.name} {user.surname}</li>
                <li>Rooms Booked: {user.rooms}</li>
                <li>Number of Adults: {user.adults}</li>
                <li>Number of Kids: {user.kids}</li>
                {/* <li>Number of Kids: {user.bookingDate}</li> */}
              </ul>
            ))
          ) : (
            <h4>No results</h4>
          )}
        </div>
      </div>
      <div className="adminLayout">
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
                        {/* <td>{user.bookingDate}</td> */}
                        {/* {console.log(users)} */}
                    </tr>
                    </tbody>
            ))}
            </table>
            )}
          </div>
        </div>
    </div>
      
    )
  }
    export default DataTable