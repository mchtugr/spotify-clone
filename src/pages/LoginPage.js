import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
      <Link to='/' className='logo-container signup-logo'>
        <img src='logo-b.png' alt='spotify-logo' className='logo' />
      </Link>
      <hr />
    </div>
  )
}

export default LoginPage
