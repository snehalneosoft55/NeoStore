// import React from 'react'
// import { Card, Button } from 'react-bootstrap'
// import {FormControl,InputGroup} from 'react-bootstrap';
// import '../assets/css/ForgotPassword.css'

// export default function ForgotPassword(){
//     return(
//         <div  className="forgotPassword_card">
//             <Card >
//                 <Card.Body>
//                     <Card.Title className="forgotPassword_card_title"><h1>Recover Password</h1></Card.Title>
//                 <hr></hr>
//                 <InputGroup className="forgotPassword_card_input">
//                     <FormControl className="forgotPassword_card_input" placeholder="Email">
//                     </FormControl>
//                 </InputGroup>
//                 <Button variant="primary">Submit</Button>
//                 </Card.Body>
                
//             </Card>
//         </div>
//     );
// }
import React from 'react';

import {Container,Row,Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap';

import {RegEx} from './RegEx';
import Inputs from './inputs';
import Footer from './footer';
import HomeNavBar from './navbar';

let valid = true;
let forbutton;
const validateForm = (users) => {
    console.log("in validateForm");
    
    Object.values(users).forEach(
        (val) => {
            if(val==''){valid = false;}
            else{valid=true;}
        }  
    
    );
    return valid;
}

//Registration page
export default class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:{ 
                firstName:'',
                lastName:'',
                email:'',
                username:'',
                password:'',
                confirmPassword:'',
                mobileNo:'',
                gender:''
            },
                errors:{
                    firstName:"",
                    lastName:"",
                    email:"",
                    username:"",
                    password:"",
                    confirmPassword:"",
                    mobileNo:"" ,
                    gender:""
                },
                submitError:''
            }
        }

    handleChange = (event) => {
        event.preventDefault();
            console.log("in handlechange");
        
        const {name , value} = event.target;
        let errors = this.state.errors;
        let users =this.state.users;
        console.log(users);     

        switch(name){
            case 'FirstName':
                if(value==''){
                    errors.firstName="Required";
                }
               
                else if(!((RegEx.FirstName).test(value))){
                        console.log("in alphabates validation",value);
                        errors.firstName='Only alphabates are allowed';
                    }
                else{
                    errors.firstName='';
                    users.firstName=value;
                }
                break; 
            case 'LastName':
                     if(value==''){
                    errors.lastName="Required";
                }
                else if(!((RegEx.LastName).test(value))){
                        console.log("in alphabates validation",value);
                        errors.lastName="Only alphabates are allowed";
                    }
                else{
                    errors.lastName='';
                    users.lastName=value;
                }
                break;  
            case 'Email':
                if(value==''){
                    errors.email="Required";  
                }
                else if(!((RegEx.Email).test(value))){
                    console.log('no error in email');
                    errors.email = 'Enter valid email' ;
                }
                else{
                    errors.email ='';
                    users.email=value;
                }
               break;
            case 'Username' :
                console.log("in username");
                if(value==''){
                    errors.username='Required';
                }
                else if(value.length<3){
                    errors.username='Username must be at least 3 charecters';
                    
                }
                else{
                    errors.username='';
                    users.username=value;
                }
                break;
            case 'Password' :
                if(value==''){
                    errors.password = 'Required';  
                }
                else if(value.length<7 || value.length>15){
                    errors.password = 'Password length must between 7 to 15';
                    
                }
                
                else{
                    errors.password = '';
                    users.password=value;
                }
                break;
            case 'ConfirmPassword' :
                
                users.confirmPassword=value;
                if(value==""){
                    errors.confirmPassword='Required';
                }
                else if(users.password  != users.confirmPassword){
                   // console.log("in c pass true", users.confirmPassword);
                    errors.confirmPassword='Password not matched';
                }
                else{
                    //console.log("in false",users.password,users.confirmPassword);
                    errors.confirmPassword='';
                }
                break;
            case 'mobileNo' :
                if(value==''){
                    errors.mobileNo = 'Required';
                }
              
            else if(value.length != 10){
                    console.log("");
                    errors.mobileNo = 'Mobile No should be of 10 Digit';
                    
                }
               
                else{
                    errors.mobileNo = '';
                    users.mobileNo=value;
                }
                break;
                // errors.confirmPassword = this.
                case 'gender':
                    console.log("in radio vallidation");
                    if(value.length===0){
                        console.log("gender not selected");
                       errors.gender="select gender" ;

                    }
                    else{

                        console.log("gender is selected");
                        errors.gender="";
                        users.gender=value;
                    }
                    
                    
                    console.log("gender", users.gender);
                    break;
            default:
                break;
            }
        this.setState({errors,users});
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        if(validateForm(this.state.users)){
            forbutton=true;
            this.setState({submitError:''});
            console.log("valid form","forbutton:",forbutton, this.state.users);
        }
        else{
            forbutton=false;
            this.setState({submitError:"enetr values"});
            console.log("Invalid form","forbutton:",forbutton);
            // alert("enter all fields");
        }
    }
    // componentDidMount(){
    //     const userData = {
    //         email : this.state.users.email,
    //         password : this.state.users
    //     };
    // }
    render(){
        const {errors} = this.state;
        
        // const {password}=this.state;
        // const {formInputs}=this.state;
        return(<div>
            <HomeNavBar></HomeNavBar>
            <Container fluid={true} >
            
            {/* <Row className="SocialButton">
                <Button className="facebook"><span><i src="fa fa-facebook"></i></span>Login With Facebook</Button>
                <Button className="google"><span><i src="fa fa-google"></i></span>Login With Google</Button>

            </Row> */}
            <hr className="line"></hr>
            <Row className="Signup-wrapper">
                {/* <Col xs={7}>
                    <Image className="sideImage" src={Assets.SIDE_IMAGE} alt="SIDE_IMAGE"/>
                </Col>
                <Col xs={5}> */}
                <Card className="signupInfo_card">
                    <Row className="signUpInfo">
                        <form onSubmit={this.handleSubmit} action="./signIn.js">
                        <Form.Group >
                    {/* <Form> */}
                        <h1 className="registrationLabel">Forgot Password</h1>
                        <br/><br/>
                        
                        <Inputs name="Email" type="Email" placeholder="Email" value={this.state.value} handleChange={this.handleChange}/>
                        <span className="errorShow">{errors.email}</span>
                        
                        <Row>
                            <Col>
                                <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
                                <span className="errorShow">{this.state.submitError}</span>
                            </Col>
                            <Col>
                                <Link to="./signIn">
                                    <Button  type="submit" className="btn btn-info btn-block">Sign In</Button>
                                </Link>    
                             </Col>
                        </Row>
                    </Form.Group>
                    </form>
                </Row>
                </Card>
                {/* </Col> */}
            </Row>
            
        </Container>
        <Footer/>
        </div>
        );
    }
}