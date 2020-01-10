import axios from 'axios';

const CALENDAR_ID = 'jp9uls15099ng5bqjejv5i3bvk@group.calendar.google.com'
const API_KEY = 'AIzaSyD4QGqMbsxJ1T5bVjk0VifPS7SubCkSJaw'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export class EventService {
    // attempting to load data directly from google calendar api -- RCM
    /* getEvents() {
        return axios.get('assets/demo/data/scheduleevents.json')
            .then(res => res.data.data);
    }*/

    getEvents() {
        return axios.get(url)
            .then(res => console.log(res))
    }
}

// example of remote resource call for reference -- RCM
/*axios.get('https://api.github.com/users/mapbox')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });*/