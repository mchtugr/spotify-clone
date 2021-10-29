import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import PauseIcon from '../../icons/PauseIcon'
import PlayIcon from '../../icons/PlayIcon'

import './VerticalCard.css'

const VerticalCard = ({ data, isArtist, isPlaylist }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'vertical_card' })
  return (
    <div className='vertical-card'>
      <div className='vertical-card-inner-container'>
        {/* IMG */}
        <div className='vertical-card-img-container'>
          <img
            src={data.images.length !== 0 ? data.images[0].url : '/backup.png'}
            alt={data.name}
            className={`vertical-card-img ${
              isArtist && 'vertical-card-artist-img'
            }`}
          />
          {/* ABSOLUTE POSITIONED PLAY BTN */}
          <div
            className='vertical-play-pause'
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </div>
        </div>
        {/* CARD INFO */}
        <div className='vertical-card-title'>
          <p className='vertical-card-song'>{data.name}</p>
          <p className='vertical-card-artist'>
            {/* CHANGE CONTENT DEPENDING ON PROPS */}
            {isArtist
              ? t('artist')
              : isPlaylist
              ? data.owner.display_name
              : data.artists.map((i) => i.name)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VerticalCard
