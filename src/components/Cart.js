import React from 'react'
import Navbar  from './navbar';
import Footer from './footer'

export default class Cart extends React.Component{
    async componentDidMount(){
        const x= await JSON.parse(localStorage.getItem('data'));
        console.log("in cart.js,,,data==",x.quantity);
        console.log("length",localStorage.length);
    }
    render(){
        // const x=localStorage.getItem('data')
        
        return(
            <div>
                <Navbar></Navbar>
                <hr></hr>
                <Footer/>
            </div>
        );
    }
}