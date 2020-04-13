import { combineReducers } from "redux";

import productData from "./productReducer";
import userData from "./registerReducer";
import loginData from "./loginReducer";
import popularProducts from "./PopularProductReducer";
import ProductDetailsReducer from "./ProductDetailsReducer";

const rootReducer = combineReducers({
    productData,
    userData,
    loginData,
    popularProducts,
    ProductDetailsReducer
});

export default rootReducer;