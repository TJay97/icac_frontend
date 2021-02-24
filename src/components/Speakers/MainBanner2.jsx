import React from 'react';

class MainBanner2 extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <div className="main-banner video-banner">
            <video loop muted autoPlay poster="#" className="video-background">
                <source src={require("../../assets/video/promo-video.mp4")} type="video/mp4" />
            </video>
            <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="text-center">
                                <h1><font color="white">Explore Sri Lanka</font></h1>
                                <h4><a href="https://www.srilanka.travel/" className="primary-btn w-50" target="_blank" rel="noopener noreferrer">Explore more >>></a></h4>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}
 
export default MainBanner2;