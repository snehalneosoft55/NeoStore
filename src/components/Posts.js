import React, { Component } from 'react';
import Products from './Products';
import ProductCard from "./ProductCard";



export class Posts extends Component {
    
    render() {
        // let displayProducts='';
        console.log("this.props.posts;;;====---",this.props.posts);
        const products = this.props.posts;
        let x=''
        if(products!== undefined && products !==''){
            x =(
                products.map(pd=>(
                    <ProductCard
                                          id={pd.product_id}
                                          image={pd.product_image}
                                          title={pd.product_name}
                                          price={pd.product_cost}
                                          rating={pd.product_rating}
                                          productStock={pd.product_stock}
                                          productProducer={pd.product_producer}
                                        />
                ))
            )
        }
        if(products ==='No details' || products=== null){
            x=(
                <div>
                    <h1>Product Not Found</h1>
                </div>
            )
        }
        return (
            <div>
                
                {x}
                {/* {(this.props.posts != undefined)&&(
                    this.props.posts.map(pd=>(
                        <ProductCard
                                      id={pd.product_id}
                                      image={pd.product_image}
                                      title={pd.product_name}
                                      price={pd.product_cost}
                                      rating={pd.product_rating}
                                    />
                    )
    
                    )
                )
                  
                    
                   
                } */}
                
        
               
            </div>
        )
    }
}

export default Posts

