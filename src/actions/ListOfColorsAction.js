import * as actionTypes from "../lib/constants/actionTypes";
import {BASE_URL} from '../constants/BaseURL'

import axios from 'axios'
const getColorsSuccess = data => (
  
    {
    type: actionTypes.GET_COLORS,
    payload: data
  });

  export function getColors() 
  {
    return function(dispatch) {
        return axios.get(BASE_URL+"getAllColors")
            .then(({ data }) =>
            {
                ////console.log("data colors",data);
                dispatch(getColorsSuccess(data));
            });
    };
  }