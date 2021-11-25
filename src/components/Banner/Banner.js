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

import './banner.scss'

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
    if (!event.target.matches('.username-display')) {
      var dropdowns = document.getElementsByClassName(
        'username-display__dropdown'
      )
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
      <div className='top-banner__navigation'>
        <span className='top-banner__navigation-btn' onClick={handleGoBack}>
          <PrevPageIcon />
        </span>
        <span className='top-banner__navigation-btn' onClick={handleGoForward}>
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
            className='username-display'
            onClick={() => setIsSelected(!isSelected)}
          >
            <span className='username-display__icon'>
              <NoProfileIcon />
            </span>
            <span className='username-display__field'>{displayName}</span>
            <span className='username-display__arrow-icon'>
              {isSelected ? <TopArrow /> : <BottomArrow />}
            </span>
          </div>
          <div id='dropdown-box' className='username-display__dropdown'>
            <div className='username-display__dropdown-item language'>
              <span
                className={`${
                  language === 'TR' && 'username-display__dropdown--selected'
                }`}
                onClick={() => handleLanguage('TR')}
              >
                TR
              </span>
              <span
                className={`${
                  language === 'US' && 'username-display__dropdown--selected'
                }`}
                onClick={() => handleLanguage('US')}
              >
                US
              </span>
            </div>
            <div
              className='username-display__dropdown-item'
              onClick={handleLogout}
            >
              {t('banner.logout')}
            </div>
          </div>
        </div>
      ) : (
        <div className='login-signin-section'>
          <Link to='/signup'>
            <Button variant='banner-signup' animated>
              Sign up
            </Button>
          </Link>
          <Link to='/login'>
            <Button variant='banner-login' animated>
              Login
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Banner
