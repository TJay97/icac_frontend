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
 
class Faq extends React.Component {
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
                    
                        <h1>Call For Papers</h1>
                        
                       
                        <div className="col-lg-8 offset-2"><span>The 2020 International Conference on Advancements of Computing (ICAC 2020) provides a forum for academics, 
                            researchers and practitioners with an interest in advancements of all areas related to computing including Computer Engineering, Computer Science,
                             Information Systems, Information Technology and Software Engineering.</span>
                              <span>Call for Papers - PDF Download < a href="https://drive.google.com/file/d/1-3MYpn7hibcyYIV42UU1MeQzExy1B-3I/view?usp=sharing" download="CFP" target="_blank" rel="noopener noreferrer" ><b>here</b> </a></span>
                             <h4><font color="#efa506">Do NOT include any authors’ information such as name, affiliations, e-mail, etc. in the initial manuscript.</font></h4>
                              <a href="https://cmt3.research.microsoft.com/2ndICAC2020" className="btn btn-primary " target="_blank" rel="noopener noreferrer">Submit your paper</a>
                        </div>
                        
                    </div>
                </div>

                <section className="faq-area">
                    <div className="container">
                        <div className="faq-accordion">
                       
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
               
                        </div>
                        </div>

                      
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Faq;