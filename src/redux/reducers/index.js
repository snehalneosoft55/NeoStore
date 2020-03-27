import { combineReducers } from "redux";

import productData from "./productReducer";

const rootReducer = combineReducers({
    productData
});

export default rootReducer;