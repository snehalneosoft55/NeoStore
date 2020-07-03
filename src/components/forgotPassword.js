import React from 'react';

import {Container,Row,Col, Card} from 'react-bootstrap';
import { Form,Button } from 'react-bootstrap';

import {RegEx} from './RegEx';
import Inputs from './inputs';
import Footer from './footer';
import HomeNavBar from './navbar';

let valid = true;
let forbutton;
const validateForm = (users) => {
    ////console.log("in validateForm");
    
    Object.values(users).forEach(
        (val) => {
            if(val===''){valid = false;}
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
                
                email:'',
                
            },
                errors:{
                   
                    email:"",
                   
                },
                submitError:''
            }
        }

    handleChange = (event) => {
        event.preventDefault();
            ////console.log("in handlechange");
        
        const {name , value} = event.target;
        let errors = this.state.errors;
        let users =this.state.users;
        ////console.log(users);     

        switch(name){
           
            case 'Email':
                if(value===''){
                    errors.email="Required";  
                }
                else if(!((RegEx.Email).test(value))){
                    ////console.log('no error in email');
                    errors.email = 'Enter valid email' ;
                }
                else{
                    errors.email ='';
                    users.email=value;
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
            ////console.log("valid form","forbutton:",forbutton, JSON.stringify(this.state.users));
        }
        else{
            forbutton=false;
            this.setState({submitError:"Enter values"});
            ////console.log("Invalid form","forbutton:",forbutton);
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
                                <Button type="submit" className="btn btn-primary btn-block s" >Submit</Button>
                                <span className="errorShow">{this.state.submitError}</span>
                            </Col>
                            <Col>
                                    
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