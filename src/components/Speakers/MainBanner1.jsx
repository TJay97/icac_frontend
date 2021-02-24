import React from 'react';
import { Link } from 'react-router-dom';

class MainBanner extends React.Component {
    
    render(){
        return (
            <div className="page-title-area my-bg2">
                <div className="container">
                    <h1>Technical Program Committee</h1>
                    <span></span>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#tcp">Committee</a></li>
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