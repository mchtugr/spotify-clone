import React from 'react'
import { useTranslation } from 'react-i18next'
import DurationIcon from '../icons/DurationIcon'
import './PlaylistSongsContainer.css'
const PlaylistSongsContainer = ({ children }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'playlist_detail_page.playlist_songs_container',
  })
  return (
    <div className='playlist-songs-container'>
      <div className='playlist-songs-table-container'>
        <div className='playlist-songs-table'>
          <p className='playlist-songs-table-header'>#</p>
          <p className='playlist-songs-table-header'>{t('title')}</p>
          <p className='playlist-songs-table-header'>{t('album')}</p>
          <p className='playlist-songs-table-header'>{t('added_at')}</p>
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
