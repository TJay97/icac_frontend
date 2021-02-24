import React from 'react';
import { Link } from 'react-router-dom';

class MainBanner extends React.Component {
    render(){
        return (
            <div className="page-title-area item-bg2">
                <div className="container">
                    <h1>Important Dates</h1>
                    <span></span>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#p">Dates</a></li>

                    </ul>
                    <br/>
                        <br/>
                        
                        <br/>
                        .
                </div>
            </div>
        );
    }
}
 
export default MainBanner;