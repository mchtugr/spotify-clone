import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Navigation from '../Navigation'
import HamburgerMenu from '../ui/HamburgerMenu/'
import useWindowSize from '../../hooks/useWindowSize'

import './Header.css'

const Header = () => {
  const [selected, setSelected] = useState(false)
  // GET SCREEN SIZE USING CUSTOM HOOK
  const screenSize = useWindowSize()

  // TOGGLE NAV LINKS IN SMALL SCREENS
  const toggleNavbar = () => {
    setSelected(!selected)
    document.getElementById('toggle').checked = !selected
    const mobileNavbar = document.getElementById('mobile-navigation')

    if (!selected) {
      mobileNavbar.style.display = 'flex'
    } else {
      mobileNavbar.style.display = 'none'
    }
  }

  return (
    <div className='banner'>
      <div className='navbar-container'>
        <Link to='/' className='logo-container'>
          <img src='logo.png' alt='spotify-logo' className='logo' />
        </Link>
        <HamburgerMenu onClick={toggleNavbar} />
        {screenSize.width > 991 ? <Navigation /> : <Navigation isMobile />}
      </div>
    </div>
  )
}

export default Header
