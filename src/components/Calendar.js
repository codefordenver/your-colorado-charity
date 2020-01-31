import React, { useState, useEffect } from 'react';
import {FullCalendar} from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventService } from '../service/EventService';

export const Calendar = () => {
    // setting variables for the state
    const [events, setEvents] = useState([]);

    // 
    useEffect(() => {
        EventService.getEvents()
            .then(data => setEvents(data))
            .catch(err => console.log(err))
    }, []);

    return (
        
    );
}