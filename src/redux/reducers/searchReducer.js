import {
  DISPLAY_DEFAULT_SEARCH_CATEGORIES,
  GET_SEARCH_RESULTS_ERROR,
  GET_SEARCH_RESULTS_LOADING,
  GET_SEARCH_RESULTS_SUCCESS,
} from '../types'

const initialState = {
  data: {
    artists: {},
    tracks: {},
    albums: {},
    playlists: {},
  },
  loading: true,
  error: null,
  displayDefault: true,
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULTS_LOADING:
      return { ...state, loading: true }
    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
        displayDefault: false,
      }
    case GET_SEARCH_RESULTS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case DISPLAY_DEFAULT_SEARCH_CATEGORIES:
      return { ...state, displayDefault: true }
    default:
      return state
  }
}

export default searchReducer
