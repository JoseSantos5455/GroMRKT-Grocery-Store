import { VIEW_CATEGORY, SET_CATEGORY } from './categoryType'

const initialState = {
    category: 'Vegetables'
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_CATEGORY: return {
            ...state
        }
        case SET_CATEGORY: return {
            ...state,
            category: action.payload.category
        }
        default: return state
    }
}

export default categoryReducer