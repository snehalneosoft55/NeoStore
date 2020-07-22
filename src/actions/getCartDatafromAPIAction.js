import * as actionTypes from "../lib/constants/actionTypes";
import { BASE_URL } from "../constants/BaseURL";

import axios from "axios";
import swal from "sweetalert";

const getCartDataFromApiSuccess = (data) => ({
  type: actionTypes.GET_CART_DATA_FROM_API,
  payload: data,
});
export function getCartDataFromApi(token) {
  console.log("Cart API in action of getcartdata from api");
  return function (dispatch) {
    return axios
      .get(BASE_URL + "getCartData", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        console.log("Cart API response ", res.data.product_details);
        dispatch(getCartDataFromApiSuccess(res.data.product_details));
      })
      .catch((error) => {
        swal(`Error : ${error.message}`);
      });
  };
}
