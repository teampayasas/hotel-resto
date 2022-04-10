import React,{ useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Booking from "../alan/Booking"
import useAlan from "../alan/useAlan";

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
    useAlan()
// USING DATA CALLED TO POPULATE CALENDAR AND TABLE
    return (
      <>
      <div className="adminLayout">
        <FullCalendar 
              defaultView="dayGridMonth"
              height = "700px"
              plugins={[dayGridPlugin]}
              events={users.map(user => (
                {title: user.name, 
                  start: user.checkIn, 
                  end: user.checkOut,
                  id: user._id.$oid}
                  ))}
                  backgroundColor="white"
                  eventBorderColor="white"
                  eventBackgroundColor="rgb(255, 212, 173)"
                  dispaly="background"
                />
        <Booking/>
        </div>
    </>
      
    )
  }
    export default DataTable