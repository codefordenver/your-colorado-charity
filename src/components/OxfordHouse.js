import React, { Component } from 'react';
import {Panel} from 'primereact/panel';
import {Accordion, AccordionTab} from 'primereact/accordion';
// import {FullCalendar} from 'primereact/fullcalendar';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import timeGridPlugin from '@fullcalendar/timegrid';
import { Calendar } from './Calendar';


function ShowCalendar(props) {
    if (!props.show) {
        return null;
    }
    return (
        <Panel style={{height: '100%'}}> 
            <Calendar />
        </Panel>
    );
}

export class OxfordHouse extends Component {
    constructor(props) {
        super(props);
        this.toggleCalendarClick = this.toggleCalendarClick.bind(this);
        this.state = {
            showCalendar: false}}

    toggleCalendarClick() {
        this.setState(state => ({
            onToggleCalendar: !state.onToggleCalendar
        }));
    }

    render() {   
        const logo = 'assets/layout/images/oxford_house_logo.gif';

        return (
            <div className="p-grid p-fluid dashboard">

                <div className="p-col-12">
                    <div className="card card-w-title">
                        <div className="layout-logo">
                            <img alt="Oxford House" src={logo} height="50" width="150"/>
                        </div>
                        <h1>Oxford House of Colorado</h1>
                        <Accordion>
                            <AccordionTab header="About Us">
                                Oxford House is a concept in recovery from drug and alcohol addiction. In its simplest form, an Oxford House describes a democratically run, self-supporting and drug free home. Parallel to this concept lies the organizational structure of Oxford House, Inc. This publicly supported, non-profit 501(c)3 corporation is the umbrella organization which provides the network connecting all Oxford Houses and allocates resources to duplicate the Oxford House concept where needs arise.  The number of residents in a House may range from six to fifteen; there are houses for men, houses for women, and houses which accept women with children. Oxford Houses flourish in metropolitan areas such as New York City and Washington D.C. and thrive in such diverse communities as Hawaii, Washington State, Canada and Australia; but they all abide by the basic criteria.  Each House represents a remarkably effective and low cost method of preventing relapse. This was the purpose of the first Oxford House established in 1975, and this purpose is served, day by day, house after house, in each of over 2000 houses in the United States today.
                            </AccordionTab>
                            <AccordionTab header="History">
                                The first Oxford House was established in 1975 in Silver Spring, Maryland.  From the beginning the group rejected ownership of any property and continues to rent – not purchase – single-family houses in good neighborhoods to establish new Oxford Houses. In the years between 1975 and 1988, eighteen Houses were established by and for recovering individuals.  The principles of replication and guidelines for running a group home for recovering alcoholics and substance abusers embodied in the Oxford House Manual had become institutionalized in the Washington, D.C. Metropolitan area and in 1987 a house for ten men was rented in Bethlehem, PA.
                            </AccordionTab>
                            <AccordionTab header="Contacts">
                                Phone:   (303) 909-9922 <br />
                                Website: <a href="https://oxfordhouse.org/pdf/co" target="_blank" rel="noopener noreferrer">oxfordhouse.org/pdf/co</a>
                            </AccordionTab>
                        </Accordion>
                        <p />
                        <button onClick={this.toggleCalendarClick}>
                            {this.state.onToggleCalendar ? true : false}
                            <span className="layout-topbar-item-text">Calendar of Events  </span>
                            <span className="pi pi-calendar"/>
                        </button>
                    </div>

                </div>

                <ShowCalendar show={this.state.onToggleCalendar} />

            </div>
        );
    }
}