import { ADD_TO_CART } from './cartTypes'

export const addToCart = (state) => {
    return {
        type: ADD_TO_CART,
        payload: state
    }
}