import React from 'react'
import { useTranslation } from 'react-i18next'

import DurationIcon from '../icons/DurationIcon'

import './playlist-songs-container.scss'

const PlaylistSongsContainer = ({ children }) => {
  // to translate from language files
  const { t } = useTranslation('translation', {
    keyPrefix: 'playlist_detail_page.playlist_songs_container',
  })
  return (
    <div className='playlist__songbox'>
      <div className='playlist__tablebox'>
        <div className='playlist__table'>
          {/* ORDER */}
          <p className='playlist__table--header'>#</p>
          {/* TITLE */}
          <p className='playlist__table--header'>{t('title')}</p>
          {/* ALBUM */}
          <p className='playlist__table--header'>{t('album')}</p>
          {/* ADDED AT */}
          <p className='playlist__table--header'>{t('added_at')}</p>
          {/* DURATION */}
          <p className='playlist__table--header duration-icon'>
            <DurationIcon />
          </p>
        </div>
      </div>
      <div className='playlist__cardbox'>{children}</div>
    </div>
  )
}

export default PlaylistSongsContainer
