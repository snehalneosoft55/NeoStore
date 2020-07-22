import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};
const cartDtaFromApiReducer = (state = initialState, action) => {
console.log("Cart API cartDtaFromApiReducer action",action.GET_CART_DATA_FROM_API);
  switch (action.type) {
    
    case actionTypes.GET_CART_DATA_FROM_API:
      return {
        
        ...state,
        cartDataFromApi: action.payload,
      
      };
      
    default:
        return state
  }
};

export default cartDtaFromApiReducer;