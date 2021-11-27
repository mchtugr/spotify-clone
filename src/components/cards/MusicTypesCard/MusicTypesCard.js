import React from 'react'

import './music-types-card.scss'

const MusicTypesCard = ({ category }) => {
  // TO GIVE RANDOM BG-COLOR
  const randomNum = Math.floor(Math.random() * 16) + 1
  return (
    <div className={`music-types-card search-card-${randomNum}`}>
      <div className='music-types-card__inner'>
        {/* CATEGORY IMG */}
        <img
          src={category.icons[0].url}
          alt={category.name}
          className='music-types-card__img'
        />
        {/* CATEGORY TITLE */}
        <h2 className='music-types-card__title'>{category.name}</h2>
      </div>
    </div>
  )
}

export default MusicTypesCard
