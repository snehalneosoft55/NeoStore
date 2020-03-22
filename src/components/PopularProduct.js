import React from 'react'
import Data from './Data'
import { Card } from 'react-bootstrap';

export default class Popularproduct extends React.Component{
    render(){
        return(
            <div>
                <h2 className="header1">Popular Products</h2>
                
                {
                    Data.Product.map((Product,i)=>{
                        return(
                            <Card className="productCart">
                                <div key={i} className="productCart_body">
                                    <Card.Img className="productCartImg" variant="top" src={Product.image} />
                                    <Card.Body className="productCart_body_display">
                                    <Card.Title className="productCart_title">{Product.title}</Card.Title>
                                    <Card.Text className="productCart_price">{Product.prise}</Card.Text>
                                    <button className="productCart_button">Add To Cart</button>
                                    </Card.Body>
                                </div>
                            </Card>
                        );
                    })
                }
            </div>
        );
    }
}

