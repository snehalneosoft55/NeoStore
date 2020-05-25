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
        console.log("in componentwill mount---1111");
        this.props.getPopularProducts().then(() => {

            const { popularProducts } = this.props;
            console.log("in componentwill mount---",popularProducts);
            
      })
    }
    
    render(){
        const { popularProducts } = this.props;
        const TopRatingProducts =popularProducts.popularProducts;
        console.log("topratingp--",TopRatingProducts,typeof TopRatingProducts);
        let dashbordProduct=[];
        // const { rating } = this.state;
        return(
            <div className="popularProduct">
                <h4 className="header">Popular Products</h4>
                <div className="ViewAllLinkWrapper">
                <Link className="ViewAllLink" to='/Products' >View All</Link>
                </div>
                
                <div className="product_wrapper">
                {
                    (TopRatingProducts !== undefined)&&(TopRatingProducts.map((val,i)=>{
                        
                        dashbordProduct[i]=val.DashboardProducts;
                        let productTitle=dashbordProduct[i][0].product_name;
                        let productPrice=dashbordProduct[i][0].product_cost;
                        let productImage= dashbordProduct[i][0].product_image;
                        let productRating=dashbordProduct[i][0].product_rating;
                        let productId=dashbordProduct[i][0].product_id;
                        return(
                            
                                <ProductCard 
                                    image={productImage} 
                                    title={productTitle} 
                                    price={productPrice} 
                                    rating={productRating}
                                    id={productId}
                                    
                                />
                            
        //                     <Card className="productCart">
        //                         <div key={i} className="productCart_body">
        //                              <Card.Img className="productCartImg" variant="top" src={'http://180.149.241.208:3022/' + dashbordProduct[i][0].product_image} />
        //                              <Card.Body className="productCart_body_display">
        //                              <Card.Title className="productCart_title">{dashbordProduct[i][0].product_name}</Card.Title>
        //                              <Card.Text className="productCart_price">₹{dashbordProduct[i][0].product_cost}</Card.Text>
        //                              <button className="productCart_button">Add To Cart</button>
        //                              {/* <Card.Text className="productCart_rating">{(isNaN(dashbordProduct[i][0].product_rating))?0:dashbordProduct[i][0].product_rating}</Card.Text> */}
        //                              <Card.Text className="productCart_rating">
        //                              <StarRatingComponent 
        //   name="rate2" 
        //   editing={false}
        //   renderStarIcon={() => <span>★</span>}
        //   starCount={5}
        //   value={(isNaN(dashbordProduct[i][0].product_rating))?0:dashbordProduct[i][0].product_rating}
        // />
                                    
        //                              </Card.Text>
                                     
        //                              </Card.Body>
        //                          </div>
        //                      </Card>
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
    console.log("in popular product mapStatetopropsssss",state.popularProducts);
    return({
    popularProducts: state.popularProducts
  });}

  const mapDispatchToProps = {
    getPopularProducts
};
export default connect(mapStateToProps,mapDispatchToProps)(Popularproduct);