import {
  BROWSE_FEATURED_PLAYLISTS_ERROR,
  BROWSE_FEATURED_PLAYLISTS_LOADING,
  BROWSE_FEATURED_PLAYLISTS_SUCCESS,
} from '../types'

const initialState = {
  list: [],
  error: null,
  loading: false,
}

const featuredPlaylistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BROWSE_FEATURED_PLAYLISTS_LOADING:
      return { ...state, loading: true }
    case BROWSE_FEATURED_PLAYLISTS_SUCCESS:
      return { ...state, loading: false, error: null, list: action.payload }
    case BROWSE_FEATURED_PLAYLISTS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default featuredPlaylistsReducer
