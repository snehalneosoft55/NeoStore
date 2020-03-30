import axios from 'axios'
import swal from 'sweetalert';
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
        // console.log('in data',data.message)
        swal(data.message);
      dispatch(loginUser(data));
    })
    .catch( (error) =>{
      let x=JSON.parse(error.request.response);
      swal(x.message);
      // swal(error.request.response);
        // alert("Error",data.message);
    });
  };
}
