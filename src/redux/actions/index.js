import {
  SET_USER_TOKEN,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_LOADING,
  GET_USER_DETAILS_SUCCESS,
  BROWSE_CATEGORIES_LOADING,
  BROWSE_CATEGORIES_SUCCESS,
  BROWSE_CATEGORIES_ERROR,
  SELECT_LANGUAGE,
  BROWSE_FEATURED_PLAYLISTS_LOADING,
  BROWSE_FEATURED_PLAYLISTS_SUCCESS,
  BROWSE_FEATURED_PLAYLISTS_ERROR,
  GET_PLAYLIST_LOADING,
  GET_PLAYLIST_SUCCESS,
  GET_PLAYLIST_ERROR,
  GET_NEW_RELEASES_LOADING,
  GET_NEW_RELEASES_SUCCESS,
  GET_NEW_RELEASES_ERROR,
} from '../types'

import axios from 'axios'

// CHANGE LANGUAGE
export const selectLanguage = (lang) => {
  return { type: SELECT_LANGUAGE, payload: lang }
}

// SAVE SPOTIFY ACCESS TOKEN
export const setUserToken = (token) => {
  return {
    type: SET_USER_TOKEN,
    payload: token,
  }
}

// GET INFO ABOUT CURRENT USER
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
      dispatch({ type: GET_USER_DETAILS_ERROR, payload: error.message })
    })
}

// BROWSE SEARCH CATEGORIES
export const browseCategories = () => (dispatch, getState) => {
  dispatch({ type: BROWSE_CATEGORIES_LOADING })
  const state = getState()
  axios
    .get('https://api.spotify.com/v1/browse/categories', {
      headers: {
        Authorization: 'Bearer ' + state.user.token,
        'Content-Type': 'application/json',
      },
      params: {
        country: getState().user.language,
      },
    })
    .then((data) => {
      dispatch({
        type: BROWSE_CATEGORIES_SUCCESS,
        payload: data.data.categories.items,
      })
    })
    .catch((error) => {
      dispatch({ type: BROWSE_CATEGORIES_ERROR, payload: error.message })
    })
}

// BROWSE FEATURED PLAYLISTS

export const browseFeaturedPlaylists = () => (dispatch, getState) => {
  dispatch({ type: BROWSE_FEATURED_PLAYLISTS_LOADING })
  const state = getState()
  axios
    .get('https://api.spotify.com/v1/browse/featured-playlists', {
      headers: {
        Authorization: 'Bearer ' + state.user.token,
        'Content-Type': 'application/json',
      },
      params: {
        country: getState().user.language,
      },
    })
    .then((data) => {
      dispatch({
        type: BROWSE_FEATURED_PLAYLISTS_SUCCESS,
        payload: data.data.playlists.items,
      })
    })
    .catch((error) => {
      dispatch({
        type: BROWSE_FEATURED_PLAYLISTS_ERROR,
        payload: error.message,
      })
    })
}

// GET SPECIFIC PLAYLIST BY ID

export const getPlaylist = (playlistId) => (dispatch, getState) => {
  dispatch({ type: GET_PLAYLIST_LOADING })
  axios
    .get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        Authorization: 'Bearer ' + getState().user.token,
        'Content-Type': 'application/json',
      },
      params: {
        country: getState().user.language,
      },
    })
    .then((data) => {
      dispatch({ type: GET_PLAYLIST_SUCCESS, payload: data.data })
    })
    .catch((error) => {
      dispatch({ type: GET_PLAYLIST_ERROR, payload: error.message })
    })
}

// Get a list of new album releases

export const getNewReleases = () => (dispatch, getState) => {
  dispatch({ type: GET_NEW_RELEASES_LOADING })

  axios
    .get('https://api.spotify.com/v1/browse/new-releases', {
      headers: {
        Authorization: 'Bearer ' + getState().user.token,
        'Content-Type': 'application/json',
      },
      params: {
        country: getState().user.language,
      },
    })
    .then((data) => {
      dispatch({
        type: GET_NEW_RELEASES_SUCCESS,
        payload: data.data.albums.items,
      })
    })
    .catch((error) => {
      dispatch({ type: GET_NEW_RELEASES_ERROR, payload: error.message })
    })
}
