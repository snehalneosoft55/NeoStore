import { combineReducers } from "redux";

import productData from "./productReducer";
import userData from "./registerReducer";
import loginData from "./loginReducer";
import popularProducts from "./PopularProductReducer";
import ProductDetailsReducer from "./ProductDetailsReducer";
import getColorsReducer from "./getColorsReducer";
import getCategoriesReducer from "./ListOfSideMenuReducer";
import getProductByCatIdReducer from './getProductByCatIdReducer';
import getProductByColorIdReducer from './getProductByColorIdReducer'
const rootReducer = combineReducers({
    productData,
    userData,
    loginData,
    popularProducts,
    ProductDetailsReducer,
    getColorsReducer,
    getCategoriesReducer,
    getProductByCatIdReducer,
    getProductByColorIdReducer
});

export default rootReducer;