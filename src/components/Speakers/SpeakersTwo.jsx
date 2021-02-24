import React from 'react';
 
class SpeakersTwo extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <section className="speakers-area ptb-120">
            <div className="text-center">
					<h3>	<a href="https://www.srilanka.travel/" className="primary-btn w-50" target="_blank" rel="noopener noreferrer">Explore More >>></a></h3>
					</div>
            </section>
        );
    }
}
 
export default SpeakersTwo;