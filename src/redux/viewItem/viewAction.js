import { VIEW, SET } from './viewTypes'

export const viewItem = () => {
    return {
        type: VIEW,
    }
}

export const setItem = (state) => {
    return {
        type: SET,
        payload: state
    }
}