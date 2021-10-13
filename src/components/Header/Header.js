import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useTranslation } from 'react-i18next'
import useWindowSize from '../../hooks/useWindowSize'

const Header = () => {
  const [selected, setSelected] = useState(false)
  const screenSize = useWindowSize()
  const { t } = useTranslation()

  // TOGGLE NAV LINKS IN SMALL SCREENS
  const toggleNavbar = () => {
    setSelected(!selected)
    document.getElementById('toggle').checked = !selected
    const verticalNavbar = document.querySelector('.navigation')

    if (!selected) {
      verticalNavbar.style.display = 'flex'
    } else {
      verticalNavbar.style.display = 'none'
    }
  }
  return (
    <div className='banner'>
      <div className='navbar-container'>
        <Link to='/' className='logo-container'>
          <img src='logo.png' alt='' className='logo' />
        </Link>

        {/* TOGGLE BTN */}
        <div className='toggle-btn-container' onClick={toggleNavbar}>
          <input type='checkbox' id='toggle' />
          <label htmlFor='toggle' className='toggle-label' />
          <div className='label-clicker'></div>
        </div>

        {/* NAV LINKS */}
        <ul className='navigation'>
          <div className='nav-links-container'>
            <li className='nav-links nav-links-primary'>
              {t('navbar.premium')}
            </li>
            <li className='nav-links nav-links-primary'>
              {t('navbar.support')}
            </li>
            <li className='nav-links nav-links-primary'>
              {t('navbar.download')}
            </li>
            <li className='seperator'>{screenSize.width > 992 ? '|' : '__'}</li>
            <li className='nav-links nav-links-secondary'>
              {t('navbar.signup')}
            </li>
            <li className='nav-links nav-links-secondary'>
              {t('navbar.login')}
            </li>
          </div>
          {/* LOGO FOR RESPONSIVE VIEW NAV */}

          {screenSize.width < 992 && (
            <div className='vertical-navbar-logo-container'>
              <img src='logo.png' alt='' width='auto' height='40px' />
            </div>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
