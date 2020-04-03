import { combineReducers } from "redux";

import productData from "./productReducer";
import userData from "./registerReducer";
import loginData from "./loginReducer";
import popularProducts from "./PopularProductReducer";

const rootReducer = combineReducers({
    productData,
    userData,
    loginData,
    popularProducts
});

export default rootReducer;