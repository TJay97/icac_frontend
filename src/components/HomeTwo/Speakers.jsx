import React from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';
 
class Speakers extends React.Component {

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
            <section className="speakers-area-two ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>Get Enlightened by the keynote speeches</span>
                        <h2>Keynote Speakers</h2>
                        <div className="bar"></div>
                        <LaxDiv text="Speakers" dataPreset="driftRight" />
                        <Link to="/keynote" className="btn btn-primary">View More Details</Link>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-sm-8">
                            <div className="single-speakers-box">
                                <div className="speakers-image">
                                    <img 
                                        src={require("../../assets/images/speakers1.jpg")}
                                        alt="speaker" 
                                    />
                                </div>

                                <div className="speakers-content">
                                    <h3><a href="https://cecs.anu.edu.au/people/thushara-abhayapala" target="_blank" rel="noopener noreferrer">Prof. Thushara Abhayapala </a></h3>
                                    <span>Australian National University Canberra</span>

                                    <ul className="social">
                                       
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-sm-8">
                            <div className="single-speakers-box">
                                <div className="speakers-image">
                                    <img 
                                        src={require("../../assets/images/speakers2.jpg")} 
                                        alt="speaker" 
                                    />
                                </div>

                                <div className="speakers-content">
                                <h3><a href="https://www.imperial.ac.uk/people/t.nanayakkara" target="_blank" rel="noopener noreferrer">Prof. Thrishantha Nanayakkara </a></h3>
                                    <span>Dyson School of Design Engineering, Imperial College London</span>

                                    <ul className="social">
                                       
                                       
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>

                                           
            
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Speakers;