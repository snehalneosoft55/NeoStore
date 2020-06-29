import * as actionTypes from "../lib/constants/actionTypes"

import axios from 'axios'
const getCategoriesSuccess = data => (
  
    {
    type: actionTypes.GET_CATEGORIES,
    payload: data
  });

  export function getCategories() 
  {
    console.log("in getcategories action");
    return function(dispatch) {
        return axios.get("http://180.149.241.208:3022/getAllCategories")
            .then(({ data }) =>
            {
                //console.log("data categories------",data);
                dispatch(getCategoriesSuccess(data));
            });
    };
  }