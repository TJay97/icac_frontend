import React, {Component} from 'react';
import {Row,Form,Button, Col,Card,Table, Overlay,Modal, ProgressBar} from 'react-bootstrap';
import Aux from "react-aux";
import MainBanner from '../schedule/MainBannerReg';
import Footer from '../Common/Footer';
import axios from "axios";
import FormData from 'form-data';

class regTest extends Component{
    constructor(props){
        super(props);
        this.state={
            type: null,
            title: null,
            name: null,
            affilation: null,
            studentship: null,
            email: null,
            nic: null,
            ieee: null,
            ieee_id: null,
            paper_id: null,
            paper_title: null,
            authors: null,
            locality: null,
            food: null,
            reg_option: null,
            workshop: null,
            bankslip: null,
            ppStatus: false,
            IeeeStatus: false,
            workshopStatus: false,   
            pictures: null,
            show: false,
            bankslipStatus: false,
            onlinePaymentStatus: false,
            registrationSuccess: false,
            registrationFailled: false,
            emailError: '',
            bankslipError: '',
            nameError: '',
            opID : null,
            amount: null,
            PassAmount: null,
            enableRegBtn: false,
            isOne : false,
            isTwo : false,
            isThree : false,
            isFour : false,
            isFive : false,
            selectOnly : null,
            selectedValue : '',
            Uploadedprecentage: 0,
            msg: null,
            dataSavingStatus: false,
	        day: null,
            participantStatus: false,
            pppStatus1: false,
            pppStatus2: false
        };
    }

    componentDidMount(){
        axios.get('https://sheltered-atoll-93439.herokuapp.com/', {
        }).then(function(response){
                console.log(response.data);
        }).catch(function(error){
            console.log(error);
        });
    }

    handleInputChangeType = (event) => {
        console.log(event.target.value)
        this.setState({type:event.target.value})

        if(event.target.value == 'Paper Presenter'){
            this.setState({ppStatus:true});
            this.setState({pppStatus1:true});
            this.setState({pppStatus2:false});
        }
        if(event.target.value == 'Participant/Workshop Attendee'){
            this.setState({ppStatus:false});
            this.setState({pppStatus2:true});
            this.setState({pppStatus1:false});
        }
    }

    handleInputChangeTitle = (event) => {
        this.setState({title:event.target.value})
    }

    handleInputChangeName = (event) => {
        console.log(event.target.value)
        this.setState({name:event.target.value})
    }

    handleInputChangeAffilation = (event) => {
        console.log(event.target.value)
        this.setState({affilation:event.target.value})
    }

    handleInputChangeStudentship = (event) => {
        console.log(event.target.value)
        this.setState({studentship:event.target.value})
    }

    handleInputChangeEmail = (event) => {
        console.log(event.target.value)
        this.setState({email:event.target.value})
    }

    handleInputChangeNIC = (event) => {
        console.log(event.target.value)
        this.setState({nic:event.target.value})
    }

    handleInputChangeIeee = (event) => {
        console.log(event.target.value)
        this.setState({ieee:event.target.value})

        if(event.target.value == 'Yes'){
            this.setState({IeeeStatus:true})
        }
        if(event.target.value == 'No'){
            this.setState({IeeeStatus:false})
        }
    }

    handleInputChangeIeeID = (event) => {
        console.log(event.target.value)
        this.setState({ieee_id:event.target.value})
    }

    handleInputChangePaper_id = async event => {
        console.log(event.target.value)
        this.setState({paper_id:event.target.value})
        var pprId = event.target.value;


        await axios.post('https://sheltered-atoll-93439.herokuapp.com/getPaperInfo', {
                            paper_id: pprId
            }).then((response) => {
                    this.setState({paper_title: response.data[0]});
                    this.setState({authors:response.data[1]})        
            }, (error) => {
                    console.log(error);
            });
    }

    handleInputChangePaperTitle = (event) => {
        console.log(event.target.value)
        this.setState({paper_title:event.target.value})
    }

