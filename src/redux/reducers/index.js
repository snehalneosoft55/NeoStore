import { combineReducers } from "redux";

import productData from "./productReducer";
import userData from "./registerReducer";
import loginData from "./loginReducer";
import popularProducts from "./PopularProductReducer";
import ProductDetailsReducer from "./ProductDetailsReducer";
import getColorsReducer from "./getColorsReducer";
import listOfSideMenuReducer from "./ListOfSideMenuReducer"
const rootReducer = combineReducers({
    productData,
    userData,
    loginData,
    popularProducts,
    ProductDetailsReducer,
    getColorsReducer,
    listOfSideMenuReducer
});

export default rootReducer;