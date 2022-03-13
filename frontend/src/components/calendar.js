import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from '@fullcalendar/interaction'
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// let userName = "i";
// let userId = 990;
// let dateBooked = new Date() ;
export default function  Cal() {
  const getData = (e)=>{
    fetch('https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData')
    .then(res => res.json())
    .then(data => {
        for (let index=0; index < data.length; index++){ 
          let name = data[index].name
          console.log(`This is the name ${name}`)
          }
      })
    }
      return (
        <div className="Cal">
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={getData()}
          />
        </div>
      );

}
// https://dev.to/lberge17/fullcalendar-with-react-3hnl