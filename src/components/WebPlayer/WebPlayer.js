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

import './web-player.scss'

const WebPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFav, setIsFav] = useState(false)

  return (
    <footer>
      <div className='web-player'>
        {/* LEFT */}
        <div className='player-left'>
          <div className='player-left__imgbox'>
            <img
              src='https://raw.githubusercontent.com/mchtugr/spotify-clone/main/public/deneme.jpeg'
              alt='song-poster'
              className='player-left__img'
            />
          </div>
          <div className='player-left__song'>
            <p className='player-left__song--title'>MargaM</p>
            <p className='player-left__song--artist'>
              <small>Çetin Çetintaş</small>
            </p>
          </div>
          <div
            className={`footer-like web-player__icons ${isFav && 'liked-icon'}`}
            onClick={() => setIsFav(!isFav)}
          >
            <FooterLikeIcon />
          </div>
          <div className='footer-poster web-player__icons'>
            <ShowPosterIcon />
          </div>
        </div>
        {/* MIDDLE */}
        <div className='player-middle'>
          <div className='player-middle__inner'>
            <div className='player-middle__control'>
              <div className='player-middle__control--left'>
                <div className='web-player__icons'>
                  <ShuffleIcon />
                </div>
                <div className='web-player__icons'>
                  <PrevSongIcon />
                </div>
              </div>
              <div
                className='web-player__play-btn'
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </div>
              <div className='player-middle__control--right'>
                <div className='web-player__icons'>
                  <NextSongIcon />
                </div>
                <div className='repeat-icon web-player__icons'>
                  <RepeatIcon />
                </div>
              </div>
            </div>
            <div className='player-middle__playback-bar'>
              <p className='player-middle__playback-bar--time'>0:30</p>
              <input
                type='range'
                name=''
                id=''
                min='0'
                step='0.01'
                // value='199'
                max='200'
                className='web-player__playback-bar'
              />
              <p className='player-middle__playback-bar--time'>3:50</p>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className='player-right'>
          <div className='web-player__icons'>
            <QueueIcon />
          </div>
          <div className='web-player__icons'>
            <ConnectToDeviceIcon />
          </div>
          <div className='player-right__sound'>
            <div className='web-player__icons'>
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
              className='web-player__playback-bar'
            />
          </div>
          <div className='web-player__icons'>
            <FullScreenIcon />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default WebPlayer
