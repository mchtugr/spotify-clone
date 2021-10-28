import {
  GET_PLAYLIST_ERROR,
  GET_PLAYLIST_LOADING,
  GET_PLAYLIST_SUCCESS,
} from '../types'

const initialState = {
  data: {},
  error: null,
  loading: true,
}

const currentPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYLIST_LOADING:
      return { ...state, loading: true }
    case GET_PLAYLIST_SUCCESS:
      return { ...state, error: null, loading: false, data: action.payload }
    case GET_PLAYLIST_ERROR:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}

export default currentPlaylistReducer
