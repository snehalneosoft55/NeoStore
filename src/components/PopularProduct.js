import React from 'react'
import Data from './Data'
import { Card, Button } from 'react-bootstrap';

export default class Popularproduct extends React.Component{
    render(){
        return(
            <div>
                <h2 className="header1">Popular Products</h2>
                
                {
                    Data.Product.map((Product,i)=>{
                        return(
                            <Card className="productCart">
                                <div key={i}>
                                    <Card.Img className="productCartImg" variant="top" src={Product.image} />
                                    <Card.Body>
                                    <Card.Title>{Product.title}</Card.Title>
                                    <Card.Text>{Product.prise}</Card.Text>
                                    <Button variant="primary">Add To Cart</Button>
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

// {
//     render(){
//         return(
//             <div>
//                 {
//                     data.Product.map((Product, i) =>{
//                         return(
//                             <div key={i}>
//                                 <div>
//                         <p>{Product.title}</p>
//                     <p>{Product.prise}</p>
//                                 </div>
//                             </div>
//                         );
//                     }
//                 }
//             </div>
//         );
//     }
// }