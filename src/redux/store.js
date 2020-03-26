import { createStore } from 'redux'
import ProductReducer from './Products/ProductReduser'

const store = createStore(ProductReducer)

export default store