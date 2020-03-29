import { combineReducers } from "redux";

import productData from "./productReducer";
import userData from "./registerReducer";
import loginData from "./loginReducer"

const rootReducer = combineReducers({
    productData,
    userData,
    loginData
});

export default rootReducer;