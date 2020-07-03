import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};
const productReducer = (state = initialState, action) => {
  ////console.log("'",action.type,"10");////console.log(state);
  switch (action.type) {
    
    case actionTypes.GET_PRODUCT:
      ////console.log("in switch",action.payload);
      return {
        
        ...state,
        productData: action.payload,
      };
      
    default:
      ////console.log("In default", state.productData)
        return state
  }
};

export default productReducer;