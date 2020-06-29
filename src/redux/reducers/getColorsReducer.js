import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:'',
  colors:''
};
const getColorsReducer = (state = initialState, action) => {
//console.log("action.payload",action.payload);
  switch (action.type) {
    
    case actionTypes.GET_COLORS:
      return {
        
        ...state,
        colors: action.payload,
      
      };
      
    default:
        return state
  }
};

export default getColorsReducer;