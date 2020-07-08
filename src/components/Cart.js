
// The most basic use of the react-js-stepper can be described with:

import React from 'react';
import ReactDOM from 'react-dom';
import Stepper from 'react-js-stepper'
import CartInCart from './cartIncart'
import {Link} from 'react-router-dom'
import HomeNavbar from './navbar';
import Footer from './footer';
import { withRouter } from "react-router-dom";
import Address from './Address'

const steps = [{title: 'Cart'}, {title: 'Delivery Address'}, ]
let checkForLogin = '';

class Cart extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 1,
        }
    }

    handleOnClickStepper = (step) => {
        if(step === 2){
            const token=localStorage.getItem('token');
            console.log("token",token);
            
            if( token === null ){
                alert("Please Login First");
                checkForLogin=(
                    this.props.history.push("/signIn")
                )
            }
            else{
                checkForLogin=
                (
                    <div><Address/></div>
                )
            }
        }
        this.setState({activeStep: step});
    }

    render(){
        
        return(
            
            
            <React.Fragment>
                <HomeNavbar></HomeNavbar>
                <Stepper 
                    steps={steps} 
                    activeStep={this.state.activeStep}
                    onSelect={this.handleOnClickStepper}
                    showNumber={true} 
                />

                <div style={{marginTop: '40px'}}>
                {this.state.activeStep === 1 ? <div><CartInCart/> </div> : 
                 <div> {checkForLogin} </div> 
                }
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}
export default withRouter(Cart);