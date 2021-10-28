import { combineReducers } from 'redux'
import userReducer from './userReducer'
import categoriesReducer from './categoriesReducer'
import featuredPlaylistsReducer from './featuredPlayListsReducer'
import currentPlaylistReducer from './currentPlaylistReducer'
import newReleasesReducer from './newReleasesReducer'
import topArtistsReducer from './topArtistsReducer'
import searchReducer from './searchReducer'

export default combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  playlists: featuredPlaylistsReducer,
  currentPlaylist: currentPlaylistReducer,
  newReleases: newReleasesReducer,
  topArtists: topArtistsReducer,
  search: searchReducer,
})
