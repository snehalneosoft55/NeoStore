import React from "react";
// productDetail.js

import Footer from "./footer";
import HomeNavBar from "./navbar";
import axios from "axios";

import { Container, Row, Col, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { getProductDetail } from "../actions/ProductDetailsAction";
import { connect } from "react-redux";
import "../assets/css/productDetails.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddToCart from "./AddToCart";
import Loading from "./Loading";
import swal from "sweetalert";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import getProductRate from "../actions/rateProductAction";
import { BASE_URL } from "../constants/BaseURL";
// import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      showImg: "",
      checkLoader: false,
      showRateProductDiv: false,
      disableSubmitRateProduct: true,
      rateProductValue: 0,
      open:false
    };
  }
  changeImg(subimage) {
    this.setState({ showImg: subimage });
  }
  componentWillMount() {
    this.setState({ checkLoader: true });

    // ////console.log("in componentwill mount---1111",this.props.location.state.productId);
    let productId = this.props.location.state.productId;
    this.props.getProductDetail(productId).then(() => {
      const { productDetails } = this.props;
      let imgUrl = productDetails.product_image;
      this.setState({ showImg: imgUrl, checkLoader: false });

      // ////console.log("in componentwill mount---",productDetails.product_name);
    });
  }

  rateProduct = () => {
    const token = localStorage.getItem("token");
    //   console.log("token");
    if (token === null) {
      // swal("Please Login");
      swal({
        title: "Please Login",
        text: "You have to login first before rate the product",

        button: "Ok",
      });
      this.props.history.push("/signIn");
    } else {
      let showDiv = this.state.showRateProductDiv;

      this.setState({ showRateProductDiv: !showDiv });
    }
  };
  /**
   * @desc execuete when customer rate the product
   * @param event $e for value of rating
   */
  rateProductHandler = (e) => {
    e.preventDefault();
    console.log("e.target.value", e.target.value);

    this.setState({
      rateProductValue: e.target.value,
      disableSubmitRateProduct: false,
    });
  };

  /**
   * @desc hide product rate div
   */
  cancelRateProductHandler = () => {
    this.setState({ showRateProductDiv: !this.state.showRateProductDiv });
  };

  /**
   * @desc execuet after customer click on done button
   */
  submitRateHandler = () => {
    console.log("in submit");
    const { productDetails } = this.props;
    const rating = this.state.rateProductValue;
    // console.log("rating",rating);
    if (
      rating !== "" &&
      rating !== null &&
      rating !== undefined &&
      productDetails !== undefined
    ) {
      const data = {
        product_rating: rating,
        product_id: productDetails.product_id,
      };
      this.props.getProductRate(data);
      this.setState({ showRateProductDiv: false });
    }
  };

  render() {
    
    if (this.state.checkLoader === true) {
      return <Loading></Loading>;
    }
    const { productDetails } = this.props;
    let title;
    let cost;
    let productColor;
    let imgUrl;
    let subimages = [];
    let productDescription;
    let dimensions;
    let material;
    let Manufacturer;
    // console.log("productDetails===",productDetails.product_id)
    if (productDetails !== undefined) {
      title = productDetails.product_name;
      cost = productDetails.product_cost;
      productColor = productDetails.color_id.color_code;
      productDescription = productDetails.product_desc;
      imgUrl = productDetails.product_image;
      dimensions = productDetails.product_dimension;
      material = productDetails.product_material;
      Manufacturer = productDetails.product_producer;

      for (
        let i = 0;
        i < productDetails.subImages_id.product_subImages.length;
        i++
      ) {
        subimages[i] = productDetails.subImages_id.product_subImages[i];
      }
    }
    var color = {
      backgroundColor: productColor,
    };
    console.log("color in product detail page=", productColor);
    return (
      <div className="productDetail">
        <HomeNavBar />
        <div>
          <Container>
            <Row>
              <Col>
                <Row>
                  <img
                    className="productDetailImg"
                    src={"http://180.149.241.208:3022/" + this.state.showImg}
                  />
                </Row>
                <Row className="subimagesWrapper">
                  {subimages.map((subimage, i) => {
                    return (
                      <div>
                        <Zoom>
                        <img
                        className="productDetailSubImg"
                        src={"http://180.149.241.208:3022/" + subimage}
                        onClick={(ev) => this.changeImg(subimage)}
                      />
                      </Zoom>
                      </div>
                      
                      
                    );
                  })}
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
                  <h5>
                    Price:
                    <span className="productDetailInfoPrice">₹{cost}</span>
                  </h5>
                  <h5>
                    color:
                    <span
                      className="square"
                      style={{ backgroundColor: `${productColor}` }}
                    ></span>
                  </h5>

                  <div className="productDetailInfoButtons">
                    <AddToCart
                      color="blue"
                      width="160px"
                      height="40px"
                      ProductData={this.props}
                    />
                    {/* <button className="productDetailInfoButton1">ADD TO CART</button> */}
                    <button
                      className="productDetailInfoButton2"
                      onClick={this.rateProduct}
                    >
                      Rate Product
                    </button>
                  </div>
                </div>
                {this.state.showRateProductDiv ? (
                  <div>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <h6>Rate The Product</h6>
                      <hr></hr>
                      <span>
                        {" "}
                        <Rating
                          name="rating"
                          value={this.state.rateProductValue}
                          precision={0.5}
                          onChange={this.rateProductHandler}
                        />
                      </span>
                      <span>
                        <button
                          disabled={this.state.disableSubmitRateProduct}
                          onClick={this.submitRateHandler}
                        >
                          Done
                        </button>
                      </span>
                      <span>
                        <button
                          onClick={this.cancelRateProductHandler}
                          style={{ marginLeft: "3%" }}
                        >
                          Cancel
                        </button>
                      </span>
                    </Box>
                  </div>
                ) : null}
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
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // ////console.log("in mapstateToprops#####",state.ProductDetailsReducer.productDetails)
  return {
    productDetails: state.ProductDetailsReducer.productDetails,
    rateProduct: state.rateProductReducer,
  };
};

const mapDispatchToProps = {
  getProductDetail,
  getProductRate,
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
);
