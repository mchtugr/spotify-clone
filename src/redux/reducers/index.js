import { combineReducers } from 'redux'
import userReducer from './userReducer'
import categoriesReducer from './categoriesReducer'

export default combineReducers({
  user: userReducer,
  categories: categoriesReducer,
})
