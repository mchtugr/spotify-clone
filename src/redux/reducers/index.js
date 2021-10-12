import { combineReducers } from 'redux'

export default combineReducers({
  first: () => 'hi from firstReducer',
  second: () => 'hi from secondReducer',
})
