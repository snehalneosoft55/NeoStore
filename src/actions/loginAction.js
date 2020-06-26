import axios from 'axios'
import swal from 'sweetalert';
import * as actionTypes from "../lib/constants/actionTypes";
const loginUser = data => {
  console.log("in action.js---in function where payload is defined")
  return({
    type: actionTypes.LOGIN,
    payload: data
  });
}

let status={code:0};
function loginUserInfo(userData1) 
{
  console.log('in action ---where we call axios');
  return function(dispatch) 
  {
    return axios.post('https://5e94f67d50bd.ngrok.io/login',userData1)
      .then(({ data }) => {
        console.log("print status",data)
        // this.props.history.push('./');
        //  status.code=data.status_code;
        console.log('status---------',data.message)

        // swal(data.message);
        alert(data.message);
        

      dispatch(loginUser(data));
    })
    .catch( (error) =>{
      console.log("error::",error)

      // let x=JSON.parse(error.request.response);

      // console.log("to print error status",x.status_code);
      // status=x.status_code;
      // swal(x.message);
      // swal(error.request.response);
        // alert("Error",data.message);
    });
  };
}

export {loginUserInfo,status};