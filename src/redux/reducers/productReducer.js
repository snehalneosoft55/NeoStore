import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};

// switch (action.type) {
//   case types.GET_PRODUCT:
//     return {
//       productData: action.payload.data,
//     };

//   default:
//     return state;
// }
const productReducer = (state = initialState, action) => {
  console.log("'",action.type,"10");console.log(state);
  switch (action.type) {
    
    case actionTypes.GET_PRODUCT:
      console.log("in switch",action.payload);
      return {
        
        ...state,
        productData: action.payload,
        // data : action.data
        
      };
      
    default:
      console.log("In default", state.productData)
        return state
  }
};

export default productReducer;