import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes'

export const addToCart = (state) => {
    return {
        type: ADD_TO_CART,
        payload: state
    }
}

export const removeFromCart = (state) => {
    return {
        type: REMOVE_FROM_CART,
        payload: state
    }
}