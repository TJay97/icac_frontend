import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';
 
class BlogOne extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <React.Fragment>
                <div className="page-title-area my-bg3">
                    <div className="container">
                        <h1>Keynote Speakers</h1>
                        <span></span>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#key">Keynotes</a></li>
                        </ul>
                        <br/>
                        <br/>
                        
                        <br/>
                        .
                    </div>
                </div> 

                <section className="blog-area ptb-120 bg-image">
                    <div className="container">
                        <div className="row">
                            <div id="key" className="col-lg-6 col-md-8">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                    <a href="https://cecs.anu.edu.au/people/thushara-abhayapala" target="_blank" rel="noopener noreferrer"><img src={require("../../assets/images/speakers1.jpg")} alt="blog" /></a>

                                        
                                    </div>

                                    <div className="blog-post-content">
                         
                                        <h3 className="text-center">Prof. Thushara Abhayapala</h3>
                                        <h6 className="text-center">Australian National University Canberra</h6>
                                        <p className="text-justify">Thushara Abhayapala is a Professor of Signal Processing at the Australian National University (ANU), Canberra. He received his B.E. degree in engineering in 1994 and his Ph.D. degree in telecommunications engineering in 1999, both from the ANU. He held a number of leadership positions including Deputy Dean of the College of Engineering and Computer Science (2015-19),  Head of the Research School of Engineering at ANU (2010-14) and the leader of the Wireless Signal Processing Program at the National ICT Australia (NICTA) from 2005-07.  His research interests are in the areas of spatial audio and acoustic signal processing, and multichannel signal processing. Among many contributions, he is one of the first researchers to use spherical harmonic based eigen-decomposition in microphone arrays and to propose the concept of spherical microphone arrays; novel contributions on the multi-zone sound field reproduction problem;  was one of the first to show the fundamental limits of spatial sound field reproduction using arrays of loudspeakers and spherical harmonics. He worked in industry for two years, before his doctoral study and has active collaboration with Facebook, Dolby and Sony. He has supervised 41 PhD students and co-authored more than 300 peer-reviewed papers. He was an associate editor of IEEE/ACM Transactions on Audio, Speech, and Language Processing and was a member of the Audio and Acoustic Signal Processing Technical Committee (2011–2016) of the IEEE Signal Processing Society. He is a fellow of Engineers Australia (IEAust).</p>
                                        <a href="https://cecs.anu.edu.au/people/thushara-abhayapala" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-8">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                    <a href="https://www.imperial.ac.uk/people/t.nanayakkara" target="_blank" rel="noopener noreferrer"><img src={require("../../assets/images/speakers2.jpg")} alt="blog" /></a>

                                       
                                    </div>

                                    <div className="blog-post-content">
                                        
                                        <h3 className="text-center">Prof. Thrishantha Nanayakkara</h3>
                                        <h6 className="text-center">Dyson School Of Design Engineering, Imperial College London</h6>
                                        <p className="text-justify">Prof. Thrishantha Nanayakkara is an associate professor in Design Engineering and
                                                Robotics at Dyson School of Design Engineering (DSDE), Imperial College London , where
                                                he is also the Director of the Morph Lab. He has published more than 140 papers in flagship
                                                robotics conferences and journals including IEEE transactions on robotics, IEEE Robotics
                                                and Automation Letters, RSS, IROS, ICRA, and RoboSoft. He is in the executive committee
                                                of the UK RAS Strategic Task Group for Soft Robotics, and in the editorial board as an
                                                Associate Editor of flagship robotics publications such as IEEE Robotics and Automation
                                                Letters, RSS, ICRA, IROS, RoboSoft, Frontiers in Soft Robotics, and the Journal of Robotics
                                                and Mechatronics. He has worked at leading laboratories for robotics and neuromotor
                                                control, including the Laboratory for Computational Motor Control, Johns Hopkins University,
                                                MIT Computer Science and Artificial Intelligence Lab (CSAIL), and Harvard Neuromotor
                                                Control Lab. He is and has been PI on EPSRC and EU funded projects of more than £5
                                                million that have pushed the boundaries of our understanding on how conditioning the body
                                                improves the efficacy of action and perception in human-human and human-robot
                                                interactions.
                                        </p>
                                        <a href="https://www.imperial.ac.uk/people/t.nanayakkara" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More <i className="icofont-double-right"></i></a>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default BlogOne;