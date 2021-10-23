import React from 'react'
import BottomArrow from '../icons/BottomArrow'
import NextPageIcon from '../icons/NextPageIcon'
import NoProfileIcon from '../icons/NoProfileIcon'
import PrevPageIcon from '../icons/PrevPageIcon'
import './Banner.css'
const Banner = () => {
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
      <div className='display-name-container'>
        <span className='no-profile-icon'>
          <NoProfileIcon />
        </span>
        <span className='display-name'>Neval</span>
        <span className='arrow-icon'>
          <BottomArrow />
        </span>
      </div>
    </div>
  )
}

export default Banner
