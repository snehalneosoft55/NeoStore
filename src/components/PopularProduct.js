import React from 'react';

import { connect } from 'react-redux';
import {getPopularProducts}  from '../actions/PopularProductAction';
import {Link} from 'react-router-dom';
import ProductCard from './ProductCard';

class Popularproduct extends React.Component{
    constructor(){
         super();
         this.state = {
            rating: 1,
            cartProduct:0
          };
     }
    componentWillMount(){
        this.props.getPopularProducts().then(() => 
        {
            const { popularProducts } = this.props;
      })
    }
    render(){
        const { popularProducts } = this.props;
        const TopRatingProducts =popularProducts.popularProducts;
        // console.log("TopRatingProducts in render----",TopRatingProducts);
        let dashbordProduct=[];
        return(
            <div className="popularProduct">
                <h4 className="header">Popular Products</h4>
                <div className="ViewAllLinkWrapper">
                <Link className="ViewAllLink" to='/Products' >View All</Link>
                </div>
                <div className="product_wrapper">
                {
                    (TopRatingProducts !== undefined)&&(TopRatingProducts.map((val,i)=>
                    {
                        
                        dashbordProduct[i]=val.DashboardProducts;
                        console.log("dashbordProduct",dashbordProduct);
                        let productTitle=dashbordProduct[i][0].product_name;
                        let productPrice=dashbordProduct[i][0].product_cost;
                        let productImage= dashbordProduct[i][0].product_image;
                        let productRating=dashbordProduct[i][0].product_rating;
                        let productId=dashbordProduct[i][0].product_id;
                        let productStock = dashbordProduct[i][0].product_stock;
                        let productProducer = dashbordProduct[i][0].product_producer

                        return(
                                <ProductCard 
                                    image={productImage} 
                                    title={productTitle} 
                                    price={productPrice} 
                                    rating={productRating}
                                    id={productId}
                                    productStock={productStock}
                                    productProducer={productProducer}
                                />
                        )
                    }))
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => 
{
    return({
    popularProducts: state.popularProducts
  });}

const mapDispatchToProps = {
    getPopularProducts
};
export default connect(mapStateToProps,mapDispatchToProps)(Popularproduct);