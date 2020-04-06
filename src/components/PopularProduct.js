import React from 'react'
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import {getPopularProducts}  from '../actions/PopularProductAction'
import {Link} from 'react-router-dom'


 class Popularproduct extends React.Component{
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
        return(
            <div className="popularProduct">
                <h4 className="header">Popular Products</h4>
                <Link className="ViewAllLink" to='/Products' >View All</Link>
                <div className="product_wrapper">
                {
                    (TopRatingProducts !== undefined)&&(TopRatingProducts.map((val,i)=>{
            
                        dashbordProduct[i]=val.DashboardProducts;
                        return(
                            <Card className="productCart">
                                <div key={i} className="productCart_body">
                                     <Card.Img className="productCartImg" variant="top" src={'http://180.149.241.208:3022/' + dashbordProduct[i][0].product_image} />
                                     <Card.Body className="productCart_body_display">
                                     <Card.Title className="productCart_title">{dashbordProduct[i][0].product_name}</Card.Title>
                                     <Card.Text className="productCart_price">₹{dashbordProduct[i][0].product_cost}</Card.Text>
                                     <button className="productCart_button">Add To Cart</button>
                                     <Card.Text className="productCart_rating">{(isNaN(dashbordProduct[i][0].product_rating))?0:dashbordProduct[i][0].product_rating}</Card.Text>
                                     <Card.Text className="productCart_rating">
                                     <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>
                                     </Card.Text>
                                     </Card.Body>
                                 </div>
                             </Card>
                        )
                    }))
                    }
                    </div>
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