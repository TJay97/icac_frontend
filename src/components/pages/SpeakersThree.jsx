import React from 'react';
import Past from '../Speakers/Past';
import Footer from '../Common/Footer';
 
class SpeakersThree extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <React.Fragment>
                <Past />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default SpeakersThree;