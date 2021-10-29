import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'

import Button from '../ui/Button'
import BottomArrow from '../icons/BottomArrow'
import NextPageIcon from '../icons/NextPageIcon'
import NoProfileIcon from '../icons/NoProfileIcon'
import PrevPageIcon from '../icons/PrevPageIcon'
import SearchInput from '../SearchInput/'
import CollectionNav from '../CollectionNav/'
import TopArrow from '../icons/TopArrow'
import { selectLanguage } from '../../redux/actions'

import './Banner.css'

const Banner = ({ includeSearch, includeCollectionNav, activeTab }) => {
  const [isSelected, setIsSelected] = useState(false)
  const displayName = useSelector((state) => state.user.data.display_name)
  const { language } = useSelector((state) => state.user)

  // to translate from language files
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLanguage = (lang) => {
    dispatch(selectLanguage(lang))
    i18n.changeLanguage(lang)
  }

  const handleLogout = () => {
    console.log(
      'Logout button not working because "token" needed for data fetching!'
    )
    // redirect user to login so that they feel they logged out
    history.push('/login')
  }
  const toggleDrowdown = () => {
    document.querySelector('#dropdown-box').classList.toggle('show')
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.display-name-container')) {
      var dropdowns = document.getElementsByClassName('dropdown-box')
      // dropdown arrow functions properly
      setIsSelected(false)

      var i
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i]
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }

  const handleGoBack = () => {
    // if user at homepage, do not allow goback
    if (history.location.pathname === '/') {
      return
    } else {
      history.goBack()
    }
  }

  const handleGoForward = () => {
    history.goForward()
  }

  return (
    <div className='top-banner'>
      {/* Navigation BTNs */}
      <div className='navigation-btn-container'>
        <span className='navigation-btn' onClick={handleGoBack}>
          <PrevPageIcon />
        </span>
        <span className='navigation-btn' onClick={handleGoForward}>
          <NextPageIcon />
        </span>
      </div>

      {/* only show in SearchPage */}
      {includeSearch && <SearchInput />}

      {/* only show in collection page */}
      {includeCollectionNav && <CollectionNav activeTab={activeTab} />}

      {/* if user exist in store show info */}
      {displayName ? (
        <div onClick={toggleDrowdown}>
          <div
            className='display-name-container'
            onClick={() => setIsSelected(!isSelected)}
          >
            <span className='no-profile-icon'>
              <NoProfileIcon />
            </span>
            <span className='display-name'>{displayName}</span>
            <span className='arrow-icon'>
              {isSelected ? <TopArrow /> : <BottomArrow />}
            </span>
          </div>
          <div id='dropdown-box' className='dropdown-box'>
            <div className='dropdown-item language'>
              <span
                className={`demo ${language === 'TR' && 'selectedLanguage'}`}
                onClick={() => handleLanguage('TR')}
              >
                TR
              </span>
              <span
                className={`demo ${language === 'US' && 'selectedLanguage'}`}
                onClick={() => handleLanguage('US')}
              >
                US
              </span>
            </div>
            <div className='dropdown-item' onClick={handleLogout}>
              {t('banner.logout')}
            </div>
          </div>
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
