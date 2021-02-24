import React from 'react'
import MainBanner1 from '../Speakers/MainBanner1';
import TCP1 from '../Speakers/TCP';
import Footer from '../Common/Footer';
import GoTop from '../Shared/GoTop';
class TCP extends React.Component {
    render(){
        return (
            <React.Fragment>
                <MainBanner1 />
                <TCP1 />
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </React.Fragment>
            
        );
    }
}
 
export default TCP;