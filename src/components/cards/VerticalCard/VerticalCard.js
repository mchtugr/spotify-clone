import React from 'react'
import PlayIcon from '../../icons/PlayIcon'
import './VerticalCard.css'
const VerticalCard = ({ data, isArtist }) => {
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
            {data.artists.map((i) => i.name)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VerticalCard
