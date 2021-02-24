import React from 'react';
import { Link } from 'react-router-dom';

class MainBanner extends React.Component {
    
    render(){
        return (
            <div className="page-title-area my-bg2">
                <div className="container">
                    <h1>Organizing Committee</h1>
                    <span>One Team, One Dream</span>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#com">Committee</a></li>
                    </ul>
                    <br/>
                        
                </div>
            </div>
        );
    }
}
 
export default MainBanner;