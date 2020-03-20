import React from 'react';
import Footer from './footer'
import HomeNavBar from './navbar'

export default class Products extends React.Component{
    render(){
        return(
            <div>
                <HomeNavBar/>
                    <h1>Products</h1>
                <Footer/>
            </div>
        );
    }
}