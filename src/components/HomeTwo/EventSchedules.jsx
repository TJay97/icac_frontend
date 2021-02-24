import React from 'react';
import { Link } from 'react-router-dom';
// import OwlCarousel from 'react-owl-carousel3';
import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';

// const options = {
//     loop: true,
//     nav: true,
//     dots: false,
//     autoplayHoverPause: true,
//     autoplay: true,
//     items: 1,
//     navText: [
//         "<i class='icofont-rounded-left'></i>",
//         "<i class='icofont-rounded-right'></i>"
//     ],
// }
 
class EventSchedules extends React.Component {
    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
    }
    
    render(){
        return (
            <section className="schedule-area bg-image ptb-120">
                <div className="container">
                    <div className="section-title">
                        {/* <span>Schedule Plan</span> */}
                        <h2 className="text-white">Important <b>Notices</b></h2>

                        <LaxDiv text="Notices" dataPreset="driftRight" />

                        <Link to="/schedule-2" className="btn btn-primary">View More Dates!</Link>

                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        
                            <div className="col-lg-8 col-md-8">
                                <div className="schedule-slides-item">
                                    <div className="single-schedule">
                                        <div className="schedule-date">
                                            <div className="d-table">
                                                <div className="d-table-cell">
                                                    

                                                    <span><strike>01 July 2020</strike></span>
                                                </div>
                                            </div>
                                        </div>

                                       
                                        <div className="schedule-content">
                                            
                                            <div className="schedule-info">
                                                <h3><strike>
                                                Paper Submission (open)</strike>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-schedule">
                                        <div className="schedule-date">
                                            <div className="d-table">
                                                <div className="d-table-cell">
                                                    

                                                    <span><strike>25  Oct 2020</strike></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="schedule-content">
                                           
                                            <div className="schedule-info">
                                                <h3><strike>Acceptance Notification</strike></h3>

                                               
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single-schedule">
                                        <div className="schedule-date">
                                            <div className="d-table">
                                                <div className="d-table-cell">
                                                    

                                                    <span><strike>18 Nov 2020</strike></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="schedule-content">
                                           
                                            <div className="schedule-info">
                                                <h3>
                                                <strike>Registration (Open)</strike>
                                                </h3>

                                                
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
                                                    Conference Commencement Day
                                                </h3>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 .d-sm-none .d-md-block">
                            <div className="shape7" >
                                <img src={require("../../assets/images/shapes/7.png")} height="80%" width="80%" alt="shape5" />
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
 
export default EventSchedules;