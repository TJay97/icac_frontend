import React from 'react';
//import { Link } from 'react-router-dom';
// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemHeading,
//     AccordionItemButton,
//     AccordionItemPanel,
// } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Footer from '../Common/Footer';
 
class Author extends React.Component {
    submitHandler = (e) => {
        e.preventDefault();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render(){
        return (
            <React.Fragment>
                <div className="page-title-area my-bg1">
                    <div className="container">
                    
                        <h1>Guidelines For Authors</h1>
                        
                       
                        <div className="col-lg-10 offset-1"><span>The papers submitted should be formatted in accordance to the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE conference template.</a> The submission of papers should be done through the <a href="https://cmt3.research.microsoft.com/2ndICAC2020" target="_blank" rel="noopener noreferrer">Microsoft Conference Management Tool.</a>
                            The papers submitted to the conference will be subjected to double blind reviews by at least two reviewers, who will be experts in the respective sub-field.
                            Selection of the papers will be done based on relevance, contribution, originality, technical soundness and the overall quality of the paper.
                            Upon selection of the paper, at least one author is expected to register for the conference and present the paper. Only papers that have been presented by their authors during the conference will be published in the IEEE Proceedings which will be available in IEEE Xplore digital library, provided that they meet the IEEE quality review standards.</span>
                            {/* <a href="#" className="btn btn-primary8" target="_blank" rel="noopener noreferrer">Paper submission deadline has passed!</a> */}
                        </div>
                        
                    </div>
                </div>

                <section className="faq-area">
                    <div className="container">
                        <div className="faq-accordion">
                       
                        <h6>   
                        <b>Guidelines </b><br/>  </h6>             
                <br/>• All papers should be written in English 
                <br/>• Maximum length of a paper is limited to 6 printed A4 pages in given format. 
                <br/>• Use the following template while preparing full papers:
                <br/><br/>IEEE Template <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">(https://www.ieee.org/conferences/publishing/templates.html)</a>
                <br/><br/><b>Important </b><br/><br/>
              <ul>
                <li>Do NOT include any authors’ information such as name, affiliations, e-mail, etc. in the initial manuscript. </li>
                <li>Do NOT include any grant information or personal acknowledgements in the initial manuscript.</li>

                <li>Use the following guidelines while submitting full papers: </li>
                <li> All paper submissions are through <a href="https://cmt3.research.microsoft.com/2ndICAC2020" target="_blank" rel="noopener noreferrer">CMT</a>.
                    <ul>
                    <li> Please note that 1st time users need to create a new CMT account.</li>
                    <li> Please use your institutional e-mail address while registering.</li>
                    </ul>
                    </li>
                <li> While submitting a paper selected the most appropriate Track for your paper. </li>
                <li> Authors should to carefully revise the manuscript for language and formatting. </li>
                <li> All submitted manuscript will undergo a plagiarism check using a suitable tool. </li>
                <li>Please contact us, if you have any questions regarding your submission or experience any issues while submitting your manuscript.</li>

                </ul>        
               
                   <h6>
                   <a href="../../assets/cvpr2020AuthorKit.tar" download>
                   <b>LaTeX/Word Templates (tar)<i className="pe-7s-download"></i></b> </a>
                   
                  <br />
                   <a href="../../assets/cvpr2020AuthorKit.zip" download>
                   <b>LaTeX/Word Templates (zip)<i className="pe-7s-download" ></i></b> </a>
                   
                   </h6>
                   {/* <div className="text-center">
                      <a href="#" className="btn btn-primary8 " target="_blank" rel="noopener noreferrer">Paper submission deadline has passed!</a>
                      </div> */}
                   	
                        </div>
                       
                        </div>

                      
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Author;