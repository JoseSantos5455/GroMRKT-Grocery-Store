import { GET_USER, SET_USER } from './userType'

export const getUser = () => {
    return {
        type: GET_USER
    }
}

export const setUser = (state) => {
    return {
        type: SET_USER,
        payload: state
    }
}