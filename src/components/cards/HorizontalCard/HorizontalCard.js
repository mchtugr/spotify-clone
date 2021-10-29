import React from 'react'

import PlayIcon from '../../icons/PlayIcon'

import './HorizontalCard.css'

const HorizontalCard = ({ playlistData }) => {
  return (
    <div className='horizontal-card'>
      <div className='horizontal-card-inner-container'>
        {/* IMG */}
        <div className='horizontal-card-img-container'>
          <img src={playlistData.images[0].url} alt={playlistData.name} />
        </div>
        {/* TITLE */}
        <div className='horizontal-card-title'>
          <p>{playlistData.name}</p>
        </div>
      </div>
      {/* ABSOLUTE POSITIONED PLAY BTN */}
      <div className='horizontal-play-pause'>
        <PlayIcon />
      </div>
    </div>
  )
}

export default HorizontalCard
