import React from 'react';
import { Link } from 'react-router-dom';
// import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

class MainBanner extends React.Component {


    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
         isOpen: false
    };
    openModal = () => {
        this.setState({isOpen: true})
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    makeTimer = () => {
        let endTime = new Date("December 10, 2020 09:00:00 UTC+05:30");			
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        this.setState({
            days, hours, minutes, seconds
        });
    }

    componentDidMount(){
        this.myInterval = setInterval(() => { 
            this.makeTimer();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render(){
        return (
            <div className="main-banner item-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content banner-content-center">
                                <p><font color="#efa506">Are you</font> <span>ready</span> <font color="#efa506">to attend?</font></p>
                                <h2><font color="white" size="+20">The International Conference on Advancements in Computing <b> 2</b><b>0</b><b>2</b><b>1</b></font></h2>
                                <ul>
                                    <li><i className="icofont-compass"></i> SLIIT, Malabe, Sri Lanka</li>
                                    <li><i className="icofont-calendar"></i> 9, 10 and 11 Dec, 2021</li>
                                </ul>

                                <ul>
                                {/* <div className="button-box">
                                <Link to="/best">
                                <font color="#efa506" size="30"> <div className="iop">  <i class="icofont-award"></i>  </div></font></Link><br/> 
                                 <Link to="/best" className="btn btn-primary9"> View Best Papers Awards!
                                    </Link>
                                  </div> */}
                                {/* <div className="event-countdown">
                                    <div id="timer">
                                        <div id="days">
                                         {this.state.days} <span>Days</span>
                                        </div>
                                        <div id="hours">
                                            {this.state.hours} <span>Hours</span>
                                        </div>
                                        <div id="minutes">
                                            {this.state.minutes} <span>Minutes</span>
                                        </div>
                                        <div id="seconds">
                                            {this.state.seconds} <span>Seconds</span>
                                        </div>
                                        
                                    </div>
                                </div> */}
                                </ul>
                               
                                {/* <div className="button-box">                                 
                                    
                                    <h6 className="d-block d-sm-none"><font color="white"> <a href="https://icac.lk/best">View Best Papers!</a></font></h6>
                                    <h6 className="d-none d-sm-block d-md-none"><font color="white"><a href="https://icac.lk/best">View Best Papers!</a></font></h6>
                                    <h6 className="d-none d-md-block d-lg-none"><font color="white"><a href="https://icac.lk/best">View Best Papers!</a></font></h6>
                                      
                               </div>
                               <div className="button-box">                                 
                                    
                                    <h6 className="d-block d-sm-none"><font color="#efa506">In accordance with the current recommendations of The National Operation Center for Prevention of COVID-19 and the Sri Lankan Government to slow the spread of the COVID-19, ICAC 2020 has been converted to an online virtual conference. </font></h6>
                                    <h6 className="d-none d-sm-block d-md-none"><font color="#efa506">In accordance with the current recommendations of The National Operation Center for Prevention of COVID-19 and the Sri Lankan Government to slow the spread of the COVID-19, ICAC 2020 has been converted to an online virtual conference. </font></h6>
                                    <h6 className="d-none d-md-block d-lg-none"><font color="#efa506">In accordance with the current recommendations of The National Operation Center for Prevention of COVID-19 and the Sri Lankan Government to slow the spread of the COVID-19, ICAC 2020 has been converted to an online virtual conference. </font></h6>
                                      
                               </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                   </div>
                   
                {/* <div className="shape9 d-none d-lg-block d-xl-none">
                <a href="https://icac.lk/best"> <img src="https://icac.lk/temp/best.png" height="100%" Width="100%" alt="shape1" /></a>
                </div>
                <div className="shape9 d-none d-xl-block">
                <a href="https://icac.lk/best"> <img src="https://icac.lk/temp/best.png" height="100%" Width="100%" alt="shape1" /> </a>
                </div> */}
                <div className="shape2 rotateme">
                    <img src={require("../../assets/images/shapes/2.png")} alt="shape2" />
                </div>
                {/* <div className="shape44">
                <Link to="/best"> <img src="https://icrrd.com/media/20-12-2019-053104best-paper-award.png" alt="shape3" /></Link>
                </div> */}
                
            </div>
        );
    }
}
 
export default MainBanner;