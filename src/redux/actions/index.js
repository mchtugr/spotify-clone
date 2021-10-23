import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERROR } from '../types'
const login = () => (dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  })
}
