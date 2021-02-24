import React from 'react';
//import { Link } from 'react-router-dom';
import lax from 'lax.js';
// import OwlCarousel from 'react-owl-carousel3';
import PlatinumSponsors from '../LaxButton/PlatinumSponsors';
import GoldSponsors from '../LaxButton/GoldSponsors';

// const options = {
//     loop: true,
//     nav: false,
//     dots: false,
//     autoplayHoverPause: true,
//     autoplay: true,
//     navText: [
//         "<i class='icofont-rounded-left'></i>",
//         "<i class='icofont-rounded-right'></i>"
//     ],
//     responsive: {
//         0: {
//             items:2,
//         },
//         400: {
//             items:3,
//         },
//         576: {
//             items:3,
//         },
//         768: {
//             items:4,
//         },
//         1200: {
//             items:5,
//         }
//     }
// }
 
class Partner extends React.Component {

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
            <section className="partner-area ptb-120">
                <div className="container">
                    <div className="section-title text-center">
                        <span>Check Who Makes This Event Possible!</span>
                        
                        {/* <Link to="#" className="btn btn-primary">More Details</Link> */}

                        
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="partner-title platinum-sponsor">
                                <PlatinumSponsors />
                            </div>
                        </div>
                        
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    
                                      <img src={require("../../assets/images/sliit.png")} height="50%" width="50%" alt="Partner Logo" />
                                </div>
                            </div>

                            

                        <div className="col-lg-12">
                            <div className="border"></div>
                        </div>

                        <div className="col-lg-12">
                            <div className="partner-title platinum-sponsor">
                                <GoldSponsors />
                            </div>
                        </div>

                        
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    
                                        <img src={require("../../assets/images/ieee.png")} height="50%" width="50%" alt="Partner Logo" />
                                  
                                </div>
                            </div>

                           
                            
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Partner;