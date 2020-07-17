import axios from "axios";
import { BASE_URL } from "../constants/BaseURL";

import * as actionTypes from "../lib/constants/actionTypes";
import swal from "sweetalert";
const postRate = (data) => ({
  type: actionTypes.RATE_PRODUCT,
  payload: data,
});

export default function getProductRate(data) {
    console.log("in rate product action");
  const token = localStorage.getItem("token");
  console.log(
    `token==${token} and data==${data},and product_rating==in action==${data.product_rating}`
  );
  return function (dispatch) {
    return axios.put(BASE_URL + "updateProductRatingByCustomer", data,{
        headers : {'Authorization': `Bearer ${token}`} 
    })
    .then(res=>{
        console.log("res====",res.data.message);
        swal(`res.data.message`)
    })
    // return axios ({
    //     method : 'PUT',
    //     url : `${BASE_URL}updateProductRatingByCustomer`,
    //     headers : {'Authorization': `Bearer ${token}`},
    //     data
    // }).then (response => {
    // //   const colorList = response.data.color_details
    //   dispatch(postRate(response))
    // })
    // .catch (error =>{
    //     // dispatch(fetchColorFailure(error))
    // })
    // return axios({
    //     mathod:'PUT',
    //     url : `${BASE_URL}updateProductRatingByCustomer`,
    //     headers : {'Authorization': `Bearer ${token}`},
    //     data 
    //   })
    //   .put(BASE_URL + "updateProductRatingByCustomer", data, {
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
      
    //   .then(({ res }) => {
        
    //     dispatch(postRate(res));
    //   })
    
  };
}
