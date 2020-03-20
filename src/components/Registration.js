import React from 'react';

import {Container,Row,Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap';

import {RegEx} from './RegEx';
import Inputs from './inputs';
import Footer from './footer';
import HomeNavBar from './navbar';
const validateForm = (errors) => {
    console.log("in validateForm");
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0  && (valid = false)
    
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
                }
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
                if(!((RegEx.FirstName).test(value))){
                        // console.log("in regex",value);
                        errors.firstName='Only alphabates are allowed';
                    }
                else if(value.length<3){
                    errors.firstName='First Name must be at least 3 charecters';
                    
                }
                
                else{
                    errors.firstName='';
                    users.firstName=value;
                }
                break; 
            case 'LastName':
                    if(!((RegEx.LastName).test(value))){
                        // console.log("in regex",value);
                        errors.lastName='Only alphabates are allowed';
                    }
                else if(value.length<3){
                    errors.lastName='Last Name must be at least 3 charecters';
                    
                }
                
                else{
                    errors.lastName='';
                    users.lastName=value;
                }
                break; 
            case 'Email':
                // console.log(value,RegEx.Email);
                // errors.email = value.length < 4 ? 'invalid email id' : '';
                if(((RegEx.Email).test(value))){
                    console.log('no error in email');
                    errors.email = '' ;
                    users.email=value;
                    break;
                }
                
                else{
                    errors.email ='Invalid Email';
                    break;
                }
               
            case 'Username' :
                console.log("in username");
                if(value.length>3){
                    errors.username='';
                    users.username=value;
                }
                else{
                    errors.username='Username must be at least 3 charecters';
                }
                // console.log('in usename switch');
                // errors.username = value.length < 4 ? 'Username must be at least 4 charecter' : '';
                break;
            case 'Password' :
                if(value.length > 8){
                    errors.password = '';
                    users.password=value;
                }
                else{
                    errors.password = 'password length must between 8 to 9';
                }
                break;
            case 'ConfirmPassword' :
                // console.log( "in confirm pass"+ users.password);
                users.confirmPassword=value;
                if(users.password  === users.confirmPassword){
                   // console.log("in c pass true", users.confirmPassword);
                    errors.confirmPassword='';
                }
                else{
                    //console.log("in false",users.password,users.confirmPassword);
                    errors.confirmPassword='password not matched';
                }
                break;
            case 'mobileNo' :
            if(!((RegEx.MobileNo).test(value))){
                console.log("else if")
                errors.mobileNo='Mobile No. should contain only numeric values';
            }    
            else if(value.length === 10){
                    console.log("in true");
                    errors.mobileNo = '';
                    users.mobileNo=value;
                }
               
                else{
                    errors.mobileNo = 'Enetr 10 digits';
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
        this.setState({errors,users})
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)){
            
            console.log("valid form", this.state.errors);
        }
        else{
            console.log("Invalid form");
        }
    }

    render(){
        const {errors} = this.state;
        
        // const {password}=this.state;
        // const {formInputs}=this.state;
        return(<div>
            <HomeNavBar></HomeNavBar>
            <Container fluid={true} >
            
            <Row className="SocialButton">
                <Button className="facebook"><span><i src="fa fa-facebook"></i></span>Login With Facebook</Button>
                <Button className="google"><span><i src="fa fa-google"></i></span>Login With Google</Button>

            </Row>
            <hr className="line"></hr>
            <Row className="Signup-wrapper">
                {/* <Col xs={7}>
                    <Image className="sideImage" src={Assets.SIDE_IMAGE} alt="SIDE_IMAGE"/>
                </Col>
                <Col xs={5}> */}
                <Card className="signupInfo_card">
                    <Row className="signUpInfo">
                        <Form.Group>
                    {/* <Form> */}
                        <h1 className="registrationLabel">Register To NeoStore</h1>
                        <br/><br/>
                        <Inputs name="FirstName" type="text" placeholder="First Name" value={this.state.value} handleChange={this.handleChange}/>
                        <span className="errorShow" >{errors.firstName}</span>
                        <Inputs name="LastName" type="text" placeholder="Last Name" value={this.state.value} handleChange={this.handleChange}/>
                        <span className="errorShow">{errors.lastName}</span>
                        <Inputs name="Email" type="Email" placeholder="Email" value={this.state.value} handleChange={this.handleChange}/>
                        <span className="errorShow">{errors.email}</span>
                        <Inputs name="Username" type="text" placeholder="Username" value={this.state.value} handleChange={this.handleChange}/>
                        <span className="errorShow">{errors.username}</span>
                        <Inputs name="Password" type="password" placeholder="Password" value={this.state.value} handleChange={this.handleChange} />
                        <span className="errorShow">{errors.password}</span>
                        <Inputs name="ConfirmPassword" type="password" placeholder="Confirm Password" value={this.state.value} handleChange={this.handleChange}/>
                        <span className="errorShow">{errors.confirmPassword}</span>
                        <Inputs name="mobileNo" type="number" placeholder="Mobile No" value={this.state.value} handleChange={this.handleChange}/> 
                        <span className="errorShow">{errors.mobileNo}</span>
                        {/* <Form.check type="radio">Male</Form.check> */}
                        
            
                        <Form.Group className="formGridCheckbox" >
                                <Form.Check inline type="radio" label="Female" name="gender" value="Female" onChange={this.handleChange}/>
                                <Form.Check inline type="radio" label="Male" name="gender" value="Male" onChange={this.handleChange}/>
                        </Form.Group>
                        <span className="errorShow">{errors.gender}</span>
                        

                        <Row>
                            <Col>
                                <Button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</Button>
                            </Col>
                            <Col>
                                <Link to="./signIn">
                                    <Button  type="submit" className="btn btn-info btn-block">Sign In</Button>
                                </Link>    
                             </Col>
                        </Row>
                    </Form.Group>
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