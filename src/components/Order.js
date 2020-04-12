import React from 'react'
import Footer from './footer'
import HomeNavBar from './navbar'
import { Container,Row,Col } from 'react-bootstrap'
import '../assets/css/Order.css'
import StarRatingComponent from 'react-star-rating-component';

// import ProductCard from './ProductCard'

export default class Order extends React.Component{
    render(){
        return(
            <div className="productDetail">
                <HomeNavBar/>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                1
                            </Col>
                            <Col>
                                <div className="productDetailInfo">
                                <h3>
                                    PRODUCT TITLE
                                </h3>
                                <StarRatingComponent 
                                    name="rate2" 
                                    editing={false}
                                    renderStarIcon={() => <span>★</span>}
                                    starCount={5}
                                    value={2}
                                />
                                <hr></hr>
                                <h6>Price:</h6>
                                <h6>Color:</h6>
                                <button>Add To Cart</button>
                                <button>Rate Product</button>
                                </div>
                           
                            </Col>
                        </Row>
                    </Container>
                </div>
                <hr></hr>
                <Footer/>
            </div>
        );
    }
}