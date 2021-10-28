import {
  GET_NEW_RELEASES_ERROR,
  GET_NEW_RELEASES_LOADING,
  GET_NEW_RELEASES_SUCCESS,
} from '../types'

const initialState = {
  list: [],
  loading: true,
  error: null,
}

const newReleasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_RELEASES_LOADING:
      return { ...state, loading: true }
    case GET_NEW_RELEASES_SUCCESS:
      return { ...state, loading: false, error: false, list: action.payload }
    case GET_NEW_RELEASES_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default newReleasesReducer
