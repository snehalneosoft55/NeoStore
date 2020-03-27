import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  NoOfProducts:10
};

const productReducer = (state = initialState, action) => {
  console.log("'",action.type,"10");console.log(state);
  switch (action.type) {
    
    case actionTypes.DISPLAYPRODUCTS:
      console.log("in switch");
      return {
        
        ...state,
        NoOfProducts : state.NoOfProducts -1
        
      };
      
    default:
      console.log("In default", state.NoOfProducts)
        return state
  }
};

export default productReducer;