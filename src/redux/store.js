import { createStore, applyMiddleware } from 'redux'
import ProductReducer from './Products/ProductReduser'
import thunk from 'redux-thunk'
// import applyMiddleware from 'redux-thunk'


const store = createStore(ProductReducer,applyMiddleware(thunk))

export default store