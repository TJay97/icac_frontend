import React from 'react'
import MainBanner from '../Speakers/MainBanner';
import Speakers from '../Speakers/SpeakersOne';
import Footer from '../Common/Footer';
 import GoTop from '../Shared/GoTop';
class SpeakersOne extends React.Component {
    
    
    render(){
        return (
            <React.Fragment>
                <MainBanner />
                <Speakers />
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
        );
    }
}
 
export default SpeakersOne;