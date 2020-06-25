import * as actionTypes from "../lib/constants/actionTypes"

import axios from 'axios';

const getProductByCatIdSuccess = data => (
  
    {
    type: actionTypes.GET_PRODUCT_BY_CAT_ID,
    payload: data
  });

  export function getProductByCatId() 
  {
    return function(dispatch) {
        return axios.get("")
            .then(({ data }) =>
            {
                console.log("data colors",data);
                dispatch(getProductByCatIdSuccess(data));
            });
    };
  }