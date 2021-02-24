import React from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';
 
class Pricing extends React.Component {
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
            <section className="pricing-area  bg-image">
                <div className="container">
                    <div className="section-title">
                        
                        <h2>Call for <b>Papers</b></h2>
                        
                        <LaxDiv text="Papers" dataPreset="driftLeft" />

                        <div className="bar"></div>
                        <Link to="/author" className="btn btn-primary">Author Guidelines >></Link>
                    </div>
                    <div className="row h-100 align-items-center">
                    <h5>Prospective authors are encouraged to submit full papers consisting of 6 pages, <br/>under but not
                    limited to the following topics:</h5>
                   
                        <div className="col-lg-6">
                            <div className="about-content">
                   
                        <h5>    <ul>
                                <li>Computer Vision</li>
                                <li>Natural Language Processing</li>
                                <li>Data Analytics</li>
                                <li>Distributed Systems</li>
                                <li>Information and Cyber Security</li>
                                <li>Human Computer Interraction</li>
                                <li>Computer Networks</li>
                                <li>Internet of Things</li>
                                <li>Robotics and Intelligent Systems</li>
                                <li>Soft Computing</li>
                            </ul>
                            </h5>
                          
                    </div>
                    </div>

                    <div className="col-lg-6 text-center shape7">
                      
                                <img src={require("../../assets/images/shapes/8.png")} height="50%" width="50%" alt="shape5" />
                           
                        </div>
                    </div>
                </div>
              
            </section>
        );
    }
}
 
export default Pricing;