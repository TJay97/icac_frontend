import React from 'react';
import { Link } from 'react-router-dom';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Event Details</h3>
                                <span>
                                    <i className="icofont-calendar"></i> 10-11 December, 2020
                                </span>

                                <p className="location">
                                    <i className="icofont-google-map"></i> SLIIT, New Kandy Road, Malabe, Sri Lanka
                                </p>

                                <Link to="#" className="contact-authority">
                                    <i className="icofont-mail"></i> info@icac.lk
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Stay Connected</h3>
                                <p>Don't miss anything!</p>
                                
                                <ul className="social-links">
                                    <li><a href="https://www.facebook.com/ICAC2020/" className="facebook" target="_blank" rel="noopener noreferrer"><i className="icofont-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/SLIITICAC2020" className="twitter" target="_blank" rel="noopener noreferrer"><i className="icofont-twitter"></i></a></li>
                                  
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="copyright-area">
                                <div className="logo">
                                    <Link to="index.html">
                                        <img src={require("../../assets/images/logo.png")} alt="logo" />
                                    </Link>
                                </div>
                                <ul>
                                   
                                  
                                    <li><Link to="/cfp">Submit</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                    <li><Link to="/travel">Attend</Link></li>
                               </ul>
                                <p>
                                    Copyright <i className="icofont-copyright"></i>ICAC2020. All rights reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;