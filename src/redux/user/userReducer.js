import { GET_USER, SET_USER } from './userType'

const initialState = {
    userName: 'Anmol Chaudhary'
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER: return {
            ...state
        }
        case SET_USER: return {
            ...state,
            userName: action.payload
        }
        default: return state
    }
}

export default userReducer