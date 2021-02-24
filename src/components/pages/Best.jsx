import React from 'react';
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
                <div className="page-title-area99 my-bg99">
                    <div className="container">
                    
                         <h2 className="text-white">BEST CONFERENCE PAPER</h2>
                       <br/>
                       
                       <div className="col-lg-12 ">
                            <font size="4">
                           <table className="text-left table table-bordered text-white">
                       <tr>
                       <th className="text-center">     <font size="5">Track </font> </th>
                       <th className="text-center">   <font size="5">Paper ID</font></th>
                       <th className="text-center">   <font size="5">Paper Title</font></th>
                       <th className="text-center">  <font size="5"> Authors</font></th>
                       </tr>
                       <tr>
                            <td>Internet of Things</td>
                            <td>60 </td>
                            <td>Enhanced Symmetric Cryptography for IoT using Novel Random Secret Key Approach </td>
                            <td> Gopinath Sittampalam, Nagulan Ratnarajah</td>
                       </tr>
                       </table>
                       </font>
                       </div> 
                       <h2 className="text-white">BEST TRACK PAPERS</h2>
                       <br/>
                        <div className="col-lg-12 ">
                            <font size="4">
                           <table className="text-left table table-bordered text-white">
                       <tr>
                       <th className="text-center">     <font size="5">Track </font> </th>
                       <th className="text-center">   <font size="5">Paper ID</font></th>
                       <th className="text-center">   <font size="5">Paper Title</font></th>
                       <th className="text-center">  <font size="5"> Authors</font></th>
                       </tr>
                       <tr>
                           <td>Computer Vision</td>
                           <td>16 </td>
                           <td>Character Modifier Combinations Recognition in Sinhala Handwriting </td>
                           <td>Chamari M. Silva, N. D. Jayasundere </td>
                          
                       </tr>
                       <tr>
                        
                         <td>Natural Language Processing </td>
                         <td> 231</td>
                         <td>Computational model for rating mobile applications based on feature extraction </td>
                         <td>Inthuja Gunaratnam, D.N.Wickramarachchi </td>

                       </tr>
                       <tr>
                         <td>Distributed Systems</td>
                         <td> 36</td>
                         <td>A Network Science-Based Approach for an Optimal Microservice Governance </td>
                          <td>Gihan Saranga Siriwardhana, Nishitha De Silva, Liyanage Sanjaya Jayasinghe, Lakshitha Vithanage, Dharshana Kasthurirathna</td>
                       </tr>
                       <tr>
                         <td>Information and Cyber Security</td>
                         <td>53 </td>
                         <td>WANHEDA: A Machine Learning Based DDoS Detection System </td>
                          <td>A.U Sudugala, W.H Chanuka, A.M.N Eshan, U.C.S Bandara, K.Y Abeywardena</td>
                       </tr>
                       <tr>
                       <td>Data Analytics</td>
                       <td>34 </td>
                       <td> Analyzing the Influence of Current Situation in the Country for Vegetable Prices using LDA Topic Modeling</td>
                         <td>I.M.G.L.Illankoon, B.T.G.S.Kumara</td>
                       </tr>
                       <tr>
                       <td>Human Computer Interaction</td>
                       <td>207 </td>
                       <td>VirtualPT: Virtual Reality based Home Care Physiotherapy Rehabilitation for Elderly </td>
                       <td>Thamindu Anusara Heiyanthuduwa, K. W. Nikini Umasha Amarapala, K. D. Vinura Budara Gunathilaka, K. Satheesh Ravindu, Jagath Wickramarathne, Dharshana Kasthurirathna</td>
                         
                       </tr>
                       <tr>
                       <td>Information Systems</td>
                       <td> 219</td>
                       <td> Real-Time Location Based Augmented Reality Advertising Platform</td>
                         <td>B.I.Batuwanthudawa, K.P.N Jayasena</td>
                       </tr>
                       <tr>
                       <td>Robotics and Intelligent Systems</td>
                       <td> 225</td>
                       <td> SURAKSHA e-Caretaker: Elders Falling Detection and Alerting System Using Machine Learning</td>
                         <td>Lahiru Mendis, Sasini Hathurusinghe, Hasini Epa, Thisara Edirisinghe, Jagath Wickramarathne, Shalini Rupasinghe </td>
                       </tr>
                       <tr>
                       <td>Internet of Things</td>
                       <td>60 </td>
                       <td>Enhanced Symmetric Cryptography for IoT using Novel Random Secret Key Approach </td>
                       <td> Gopinath Sittampalam, Nagulan Ratnarajah</td>
                         
                       </tr>
                       <tr>
                       <td>Soft Computing</td>
                       <td>45 </td>
                       <td>Smart Personal Intelligent Assistant for Candidates of IELTS Exams </td>
                         <td>S.S. Senevirathne, G.U.D. Fernando, J.B. White, S.T.H. Divyanjala, Udara Srimath S.Samaratunge Arachchillage, D.P.N.P. Dias</td>
                       </tr>
                       
                   </table>
                   </font>
<GoTop scrollStepInPx="50" delayInMs="16.66" /> </div>
                    </div>
                </div>

              
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Register;