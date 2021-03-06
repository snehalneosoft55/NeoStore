import * as actionTypes from "../lib/constants/actionTypes";
import {BASE_URL} from '../constants/BaseURL'

import axios from 'axios'
const getProductsSuccess = data => (
  
  {
  type: actionTypes.GET_PRODUCT,
  payload: data
});

export function getProducts() {
  return function(dispatch) {
    //return axios.get("http://180.149.241.208:3022/getAllProducts")
    return axios.get(BASE_URL+"commonProducts")
      .then(({ data }) => {
        ////console.log("in axios1",data.product_details);
        const x=data.product_details;
        console.log("in axios of common products",x);
      dispatch(getProductsSuccess(x));
    });
  };
}
