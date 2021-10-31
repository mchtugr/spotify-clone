import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import HorizontalCard from '../cards/HorizontalCard'

import './WelcomeSection.css'
import Loading from '../ui/Loading/Loading'

const WelcomeSection = () => {
  const playlists = useSelector((state) => state.playlists)
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'homepage' })

  if (playlists.loading) {
    return <Loading />
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
            images: [
              {
                url: 'https://raw.githubusercontent.com/murtazaaylak/spotify-clone/main/public/favorites.png',
              },
            ],
            name: t('favorite_songs'),
          }}
        />
      </div>
    </div>
  )
}

export default WelcomeSection
