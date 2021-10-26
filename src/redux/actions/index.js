import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_USER_TOKEN,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_LOADING,
  GET_USER_DETAILS_SUCCESS,
  BROWSE_CATEGORIES_LOADING,
  BROWSE_CATEGORIES_SUCCESS,
  BROWSE_CATEGORIES_ERROR,
} from '../types'

import axios from 'axios'

export const login = () => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  })
}

export const setUserToken = (token) => {
  return {
    type: SET_USER_TOKEN,
    payload: token,
  }
}

export const getUserDetails = (token) => (dispatch) => {
  dispatch({ type: GET_USER_DETAILS_LOADING })
  axios
    .get('https://api.spotify.com/v1/me/', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    })
    .then((data) => {
      dispatch({ type: GET_USER_DETAILS_SUCCESS, payload: data.data })
    })
    .catch((error) => {
      dispatch({ type: GET_USER_DETAILS_ERROR, payload: error })
    })
}

export const browseCategories = () => (dispatch, getState) => {
  dispatch({ type: BROWSE_CATEGORIES_LOADING })

  axios
    .get('https://api.spotify.com/v1/browse/categories', {
      headers: {
        Authorization:
          'Bearer ' +
          'BQDjK91RXS1xrJQxw7M6hwt0dj3cH3rwqpPO3OKjBfdhQ2NiVSTIZ-R6drqRJb9L29t1zkFr_7FauyxP3Mh29MLTK6QN_bdtEomqyv-GrGU91oGgAAT6R-7xI5K1DEFSaZKsXQBFWLsSLJYS7ELo1Q6FS4zSQVLTkahDGcJZcNZ5j9SxMe9u',
        'Content-Type': 'application/json',
      },
      params: {
        country: 'TR',
      },
    })
    .then((data) => {
      dispatch({
        type: BROWSE_CATEGORIES_SUCCESS,
        payload: data.data.categories.items,
      })
    })
    .catch((error) => {
      dispatch({ type: BROWSE_CATEGORIES_ERROR, payload: error })
    })
}
