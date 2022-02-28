import React from "react";
// import "./styles.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from '@fullcalendar/interaction'
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
let userName = "i";
let userId = 990;
let dateBooked = new Date() ;
export default function  Cal() {
  const events = [{title: userName, id: userId, date: dateBooked}];
  return (
    <div className="Cal">
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        dateClick={this.handleDateClick}
        events={events}
      />
    </div>
  );
}


// https://dev.to/lberge17/fullcalendar-with-react-3hnl