import React from 'react';
import HomeNavbar from './navbar';
import Slideimages from './slideimages'
import Footer from './footer'
import PopularProduct from './PopularProduct'
export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <HomeNavbar/>
                <Slideimages/>
                <PopularProduct/>
                <Footer/>
            </div>
        );
    }
}