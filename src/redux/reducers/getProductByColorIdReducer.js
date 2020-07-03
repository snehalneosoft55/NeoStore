import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
  
};
const getProductByColorIdReducer = (state = initialState, action) => {
////console.log("action.payload",action.payload);
  switch (action.type) {
    
    case actionTypes.GET_PRODUCT_BY_COLOR_ID:
      console.log("in reducer",action.payload);
      return {
        
        ...state,
        getProductBYColorId: action.payload,
      
      };
      
    default:
        return state
  }
};

export default getProductByColorIdReducer;