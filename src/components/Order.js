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
                {/* <HomeNavBar/> */}
                <br></br>
                <div class="container">
  <h2>Collapsible List Group</h2>
  <p>Click on the collapsible panel to open and close it.</p>
  <div class="panel-group">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" href="#collapse1">Collapsible list group</a>
        </h4>
      </div>
      <div id="collapse1" class="panel-collapse collapse">
        <ul class="list-group">
          <li class="list-group-item">One</li>
          <li class="list-group-item">Two</li>
          <li class="list-group-item">Three</li>
        </ul>
        <div class="panel-footer">Footer</div>
      </div>
    </div>
  </div>
</div>
                {/* <Footer/> */}
            </div>
        );
    }
}