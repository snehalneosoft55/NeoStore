import * as actionTypes from "../../lib/constants/actionTypes";

const initialState = {
  data:''
};
const getcustData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_PRODUCT:
      return {
        ...state,
        popularProducts: action.payload,
      };
    default:
        return state
  }
};

export default getcustData;