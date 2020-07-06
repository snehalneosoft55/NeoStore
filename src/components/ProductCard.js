import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../assets/css/ProductCard.css'
import StarRatingComponent from 'react-star-rating-component';
import AddTocart from './AddToCart'

export default class ProductCard extends React.Component{
   
    
    render()
    {
        return(
            <Card className="ProductCardwrapperCard">
                <Card.Img 
                    className="ProductCardwrapperImg" 
                    src={'http://180.149.241.208:3022/' + this.props.image}
                /> 
                <div className="ProductCardwrapperTitleWrapper">
                    <Link to={{
                                pathname : "/ProductDetails",
                                state:{
                                        productId : this.props.id
                                        }
                            }}
                    >
                        <Card.Title className="ProductCardwrapperTitle">
                            {this.props.title}
                        </Card.Title>
                    </Link>
                </div> 
                <Card.Text className="productCart_price"> ₹ {this.props.price} </Card.Text>
                <AddTocart m='23%' ProductData={this.props}/>
                <Card.Text className="productCart_rating">
                    <StarRatingComponent 
                        name="rate2" 
                        editing={false}
                        renderStarIcon={() => <span>★</span>}
                        starCount={5}
                        value={this.props.rating}
                    />
                </Card.Text>
            </Card>
    )
}
}