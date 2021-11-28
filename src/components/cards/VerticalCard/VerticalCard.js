import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

import PauseIcon from '../../icons/PauseIcon'
import PlayIcon from '../../icons/PlayIcon'

import './vertical-card.scss'

const VerticalCard = ({ data, isArtist, isPlaylist }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const history = useHistory()
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'vertical_card' })

  const handleClick = () => {
    if (isPlaylist) history.push(`/playlist/${data.id}`)
  }
  return (
    <div className='vertical-card' onClick={handleClick}>
      <div className='vertical-card__inner'>
        {/* IMG */}
        <div className='vertical-card__imgbox'>
          <img
            src={data.images.length !== 0 ? data.images[0].url : '/backup.png'}
            alt={data.name}
            className={`vertical-card__imgbox--img ${
              isArtist ? 'vertical-card__imgbox--artist-img' : ''
            }`}
          />
          {/* ABSOLUTE POSITIONED PLAY BTN */}
          <div
            className='vertical-card__play'
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </div>
        </div>
        {/* CARD INFO */}
        <div className='vertical-card__title'>
          <p className='vertical-card__title--song'>{data.name}</p>
          <p className='vertical-card__title--artist'>
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
