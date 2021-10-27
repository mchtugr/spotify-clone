import React, { useState } from 'react'
import FooterLikeIcon from '../icons/FooterLikeIcon'
import ShowPosterIcon from '../icons/ShowPosterIcon'
import ShuffleIcon from '../icons/ShuffleIcon'
import PrevSongIcon from '../icons/PrevSongIcon'
import NextSongIcon from '../icons/NextSongIcon'
import RepeatIcon from '../icons/RepeatIcon'
import PlayIcon from '../icons/PlayIcon'
import PauseIcon from '../icons/PauseIcon'
import QueueIcon from '../icons/QueueIcon'
import ConnectToDeviceIcon from '../icons/ConnectToDeviceIcon'
import VolumeHighIcon from '../icons/VolumeHighIcon'
import FullScreenIcon from '../icons/FullScreenIcon'
import './WebPlayer.css'

const WebPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <footer>
      <div className='web-player'>
        <div className='player-left'>
          <div className='footer-img-container'>
            <img src='/deneme.jpeg' alt='song-poster' className='footer-img' />
          </div>
          <div className='footer-song-details'>
            <p className='footer-song-title'>MargaM</p>
            <p className='footer-artist'>
              <small>Çetin Çetintaş</small>
            </p>
          </div>
          <div className='footer-like footer-icons'>
            <FooterLikeIcon />
          </div>
          <div className='footer-poster footer-icons'>
            <ShowPosterIcon />
          </div>
        </div>
        <div className='player-middle'>
          <div className='player-middle-container'>
            <div className='player-control'>
              <div className='left-control'>
                <div className='shuffle-icon footer-icons'>
                  <ShuffleIcon />
                </div>
                <div className='prev-song-icon footer-icons'>
                  <PrevSongIcon />
                </div>
              </div>
              <div
                className='play-pause-btn'
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </div>
              <div className='right-control'>
                <div className='next-song-icon footer-icons'>
                  <NextSongIcon />
                </div>
                <div className='repeat-icon footer-icons'>
                  <RepeatIcon />
                </div>
              </div>
            </div>
            <div className='playback-bar'>
              <p className='current-time'>0:30</p>
              <input
                type='range'
                name=''
                id=''
                min='0'
                step='0.01'
                // value='199'
                max='200'
                className='duration-bar'
              />
              <p className='total-time'>3:50</p>
            </div>
          </div>
        </div>
        <div className='player-right'>
          <div className='footer-queue footer-icons'>
            <QueueIcon />
          </div>
          <div className='device-connect footer-icons'>
            <ConnectToDeviceIcon />
          </div>
          <div className='sound-control'>
            <div className='footer-icons'>
              <VolumeHighIcon />
            </div>
            <input
              type='range'
              name=''
              id=''
              min='0'
              step='0.01'
              // value='199'
              max='200'
              className='duration-bar'
            />
          </div>
          <div className='full-screen footer-icons'>
            <FullScreenIcon />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default WebPlayer
