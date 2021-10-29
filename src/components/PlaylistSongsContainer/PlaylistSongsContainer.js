import React from 'react'
import { useTranslation } from 'react-i18next'

import DurationIcon from '../icons/DurationIcon'

import './PlaylistSongsContainer.css'

const PlaylistSongsContainer = ({ children }) => {
  // to translate from language files
  const { t } = useTranslation('translation', {
    keyPrefix: 'playlist_detail_page.playlist_songs_container',
  })
  return (
    <div className='playlist-songs-container'>
      <div className='playlist-songs-table-container'>
        <div className='playlist-songs-table'>
          {/* ORDER */}
          <p className='playlist-songs-table-header'>#</p>
          {/* TITLE */}
          <p className='playlist-songs-table-header'>{t('title')}</p>
          {/* ALBUM */}
          <p className='playlist-songs-table-header'>{t('album')}</p>
          {/* ADDED AT */}
          <p className='playlist-songs-table-header'>{t('added_at')}</p>
          {/* DURATION */}
          <p className='playlist-songs-table-header duration-icon'>
            <DurationIcon />
          </p>
        </div>
      </div>
      <div className='playlist-song-cards-container'>{children}</div>
    </div>
  )
}

export default PlaylistSongsContainer
