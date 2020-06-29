import * as actionTypes from "../lib/constants/actionTypes"

import axios from 'axios';

const getProductByColorIdSuccess = data => (
  
    {
    type: actionTypes.GET_PRODUCT_BY_COLOR_ID,
    payload: data
  });

  export function getProductByColorId() 
  {
    return function(dispatch) {
        return axios.get("")
            .then(({ data }) =>
            {
                //console.log("data colors",data);
                dispatch(getProductByColorIdSuccess(data));
            });
    };
  }