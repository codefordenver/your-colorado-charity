import axios from "axios";

const CALENDAR_ID = "jp9uls15099ng5bqjejv5i3bvk@group.calendar.google.com";
const API_KEY = process.env.REACT_APP_CALENDAR_API_KEY;
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export class EventService {
  // attempting to load data directly from google calendar api -- RCM
  // since axios is asynchronous, we will need to make this entire method asynchronous to make sure the events return
  static async getEvents() {
    // Setting initial dataset to match Bill's demo - this will eventually be replaced with a solo pull from a backend data service
    let eventData = [
      { id: 1, title: "All Day Event", start: "2020-02-01" },
      { id: 2, title: "Long Event", start: "2020-02-07", end: "2020-02-10" },
      { id: 3, title: "Repeating Event", start: "2020-02-09T16:00:00" },
      { id: 4, title: "Repeating Event", start: "2020-02-16T16:00:00" },
      { id: 5, title: "Conference", start: "2020-02-11", end: "2020-02-13" },
      {
        id: 6,
        title: "Meeting",
        start: "2020-02-12T10:30:00",
        end: "2020-02-12T12:30:00"
      },
      { id: 7, title: "Lunch", start: "2020-02-12T12:00:00" },
      { id: 8, title: "Meeting", start: "2020-02-12T14:30:00" },
      { id: 9, title: "Happy Hour", start: "2020-02-12T17:30:00" },
      { id: 10, title: "Dinner", start: "2020-02-12T20:00:00" },
      { id: 11, title: "Holiday Party", start: "2020-02-06T17:00:00" },
      {
        id: 12,
        title: "Click for Google",
        url: "http://google.com/",
        start: "2020-02-28"
      }
    ];
    let allEvents = eventData;

    // axios use URL to call Google api and map returned data to the same structure as calendar -- RCM
    try {
      const urlRes = await axios.get(url);

      const restructuredData = urlRes.data.items.map(event => ({
        id: event.id,
        title: event.summary,
        start: event.start.date || event.start.dateTime,
        end: event.end.date || event.end.dateTime,
        color: "red"
      }));

      return [...allEvents, ...restructuredData];
    } catch (err) {
      console.log(err);
    }
  }
}
