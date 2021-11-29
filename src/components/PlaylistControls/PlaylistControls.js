import React, { useState } from 'react'

import FooterLikeIcon from '../icons/FooterLikeIcon'
import PauseIcon from '../icons/PauseIcon'
import PlayIcon from '../icons/PlayIcon'
import ThreeDotsIcon from '../icons/ThreeDotsIcon'

import './playlist-controls.scss'

const PlaylistControls = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFav, setIsFav] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <div className='playlist-controls'>
      <div className='playlist-controls__play' onClick={handlePlayPause}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </div>
      <div
        className={`playlist-controls__fav ${isFav && 'liked-icon'}`}
        onClick={() => setIsFav(!isFav)}
      >
        <FooterLikeIcon />
      </div>
      <div className='playlist-controls__three-dots'>
        <ThreeDotsIcon />
      </div>
    </div>
  )
}

export default PlaylistControls
