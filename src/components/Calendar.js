import React, { useState, useEffect } from "react";
import { FullCalendar } from "primereact/fullcalendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventService } from "../service/EventService";

export const Calendar = () => {
  const [events, setEvents] = useState([]);
  // using a loading flag to separate when the the component is fetching data and when the data is displayed
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    EventService.getEvents()
      .then(res => {
        setLoading(false);
        setEvents(res);
      })
      .catch(err => {
        setLoading(false)
        console.log(err)});
  }, []);

  const calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin],
    defaultDate: "2020-02-01",
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay"
    },
    editable: false
  };

  return (
    <>{loading ? (<div>loading...</div>) : (<FullCalendar events={events} options={calendarOptions}></FullCalendar>)}</>
  );
};
