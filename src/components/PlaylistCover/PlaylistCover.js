import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import Loading from '../ui/Loading'

import './playlist-cover.scss'

const PlaylistCover = () => {
  // to translate from language files
  const { t } = useTranslation('translation', {
    keyPrefix: 'playlist_detail_page.playlist_cover',
  })
  const { currentPlaylist } = useSelector((state) => state)

  if (currentPlaylist.loading) {
    return <Loading />
  }

  return (
    <div className='playlist-cover'>
      {/* PLAYLIST IMG */}
      <div className='playlist-cover__imgbox'>
        <img
          src={currentPlaylist.data.images[0].url}
          alt={`${currentPlaylist.data.name} playlist`}
          className='playlist-cover__img'
        />
      </div>
      <div className='playlist-cover__info'>
        {/* TYPE */}
        <h3 className='playlist-cover__info--type'>{t('playlist')}</h3>
        {/* NAME */}
        <h1 className='playlist-cover__info--title'>
          {currentPlaylist.data.name}
        </h1>
        {/* DETAILS */}
        <div className='playlist-cover__detail'>
          <p className='playlist-cover__detail--text'>
            {currentPlaylist.data.description}
          </p>
          <div className='playlist-cover__owner'>
            <p className='playlist-cover__owner--info'>
              {currentPlaylist.data.owner.display_name}
            </p>
            <p className='playlist-cover__owner--follower'>
              {/* USE DECIMAL SEPERATOR */}
              {currentPlaylist.data.followers.total
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}{' '}
              {t('likes')}
            </p>
            <p className='playlist-cover__owner--song'>
              {currentPlaylist.data.tracks.total} {t('songs')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistCover
