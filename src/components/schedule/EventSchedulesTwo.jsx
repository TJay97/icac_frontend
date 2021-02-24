import React from 'react';

class EventSchedulesTwo extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <section id="p" className="schedule-area bg-image ptb-120">
            <div className="container">
              
                <div className="row">
                    
                        <div className="col-lg-6 col-md-6">
                            <div className="schedule-slides-item">
                                <div className="single-schedule">
                                    <div className="schedule-date">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                

                                                <span>01 July 2020</span>
                                            </div>
                                        </div>
                                    </div>

                                   
                                    <div className="schedule-content">
                                        
                                        <div className="schedule-info">
                                            <h3>
                                            Paper Submission (open)
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-schedule">
                                    <div className="schedule-date">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                
                                            <span>18 Sept 2020</span>
                                               
                                            </div>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                       
                                        <div className="schedule-info">
                                            <h3>Paper Submission (close)</h3>

                                           
                                        </div>
                                    </div>
                                </div>

                                <div className="single-schedule">
                                    <div className="schedule-date">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                

                                            <span>25 Oct 2020</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                       
                                        <div className="schedule-info">
                                            <h3>
                                            Acceptance Notification
                                            </h3>

                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="single-schedule">
                                    <div className="schedule-date">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                

                                                <span>15 Nov 2020</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                       
                                        <div className="schedule-info">
                                            <h3>
                                            Camera Ready Submission
                                            </h3>

                                            
                                        </div>
                                    </div>
                                </div>

                               
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="schedule-slides-item">
                                <div className="single-schedule">
                                    <div className="schedule-date">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                

                                            <span>18 Nov 2020</span>
                                            </div>
                                        </div>
                                    </div>

                                   
                                    <div className="schedule-content">
                                        
                                        <div className="schedule-info">
                                            <h3>
                                            Registration (Open)
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-schedule">
                                    <div className="schedule-date">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                

                                                <span>30 Nov 2020</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                       
                                        <div className="schedule-info">
                                            <h3>Registration (close)</h3>

                                           
                                        </div>
                                    </div>
                                </div>

                                <div className="single-schedule">
                                    <div className="schedule-date">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                

                                                <span>10 Dec 2020</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                       
                                        <div className="schedule-info">
                                            <h3>
                                            Conference Day 01
                                            </h3>

                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="single-schedule">
                                    <div className="schedule-date">
                                        <div className="d-table">
                                            <div className="d-table-cell">
                                                

                                                <span>11 Dec 2020</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="schedule-content">
                                       
                                        <div className="schedule-info">
                                            <h3>
                                            Conference Day 02
                                            </h3>

                                            
                                        </div>
                                    </div>
                                </div>

                               
                            </div>
                        </div>

                </div>
            </div>

                <div className="shape1">
                    <img src={require("../../assets/images/shapes/1.png")} alt="shape1" />
                </div>
                <div className="shape2 rotateme">
                    <img src={require("../../assets/images/shapes/2.png")} alt="shape2" />
                </div>
                <div className="shape3 rotateme">
                    <img src={require("../../assets/images/shapes/3.png")} alt="shape3" />
                </div>
                <div className="shape4">
                    <img src={require("../../assets/images/shapes/4.png")} alt="shape4" />
                </div>
            </section>
        );
    }
}
 
export default EventSchedulesTwo;