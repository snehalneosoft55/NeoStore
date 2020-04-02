import React from 'react';
import {withRouter} from 'react-router-dom'

import {Container,Row,Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form,Button } from 'react-bootstrap';
import {loginUserInfo}  from '../actions/loginAction'
import { connect } from 'react-redux'

import {RegEx} from './RegEx';
import Inputs from './inputs';
import Footer from './footer';
import HomeNavBar from './navbar';
import {status} from '../actions/loginAction'

let valid = true;
let forbutton;
const validateForm = (users) => {
    // console.log("in validateForm");
    Object.values(users).forEach(
        (val) => {
            if(val===''){
                valid = false;
            }
            else{
                valid=true;
            }
        }  
    );
    return valid;
}
//Registration page
class signIn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
                    {
                        users:
                        { 
                            email:'',
                            password:'',
                        },
                        errors:
                        {
                            email:"",
                            password:"",
                        },
                        submitError:''
                    }
    }
    handleChange = (event) => 
    {
        event.preventDefault();
        // console.log("in handlechange");
        const {name , value} = event.target;
        let errors = this.state.errors;
        let users =this.state.users;
        // console.log(users);     
        switch(name)
        {
            case 'Email':
                if(value==='')
                {
                    errors.email="Required";  
                }
                else if(!((RegEx.Email).test(value)))
                {
                    console.log('no error in email');
                    errors.email = 'Enter valid email' ;
                }
                else
                {
                    errors.email ='';
                    users.email=value;
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
            const userData1 = {
                
                email:this.state.users.email,
                pass:this.state.users.password,
                
            };
            console.log('in on submit----gender::',userData1.gender,this.state.users.gender);
            console.log("------------userData,in onsubmit",userData1);
            this.props.loginUserInfo(userData1);
            // this.props.history.push('./');
            const { userData } = this.props;
            // console.log("valid form","forbutton:",forbutton, JSON.stringify(this.state.users));
        }
        else
        {
            forbutton=false;
            this.setState({submitError:"Enter values"});
            console.log("Invalid form","forbutton:",forbutton);
        }
    }
    render()
    {
        const { userData } = this.props;
        console.log("userData::::",userData);
        const {errors} = this.state;
        return(
        <div>
            <HomeNavBar></HomeNavBar>
            <Container fluid={true} >
                <hr className="line"></hr>
                <Row className="Signup-wrapper">
                    <Card className="signupInfo_card">
                        <Row className="signUpInfo">
                            <form onSubmit={this.handleSubmit} action="./signIn.js">
                            <Form.Group >
                                <h1 className="registrationLabel">Sign In</h1>
                                <br/><br/>
                                <Inputs 
                                    name="Email" 
                                    type="Email" 
                                    placeholder="Email" 
                                    value={this.state.value} 
                                    handleChange={this.handleChange}
                                />
                                <span className="errorShow">{errors.email}</span>
                                <Inputs 
                                    name="Password" 
                                    type="password" 
                                    maxlength="10" 
                                    placeholder="Password" 
                                    value={this.state.value} 
                                    handleChange={this.handleChange}
                                />
                                <span className="errorShow">{errors.password}</span>
                                <Row>
                                    <Col>
                                        <Button 
                                            type="submit" 
                                            className="btn btn-primary btn-block submitButton" 
                                            onClick={this.handleSubmit}>
                                            Submit
                                        </Button>
                                        <span className="errorShow">{this.state.submitError}</span>
                                    </Col>
                                    <Col>
                                        <div className="f">
                                            <Link to="/ForgotPassword" >Forgot Password</Link>    
                                        </div>
                                    </Col>
                                </Row>
                            </Form.Group>
                            </form>
                        </Row>
                    </Card>
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
    loginUserInfo
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(signIn);