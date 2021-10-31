import React, { useEffect } from 'react'
import queryString from 'query-string'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import { setUserToken } from '../redux/actions'
import Loading from '../components/ui/Loading/Loading'

const AuthPage = ({ location, history }) => {
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.user)
  // Get token from url and store it
  useEffect(() => {
    let parsed = queryString.parse(location.hash)
    let accessToken = parsed.access_token
    if (accessToken) {
      dispatch(setUserToken(accessToken))
      // after storing token, redirect homepage
      history.push('/')
    }
  })

  // if there is token, redirect to homepage
  if (token) {
    return <Redirect to='/' />
  }
  return (
    <div>
      <Loading />
    </div>
  )
}

export default AuthPage
