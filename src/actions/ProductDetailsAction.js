import * as actionTypes from "../lib/constants/actionTypes";
import { BASE_URL } from "../constants/BaseURL";

import axios from "axios";
const getProductDetailSuccess = data => ({
  type: actionTypes.GET_PRODUCT_DETAILS,
  payload: data
});
export function getProductDetail(productId) {
  ////console.log("in product details action");
  return function(dispatch) {
    //return axios.get("http://180.149.241.208:3022/getAllProducts")
    return axios
      .get(BASE_URL + "commonProducts?_id=" + productId)
      .then(({ data }) => {
        ////console.log("in details action",data.product_details[0]);
        //   const x=data.product_details;
        //const x=data;
        // ////console.log("in axios2",x);
        dispatch(getProductDetailSuccess(data.product_details[0]));
      });
  };
}
