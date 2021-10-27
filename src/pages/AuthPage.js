import React, { useEffect } from 'react'
import queryString from 'query-string'
import { useDispatch, useSelector } from 'react-redux'
import { setUserToken } from '../redux/actions'
import { Redirect } from 'react-router'

const AuthPage = ({ location, history }) => {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.user)
  useEffect(() => {
    let parsed = queryString.parse(location.hash)
    let accessToken = parsed.access_token
    if (accessToken) {
      dispatch(setUserToken(accessToken))
      history.push('/')
    }
  })

  if (token) {
    return <Redirect to='/' />
  }
  return (
    <h2
      style={{
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      Loading...
    </h2>
  )
}

export default AuthPage
