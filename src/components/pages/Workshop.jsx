import React from 'react';
import { Link } from 'react-router-dom';
import 'react-accessible-accordion/dist/fancy-example.css';
import Footer from '../Common/Footer';
import GoTop from '../Shared/GoTop';
class Register extends React.Component {
    submitHandler = (e) => {
        e.preventDefault();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <React.Fragment>
                <div className="page-title-area0 my-bg3">
                    <div className="container">
                    
                        <h1>Workshops</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#work">Workshops</a></li>
                        </ul>
                        <div className="col-lg-8 offset-2">
                          <p className="text-white">As ICAC 2020 organizing committee, has been successful in organizing some of the best workshops that have a specific, action-oriented purpose, and aim to generate concrete answers to current problems in the field. </p>
                   <table className="text-left table table-bordered text-white">
                       <tr>
                       <th className="text-center"> Workshop </th>
                       <th className="text-center">  Speaker</th>
                       </tr>
                       <tr>
                           <td> <a href="#work1">Word Embedding: From Word2Vec to StartSpace</a></td>
                           <td>Dr. T. Uthayasankar</td>
                       </tr>
                       <tr>
                           <td><a href="#work2">Towards inter-disciplinary Computing Applications with Nanotechnology</a></td>
                           <td>Dr. Asanka Pallewatta</td>
                       </tr>
                       <tr>
                           <td><a href="#work3">Deep learning Applications and Assistive Humanitarian Devices</a></td>
                           <td>Prof. Celia Shanaz</td>
                       </tr>
                       <tr>
                           <td><a href="#work4">Security and Privacy of 5G and Beyond 5G Networks</a></td>
                           <td>Dr. Madhusanka Liayanage</td>
                       </tr>
                       <tr>
                           <td><a href="#work5">ML4Sec: Machine Learning for Cybersecurity</a></td>
                           <td>Mr. Chamath Palihawadana, Dr. Omar Alkadri, Dr. Harsha Kalutarage</td>
                       </tr>
                   </table>
<GoTop scrollStepInPx="50" delayInMs="16.66" /> </div>
                    </div>
                </div>

                <section className="bg12">
                    <div id="work1" className="container bg12">
                                     
                    <img src="https://icac.lk/temp/w1.jpg" className="about-img1" alt="wrkshp"/></div>
                    <div id="work2" className="container bg12">
                    <img src="https://icac.lk/temp/w2.jpg" className="about-img1" alt="wrkshp"/></div>
                    <div id="work3" className="container bg12">
                    <img src="https://icac.lk/temp/w3.jpg" className="about-img1" alt="wrkshp"/></div>
                    <div id="work4" className="container bg12">
                    <img src="https://icac.lk/temp/w4.jpg" className="about-img1" alt="wrkshp"/></div>
                    <div id="work5" className="container bg12">
                    <img src="https://icac.lk/temp/w5.jpg" className="about-img1" alt="wrkshp"/></div>

                      
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Register;