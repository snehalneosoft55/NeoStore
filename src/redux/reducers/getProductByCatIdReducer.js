import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:'',
  
};
const getProductByCatIdReducer = (state = initialState, action) => {
console.log("action.payload in cat",action.payload);
  switch (action.type) {
    
    case actionTypes.GET_PRODUCT_BY_CAT_ID:
      console.log("action.payload in car red===",action.payload);
      return {
        
        ...state,
        getProductByCatId: action.payload,
      
      };
      
    default:
        return state
  }
};

export default getProductByCatIdReducer;