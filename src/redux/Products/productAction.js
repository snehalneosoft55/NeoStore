import { GET_PRODUCT } from './productType'

export const getProduct = () =>{
    console.log('in action')
    return {
        
        type : GET_PRODUCT
    }
}