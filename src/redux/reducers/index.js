import { combineReducers } from "redux";

import productData from "./productReducer";
import userData from "./registerReducer"

const rootReducer = combineReducers({
    productData,
    userData
});

export default rootReducer;