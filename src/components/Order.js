import React from 'react'
import Footer from './footer'
import HomeNavBar from './navbar'
// import { Container,Row,Col } from 'react-bootstrap'
import '../assets/css/Order.css'
import StarRatingComponent from 'react-star-rating-component';

// import ProductCard from './ProductCard'

export default class Order extends React.Component{
   
    render(){
        return(
            <div>
                <HomeNavBar/>
                <br></br>
                <Footer/>
            </div>
        );
    }
}