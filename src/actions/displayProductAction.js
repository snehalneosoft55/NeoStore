import * as actionTypes from "../lib/constants/actionTypes";

import axios from 'axios'
const getProductsSuccess = data => (
  
  {
  type: actionTypes.GET_PRODUCT,
  payload: data
});

export function getProducts() {
  return function(dispatch) {
    return axios.get("http://180.149.241.208:3022/getAllProducts")
      .then(({ data }) => {
        console.log("in axios1",data.product_details);
        const x=data.product_details;
        
        console.log("in axios2",x);
      dispatch(getProductsSuccess(x));
    });
  };
}
