import React from 'react'

import './MusicTypesCard.css'

const MusicTypesCard = ({ category }) => {
  // TO GIVE RANDOM BG-COLOR
  const randomNum = Math.floor(Math.random() * 16) + 1
  return (
    <div className={`music-types-card search-card-${randomNum}`}>
      <div className='music-types-card-inner-container'>
        {/* CATEGORY IMG */}
        <img
          src={category.icons[0].url}
          alt={category.name}
          className='music-types-card-img'
        />
        {/* CATEGORY TITLE */}
        <h2 className='music-types-card-title'>{category.name}</h2>
      </div>
    </div>
  )
}

export default MusicTypesCard
