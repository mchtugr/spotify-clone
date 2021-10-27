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
  const state = getState()
  axios
    .get('https://api.spotify.com/v1/me/top/tracks', {
      headers: {
        Authorization:
          'Bearer ' +
          'BQCAwBf4GjFocZGh_vcduXo0sfcsRhU1IFRC5AoIAGPpReCbONOPDLmS0gbCrBqr6i_E7vqD9uBf_sSU435KWqGfWgGGa_CCp0jpyqaAQQeufT-YRl9wQoupj54blOwcVe5VX5--3LolKKQ16KDnHmlnwNN1KHxniiCGNCoGBo6FqWlPi75U',
        'Content-Type': 'application/json',
      },
      // params: {
      //   country: 'TR',
      // },
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
