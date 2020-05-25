import { combineReducers } from 'redux'
import viewReducer from './viewItem/viewReducer'
import categoryReducer from './category/categoryReducer'
import cartReducer from './cart/cartReducer'

const rootReducer = combineReducers({
    view: viewReducer,
    category: categoryReducer,
    cart: cartReducer
})

export default rootReducer