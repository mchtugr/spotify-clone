import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import './navigation.scss'

const Navigation = ({ isMobile }) => {
  // to translate from language files
  const { t } = useTranslation()

  return (
    //   if is mobile className is 'mobile-navigation' else just 'navigation'
    <ul id={`${isMobile ? 'mobile-navigation' : 'navigation'}`}>
      <div className='navigation__inner'>
        <li className='navigation__item navigation__item--primary'>
          {t('navbar.premium')}
        </li>
        <li className='navigation__item navigation__item--primary'>
          {t('navbar.support')}
        </li>
        <li className='navigation__item navigation__item--primary'>
          {t('navbar.download')}
        </li>
        <li className='seperator'>{isMobile ? '__' : '|'}</li>
        <li className='navigation__item navigation__item--secondary'>
          <Link className='navigation__item--link' to='/signup'>
            {t('navbar.signup')}
          </Link>
        </li>
        <li className='navigation__item navigation__item--secondary'>
          <Link className='navigation__item--link' to='login'>
            {t('navbar.login')}
          </Link>
        </li>
      </div>
      {/* LOGO FOR RESPONSIVE VIEW NAV */}
      {isMobile && (
        <div className='navigation__mobile-logo'>
          <img src='logo.png' alt='' width='auto' height='40px' />
        </div>
      )}
    </ul>
  )
}

export default Navigation
