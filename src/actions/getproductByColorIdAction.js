import * as actionTypes from "../lib/constants/actionTypes";
import {BASE_URL} from '../constants/BaseURL'

import axios from 'axios';

const getProductByColorIdSuccess = data => (
  
    {
    type: actionTypes.GET_PRODUCT_BY_COLOR_ID,
    payload: data
  });

  export function getProductByColorId(val) 
  {
    return function(dispatch) {
        return axios.get(BASE_URL + "commonProducts", {params: { color_id: val }})
            .then(({ data }) =>
            {
                console.log("data colors",data);
                const products = data.product_details;
                console.log("products",products);
                dispatch(getProductByColorIdSuccess(products));
            });
    };
  }
  