import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};
const loginReducer = (state = initialState, action) => {
  console.log("action data",action);
  switch (action.type) {
    
    case actionTypes.LOGIN:
      console.log("in reducer",action.payload);
      return {
        
        ...state,
        loginData: action.payload,
      };
      
    default:
      console.log("In reducer default", state.loginData)
        return state
  }
};

export default loginReducer;