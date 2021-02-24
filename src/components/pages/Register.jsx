import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import Footer from '../Common/Footer';
 
class Register extends React.Component {
    submitHandler = (e) => {
        e.preventDefault();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <React.Fragment>
                <div className="page-title-area1 regbg">
                    <div className="container">
                    <div class="notfound">
                        <div class="notfound-404">
                            <h1>Registrations</h1>
                        </div>
                        </div>
                     

                        <h5 className="text-white">Registration Closed!</h5>   
                        {/* <ul>
                        
                            <li><a href="#reg">  <i className="icofont-notification"></i> Click here to view revised fees and guidelines</a></li>
                        </ul> */}
                       
                        <br/>
                        {/* <h3 className="m-auto">
  <a href="https://icac.lk/registration"  className="btn btn-primary ">
                 Register
               <i className="icofont-double-right"></i>
            </a></h3> */}
    <br/>

                    </div>
                </div>

                <section className="faq-area">
                    <div className="container">
                    <div className="row about-boxes">

<div id="reg" className="col-lg-8 col-md-10 col-sm-112 offset-lg-2 offset-md-1  ">
    <div className="media flex-column text-left">
    <h2 className="m-auto"><br/> <font color="#efa506">Guidelines</font></h2>
    <br/>
<ul>
<li> <h6>Deposit or transfer the registration fee online to the account below.</h6></li>
<ul>
   <li><h6>NOTE: Refrain from depositing funds via CDM/CRM Machines.</h6></li>
   <li><h6>State as "ICAC 2020 registration for the |paper ID| |NIC|" as the payment reference in the deposit slip.</h6></li>
    <li><h6>Account name: Sri Lanka Institute of Information Technology (Gte) Ltd.</h6></li>
    <li><h6>Bank: Sampath Bank</h6></li>
    <li><h6>Account Number: 003910003002</h6></li>
    <li><h6>Branch: Malabe</h6></li>
    <li><h6>Bank Swift Code: BSAMLKLX</h6></li>
</ul>
<li><h6>Fill the registration form to register yourself to the conference.</h6></li>
<li><h6>Upload a photo of the bank slip or the fund transfer receipt. </h6></li>
<li> <h6>You can also choose the 'online payment' option in the registration form to pay the fees online via the ICAC Online Payment Gateway</h6></li>
<li><h6>For more information, please contact info@icac.lk.</h6></li>
</ul>  

   
                                        
    </div>
    </div>
            
</div>
                   
                    <img src="https://icac.lk/temp/reg.jpg" className="about-img1" alt="about" />
                    
                        </div>
                      
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Register;