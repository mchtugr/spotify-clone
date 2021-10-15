import React from 'react'
import './HamburgerMenu.css'
const HamburgerMenu = ({ onClick }) => {
  return (
    <div className='toggle-btn-container' onClick={onClick}>
      <input type='checkbox' id='toggle' />
      <label htmlFor='toggle' className='toggle-label' />
      <div className='label-clicker'></div>
    </div>
  )
}

export default HamburgerMenu
