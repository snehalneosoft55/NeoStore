import React from 'react';

import {Container,Row,Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap';

import {RegEx} from './RegEx';
import Inputs from './inputs';
import Footer from './footer';
import HomeNavBar from './navbar';
import '../assets/css/stylesheet.css'


import { connect } from 'react-redux'
import {postUserInfo}  from '../actions/registrationAction'
import TextField from '@material-ui/core/TextField'

let valid = true;
let forbutton;
const validateForm = (users) => {
    console.log("in validateForm");
    
    Object.values(users).forEach(
        (val) => {
            if(val===''){valid = false;}
            else{valid=true;}
        }  
    
    );
    return valid;
}

//Registration page
 class Registration extends React.Component{
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
            console.log("in handlechange of reg");
        
        const {name , value} = event.target;
        let errors = this.state.errors;
        let users =this.state.users;
        // console.log(users);     

        switch(name){
            case 'FirstName':
                if(value===''){
                    errors.firstName="Required";
                }
               
                else if(!((RegEx.FirstName).test(value))){
                        // console.log("in alphabates validation",value);
                        errors.firstName='Only alphabates are allowed';
                    }
                else{
                    errors.firstName='';
                    users.firstName=value;
                }
                break; 
            case 'LastName':
                     if(value===''){
                    errors.lastName="Required";
                }
                else if(!((RegEx.LastName).test(value))){
                        // console.log("in alphabates validation",value);
                        errors.lastName="Only alphabates are allowed";
                    }
                else{
                    errors.lastName='';
                    users.lastName=value;
                }
                break;  
            case 'Email':
                if(value===''){
                    errors.email="Required";  
                }
                else if(!((RegEx.Email).test(value))){
                    // console.log('no error in email');
                    errors.email = 'Enter valid email' ;
                }
                else{
                    errors.email ='';
                    users.email=value;
                }
               break;
            case 'Username' :
                // console.log("in username");
                if(value===''){
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
                if(value===''){
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
                if(value===""){
                    errors.confirmPassword='Required';
                }
                else if(users.password  !== users.confirmPassword){
                   // console.log("in c pass true", users.confirmPassword);
                    errors.confirmPassword='Password not matched';
                }
                else{
                    //console.log("in false",users.password,users.confirmPassword);
                    errors.confirmPassword='';
                }
                break;
            case 'mobileNo' :
                if(value===''){
                    errors.mobileNo = 'Required';
                }
              
            else if(value.length !== 10){
                    // console.log("");
                    errors.mobileNo = 'Mobile No should be of 10 Digit';
                    
                }
               
                else{
                    errors.mobileNo = '';
                    users.mobileNo=value;
                }
                break;
                // errors.confirmPassword = this.
                case 'gender':
                    // console.log("in radio vallidation");
                    if(value.length===0){
                        // console.log("gender not selected");
                       errors.gender="select gender" ;

                    }
                    else{
                        errors.gender="";
                        users.gender=value;
                    }
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
            console.log("valid form","forbutton:",forbutton, this.state.users,JSON.stringify(this.state.users));
            const userData1 = {
                first_name:this.state.users.firstName,
                last_name:this.state.users.lastName,
                email:this.state.users.email,
                pass:this.state.users.password,
                confirmPass:this.state.users.confirmPassword,
                phone_no:this.state.users.mobileNo,
                gender:this.state.users.gender
            };
            console.log('in on submit----gender::',userData1.gender,this.state.users.gender);
            console.log("------------userData,in onsubmit",userData1);
            this.props.postUserInfo(userData1);
          
        }
        else{
            forbutton=false;
            this.setState({submitError:"Enter values"});
            // console.log("Invalid form","forbutton:",forbutton);
            // alert("enter all fields");
        }
    }
    componentWillMount(){
        console.log('in willmount');
        console.log('in willmount----gender::',this.state.users.gender);
        // console.log("------------userData,in will mount",userData);
    };
    
    render(){
        const {errors} = this.state;
        
        // const {password}=this.state;
        // const {formInputs}=this.state;
        return(
        <div>
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
                        <Form.Group>
                    {/* <Form> */}
                        <h1 className="registrationLabel">Register To NeoStore</h1>
                        <br/><br/>
                        <div className="textField">
                            <TextField 
                                className="s"
                                id="outlined-basic" 
                                name="FirstName" 
                                label="FirstName" 
                                variant="outlined" 
                                placeholder="First Name"
                                autoComplete="off"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <br/><span className="errorShow" >{errors.firstName}</span>
                        </div>
                        <div className="textField">
                            <TextField 
                                className="s"
                                id="outlined-basic" 
                                name="LastName" 
                                label="LastName" 
                                variant="outlined" 
                                placeholder="Last Name"
                                autoComplete="off"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <br/><span className="errorShow" >{errors.lastName}</span>
                        </div>
                        <div className="textField">
                            <TextField 
                                className="s"
                                id="outlined-basic" 
                                name="Email" 
                                label="Email" 
                                variant="outlined" 
                                placeholder="Email"
                                autoComplete="off"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <br/><span className="errorShow" >{errors.email}</span>
                        </div>
                        <div className="textField">
                            <TextField 
                                className="s"
                                id="outlined-basic" 
                                name="Password" 
                                label="Password" 
                                variant="outlined" 
                                placeholder="Password"
                                autoComplete="off"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <br/><span className="errorShow" >{errors.password}</span>
                        </div>
                        <span className="errorShow">{errors.username}</span>
                        {/* <Inputs name="Password" type="password" maxlength="10" placeholder="Password" value={this.state.value} handleChange={this.handleChange} /> */}
                        <span className="errorShow">{errors.password}</span>
                        {/* <Inputs name="ConfirmPassword" type="password" placeholder="Confirm Password" value={this.state.value} handleChange={this.handleChange}/> */}
                        <span className="errorShow">{errors.confirmPassword}</span>
                        {/* <Inputs name="mobileNo" type="number" placeholder="Mobile No" value={this.state.value} handleChange={this.handleChange}/>  */}
                        <span className="errorShow">{errors.mobileNo}</span>
                        {/* <Form.check type="radio">Male</Form.check> */}
                        
                        
                        <Form.Group className="formGridCheckbox" >
                            <label className="genderLabel">Gender</label>
                        
                                <Form.Check inline type="radio" label="Female" name="gender" value="F" onChange={this.handleChange}/>
                                <Form.Check inline type="radio" label="Male" name="gender" value="M" onChange={this.handleChange}/>
                        </Form.Group>
                        <span className="errorShow">{errors.gender}</span>
                        

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
const mapStateToProps = state => ({
    userData: state.userData
  });

  const mapDispatchToProps = {
    postUserInfo
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Registration);