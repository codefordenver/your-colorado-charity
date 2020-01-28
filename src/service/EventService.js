import axios from 'axios';

const CALENDAR_ID = 'jp9uls15099ng5bqjejv5i3bvk@group.calendar.google.com'
const API_KEY = process.env.REACT_APP_CALENDAR_API_KEY
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

class Event {
    constructor(id, title, start, end, provider = 'local') {
        this._id = id;
        this._title = title;
        this._start = start;
        this._end = end;
        switch(provider) {
            case 'google':
                this._color = 'red';
                break;
            default:
                this._color = 'blue';
                break;
        }

      }
      get id() {
        return this._id;
      }
      get title() {
        return this._id;
      }
      get start() {
        return this._id;
      }
      get end() {
        return this._id;
      }
      get color() {
        return this._color;
      } 
}

export class EventService {
    // attempting to load data directly from google calendar api -- RCM
    getEvents() {
        // Setting initial dataset to match Bill's demo - Will update this later this week -- RCM
        let eventData = [{"id": 1, "title": "All Day Event", "start": "2020-01-01"}, {"id": 2, "title": "Long Event", "start": "2020-01-07", "end": "2020-01-10"}, {"id": 3, "title": "Repeating Event", "start": "2020-01-09T16:00:00"}, {"id": 4, "title": "Repeating Event", "start": "2020-01-16T16:00:00"}, {"id": 5, "title": "Conference", "start": "2020-01-11", "end": "2020-01-13"}, {"id": 6, "title": "Meeting", "start": "2020-01-12T10:30:00", "end": "2020-01-12T12:30:00"}, {"id": 7, "title": "Lunch", "start": "2020-01-12T12:00:00"}, {"id": 8, "title": "Meeting", "start": "2020-01-12T14:30:00"}, {"id": 9, "title": "Happy Hour", "start": "2020-01-12T17:30:00"}, {"id": 10, "title": "Dinner", "start": "2020-01-12T20:00:00"}, {"id": 11, "title": "Holiday Party", "start": "2020-01-06T17:00:00"}, {"id": 12, "title": "Click for Google", "url": "http://google.com/", "start": "2020-01-28"}];
        let allEvents = eventData;
        
        // axios use URL to call Google api and map returned data to the same structure as calendar -- RCM
        axios.get(url).then(res => {
            res.data.items.map(event => {
                return allEvents.push({
                    "id": event.id, 
                    "title": event.summary, 
                    "start": event.start.date || event.start.dateTime, 
                    "end": event.end.date || event.end.dateTime,
                    color: 'red'
                })
            })
        });

        return allEvents;
    }
};