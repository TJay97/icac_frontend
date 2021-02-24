import React from 'react';
//import { Link } from 'react-router-dom';
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Footer from '../Common/Footer';
 
class Camera extends React.Component {
    submitHandler = (e) => {
        e.preventDefault();
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <React.Fragment>
                <div className="page-title-area item-bg2">
                    <div className="container">
                    
                        <h1>Camera Ready Submissions</h1>
                        
                       
                        <div className="col-lg-8 offset-2"><span>Hopefully, you have visited this page because your paper has been accepted to be presented at the 2020 2nd International Conference on Advancements in Computing (ICAC), which will be held from 10 -11 December 2020. 
                            <br/> <b>Congratulations and well done!</b>
                            <br/>  Now it's time to complete the next procedures. Please scroll down to refer the instructions given below for the camera ready full-paper submission to the conference.</span>
                            <br/>
 
                                {/* <a href="https://cmt3.research.microsoft.com/2ndICAC2020" className="btn btn-primary " target="_blank" rel="noopener noreferrer">Submit your paper</a> */}
                        </div>
                        
                    </div>
                </div>

                <section className="faq-area">
                    <div className="container ptb-10">


                    <div id="cam" className="col-lg-8 col-md-10 col-sm-12 offset-lg-2 offset-md-1 divp ">
                        <div className="media flex-column text-left">
                        <h4 className="m-auto"><br/> <font color="#efa506">Authors should check for the following:</font></h4>
                        <br/>
                    <ul>
                   
                    <li><h6>The authors are expected to address all reviewer comments supplied and change the paper accordingly.  </h6></li>

                    <li><h6>The title, author names, affiliations must be in the correct format and the copyright notice must be in the first page as instructed as below.  </h6></li>

                        <li><h6>Abstract should be 150-200 words. It should have research gap, how your solution fills that gap, methods and techniques used in brief, impact of your results/how successful your solution is. </h6></li>

                        <li><h6>Please ensure that your introduction highlights the research problem and how you want to contribute by solving it. </h6></li>

                        <li><h6> Results: This is important and if you do not have convincing, verifiable results, your paper will be rejected even in this stage </h6></li>

                        <li><h6>Conclusions should highlight your contribution and future research work that may emerge in these lines.  </h6></li>

                        <li><h6>References in IEEE format. You might have referred PDFs taken from different sources but track down the source (conference/journal or other source) and put that reference in correct format given in the IEEE style guide. </h6></li>

                        <li><h6>The paper should be proof-read thoroughly, and language mistakes need to be addressed and corrected carefully before you prepare the pdf using the PDF eXpress.</h6></li>  

                        <li><h6>The images should be clear, visible, and the captions should follow the IEEE formatting guidelines.  </h6></li>

                        <li><h6>The tables should follow the IEEE formatting guidelines. </h6></li>
                        </ul> 
                   
                   <h6>Note that if you have NOT addressed all the above-mentioned requirements, the papers will be subjected to reject from the conference. </h6>
                   
                                    
                        </div>
                       
                        <div className="media flex-column text-left">
                        <h4 className="m-auto"><br/> <font color="#efa506">Creating IEEE PDF eXpress:</font></h4>
                        <br/>
                    <ul>
                   <li><h6>Please use IEEE PDF eXpress to create and validate your final Camera-Ready version.  </h6></li> 
                   <li><h6>IEEE ICAC 2020 Conference ID is 51239X.</h6></li>
                    <li><h6><b>IMPORTANT:</b> Any changes made to a PDF after IEEE PDF eXpress conversion or PDF Checking may invalidate Xplore compatibility. If any of these elements are desired, they should be added to the document before a PDF is created. </h6></li>
                    </ul> 
                    <h6>IEEE PDF eXpress Guidelines: </h6> 
                    <ol>
                        <li><h6>Creating a PDF </h6>
                            <ol>
                                <li><h6>Add the copyright notice to the bottom of the first page of your source document. See below for the copyright codes. </h6></li>
                                <li><h6>Proofread your source document thoroughly to confirm that it will require no revision </h6></li>
                            </ol></li>
                            <br/>
                        <li><h6>Creating your PDF eXpress Account  </h6>
                            <ol>
                                <li><h6>Access the IEEE PDF eXpress site at <a href= "https://ieee-pdf-express.org/account/login?ReturnUrl=%2F" target="_blank" rel="noopener noreferrer"> https://ieee-pdf-express.org/account/login?ReturnUrl=%2F</a> </h6></li>
                                <li><h6>Select the New Users. </h6></li>
                                <ol>
                                    <li><h6>Select the New Users. </h6></li>
                                    <li><h6>Enter the following: 
                                        <ol>
                                            <li>51239X for the Conference ID </li>
                                            <li>your email address </li>
                                            <li>a password</li>
                                        </ol>
                                        </h6></li>
                                    <li><h6>Continue to enter information as prompted. </h6></li>
                                </ol>
                                <li><h6>An Online confirmation will be displayed, and an email confirmation will be sent verifying your account setup. </h6></li>
                                <li><h6>Previous users of PDF eXpress need to follow the above steps but should enter the same password that was used for previous conferences. </h6></li>
                                <li><h6>Verify that your contact information is valid. </h6></li>
                            </ol>
                            
                            </li><br/>
                            <li><h6>Validate your paper </h6>
                            <ol>
                               
                            <li><h6>For each conference paper, click “Create New Title”. </h6></li>

                            <li><h6> Enter identifying text for the paper (the title is recommended but not required) </h6></li>

                            <li><h6>Click “Submit PDF for Checking” or “Submit Source Files for Conversion” </h6></li>

                            <li><h6>Indicate platform, source file type (if applicable), click Browse and navigate to file, and click “Upload File”. You will receive online and email confirmation of successful upload. </h6></li>

                            <li><h6>You will receive an email with your Checked PDF or IEEE PDF eXpress-converted PDF attached. If you submitted a PDF for Checking, the email will show if your file passed or failed. </h6></li>
                               
                            </ol></li>
                    </ol>
                
                    <div className="media flex-column text-left">
                        <h4 className="m-auto"><br/> <font color="#efa506">Copyright notice of the manuscript:</font></h4>
                        <br/>
                    <ul>
                    {/* <li><h6>For papers in which all authors are employed by the US government, the copyright notice is: U.S. Government work not protected by U.S. copyright    </h6></li> 
                   <li><h6>For papers in which all authors are employed by a Crown government (UK, Canada, and Australia), the copyright notice is: 978-1-7281-8412-8/20/$31.00 ©2020 Crown  </h6></li>
                   <li><h6>For papers in which all authors are employed by the European Union, the copyright notice is: 978-1-7281-8412-8/20/$31.00©2020 European Union   </h6></li>
                   <li><h6>For all other papers the copyright notice is: 978-1-7281-8412-8/20/$31.00 ©2020 IEE  </h6></li> */}
                   <li><h6>For all other papers the copyright notice is: 978-1-7281-8412-8/20/$31.00 ©2020 IEEE </h6></li>
                   </ul>                  
                        </div>

                    {/* <h3 className="m-auto">
                    <a href="https://cmt3.research.microsoft.com/2ndICAC2020" target="_blank" rel="noopener noreferrer" className="btn btn-primary ">
                                    Submit Your Paper 
                                <i className="icofont-double-right"></i>
                                </a></h3> */}
                        <br/>
                                                            
                        </div>
                        </div>
                        

                        {/* <div className="faq-accordion">
                       
              <h6>  Prospective authors are encouraged to submit full papers consisting of 6 pages, under but not  limited to the following topics:</h6>
              <br/> 1. <b>Computer Vision:</b> Image Processing and segmentation, Pattern recognition, Machine Learning, Video processing, Image compression and enhancement 
              <br/> <br/> 2.  <b>Natural Language Processing:</b> Audio and speech processing, Sentiment analysis, Opinion mining, Topic modelling, Social network mining 
              <br/><br/> 3.  <b>Data Analytics:</b> Data Mining, Big data, Business Intelligence, Information Extraction, Time -series prediction, 
              <br/><br/> 4.  <b>Distributed Systems:</b> Cloud Computing, Parallel computing, Grid and Scalable computing, Mobile computing, Microservices 
              <br/><br/> 5.  <b>Information and Cyber Security:</b> Blockchain and Cryptocurrency, Information Assurance, Digital Forensics, Database and Computer security, Cryptography 
              <br/><br/> 6.  <b>Information systems:</b> Geographical Information Systems, E-learning, E-commerce and E-governance Human Computer Interaction: User Interface Engineering, Haptics, Gamification, Virtual Reality, 
              <br/><br/> 7.  <b>Augmented Reality </b>
              <br/><br/> 8.  <b>Computer networks and Data Communication:</b> Mobile ad-hoc networks, Ubiquitous computing, network security, virtualization 
              <br/><br/> 9.  <b>Internet of Things:</b> Wireless Sensor Networks, Wearable devices and Body sensor networks Robotics & intelligent systems: Assistive robots, Robotic navigation, Collaborative robots, Embedded systems 
              <br/><br/> 10.  <b>Soft Computing:</b> Machine learning, Evolutionary computing, Fuzzy logic, Deep learning, Optimization
               
                        </div> */}
                        </div>

                      
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Camera;