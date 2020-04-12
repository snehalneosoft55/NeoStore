import axios from 'axios'
import swal from 'sweetalert';
import * as actionTypes from "../lib/constants/actionTypes";
const loginUser = data => (
  {
  type: actionTypes.LOGIN,
  payload: data
});
let status={code:0};
 function loginUserInfo(userData1) {
    console.log('in action call');
  return function(dispatch) {
    return axios.post('http://180.149.241.208:3022/login',userData1)
      .then(({ data }) => {
        console.log("print status",data)
        this.props.history.push('./');
        //  status.code=data.status_code;
        // console.log('status.code',status.code)
        // swal(data.message);
        

      dispatch(loginUser(data));
    })
    .catch( (error) =>{
      console.log("error::",error)

      let x=JSON.parse(error.request.response);

      console.log("to print error status",x.status_code);
      // status=x.status_code;
      swal(x.message);
      // swal(error.request.response);
        // alert("Error",data.message);
    });
  };
}

export {loginUserInfo,status};