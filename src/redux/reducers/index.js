import { combineReducers } from 'redux'
import userReducer from './userReducer'
import categoriesReducer from './categoriesReducer'
import featuredPlaylistsReducer from './featuredPlayListsReducer'
import currentPlaylistReducer from './currentPlaylistReducer'

export default combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  playlists: featuredPlaylistsReducer,
  currentPlaylist: currentPlaylistReducer,
})
