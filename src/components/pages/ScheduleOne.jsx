import React from 'react'
import EventSchedulesOne from '../schedule/EventSchedulesOne';
import Footer from '../Common/Footer';
 
class ScheduleOne extends React.Component {
    render(){
        return (
            <React.Fragment>
               
                <EventSchedulesOne />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default ScheduleOne;