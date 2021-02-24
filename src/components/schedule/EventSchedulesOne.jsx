import React from 'react';
 
class EventSchedulesOne extends React.Component {
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }
    render(){
        return (
            <section  className="schedule-area bg-image ptb-120">
                <div  className="container">
                    <div className="row">
                        {/* <div className="col-lg-12">
                            <div   className="tab">
                                <ul className="tabs active">
                                    <li
                                        onClick={(e) => this.openTabSection(e, 'tab1')}
                                        className="current"
                                    >
                                        <Link to="#">
                                            Day 01 
                                            <span>10 December 2020</span>
                                        </Link>
                                    </li>

                                    <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                        <Link to="#">
                                            Day 02
                                            <span>11 December 2020</span>
                                        </Link>
                                    </li>

                                    <li onClick={(e) => this.openTabSection(e, 'tab4')}>
                                        <Link to="#">
                                            Sessions
                                            <span>Details</span>
                                        </Link> 
                                    </li>
                                </ul>

                                <div className="tab_content">
                                    <div id="tab1" className="tabs_item">
                                        <ul className="accordion">
                                            
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Registration & Reception 
</h3>

                                                        <ul>
                                                           <li><i className="icofont-wall-clock"></i> 08:00AM - 09:00AM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Opening Ceremony</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 09:00AM - 09:30AM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Keynote Address 01</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 09:30AM - 10:45AM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Networking Break</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 10:45AM - 11:15AM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Keynote Address 02</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 11:15AM - 12:30PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Break</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 12:30PM - 01:30PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Sessions 01 02 03 04</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 01:30PM - 02:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Sessions 01 02 03 04</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 02:00PM - 02:30PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Sessions 01 02 03 04</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 02:30PM - 03:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Sessions 01 02 03 04</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 03:30PM - 04:00PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                            
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Networking Break</h3>

                                                        <ul>
                                                           <li><i className="icofont-wall-clock"></i> 03.30PM - 03.45PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Workshop - Nano Technology</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Dr. Asanka Pallewatta</span> </li>
                                                            <li><i className="icofont-wall-clock"></i> 03.45PM - 04.45PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Workshop - 5G and Security</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Dr. Madhushanka Liyanage</span> </li>
                                                            <li><i className="icofont-wall-clock"></i> 03.45PM - 04.45PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab2" className="tabs_item">
                                    <ul className="accordion">
                                            
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                    
                                                    
                                                    <div className="schedule-info">
                                                        <h3>Registration & Reception 
</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 07:30AM - 09:00AM</li>
                                                        </ul>
                                                    </div>
                                                </Link>
                                            </li>

                                           
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Sessions 05 06 07 08 10 </h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 09.00AM - 09.30AM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Sessions 05 06 07 08 10</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 09:30AM - 10:30AM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Sessions Sessions 05 06 07 09</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 10:45AM - 11:30AM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Sessions Sessions 05 06 07 09</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 11:30AM - 12:30PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                            
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Break</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 12.30PM - 01.30PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>

                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Workshop - Deep Learning</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span>Dr. Celia Shahnaz</span> </li>
                                                            <li><i className="icofont-wall-clock"></i> 01.30PM - 02.30PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Workshop - TBC</h3>

                                                        <ul>
                                                            <li><i className="icofont-user-suited"></i> By <span></span> </li>
                                                            <li><i className="icofont-location-pin"></i> At <span></span> </li>
                                                            <li><i className="icofont-wall-clock"></i> 01.30PM - 02.30PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                            <li className="accordion-item">
                                                <Link className="accordion-title" to="#">
                                                                                                        
                                                    <div className="schedule-info">
                                                        <h3>Closing Ceremony</h3>

                                                        <ul>
                                                            <li><i className="icofont-wall-clock"></i> 3.45PM - 04.45PM</li>
                                                        </ul>
                                                    </div>
                                                </Link>                                             
                                            </li>
                                        </ul>	
                                    </div>

                                    <div id="tab3" className="tabs_item">
                                        </div>

                                    <div id="tab4" className="tabs_item">
                                        </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="container text-center">
                    
                    <h1><font color="white">Program Schedule</font></h1>
                </div>
                <div id="sh">
                         <img src="https://icac.lk/temp/pro1.jpg" className="about-img1" alt="wrkshp"/>
                         <img src="https://icac.lk/temp/pro2.jpg" className="about-img1" alt="wrkshp"/></div>
                        <div className="col-lg-12">
                            <div className="btn-box">
                                <a href="https://drive.google.com/file/d/1fdQss1-rVpcZDkAcxElxO-oP0LqPLqX6/view?usp=sharing" target="_blank"  rel="noopener noreferrer" className="btn btn-primary">Download Schedule (PDF)</a>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape1"><img src={require("../../assets/images/shapes/1.png")} alt="shape1" /></div>
                <div className="shape2 rotateme"><img src={require("../../assets/images/shapes/2.png")} alt="shape2" /></div>
                <div className="shape3 rotateme"><img src={require("../../assets/images/shapes/3.png")} alt="shape3" /></div>
                <div className="shape4"><img src={require("../../assets/images/shapes/4.png")} alt="shape4" /></div>
            </section>
        );
    }
}
 
export default EventSchedulesOne;