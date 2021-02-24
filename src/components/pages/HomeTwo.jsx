import React from 'react'
import lax from 'lax.js';
import MainBanner from '../HomeTwo/MainBanner';
import About from '../HomeTwo/About';
import WhyUs from '../Common/WhyUs';
import Speakers from '../HomeTwo/Speakers';
import EventSchedules from '../HomeTwo/EventSchedules';
import Partner from '../Common/Partner';
import Footer from '../Common/Footer';
import GoTop from '../Shared/GoTop';
 
class HomeTwo extends React.Component {
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
            <React.Fragment>
                <MainBanner />
                <About />
                <EventSchedules />
                <WhyUs />
                {/* <Speakers />
                <Partner /> */}
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default HomeTwo;