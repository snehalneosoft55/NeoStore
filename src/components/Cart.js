
// The most basic use of the react-js-stepper can be described with:

import React from 'react';
import ReactDOM from 'react-dom';
import Stepper from 'react-js-stepper'
import CartInCart from './cartIncart'
import {Link} from 'react-router-dom'
import HomeNavbar from './navbar';
import Footer from './footer';

const steps = [{title: 'Cart'}, {title: 'Delivery Address'}, ]

export default class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 1,
        }
    }

    handleOnClickStepper = (step) => {
        this.setState({activeStep: step});
    }

    render(){
        const token=localStorage.getItem('token');
        let checkForLogin = '';
        if( token !== '' || token !==null ){
            checkForLogin=
                (
                    <div>address</div>
                )
            
            
        }
        else{
            alert("Please Login First");
            checkForLogin=(<Link to ="./signIn"></Link>)
            
        }
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