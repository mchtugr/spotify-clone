import React from 'react'
import { useTranslation } from 'react-i18next'
import './Navigation.css'

const Navigation = ({ isMobile }) => {
  const { t } = useTranslation()

  return (
    //   if is mobile className is 'mobile-navigation' else just 'navigation'
    <ul id={`${isMobile ? 'mobile-navigation' : 'navigation'}`}>
      <div className='nav-links-container'>
        <li className='nav-links nav-links-primary'>{t('navbar.premium')}</li>
        <li className='nav-links nav-links-primary'>{t('navbar.support')}</li>
        <li className='nav-links nav-links-primary'>{t('navbar.download')}</li>
        <li className='seperator'>{isMobile ? '__' : '|'}</li>
        <li className='nav-links nav-links-secondary'>{t('navbar.signup')}</li>
        <li className='nav-links nav-links-secondary'>{t('navbar.login')}</li>
      </div>
      {/* LOGO FOR RESPONSIVE VIEW NAV */}
      {isMobile && (
        <div className='vertical-navbar-logo-container'>
          <img src='logo.png' alt='' width='auto' height='40px' />
        </div>
      )}
    </ul>
  )
}

export default Navigation
