import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import Banner from '../components/Banner'
import VerticalCard from '../components/cards/VerticalCard'
import GridContainer from '../components/GridContainer'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import WebPlayer from '../components/WebPlayer'

const CollectionPage = ({ match }) => {
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'collections' })
  const playlists = useSelector((state) => state.playlists.list)
  // DIDN'T GET FROM SPOTIFY API
  const podcasts = []
  const artists = useSelector((state) => state.topArtists.list)
  // DIDN'T GET FAV ALBUMS FROM SPOTIFY API
  const albums = []

  // CHANGE MAP ARRAY DEPENDING ON PARAMS
  let list
  switch (match.params.type) {
    case 'playlists':
      list = playlists
      break
    case 'podcasts':
      list = podcasts
      break
    case 'artists':
      list = artists
      break
    case 'albums':
      list = albums
      break
    default:
      list = []
  }

  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner includeCollectionNav activeTab={match.params.type} />
        <GridContainer>
          <div>
            <h2>{t(`${match.params.type}`)}</h2>
            <div className='demo-card-container'>
              {list.map((playlist, i) => (
                <React.Fragment key={i}>
                  <VerticalCard
                    data={playlist}
                    isArtist={match.params.type === 'artists'}
                    isPlaylist={match.params.type === 'playlists'}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default CollectionPage
