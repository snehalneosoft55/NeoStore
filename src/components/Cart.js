import React from 'react'
import Navbar  from './navbar';
import Footer from './footer'
import CartInCart from './cartIncart';

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
                <div>
                <div style={{display:"inline"}}>
                <button >ok</button><hr></hr><button>ok</button>
                </div>
                <CartInCart></CartInCart>
                </div>
                
                
                <Footer/>
            </div>
        );
    }
}