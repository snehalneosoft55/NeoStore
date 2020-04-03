import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};
const PopularProductReducer = (state = initialState, action) => {
//   console.log("'",action.type,"10");console.log(state);
  switch (action.type) {
    
    case actionTypes.GET_POPULAR_PRODUCT:
      console.log("in switch of popular product",action.payload);
      return {
        
        ...state,
        popularProducts: action.payload,
      };
      
    default:
      console.log("In default", state.popularProducts)
        return state
  }
};

export default PopularProductReducer;