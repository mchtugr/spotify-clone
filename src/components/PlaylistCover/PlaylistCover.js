import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import './PlaylistCover.css'
const PlaylistCover = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'playlist_detail_page.playlist_cover',
  })
  const { currentPlaylist } = useSelector((state) => state)

  if (currentPlaylist.loading) {
    return <div>Loading ...</div>
  }

  return (
    <div className='playlist-cover'>
      <div className='playlist-cover-img-container'>
        <img
          src={currentPlaylist.data.images[0].url}
          alt='deneme'
          className='playlist-cover-img'
        />
      </div>
      <div className='playlist-cover-text'>
        <h3 className='playlist-cover-type'>{t('playlist')}</h3>
        <h1 className='playlist-header-title'>{currentPlaylist.data.name}</h1>
        <div className='playlist-cover-detail'>
          <p className='playlist-cover-detail-text'>
            {currentPlaylist.data.description}
          </p>
          <div className='playlist-cover-detail-owner-section'>
            <p className='playlist-cover-detail-owner'>
              {currentPlaylist.data.owner.display_name}
            </p>
            <p className='playlist-cover-detail-owner-item'>
              {currentPlaylist.data.followers.total} {t('likes')}
            </p>
            <p className='playlist-cover-detail-owner-item'>
              {currentPlaylist.data.tracks.total} {t('songs')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistCover
