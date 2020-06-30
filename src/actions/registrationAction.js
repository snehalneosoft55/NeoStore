import axios from 'axios'
import {BASE_URL} from '../constants/BaseURL'

import * as actionTypes from "../lib/constants/actionTypes";
const postUserData = data => (
  {
  type: actionTypes.REGISTER,
  payload: data
});

export function postUserInfo(userData1) {
    ////console.log('in action call');
  return function(dispatch) {
    return axios.post(BASE_URL+'register',userData1)
      .then(({ data }) => {
        alert(data.message);
      dispatch(postUserData(data));
    })
    .catch( (error) =>{
        alert("Error",error.message);
    });
  };
}
