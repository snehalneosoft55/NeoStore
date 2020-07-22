import * as actionTypes from "../lib/constants/actionTypes";
// import {BASE_URL} from '../constants/BaseURL'

// import axios from 'axios'
import swal from "sweetalert";

const getcartdataSuccess = (data) => ({
  type: actionTypes.GET_CART_DATA,
  payload: data,
});

export function getcartdata(productDetails) {
  return function (dispatch) {
    const myArray = localStorage.getItem("cartProducts");
    console.log("myArray: ", JSON.parse(myArray));
    let productsInLocalStorage,
      flag = false;

    if (myArray !== null&&myArray!=='') {
      productsInLocalStorage = JSON.parse(myArray);
      console.log(
        "in cart data action===productsInLocalStorage",
        productsInLocalStorage
      );

      productsInLocalStorage.map((val, i) => {
        let x = val;
        console.log("x==in cart data action", x);
        console.log("x---", x);
        if (i === 0) {
          console.log("x");
          // console.log("x==", x[0].productDetail.id);
          let z = x.productDetail.id;
          console.log("productDetails", productDetails);
          if (z === productDetails[i].productDetail.id) flag = true;
        } else {
          console.log("x in else==", x[0].productDetail.id);
          let a = x[0].productDetail.id;
          console.log(
            "in else productDetails",
            productDetails[0].productDetail.id
          );
          if (a === productDetails[0].productDetail.id) {
            flag = true;
          }
        }
        // if(x === productDetails.productDetail.id){
        //         flag = true;

        // }
      });

      if (flag === false) {
        productsInLocalStorage.push(productDetails);
        swal("Added to cart");
        console.log("productsInLocalStorage", productsInLocalStorage.length);
        // openSnackbar('Added to cart')
        // console.log("Modified myArray productsInLocalStorage: ",productsInLocalStorage);
      } else {
        swal("Already in cart");
      }
      localStorage.setItem(
        "cartProducts",
        JSON.stringify(productsInLocalStorage)
      );
      console.log("cartdata in localstorage==]]",JSON.parse(localStorage.getItem('cartProducts')));
    } else {
      console.log("productDetails", productDetails);
      localStorage.setItem("cartProducts", JSON.stringify(productDetails));
      console.log("cartProducts in action",JSON.parse(localStorage.getItem('cartProducts')));
    }
    return dispatch(getcartdataSuccess(productsInLocalStorage));
  };
}
