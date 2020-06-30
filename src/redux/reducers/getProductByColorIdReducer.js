import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:'',
  getProductbBYColorId:''
};
const getProductByColorIdReducer = (state = initialState, action) => {
////console.log("action.payload",action.payload);
  switch (action.type) {
    
    case actionTypes.GET_PRODUCT_BY_COLOR_ID:
      return {
        
        ...state,
        getProductbBYColorId: action.payload,
      
      };
      
    default:
        return state
  }
};

export default getProductByColorIdReducer;