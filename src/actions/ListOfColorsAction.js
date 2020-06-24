import * as actionTypes from "../lib/constants/actionTypes"

import axios from 'axios'
const getColorsSuccess = data => (
  
    {
    type: actionTypes.GET_COLORS,
    payload: data
  });

  export function getColors() 
  {
    return function(dispatch) {
        return axios.get("http://180.149.241.208:3022/getAllColors")
            .then(({ data }) =>
            {
                console.log("data colors",data);
                dispatch(getColorsSuccess(data));
            });
    };
  }