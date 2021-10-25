import React from 'react'
import PlayIcon from '../../icons/PlayIcon'
import './HorizontalCard.css'

const HorizontalCard = () => {
  return (
    <div className='horizontal-card'>
      <div className='horizontal-card-inner-container'>
        <div className='horizontal-card-img-container'>
          <img src='episode.png' alt='some img' />
        </div>
        <div className='horizontal-card-title'>
          <p>Some Title Here</p>
        </div>
      </div>
      <div className='horizontal-play-pause'>
        <PlayIcon />
      </div>
    </div>
  )
}

export default HorizontalCard
