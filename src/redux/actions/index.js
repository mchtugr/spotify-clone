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
  SELECT_LANGUAGE,
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

export const getUserDetails = () => (dispatch, getState) => {
  dispatch({ type: GET_USER_DETAILS_LOADING })
  axios
    .get('https://api.spotify.com/v1/me/', {
      headers: {
        Authorization: 'Bearer ' + getState().user.token,
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
  const state = getState()
  axios
    .get('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        Authorization: 'Bearer ' + state.user.token,
        'Content-Type': 'application/json',
      },
      params: {
        country: 'TR',
      },
    })
    .then((data) => {
      console.log(data)
      dispatch({
        type: BROWSE_CATEGORIES_SUCCESS,
        payload: data.data.categories.items,
      })
    })
    .catch((error) => {
      dispatch({ type: BROWSE_CATEGORIES_ERROR, payload: error })
    })
}

export const selectLanguage = (lang) => {
  return { type: SELECT_LANGUAGE, payload: lang }
}
