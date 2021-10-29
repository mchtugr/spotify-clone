import React, { useState } from 'react'

import FooterLikeIcon from '../icons/FooterLikeIcon'
import PauseIcon from '../icons/PauseIcon'
import PlayIcon from '../icons/PlayIcon'
import ThreeDotsIcon from '../icons/ThreeDotsIcon'

import './PlaylistControls.css'

const PlaylistControls = () => {
  const [playing, setPlaying] = useState(false)

  const handlePlayPause = () => {
    setPlaying(!playing)
  }
  return (
    <div className='playlist-controls'>
      <div className='playlist-controls-play-pause' onClick={handlePlayPause}>
        {playing ? <PlayIcon /> : <PauseIcon />}
      </div>
      <div className='playlist-controls-fav'>
        <FooterLikeIcon />
      </div>
      <div className='playlist-controls-three-dots'>
        <ThreeDotsIcon />
      </div>
    </div>
  )
}

export default PlaylistControls
