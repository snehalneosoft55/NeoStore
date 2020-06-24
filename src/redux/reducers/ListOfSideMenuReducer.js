import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:'',
  categories:''
};
const getCategoriesReducer = (state = initialState, action) => {
console.log("action.payload",action.payload);
  switch (action.type) {
    
    case actionTypes.GET_CATEGORIES:
      return {
        
        ...state,
        categories: action.payload,
      
      };
      
    default:
        return state
  }
};

export default getCategoriesReducer;