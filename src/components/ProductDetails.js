import React from 'react';

import Footer from './footer';
import HomeNavBar from './navbar';

import {Container,Row,Col} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import {getProductDetail}  from '../actions/ProductDetailsAction';
import { connect } from 'react-redux';
import '../assets/css/productDetails.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class ProductDetails extends React.Component{
    componentWillMount(){
        // console.log("in componentwill mount---1111",this.props.location.state.productId);
        let productId = this.props.location.state.productId;
        this.props.getProductDetail(productId).then(() => {
            const { productDetails } = this.props;
            // console.log("in componentwill mount---",productDetails.product_name);
      })
    }
    render()
    {
        const { productDetails } = this.props;
        let title;
        let cost;
        let productColor;
        let imgUrl;
        let subimages=[];
        let productDescription;
        let dimensions;
        let material;
        let Manufacturer;
        if(productDetails !== undefined)
        {
            title = productDetails.product_name;
            cost = productDetails.product_cost;
            productColor = productDetails.color_id.color_name;
            productDescription = productDetails.product_desc;
            imgUrl = productDetails.product_image;
            dimensions = productDetails.product_dimension;
            material = productDetails.product_material;
            Manufacturer = productDetails.product_producer;

            for( let i=0;i<productDetails.subImages_id.product_subImages.length;i++)
            {
                subimages[i] = productDetails.subImages_id.product_subImages[i];
            }
        }
        
        return(
            <div className="productDetail">
                <HomeNavBar/>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <Row>
                                    <img 
                                        className="productDetailImg" 
                                        src={'http://180.149.241.208:3022/' + imgUrl}
                                    />
                                </Row>
                                <Row className="subimagesWrapper" >
                                    {
                                        subimages.map((subimages,i)=>{
                                            return(
                                                <img 
                                                    className="productDetailSubImg" 
                                                    src={'http://180.149.241.208:3022/' + subimages}
                                                />  
                                            )
                                        })
                                    }
                                </Row>
                            </Col>
                            <Col>
                                <div className="productDetailInfo">
                                    <h3>{title}</h3>
                                    <StarRatingComponent 
                                        name="rate2" 
                                        editing={false}
                                        renderStarIcon={() => <span className="star">★</span>}
                                        starCount={5}
                                        value={2}
                                    />
                                    <hr></hr>
                                    <h5 >Price:<span className="productDetailInfoPrice">₹{cost}</span></h5>
                                    <h5>color:<div 
                                            class="square" 
                                            style={{backgroundColor:`${productColor}`}}>
                                        </div></h5>
                                        
                                        <div className="productDetailInfoButtons">
                                            <button className="productDetailInfoButton1">ADD TO CART</button>
                                            <button className="productDetailInfoButton2">RATE PRODUCT</button>
                                        </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Tabs className="productDetailInfoTab">
                                <TabList>
                                    <Tab>Description</Tab>
                                    <Tab>Features</Tab>
                                </TabList>
                                <TabPanel>
                                    <p>{productDescription}</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>Dimensions : {dimensions}</p>
                                    <p>Marerial : {material}</p>
                                    <p>Manufacturer : {Manufacturer}</p>
                                </TabPanel>
                            </Tabs>
                        </Row>
                    </Container>
                </div>
                <hr></hr>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = state => 
{
    // console.log("in mapstateToprops#####",state.ProductDetailsReducer.productDetails)
    return({
    productDetails: state.ProductDetailsReducer.productDetails
  });}

const mapDispatchToProps = {
    getProductDetail
};
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);