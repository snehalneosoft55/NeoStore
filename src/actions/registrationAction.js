import axios from 'axios'
import * as actionTypes from "../lib/constants/actionTypes";
const postUserData = data => (
  {
  type: actionTypes.REGISTER,
  payload: data
});

export function postUserInfo(userData1) {
    console.log('in action call',userData1);
  return function(dispatch) {
    return axios.post('http://180.149.241.208:3022/register',{userData1})
      .then(({ data }) => {
        console.log("in axios1",data.message);
      dispatch(postUserData(data));
    });
  };
}
