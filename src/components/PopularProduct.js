import React from 'react'
import Data from './Data'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import {getPopularProducts}  from '../actions/PopularProductAction'


 class Popularproduct extends React.Component{
    componentWillMount(){
        console.log("in componentwill mount---1111");
        this.props.getPopularProducts().then(() => {

            const { popularProducts } = this.props;
            console.log("in componentwill mount---",popularProducts);
            // console.log('in willmount',PopularProduct.productData);
            // const y=PopularProduct.productData;
            // console.log("y==",y);
      })
    }
    render(){
        const { popularProducts } = this.props;
        // console.log("in popular product render",JSON.stringify(popularProducts.popularProducts));
        const TopRatingProducts =popularProducts.popularProducts;
        console.log("topratingp--",TopRatingProducts,typeof TopRatingProducts);
        let dashbordProduct=[];
        // (TopRatingProducts !== undefined)&&(TopRatingProducts.map((val,i)=>{
            
        //     dashbordProduct[i]=val.DashboardProducts;
        //     console.log("dashbordProduct---",dashbordProduct[i][0].product_image);
        // }));
        // console.log("dashbordProduct---",dashbordProduct);
       // const TopRatingProducts1 =TopRatingProducts;
        //console.log("topratingp1--",TopRatingProducts1,typeof TopRatingProducts1);
        // for (var i = 0; i < 5; i++) {
        //     const temp = {TopRatingProducts.DashboardProducts}
        //     console.log("topratingp elements --", temp)
        // }
        
        return(
            <div>
                <h2 className="header1">Popular Products</h2>
                
                {
                    (TopRatingProducts !== undefined)&&(TopRatingProducts.map((val,i)=>{
            
                        dashbordProduct[i]=val.DashboardProducts;
                        return(
                            <Card className="productCart">
                                <div key={i} className="productCart_body">
                                     <Card.Img className="productCartImg" variant="top" src={'http://180.149.241.208:3022/' + dashbordProduct[i][0].product_image} />
                                     <Card.Body className="productCart_body_display">
                                     <Card.Title className="productCart_title">{dashbordProduct[i][0].product_name}</Card.Title>
                                     <Card.Text className="productCart_price">{dashbordProduct[i][0].product_cost}</Card.Text>
                                     <button className="productCart_button">Add To Cart</button>
                                     <Card.Text className="productCart_price">{(isNaN(dashbordProduct[i][0].product_rating))?0:dashbordProduct[i][0].product_rating}</Card.Text>
                                     
                                     <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
                                    
                                     
                                     </Card.Body>
                                 </div>
                             </Card>
                        )
                        // console.log("dashbordProduct---",dashbordProduct[i][0].product_image);
                    }))
                    // (TopRatingProducts !== undefined) &&
                    // (TopRatingProducts.map((Product,i)=>{
                    //     console.log("Product---",Product,"i",i);
                    //     return(
                    //         <Card className="productCart">
                    //             <div key={i} className="productCart_body">
                    //                 {/* <Card.Img className="productCartImg" variant="top" src={Product.image} /> */}
                    //                 <Card.Body className="productCart_body_display">
                    //                 <Card.Title className="productCart_title">{Product.DashboardProducts.product_name}</Card.Title>
                    //                 {/* <Card.Text className="productCart_price">{Product.prise}</Card.Text> */}
                    //                 <button className="productCart_button">Add To Cart</button>
                    //                 </Card.Body>
                    //             </div>
                    //         </Card>
                    //     );
                    // })
                    // )
                    }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    popularProducts: state.popularProducts
  });

  const mapDispatchToProps = {
    getPopularProducts
};
export default connect(mapStateToProps,mapDispatchToProps)(Popularproduct);