import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import img1 from '../assets/images/chair.jpg'
import '../assets/css/ProductCard.css'
import StarRatingComponent from 'react-star-rating-component';



export default function ProductCard (props){
    return(
            <Card className="ProductCardwrapperCard">
                <Card.Img className="ProductCardwrapperImg" src={'http://180.149.241.208:3022/' + props.image}/> 
                <div className="ProductCardwrapperTitleWrapper">
                    <Link to={{
                        pathname : "/ProductDetails",
                        state:{
                                productId : props.id
                        }
                    }}>
                        <Card.Title className="ProductCardwrapperTitle">
                            {props.title}
                        </Card.Title>
                    </Link>
                </div> 
                <Card.Text className="productCart_price"> ₹ {props.price} </Card.Text>
                <button className="ProductCardwrapperButton">Add To Cart</button>
                <Card.Text className="productCart_rating">
                    <StarRatingComponent 
                        name="rate2" 
                        editing={false}
                        renderStarIcon={() => <span>★</span>}
                        starCount={5}
                        value={props.rating}
                    />
                </Card.Text>
            </Card>
    )
}