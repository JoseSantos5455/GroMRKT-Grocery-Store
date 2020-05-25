import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes'

const initialState = {
    items: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: return {
            ...state,
            items: [...state.items, action.payload]
        }
        case REMOVE_FROM_CART: return {
            ...state,
            items: state.items.filter(element => element.name !== action.payload)
        }
        default: return state
    }

}

export default cartReducer