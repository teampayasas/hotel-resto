import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
export default function  Cal() {
  const getData = (e)=>{
    fetch('https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData')
    .then(res => res.json())
    .then(data => {
        for (let i=0; i < data.length; i++){ 
          let name = data[i].name
          let surname = data[i].surname
          let email = data[i].email
          let bookingDate = data[i].bookingDate
          let rooms = data[i].rooms
          console.log(`name:${name} ${surname}, Email:${email}, Date:${bookingDate}, Room:${rooms}`)
          }
      })
    }
      return (
        <div className="Cal">
          <div className="calendarLayout">
            <FullCalendar
              defaultView="dayGridMonth"
              plugins={[dayGridPlugin]}
              // events={getData()}
              events={[{url:"https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData"}]}
            />
          </div>
        </div>
      );

}
// https://dev.to/lberge17/fullcalendar-with-react-3hnl