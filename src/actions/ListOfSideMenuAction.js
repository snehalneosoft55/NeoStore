import * as actionTypes from "../lib/constants/actionTypes";
import {BASE_URL} from '../constants/BaseURL'

import axios from 'axios'
const getCategoriesSuccess = data => (
  
    {
    type: actionTypes.GET_CATEGORIES,
    payload: data
  });

  export function getCategories() 
  {
    //console.log("in getcategories action");
    return function(dispatch) {
        return axios.get(BASE_URL+"getAllCategories")
            .then(({ data }) =>
            {
                ////console.log("data categories------",data);
                dispatch(getCategoriesSuccess(data));
            });
    };
  }