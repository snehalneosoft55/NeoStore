import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};
const rateProductReducer = (state = initialState, action) => {
////console.log("action.payload",action.payload);
  switch (action.type) {
    
    case actionTypes.RATE_PRODUCT:
      return {
        
        ...state,
        rateProduct: action.payload,
      
      };
      
    default:
        return state
  }
};

export default rateProductReducer;