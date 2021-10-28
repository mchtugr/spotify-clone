import {
  GET_TOP_ARTISTS_ERROR,
  GET_TOP_ARTISTS_LOADING,
  GET_TOP_ARTISTS_SUCCESS,
} from '../types'

const initialState = {
  list: [],
  loading: true,
  error: null,
}

const topArtistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_ARTISTS_LOADING:
      return { ...state, loading: true }
    case GET_TOP_ARTISTS_SUCCESS:
      return { ...state, loading: false, error: false, list: action.payload }
    case GET_TOP_ARTISTS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default topArtistsReducer
