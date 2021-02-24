import React from 'react';
import { Link } from 'react-router-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Footer from '../Common/Footer';
 
class Travel extends React.Component {
    submitHandler = (e) => {
        e.preventDefault();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <React.Fragment>
                <div className="page-title-area item-bg1">
                    <div className="container">
                    
                        <h1>Travel Information</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#tra">Travel Info</a></li>
                        </ul>
                       
                    </div>
                </div>

                <section className="faq-area">
                    <div id="tra" className="container">
                    <div  className="text-center">
                    <h1>Conference Venue</h1>
                <iframe width="100%" height="50%" frameborder="0" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467112146!2d79.97075581426778!3d6.914682820411594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1588749458703!5m2!1sen!2slk" allowfullscreen></iframe>
                </div>
                    <div className="faq-accordion">
                            <Accordion>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                           Visa ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        For information regarding entry visa please visit immigration.gov.lk Those who require a letter of invitation for Visa purposes, please contact ICAC conference secretariat through info@icac.lk.
                                        <br/> SL Electronic Travel Authorization Portal : <a href="http://www.eta.gov.lk/slvisa/" target="_blank" rel="noopener noreferrer">http://www.eta.gov.lk/slvisa/</a>
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Insurance ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        The participants are advice to make their own arrangements for travel/health insurance etc.  </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Health Care ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        National Hospital, Colombo +94 112 691 111 <br />
Dr Neville Fernando Hospital +94 112 407 600 </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                          Transport Information ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        Uber is available in Sri Lanka, click <a href="https://www.uber.com/lk/en/" target="_blank" rel="noopener noreferrer">here</a> for more information to download Uber 
 <br/>
  Pickme is another Sri Lankan taxi service, click <a href="https://pickme.lk/download" target="_blank" rel="noopener noreferrer">here</a> for more information to download Pickme 
 
 <br/>
 CMB Taxi : Online Booking service allows you to book a taxi in advance making your trips less stressful. click <a href="https://cmbairporttaxi.com/" target="_blank" rel="noopener noreferrer">here</a>  for more information.
 </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Arrival and Departure to/from Sri Lanka ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                        Major airport of the country is Bandaranaike International Airport located in Katunayake, Sri Lanka. Visit BIA (link-> https://www.airport.lk) for more details.
<br/>Distance from Airport to SLIIT, Malabe - 40 km
<br/>Airport is accessible by both public transport and taxi services are available. </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Emergency ?

                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                           
                                        Emergency contact numbers:
                                        <ul> 
                                        <li> Police Emergency Hotline:	118 / 119</li>
                                        <li> Ambulance / Fire & rescue: 110</li>
                                        <li> Accident Service-General Hospital-Colombo: 011-2691111</li>
                                        <li> Tourist Police: 011-2421052</li>
                                        <li> Police Emergency: 011-2433333</li>
                                        <li> Government Information Center: 1919</li>
                                        <li>Report Crimes: 011-2691500</li>
                                        <li>Emergency Police Mobile Squad: 011-5717171</li>
                                        <li>Fire & Ambulance Service: 011-2422222</li>
                                        </ul></p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Currency Exchange ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
The main currency used within Sri Lanka is Sri Lankan Rupees (LKR). Foreign currency exchange centers can be found at airports, most hotels and large shopping centers. Visa, Master card and American Express are accepted in many Department stores and hotels. Banks are opened during week days from 8.30 a.m. to 3.00 p.m. and some banks are opened on Saturdays. </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Electronic compatibility ?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>220V, 50Hz.</p>
                                         </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>
                        </div>

                      
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Travel;