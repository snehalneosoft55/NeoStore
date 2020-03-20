import React from 'react'
import Footer from './footer'
import HomeNavBar from './navbar'

export default class Order extends React.Component{
    render(){
        return(
            <div>
                <HomeNavBar/>
                    <h1>ORDERS</h1>
                <Footer/>
            </div>
        );
    }
}