import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:'',
  getProductByCatId:''
};
const getProductByCatIdReducer = (state = initialState, action) => {
console.log("action.payload",action.payload);
  switch (action.type) {
    
    case actionTypes.GET_PRODUCT_BY_CAT_ID:
      return {
        
        ...state,
        getProductByCatId: action.payload,
      
      };
      
    default:
        return state
  }
};

export default getProductByCatIdReducer;