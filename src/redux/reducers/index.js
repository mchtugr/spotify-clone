import { combineReducers } from 'redux'
import userReducer from './userReducer'
import categoriesReducer from './categoriesReducer'
import featuredPlaylistsReducer from './playListsReducer'

export default combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  playlists: featuredPlaylistsReducer,
})
