import * as actionTypes from "../lib/constants/actionTypes";

// export const displayProduct = data => ({
//   type: actionTypes.DISPLAYPRODUCTS,
// //   payload: data
// });

import axios from 'axios'

// export function displaydata(){
//   return (dispatch)=>{
//     return axios.get(`http://180.149.241.208:3022/getAllProductsInDescending`).then((response)=>{
//       console.log("image",response.data.product_details.product_image);
//       dispatch((response.data.product_details.product_image)) 
//     })
//   }
// }
// export const displayProduct = data => (
//   // console.log('he');
//   {
//     type: actionTypes.DISPLAYPRODUCTS,
//     data:data
//   //   payload: data
//   })
const getProductsSuccess = data => (
  
  {
  type: actionTypes.GET_PRODUCT,
  payload: data
});

export function getProducts() {
  return function(dispatch) {
    // return  axios.get(`http://180.149.241.208:3022/getAllProductsInDescending`)
    //     .then(res => {
    //         const product = res.data;
    //         this.setState({product});
    //         console.log(res,product);
    //     })
    return axios.get("http://180.149.241.208:3022/getAllProductsInDescending")
      .then(({ data }) => {
        // console.log("in axios",data.product_details);
      dispatch(getProductsSuccess(data));
    });
  };
}
