import React, { useState } from 'react'

import PauseIcon from '../../icons/PauseIcon'
import PlayIcon from '../../icons/PlayIcon'

import './HorizontalCard.css'

const HorizontalCard = ({ playlistData }) => {
  const [isPlaying, setIsPlaying] = useState(false)
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
      <div
        className='horizontal-play-pause'
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </div>
    </div>
  )
}

export default HorizontalCard
