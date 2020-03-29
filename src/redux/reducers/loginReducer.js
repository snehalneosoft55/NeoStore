import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};
const loginReducer = (state = initialState, action) => {
  console.log("'",action.type,"10");console.log(state);
  switch (action.type) {
    
    case actionTypes.LOGIN:
      console.log("in switch",action.payload);
      return {
        
        ...state,
        loginData: action.payload,
      };
      
    default:
      console.log("In default", state.loginData)
        return state
  }
};

export default loginReducer;