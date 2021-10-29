import React from 'react'
import HorizontalCard from '../cards/HorizontalCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './WelcomeSection.css'
import { useTranslation } from 'react-i18next'

const WelcomeSection = () => {
  const playlists = useSelector((state) => state.playlists)
  const { t } = useTranslation('translation', { keyPrefix: 'homepage' })

  if (playlists.loading) {
    return <div>Loading...</div>
  }

  const firstFivePlaylist = playlists.list.slice(0, 5)
  return (
    <div className='welcome-section'>
      <h2 className='welcome-message'>{t('hello')}</h2>
      <div className='welcome-card-container'>
        {firstFivePlaylist.map((playlist) => (
          <Link to={`/playlist/${playlist.id}`} key={playlist.id}>
            <HorizontalCard playlistData={playlist} />
          </Link>
        ))}
        <HorizontalCard
          playlistData={{
            images: [{ url: '/favorites.png' }],
            name: t('favorite_songs'),
          }}
        />
      </div>
    </div>
  )
}

export default WelcomeSection
