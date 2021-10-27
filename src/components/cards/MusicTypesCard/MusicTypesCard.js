import React from 'react'
import './MusicTypesCard.css'

const MusicTypesCard = ({ category }) => {
  return (
    <div className='music-types-card'>
      <div className='music-types-card-inner-container'>
        <img
          src={category.icons[0].url}
          alt={category.name}
          className='music-types-card-img'
        />
        <h2 className='music-types-card-title'>{category.name}</h2>
      </div>
    </div>
  )
}

export default MusicTypesCard
