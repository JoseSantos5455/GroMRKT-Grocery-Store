import { VIEW_CATEGORY, SET_CATEGORY } from './categoryType'

export const viewCategory = () => {
    return {
        type: VIEW_CATEGORY
    }
}

export const setCategory = (state) => {
    return {
        type: SET_CATEGORY,
        payload: state
    }
}