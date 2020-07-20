import React from "react";

import { withSnackbar } from "react-simple-snackbar";
import swal from "sweetalert";
import {getcartdata} from  '../actions/cartDataAction'
import { connect } from "react-redux";


class AddToCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProduct: 0,
    };
  }
  componentDidMount() {
    const productData = this.props;
    const productDetail = productData.ProductData;
  }
  handleCart = async (e) => {
      console.log("handlecart in add to cart");
    const productData = this.props;
    const productDetail = productData.ProductData;
    const productDetails = [
      {
        productDetail: productDetail,
        quantity: 1,
      },
    ];
    this.props.getcartdata(productDetails);
    // const { openSnackbar, closeSnackbar } = this.props;



    // const myArray = localStorage.getItem("cartProducts");
    // // console.log("myArray: ",JSON.parse(myArray));
    // let productsInLocalStorage,
    //   flag = false;

    // if (myArray !== null) {
    //   productsInLocalStorage = JSON.parse(myArray);
    //   console.log("productsInLocalStorage", productsInLocalStorage);

    //   productsInLocalStorage.map((val, i) => {
    //     let x = val;
    //     // console.log("x==",x.productDetail.id)

    //     if (i === 0) {
    //       console.log("x");
    //       console.log("x==", x[0].productDetail.id);
    //       let z = x[0].productDetail.id;
    //       console.log("productDetails", productDetails);
    //       if (z === productDetails[i].productDetail.id) flag = true;
    //     } else {
    //       console.log("x in else==", x[0].productDetail.id);
    //       let a = x[0].productDetail.id;
    //       console.log(
    //         "in else productDetails",
    //         productDetails[0].productDetail.id
    //       );
    //       if (a === productDetails[0].productDetail.id) {
    //         flag = true;
    //       }
    //     }
    //     // if(x === productDetails.productDetail.id){
    //     //         flag = true;

    //     // }
    //   });

    //   if (flag === false) {
    //     productsInLocalStorage.push(productDetails);
    //     swal("Added to cart");
    //     console.log("productsInLocalStorage", productsInLocalStorage.length);
    //     // openSnackbar('Added to cart')
    //     // console.log("Modified myArray productsInLocalStorage: ",productsInLocalStorage);
    //   } else {
    //     alert("Already in cart");
    //   }
    //   await localStorage.setItem(
    //     "cartProducts",
    //     JSON.stringify(productsInLocalStorage)
    //   );
    // } else {
    //   console.log("productDetails", productDetails);
    //   await localStorage.setItem(
    //     "cartProducts",
    //     JSON.stringify(productDetails)
    //   );
    // }
  };
  render() {
    const { openSnackbar, closeSnackbar } = this.props;
    const {cartData} = this.props
    
    return (
      <button
        className="ProductCardwrapperButton"
        style={{
          marginLeft: this.props.m,
          backgroundColor: this.props.color,
          width: this.props.width,
          height: this.props.height,
        }}
        onClick={this.handleCart}
      >
        Add To Cart
      </button>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      cartData: state.cartDtaReducer,
    };
  };
  
  const mapDispatchToProps = {
    getcartdata
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);