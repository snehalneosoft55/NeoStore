import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};
const cartDtaReducer = (state = initialState, action) => {
console.log("cart data reducer action.payload",action.payload);
  switch (action.type) {
    
    case actionTypes.GET_CART_DATA:
      return {
        
        ...state,
        cartData: action.payload,
      
      };
      
    default:
        return state
  }
};

export default cartDtaReducer;