import React from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';
 
class Past extends React.Component {

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

    makeTimer = () => {
        let endTime = new Date("August 23, 2021 17:00:00 PDT");			
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
            <div className="main-banner slideshow-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content text-center">
                               
                                <div className="button-box offset-3">
                                
                                    <Link 
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        to="#" 
                                        className="video-btn popup-youtube"
                                    >
                                        <i className="icofont-ui-play"></i> Watch ICAC 2019 Trailer
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='xri0_a29pM0' 
                    onClose={() => this.setState({isOpen: false})} 
                />

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

                <ul className='slideshow'>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
            </div>
        );
    }
}
 
export default Past;