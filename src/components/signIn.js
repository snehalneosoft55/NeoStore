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
import { Redirect } from "react-router-dom";
import {getCartDataFromApi} from '../actions/getCartDatafromAPIAction'
import axios from 'axios';
import {BASE_URL} from '../constants/BaseURL'
import swal from 'sweetalert';

// import {status} from '../actions/loginAction'

let valid = true;
let forbutton;
const validateForm = (users) => {
    // ////console.log("in validateForm");
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
                        submitError:'',
                        productsInCart:''
                    }
    }
    
    /**
     * 
     * @param {*} event 
     */
    handleChange = (event) => 
    {
        event.preventDefault();
        // ////console.log("in handlechange");
        const {name , value} = event.target;
        let errors = this.state.errors;
        let users =this.state.users;
        // ////console.log(users);     
        switch(name)
        {
            case 'Email':
                if(value==='')
                {
                    errors.email="Required";  
                }
                else if(!((RegEx.Email).test(value)))
                {
                    ////console.log('no error in email');
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
            this.props.loginUserInfo(userData1);
            const token = localStorage.getItem("token");
            if(token){
                // this.props.history.push('/');
    //             const res=axios
    //   .get(BASE_URL + "getCartData", {
    //     headers: { Authorization: `Bearer ${token}` }
    //   });
    //   console.log("response***",res);
    // //   .then(({res.data})=>{
    // //       console.log("in response",res);
    // //   })
                
                
// .then(()=>{
//                     const { cartDataFromApi } = this.props;
//       console.log("cartDataFromApi", cartDataFromApi);
// // console.log("res in sign in from getcart data from api",res);
//                 });
                console.log("in if");
                axios
      .get(BASE_URL + "getCartData", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        console.log("Cart API response ", res.data.product_details);
        // dispatch(getCartDataFromApiSuccess(res.data.product_details));
        // swal
        this.setState({productsInCart:res.data.product_details});
      })
      .catch((error) => {
        swal(`Error : ${error.message}`);
      });

                // this.props.getCartDataFromApi(token);
                this.props.history.push("/");
                
            localStorage.setItem("cartProducts", JSON.stringify(this.state.productsInCart));
                
            }
            console.log("after fetch cartData:::",JSON.parse(localStorage.getItem('cartProducts')));
            

            // ////console.log("for history check",this.props.history);
            // const { userData } = this.props;
            // ////console.log("valid form","forbutton:",forbutton, JSON.stringify(this.state.users));
        }
        else
        {
            forbutton=false;
            this.setState({submitError:"Enter values"});
            ////console.log("Invalid form","forbutton:",forbutton);
        }
    }
    render()
    {
        const { userData } = this.props;
        ////console.log("userData::::",userData);
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
                                    {/* <Link></Link> */}
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
const mapStateToProps = state => 
{
    ////console.log("IN MAP STATE TO PROPS::::::")
    return(
        {
            userData: state.userData,
            cartDataFromApi: state.cartDtaFromApiReducer
          }
    );
}


  const mapDispatchToProps = {
    loginUserInfo,
    getCartDataFromApi
};
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(signIn));