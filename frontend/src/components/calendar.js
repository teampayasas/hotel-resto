import React from "react";
// import "./styles.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";

export default function  Cal() {
  const events = [{ title: "today's event", date: new Date() }];

  return (
    <div className="Cal">
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
      />
    </div>
  );
}
