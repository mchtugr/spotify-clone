import React from 'react'
import { useTranslation } from 'react-i18next'
import PlayIcon from '../../icons/PlayIcon'
import './VerticalCard.css'
const VerticalCard = ({ data, isArtist }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'vertical_card' })

  return (
    <div className='vertical-card'>
      <div className='vertical-card-inner-container'>
        <div className='vertical-card-img-container'>
          <img
            src={data.images[1].url}
            alt={data.name}
            className={`vertical-card-img ${
              isArtist && 'vertical-card-artist-img'
            }`}
          />
          <div className='vertical-play-pause'>
            <PlayIcon />
          </div>
        </div>
        <div className='vertical-card-title'>
          <p className='vertical-card-song'>{data.name}</p>
          <p className='vertical-card-artist'>
            {!isArtist ? data.artists.map((i) => i.name) : t('artist')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VerticalCard
