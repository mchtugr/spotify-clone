import React from 'react'
import PlayIcon from '../../icons/PlayIcon'
import './HorizontalCard.css'

const HorizontalCard = ({ playlistData }) => {
  return (
    <div className='horizontal-card'>
      <div className='horizontal-card-inner-container'>
        <div className='horizontal-card-img-container'>
          <img src={playlistData.images[0].url} alt={playlistData.name} />
        </div>
        <div className='horizontal-card-title'>
          <p>{playlistData.name}</p>
        </div>
      </div>
      <div className='horizontal-play-pause'>
        <PlayIcon />
      </div>
    </div>
  )
}

export default HorizontalCard
