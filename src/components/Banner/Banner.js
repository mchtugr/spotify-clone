import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../ui/Button'
import BottomArrow from '../icons/BottomArrow'
import NextPageIcon from '../icons/NextPageIcon'
import NoProfileIcon from '../icons/NoProfileIcon'
import PrevPageIcon from '../icons/PrevPageIcon'
import SearchInput from '../SearchInput/SearchInput'
import './Banner.css'
import { Link } from 'react-router-dom'
const Banner = ({ includeSearch }) => {
  const displayName = useSelector((state) => state.user.data.display_name)
  return (
    <div className='top-banner'>
      <div className='navigation-btn-container'>
        <span className='navigation-btn'>
          <PrevPageIcon />
        </span>
        <span className='navigation-btn'>
          <NextPageIcon />
        </span>
      </div>
      {includeSearch && <SearchInput />}
      {displayName ? (
        <div className='display-name-container'>
          <span className='no-profile-icon'>
            <NoProfileIcon />
          </span>
          <span className='display-name'>{displayName}</span>
          <span className='arrow-icon'>
            <BottomArrow />
          </span>
        </div>
      ) : (
        <div className='login-signin-section'>
          <Link to='/signup'>
            <Button variant='banner-btn-signup' animated>
              Sign up
            </Button>
          </Link>
          <Link to='/login'>
            <Button variant='banner-btn-login' animated>
              Login
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Banner
