import axios from 'axios'
import * as actionTypes from "../lib/constants/actionTypes";
const loginUser = data => (
  {
  type: actionTypes.LOGIN,
  payload: data
});

export function loginUserInfo(userData1) {
    console.log('in action call');
  return function(dispatch) {
    return axios.post('http://180.149.241.208:3022/login',userData1)
      .then(({ data }) => {
        alert(data.message);
      dispatch(loginUser(data));
    })
    .catch( (error) =>{
        alert("Error",error.message);
    });
  };
}
