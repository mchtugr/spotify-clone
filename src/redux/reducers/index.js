import { combineReducers } from 'redux'
import userReducer from './userReducer'

export default combineReducers({
  user: userReducer,
  second: () => 'hi from secondReducer',
})
