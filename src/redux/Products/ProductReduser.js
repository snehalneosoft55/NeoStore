import { GET_PRODUCT } from './productType'

const initialState = {
    NoOfProducts:10
}
const ProductReducer = (state = initialState,action)=>{
    switch(action.type){
        case GET_PRODUCT: return {
            ...state,
            NoOfProducts:state.NoOfProducts-1
        }
        default:return false
    }
}

export default ProductReducer;

