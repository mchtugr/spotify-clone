import React, { useState } from 'react'

import FooterLikeIcon from '../icons/FooterLikeIcon'
import PauseIcon from '../icons/PauseIcon'
import PlayIcon from '../icons/PlayIcon'
import ThreeDotsIcon from '../icons/ThreeDotsIcon'

import './PlaylistControls.css'

const PlaylistControls = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFav, setIsFav] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <div className='playlist-controls'>
      <div className='playlist-controls-play-pause' onClick={handlePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </div>
      <div
        className={`playlist-controls-fav ${isFav && 'liked-icon'}`}
        onClick={() => setIsFav(!isFav)}
      >
        <FooterLikeIcon />
      </div>
      <div className='playlist-controls-three-dots'>
        <ThreeDotsIcon />
      </div>
    </div>
  )
}

export default PlaylistControls
