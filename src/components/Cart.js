import React from 'react'
import Navbar  from './navbar';
import Footer from './footer'

export default class Cart extends React.Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                <hr></hr>
                <Footer/>
            </div>
        );
    }
}