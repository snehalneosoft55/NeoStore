import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};
const registerReducer = (state = initialState, action) => {
  ////console.log("'",action.type,"10");////console.log(state);
  switch (action.type) {
    
    case actionTypes.REGISTER:
      ////console.log("in switch",action.payload);
      return {
        
        ...state,
        userData: action.payload,
      };
      
    default:
      ////console.log("In default", state.userData)
        return state
  }
};

export default registerReducer;