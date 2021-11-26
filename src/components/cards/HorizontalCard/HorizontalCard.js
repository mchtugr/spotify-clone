import React, { useState } from 'react'

import PauseIcon from '../../icons/PauseIcon'
import PlayIcon from '../../icons/PlayIcon'

import './horizontal-card.scss'

const HorizontalCard = ({ playlistData }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className='horizontal-card'>
      <div className='horizontal-card__inner'>
        {/* IMG */}
        <div className='horizontal-card__imgbox'>
          <img src={playlistData.images[0].url} alt={playlistData.name} />
        </div>
        {/* TITLE */}
        <div className='horizontal-card__title'>
          <p>{playlistData.name}</p>
        </div>
      </div>
      {/* ABSOLUTE POSITIONED PLAY BTN */}
      <div
        className='horizontal-card__play'
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </div>
    </div>
  )
}

export default HorizontalCard
