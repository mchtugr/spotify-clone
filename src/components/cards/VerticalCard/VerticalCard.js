import React from 'react'
import { useTranslation } from 'react-i18next'
import PlayIcon from '../../icons/PlayIcon'
import './VerticalCard.css'
const VerticalCard = ({ data, isArtist, isPlaylist }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'vertical_card' })
  console.log(data)
  return (
    <div className='vertical-card'>
      <div className='vertical-card-inner-container'>
        <div className='vertical-card-img-container'>
          <img
            src={data.images.length !== 0 ? data.images[0].url : '/backup.png'}
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
