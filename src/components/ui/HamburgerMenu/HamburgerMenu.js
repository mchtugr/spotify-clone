import React from 'react'
import './hamburger-menu.scss'
const HamburgerMenu = ({ onClick }) => {
  return (
    <div className='toggle-btn' onClick={onClick}>
      <input type='checkbox' id='toggle' />
      <label htmlFor='toggle' className='toggle-btn__label' />
      <div className='toggle-btn__label--clicker'></div>
    </div>
  )
}

export default HamburgerMenu
