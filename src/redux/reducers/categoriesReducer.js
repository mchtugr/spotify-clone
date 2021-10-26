import {
  BROWSE_CATEGORIES_ERROR,
  BROWSE_CATEGORIES_LOADING,
  BROWSE_CATEGORIES_SUCCESS,
} from '../types'

const initialState = {
  list: [],
  loading: false,
  error: null,
}

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case BROWSE_CATEGORIES_LOADING:
      return { ...state, loading: true }
    case BROWSE_CATEGORIES_SUCCESS:
      return { ...state, loading: false, error: null, list: action.payload }
    case BROWSE_CATEGORIES_ERROR: {
      return { ...state, loading: false, error: action.payload }
    }
    default:
      return state
  }
}

export default categoriesReducer
