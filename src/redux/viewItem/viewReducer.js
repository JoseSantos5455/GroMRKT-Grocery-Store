import { VIEW, SET } from './viewTypes'

const initialState = {
    name: 'Chilli',
    oldPrice: '20.00',
    newPrice: '17.00',
    qty: 'KG'
}

const viewReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW: return {
            ...state,
        }
        case SET: return {
            ...state,
            name: action.payload.name,
            oldPrice: action.payload.oldPrice,
            newPrice: action.payload.newPrice,
            qty: action.payload.qty
        }
        default: return state
    }
}

export default viewReducer