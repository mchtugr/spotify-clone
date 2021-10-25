import React from 'react'
import PlayIcon from '../../icons/PlayIcon'
import './VerticalCard.css'
const VerticalCard = () => {
  return (
    <div className='vertical-card'>
      <div className='vertical-card-inner-container'>
        <div className='vertical-card-img-container'>
          <img src='deneme.jpeg' alt='some img' />
          <div className='vertical-play-pause'>
            <PlayIcon />
          </div>
        </div>
        <div className='vertical-card-title'>
          <p className='vertical-card-song'>Some Title Here</p>
          <p className='vertical-card-artist'>Some Artist Here</p>
        </div>
      </div>
    </div>
  )
}

export default VerticalCard
