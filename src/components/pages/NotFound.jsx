import React from 'react';
import { Link } from 'react-router-dom';
 
class NotFound extends React.Component {
    render(){
        return (
            <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                    <h3><span>Best Papers</span></h3>
                        <h1>To<span>Be</span><b>Updated</b>!</h1>
                        {/* <h3>Program</h3> */}
                        <br/>  <br/>  <br/>
                        {/* <p>This Page is under construction</p> */}
                        <Link 
                            to="/" 
                            className="btn btn-primary"
                        >
                            Return Home page
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default NotFound;