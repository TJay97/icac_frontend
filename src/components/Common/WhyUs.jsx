import React from 'react';
import { Link } from 'react-router-dom';
 
class WhyUs extends React.Component {
    render(){
        return (
            <section className="why-choose-us">
                <div className="row m-0">
                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="icofont-headphone-alt-1"></i>
                                        </div>
                                        <h3>Keynote Speakers</h3>
                                        <p>Addressed by some of the greatest minds in the Information Technology Industry!</p>
            
                                        <Link to="/keynote" className="btn btn-primary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="icofont-unique-idea"></i>
                                        </div>
                                        <h3>Innovative Ideas</h3>
                                        <p>Hundreds of creative, original and innovative ideas are presented to the world!</p>
            
                                        <Link to="/cfp" className="btn btn-primary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="icofont-robot"></i>
                                        </div>
                                        <h3>Broad Disciplines</h3>
                                        <p>Spans over a variety of disciplines related to new advancements in computing!</p>
            
                                        <Link to="/author" className="btn btn-primary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 p-0">
                        <div className="single-box">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="icofont-learn"></i>
                                        </div>
                                        <h3>Knowlegde Hub </h3>
                                        <p>Includes Workshops and other Technical Sessions to engage and iinterract!</p>
            
                                        <Link to="/workshop" className="btn btn-primary">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className='slideshow'>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul>
            </section>
        );
    }
}
 
export default WhyUs;