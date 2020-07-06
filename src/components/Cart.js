import React from 'react'
import Navbar  from './navbar';
import Footer from './footer'

export default class Cart extends React.Component{
    async componentDidMount(){
        const x= await JSON.parse(localStorage.getItem('cartProducts'));
        console.log("in cart.js,,,data==",x);
        console.log("length",x.length);
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