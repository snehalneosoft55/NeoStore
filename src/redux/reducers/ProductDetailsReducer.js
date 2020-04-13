import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};
const ProductDetailsReducer = (state = initialState, action) => {
//   console.log("'",action.type,"10");console.log(state);
  switch (action.type) {
    
    case actionTypes.GET_PRODUCT_DETAILS:
      console.log("in reducer of  product details",action.payload);
      return {
        
        ...state,
        productDetails: action.payload,
      };
      
    default:
      console.log("In default", state.productDetails)
        return state
  }
};

export default ProductDetailsReducer;