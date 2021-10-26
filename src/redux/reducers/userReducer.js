import {
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_LOADING,
  GET_USER_DETAILS_SUCCESS,
  SET_USER_TOKEN,
} from '../types'

const initialState = {
  data: {},
  token: '',
  loading: false,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      }
    case GET_USER_DETAILS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_USER_DETAILS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload }
    case GET_USER_DETAILS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default userReducer