    handleInputChangeAuthors = (event) => {
        console.log(event.target.value)
        this.setState({authors:event.target.value})
    }

    handleInputChangeLocality = (event) => {
        console.log(event.target.value)
        this.setState({locality:event.target.value})
    }

    handleInputChangeFood = (event) => {
        console.log(event.target.value)
        this.setState({food:event.target.value})
    }
    handleInputChangeReg_option = (event) => {
        console.log(event.target.value)
        this.setState({reg_option:event.target.value})
        var amount;
        if(event.target.value == 'Workshop/Tutorial Only - Two-day Pass'){
            this.setState({workshopStatus:true});
            this.setState({amount:'3 000 LKR'});
            this.setState({participantStatus:false});
            this.setState({PassAmount:'5'});
            this.setState({selectOnly:'Two'});
        }
        else if(event.target.value == 'Workshop/Tutorial Only - One-day Pass'){
            this.setState({workshopStatus:true});
            this.setState({amount:'2 000 LKR'});
            this.setState({participantStatus:false});
            this.setState({PassAmount:'6'});;
            this.setState({selectOnly:'One'});
        }
        else if(event.target.value == 'Participant -One-day Pass'){
            this.setState({participantStatus:true});
            this.setState({workshopStatus:false});
            this.setState({participantStatus:true});
            this.setState({amount:'1 000 LKR'});
            this.setState({PassAmount:'4'});
        }
        else if(event.target.value == 'Author - Student'){
            this.setState({workshopStatus:false});
            this.setState({amount:'18 000 LKR'});
            this.setState({participantStatus:false});
            this.setState({PassAmount:'3'});
        }
        else if(event.target.value == 'Author - Non-student, Non-IEEE Member'){
            this.setState({workshopStatus:false});
            this.setState({amount:'26 500 LKR'});
            this.setState({participantStatus:false});
            this.setState({PassAmount:'1'});
        }
        else if(event.target.value == 'Author - Non-student, IEEE Member'){
            this.setState({workshopStatus:false});
            this.setState({amount:'21 500 LKR'});
            this.setState({participantStatus:false});
            this.setState({PassAmount:'2'});
        }
        else if(event.target.value == 'Participant -Two-day Pass'){
            this.setState({workshopStatus:false});
            this.setState({amount:'2 000 LKR'});
            this.setState({participantStatus:false});
            this.setState({PassAmount:'7'});
        }
    }
    handleInputChangeWorkshop = (event) => {
        console.log(event.target.value)
        this.setState({workshop:event.target.value})
    }

    handleInputChangeDay = (event) => {
        console.log(event.target.value)
        this.setState({day:event.target.value})
    }

    handleInputChangeBankslip = (event) => {
        console.log(event.target.value)
        this.setState({bankslip:event.target.value})
    }

    handleInputPayment = (event) => {
        console.log(event.target.value)
        if(event.target.value == 'ub'){
            this.setState({bankslipStatus:true});
            this.setState({onlinePaymentStatus:false});
            this.setState({selectedValue: event.target.value});
        }
        if(event.target.value == 'op'){
            this.setState({bankslipStatus:false})
            let today = new Date();
            let date = (''+today.getFullYear()) + (''+today.getMonth()) + (''+today.getDate())+ (''+today.getHours()) + (''+today.getMinutes())+ (''+today.getSeconds());

            this.setState({opID:date});
            this.setState({onlinePaymentStatus:true});
            this.setState({selectedValue: event.target.value});

            // let enable = false;

            // if(!this.state.name || !this.state.affilation || !this.state.type || !this.state.title || !this.state.studentship || !this.state.nic ||
            //     !this.state.ieee || !this.state.locality || !this.state.reg_option || !this.state.email){
            //     enable = true
            // }

            // this.setState({enableRegBtn: enable});

            // if (enable){
            //     alert("All fields must be filled");
            //     this.setState({selectedValue : ''});
            // }

            // console.log(this.state.type);
            // console.log(this.state.name)
            // console.log(this.state.email)
        }
    }

