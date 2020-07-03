import * as actionTypes from "../lib/constants/actionTypes"
import {BASE_URL} from '../constants/BaseURL'

import axios from 'axios'
const getPopularProductsSuccess = data => (
  
    {
    type: actionTypes.GET_POPULAR_PRODUCT,
    payload: data
  });
  export function getPopularProducts() {
      ////console.log("in Popular product action");
    return function(dispatch) {
      //return axios.get("http://180.149.241.208:3022/getAllProducts")
      return axios.get(BASE_URL+'defaultTopRatingProduct')
        .then(({ data }) => {
          ////console.log("in axios1",data);
          const x=data.product_details;
          //const x=data;
        ////console.log("in axios2",x);
        dispatch(getPopularProductsSuccess(x));
      });
    };
  }