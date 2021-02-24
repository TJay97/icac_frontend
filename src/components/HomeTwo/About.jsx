import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
import LaxButton from '../Shared/LaxButton';
 
class About extends React.Component {
    
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
            <section className="about-area ptb-120 bg-image">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Join The Conference</span>
                                <h2>ABOUT <b>ICAC</b> 2020</h2>
                                <p>ICAC 2020 is organized by the Faculty of Computing of Sri Lanka Institute of Information Technology (SLIIT) with the theme “Advancements in Computing.” The ICAC 2020 will be an open forum for academics, as-well-as industry professionals, to present the latest issues and trends in the broader domain of computing.</p>
                                
                                 
                                {/* <div className="signature">
                                    <img src={require("../../assets/images/signature.png")} alt="signature" />
                                </div> */}

                                <Link to="/register" className="btn btn-primary">
                                    Register 
                                    <i className="icofont-double-right"></i>
                                </Link>

                                <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src="https://icac.lk/about1.jpg" className="about-img1" alt="about" />

                                <img src={require("../../assets/images/about2.jpg")} className="about-img2" alt="about" />

                                <img src={require("../../assets/images/shapes/1.png")} className="shape-img" alt="about" />

                                <LaxButton buttonText="Explore ICAC 2019" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;