    handleNewImage = async event => {
        const files  = event.target.files
        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'bankslips');
        const options = {
            method: 'POST',
            body: formData,
        };

        const progress = {
            onUploadProgress: (progressEvent) => {
                const {loaded, total} = progressEvent;
                let percent = Math.floor( (loaded * 100) / total );
                //console.log( `${loaded}kb of ${total}kb | ${percent}%`);
                 
                if (percent < 100){
                    this.setState({Uploadedprecentage:percent});
                }
            }
        };

        let currentComponent = this;

        axios.post('https://api.cloudinary.com/v1_1/hhcflohky/image/upload', formData, progress)
        .then((res) => {
            console.log(res.data.url);
            this.setState({bankslip: res.data.url});
            this.setState({Uploadedprecentage:100}, () => {
                setTimeout(() => {
                    this.setState({Uploadedprecentage:0});
                },1000)
            });
        }).catch(err => console.log(err));
    }

    validate = () => {
        let emailError = "";
        let bankslipError = "";
        let nameError = "";

        if(!this.state.email || !this.state.email.includes("@")){
            emailError = "Invalid Email"
        }
        if(!this.state.name || !this.state.type || !this.state.title || 
            !this.state.reg_option || this.state.selectedValue == ''){
            nameError = "can't be empty"
        }
        if(!this.state.bankslip && this.state.bankslipStatus == true){
            bankslipError = "You haven't uploaded the bankslip"
        }

        if (bankslipError || emailError || nameError){
            this.setState({bankslipError, emailError, nameError});
            return false;
        }
        return true;

    }

    validateOp = () => {
        let emailError = "";
        let nameError = "";

        if(!this.state.email || !this.state.email.includes("@")){
            emailError = "Invalid Email"
        }
        if(!this.state.name || !this.state.type || !this.state.title||
           !this.state.reg_option || this.state.selectedValue == ''){
            nameError = "can't be empty"
        }

        if (emailError || nameError){
            this.setState({emailError, nameError});
            return false;
        }
        return true;

    }

    selectedWorkshop = event => {
        this.setState({[event.target.name]: event.target.checked});
    }

    getWorkshop = () => {
        this.state.workshop = '';

        if(this.state.isOne){
            this.state.workshop = this.state.workshop + '| Security and Privacy of 5G and Beyond 5G Networks';
        }
        if(this.state.isTwo){
            this.state.workshop = this.state.workshop + '| Deep earning Applications and Assistive Humanitarian Devices';
        }
        if(this.state.isThree){
            this.state.workshop = this.state.workshop + '| Word Embedding: From word2Vec to StarSpace';
        }
        if(this.state.isFour){
            this.state.workshop = this.state.workshop + '| Towards inter-disciplinary Computing Applications with Nanotechnology';       
        }
    }

    async handleData(){
        
        const isValid = this.validate();
        let paymentType = 'mp';

        if(this.state.selectOnly=='Two'){this.getWorkshop();}

        if (isValid) {
            var myData = [this.state.type,this.state.title,this.state.name,this.state.affilation,
                        this.state.studentship,this.state.email, this.state.nic, this.state.ieee,
                        this.state.ieee_id, this.state.paper_id, this.state.paper_title, this.state.authors, this.state.locality,
                        this.state.food,this.state.reg_option, this.state.workshop, this.state.bankslip, paymentType, this.state.opID, this.state.amount, this.state.day]
        
            let currentComponent = this;    
            console.log(myData)
            console.log('Here'); 
            await axios.post('https://sheltered-atoll-93439.herokuapp.com/insertData', {
                            type: myData[0],
                            title: myData[1],
                            name: myData[2],
                            affilation: myData[3],
                            studentship: myData[4],
                            email: myData[5],
                            nic: myData[6],
                            ieee: myData[7],
                            ieee_id: myData[8],
                            paper_id: myData[9],
                            paper_title: myData[10],
                            authors: myData[11],
                            locality: myData[12],
                            food: myData[13],
                            reg_option: myData[14],
                            workshop: myData[15],
                            bankslip: myData[16],
                            paymentType: myData[17],
                            tempID: myData[18],
                            amount: myData[19],
			    day: myData[20]
            }).then((response) => {
                    console.log(response.data);
                    this.setState({registrationSuccess: true})
                    this.setState({registrationFailled: false})
                    this.setState({msg: 'Successfully Registered ! A Confirmation email has been sent to the email provided. Please check in your spam/junk folder.'})
                    this.setState({dataSavingStatus: true})
                    this.setState({show:!this.state.show})  
                    console.log(this.state.msg);        
            }, (error) => {
                    console.log(error);
                    this.setState({registrationFailled: true});
                    this.setState({registrationSuccess: false});
                    this.setState({bankslipStatus: false});
                    this.setState({selectedValue : ''});
                    this.setState({msg:'Registration Failled! Try Again.'});
                    this.setState({dataSavingStatus: false})
                    this.setState({show:!this.state.show})
                    console.log(this.state.msg); 
            });
        }
       
    }

    async handleDataOp(){
        
        const isValid = this.validateOp();
        let paymentType = 'op';

        if(this.state.selectOnly=='Two'){this.getWorkshop();}

        if (isValid) {
            var myData = [this.state.type,this.state.title,this.state.name,this.state.affilation,
                        this.state.studentship,this.state.email, this.state.nic, this.state.ieee,
                        this.state.ieee_id, this.state.paper_id, this.state.paper_title, this.state.authors, this.state.locality,
                        this.state.food,this.state.reg_option, this.state.workshop, this.state.bankslip, paymentType, this.state.opID, this.state.amount, this.state.day]
        
            let currentComponent = this;    
            console.log(myData)
     
            await axios.post('https://sheltered-atoll-93439.herokuapp.com/insertData', {
                            type: myData[0],
                            title: myData[1],
                            name: myData[2],
                            affilation: myData[3],
                            studentship: myData[4],
                            email: myData[5],
                            nic: myData[6],
                            ieee: myData[7],
                            ieee_id: myData[8],
                            paper_id: myData[9],
                            paper_title: myData[10],
                            authors: myData[11],
                            locality: myData[12],
                            food: myData[13],
                            reg_option: myData[14],
                            workshop: myData[15],
                            bankslip: myData[16],
                            paymentType: myData[17],
                            tempID: myData[18],
                            amount: myData[19],
			    day: myData[20]
            }).then((response) => {
                    console.log(response.data);
                    this.setState({msg:'Successfully Saved ! Procceed to Online Payment to Complete the Registration.'});
                    this.setState({show:!this.state.show});
                    this.setState({enableRegBtn:true}); 
                    console.log(this.state.msg);       
            }, (error) => {
                    console.log(error);
                    this.setState({msg:'Details Saving Failed. Please Try Again.'});
                    this.setState({show:!this.state.show})
                    console.log(this.state.msg); 
            });
        }
       
    }

    
    CloseModal(){
        this.setState({show:!this.state.show})

        if(this.state.registrationSuccess == true){
            this.props.history.push('/');
        }

        document.getElementById("type").value = "--Select the Type--";
        document.getElementById("title").value = "--Select the Title--";
        document.getElementById("name").value = "";
        // document.getElementById("Affilation").value = "";
        // document.getElementById("Studentship").value = "--Select the Status--";
        document.getElementById("Email").value = "";
        // document.getElementById("IEEEMember").value = "--Select the Status--";
        // document.getElementById("nic").value = "";
       // document.getElementById("ppTitle").value = "";
       // document.getElementById("author").value = "";
        // document.getElementById("Locality").value = "--Select the Locality--";
       // document.getElementById("RegFee").value = "";
        document.getElementById("RegOption").value = "--Select the Registration Option";
      //  document.getElementById("wrksp").value = "";
       // document.getElementById("workshop_one").value = "";
        
        if(this.state.affilation!=null){
            document.getElementById("Affilation").value = "";
        }
        if(this.state.studentship!=null){
            document.getElementById("Studentship").value = "--Select the Status--";
        }
        if(this.state.ieee!=null){
            document.getElementById("IEEEMember").value = "--Select the Status--";
        }
        if(this.state.nic!=null){
            document.getElementById("nic").value = "";
        }
        if(this.state.locality!=null){
            document.getElementById("Locality").value = "--Select the Locality--";
        }
        if(this.state.workshopStatus){
            this.setState({workshopStatus:false});
        }
        if(this.state.ppStatus){
            this.setState({ppStatus:false});
        }
        if(this.state.IeeeStatus){
            this.setState({IeeeStatus:false});
        }
	    if(this.state.participantStatus){
            this.setState({participantStatus:false});
        }
        if(this.state.pppStatus1){
            this.setState({pppStatus1:false});
         }
        if(this.state.pppStatus2){
            this.setState({pppStatus2:false});
         }

    }

    render (){
        return (
            <Aux>
                <MainBanner />
                <div id="reg" className="col-lg-4 col-md-6 col-sm-6 offset-lg-4 offset-md-3 ">
                <div className="flex-column text-left">
                <Row>
                    <Col>
                    <Card>
                    <Card.Body>
                <Col md={12}>
               
                <Form className="f1">
                   
                    <Form.Group controlId="type">
                        <Form.Label>Type</Form.Label><span style={{color:"red"}}>*</span>
                        <Form.Control as="select" onChange={this.handleInputChangeType}>
                                    <option selected disabled>--Select the Type--</option>
                                    <option>Participant/Workshop Attendee</option>
                                    <option>Paper Presenter</option>
                                </Form.Control>
                                {
                                this.state.type == null && this.state.nameError != ''?
                                <div style={{fontSize:12, color: 'red'}}>Type {this.state.nameError}</div>
                                :null}
                    </Form.Group>  

                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label><span style={{color:"red"}}>*</span>
                        <Form.Control as="select" onChange={this.handleInputChangeTitle}>
                                    <option selected disabled>--Select the Title--</option>
                                    <option>Mr</option>
                                    <option>Ms</option>
                                    <option>Dr</option>
                                    <option>Rev</option>
                                </Form.Control>
                                {
                                this.state.title == null && this.state.nameError != ''?
                                <div style={{fontSize:12, color: 'red'}}>Title {this.state.nameError}</div>
                                :null}
                    </Form.Group> 

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label><span style={{color:"red"}}>*</span>
                            <Form.Control type="text" placeholder="<First Name> <Last Name>" onChange={this.handleInputChangeName}/>
                            {
                                this.state.name == null && this.state.nameError != ''?
                                <div style={{fontSize:12, color: 'red'}}>Name {this.state.nameError}</div>
                                :null}
                    </Form.Group>       

                    {
                    this.state.pppStatus1 && !this.state.pppStatus2?
                    <Form.Group controlId="Affilation">
                        <Form.Label>Affiliated university</Form.Label><span style={{color:"red"}}>*</span>
                            <Form.Control type="text" placeholder="Enter Affiliation" onChange={this.handleInputChangeAffilation}/>
                            {
                                this.state.affilation == null && this.state.nameError != ''?
                                <div style={{fontSize:12, color: 'red'}}>Affilation {this.state.nameError}</div>
                                :null}
                    </Form.Group>   
                    :null
                    }

                    {
                    this.state.pppStatus1 && !this.state.pppStatus2?
                    <Form.Group controlId="Studentship">
                        <Form.Label>Are you a student</Form.Label><span style={{color:"red"}}>*</span>
                            <Form.Control as="select" onChange={this.handleInputChangeStudentship}>
                                    <option selected disabled>--Select the Status--</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Form.Control>
                                {
                                this.state.studentship == null && this.state.nameError != ''?
                                <div style={{fontSize:12, color: 'red'}}>Studentship {this.state.nameError}</div>
                                :null}
                    </Form.Group>   
                    :null
                    }
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label><span style={{color:"red"}}>*</span>
                            <Form.Control type="text" placeholder="Enter Email" onChange={this.handleInputChangeEmail}/>
                            {
                                this.state.email == null && this.state.nameError != ''?
                            <div style={{fontSize:12, color: 'red'}}>{this.state.emailError}</div>
                                :null}
                    </Form.Group>  

                    {
                    this.state.pppStatus1 && !this.state.pppStatus2?
                    <Form.Group controlId="nic">
                        <Form.Label>NIC/Passport</Form.Label><span style={{color:"red"}}>*</span>
                            <Form.Control type="text" placeholder="Enter NIC" onChange={this.handleInputChangeNIC} />
                            {
                                this.state.nic == null && this.state.nameError != ''?
                                <div style={{fontSize:12, color: 'red'}}>This Field {this.state.nameError}</div>
                                :null}
                    </Form.Group>  
                     :null
                    }

                    {
                    this.state.pppStatus1 && !this.state.pppStatus2?
                    <Form.Group controlId="IEEEMember">
                        <Form.Label>Are you an IEEE Member</Form.Label><span style={{color:"red"}}>*</span>
                            <Form.Control as="select" onChange={this.handleInputChangeIeee}>
                                    <option selected disabled>--Select the status--</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Form.Control>
                                {
                                this.state.ieee == null && this.state.nameError != ''?
                                <div style={{fontSize:12, color: 'red'}}>This Field {this.state.nameError}</div>
                                :null}
                    </Form.Group>
                    :null
                    }

                    {
                    this.state.IeeeStatus?

                    <Form.Group controlId="IEEEMID">
                        <Form.Label>IEEE Member ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter IEEE Member ID" onChange={this.handleInputChangeIeeID} />
                    </Form.Group> 
                    :null
                    }

                    { 
                    this.state.ppStatus?

                    <Form.Group controlId="PaperID">
                            <Form.Label>Paper ID</Form.Label>
                            <Form.Control type="text" values={this.state.Ids} onChange={this.handleInputChangePaper_id} />
                        </Form.Group> 
                    :null 
                    }

                    { 
                    this.state.ppStatus?
                        <Form.Group controlId="ppTitle">
                            <Form.Label>Paper Title</Form.Label>
                            <Form.Control type="Name" placeholder="Invalid Paper ID" name="ieee" value={this.state.paper_title} readOnly/>
                        </Form.Group>  
                        
                    :null
                    }

                    { 
                    this.state.ppStatus?
                        <Form.Group controlId="author">
                            <Form.Label>Authors</Form.Label>
                            <Form.Control type="Name" placeholder="Invalid Paper ID" name="ieeeId" value={this.state.authors} readOnly/>
                        </Form.Group>  
                    :null
                    }

                    {
                    this.state.pppStatus1 && !this.state.pppStatus2?
                        <Form.Group controlId="Locality">
                            <Form.Label>Locality</Form.Label><span style={{color:"red"}}>*</span>
                                <Form.Control as="select" onChange={this.handleInputChangeLocality}>
                                    <option selected disabled>--Select the Locality--</option>
                                    <option>Local</option>
                                    <option>Foreign</option>
                            </Form.Control>
                            {
                                this.state.locality == null && this.state.nameError != ''?
                                <div style={{fontSize:12, color: 'red'}}>Locality {this.state.nameError}</div>
                                :null}
                        </Form.Group>  
                    :null
                    }
                        {/* <Form.Group controlId="FoodPreference">
                            <Form.Label>Food Preference</Form.Label><span style={{color:"red"}}>*</span>
                            <Form.Control as="select" onChange={this.handleInputChangeFood}>
                                    <option selected disabled>--Select the Food Preference--</option>
                                    <option>Veg</option>
                                    <option>Non-veg [Chicken/Fish]</option>
                            </Form.Control>
                        </Form.Group>     */}

                { 
                    this.state.pppStatus1 && !this.state.pppStatus2?
                        <Form.Group controlId="RegOption">
                        <Form.Label>Registration Options</Form.Label><span style={{color:"red"}}>*</span>
                            <Form.Control as="select" onChange={this.handleInputChangeReg_option}>
                                    <option selected disabled>--Select the Registration Option--</option>
                                    <option>Author - Non-student, Non-IEEE Member</option>
                                    <option>Author - Non-student, IEEE Member</option>
                                    <option>Author - Student</option>
                                </Form.Control>
                                {
                                this.state.regOptionError != ''?
                                <div style={{fontSize:12, color: 'red'}}>{this.state.regOptionError}</div>
                                :null}
                        </Form.Group>  
                        :null}


                    { 
                    !this.state.pppStatus1 && this.state.pppStatus2?
                        <Form.Group controlId="RegOption">
                        <Form.Label>Registration Options</Form.Label><span style={{color:"red"}}>*</span>
                            <Form.Control as="select" onChange={this.handleInputChangeReg_option}>
                                    <option selected disabled>--Select the Registration Option--</option>
                                    <option>Participant -One-day Pass</option>
                                    <option>Participant -Two-day Pass</option>
                                    <option>Workshop/Tutorial Only - Two-day Pass</option>
                                    <option>Workshop/Tutorial Only - One-day Pass</option>
                                </Form.Control>
                                {
                                this.state.regOptionError != ''?
                                <div style={{fontSize:12, color: 'red'}}>{this.state.regOptionError}</div>
                                :null}
                        </Form.Group>  
                        :null}

                        
                    { 
                    this.state.pppStatus2 && this.state.workshopStatus && this.state.selectOnly=='Two'?
                        <Form.Group controlId="wrksp">
                        <Form.Label>Workshop</Form.Label><span style={{color:"red"}}>*Select Only {this.state.selectOnly}</span><br/><br/>
                        <label><input type="checkbox" checked={this.isOne} name="isOne" onChange={this.selectedWorkshop}></input> Security and Privacy of 5G and Beyond 5G Networks</label><br/>
                        <label><input type="checkbox" checked={this.isTwo} name="isTwo" onChange={this.selectedWorkshop}></input> Deep earning Applications and Assistive Humanitarian Devices</label><br/>
                        <label><input type="checkbox" checked={this.isThree} name="isThree" onChange={this.selectedWorkshop}></input> Word Embedding: From word2Vec to StarSpace</label><br/>
                        <label><input type="checkbox" checked={this.isFour} name="isFour" onChange={this.selectedWorkshop}></input> Towards inter-disciplinary Computing Applications with Nanotechnology</label><br/>                   
                        </Form.Group>  
                    :null
                    }

                    { 
                    this.state.pppStatus2 && this.state.workshopStatus && this.state.selectOnly=='One'?
                    <Form.Group controlId="workshop_one">
                    <Form.Label>Workshop</Form.Label><span style={{color:"red"}}>*</span>
                        <Form.Control as="select" onChange={this.handleInputChangeWorkshop}>
                                    <option selected disabled>--Select the Workshop--</option>
                                    <option>Security and Privacy of 5G and Beyond 5G Networks</option>
                                    <option>Deep earning Applications and Assistive Humanitarian Devices</option>
                                    <option>Word Embedding: From word2Vec to StarSpace</option>
                                    <option>Towards inter-disciplinary Computing Applications with Nanotechnology</option>
                        </Form.Control>
                    </Form.Group>
                    :null
                    }

                    { 
                    this.state.participantStatus && !this.state.workshopStatus && this.state.pppStatus2?
                    <Form.Group controlId="Day">
                    <Form.Label>Day</Form.Label><span style={{color:"red"}}>*</span>
                        <Form.Control as="select" onChange={this.handleInputChangeDay}>
                                    <option selected disabled>--Select the Day--</option>
                                    <option>Day 1</option>
                                    <option>Day 2</option>
                        </Form.Control>
                    </Form.Group>
                    :null
                    }
<br/>
                        <Form.Group controlId="RegFee">  
                        <Form.Label>Registration fee</Form.Label>
                        <Form.Control type="text" name="reg_fee" value={this.state.amount} readOnly/>
                        </Form.Group> 

                        <Form.Group controlId="Payment">
                        <Form.Label>Payment</Form.Label><span style={{color:"red"}}>*</span>
                        <br/><br/>
                        <div onChange={this.handleInputPayment}>
                            <input type="radio" value="ub" name="payment" checked={this.state.selectedValue === 'ub'}/> Upload Bankslip or Fund transfer receipt (jpg files only)<br/>
                            <input type="radio" value="op" name="payment" checked={this.state.selectedValue === 'op'}/> Online Payment<br/><br/>
                        </div>
                        {
                                this.state.bankslipStatus == false && this.state.onlinePaymentStatus == false && this.state.nameError != ''?
                                <div style={{fontSize:12, color: 'red'}}>Payment Option {this.state.nameError}</div>
                                :null}
                        
                        {
                            this.state.bankslip == null &&  this.state.bankslipError != '' && this.state.bankslipStatus?
                            <div style={{fontSize:12, color: 'red'}}>{this.state.bankslipError}</div>
                            :null
                        }
                        
                    { 
                    this.state.bankslipStatus?
                        <Form.Group controlId="Payment">
                        <Form.Control type="file" onChange={this.handleNewImage}></Form.Control>
                        <br/>
                        { this.state.Uploadedprecentage > 0 && <ProgressBar now={this.state.Uploadedprecentage} active label={`${this.state.Uploadedprecentage}%`} /> }
                        </Form.Group>
                        :null
                    }

                    {/* { 
                      this.state.enableRegBtn && this.state.onlinePaymentStatus?
                    <div style={{fontSize:16, color: 'red'}}>All fields must be filled</div>
                    :null
                    } */}

                        </Form.Group> 

                        <Modal show={this.state.show}>
                            <Modal.Header>Conference Registration</Modal.Header>
                            <Modal.Body>
                                <Table responsive hover>
                                    <tbody>
                                        <tr className="unread">
                                        <td>
                                        <h6 className="mb-1"></h6>
                                        { 
                                        this.state.registrationSuccess || this.state.dataSavingStatus?
                                        <p className="m-0">{this.state.msg}</p>
                                        :null
                                        }

                                        { 
                                        this.state.registrationFailled || !this.state.dataSavingStatus?
                                        <p className="m-0">{this.state.msg}</p>
                                        :null
                                        }
                                        </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.CloseModal()}}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    { 
                    !this.state.onlinePaymentStatus?
                        <Button variant="primary" onClick={()=>{this.handleData()}}>Register</Button>
                     :null
                    }

                    { 
                    this.state.onlinePaymentStatus?
                        <Button onClick={()=>{this.handleDataOp()}} className="btn btn-primary">Save</Button>
                     :null
                    }
                    <br/><br/>
                    { 
                    this.state.onlinePaymentStatus && this.state.enableRegBtn?
                        <a href={'https://sheltered-atoll-93439.herokuapp.com/process/hostedCheckout?opid='+this.state.opID+'&option='+this.state.PassAmount} className="btn btn-primary">Proceed to payment</a>
                     :null
                    }
                 </Form>
                
                 </Col>
                </Card.Body>
                </Card>
                    </Col>

                </Row>
                </div>
                 </div>
                <Footer />
               </Aux>
               
        );
    }
}

export default regTest;