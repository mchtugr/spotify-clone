import React from 'react'
import Banner from '../components/Banner'
import VerticalCard from '../components/cards/VerticalCard'
import GridContainer from '../components/GridContainer'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import { useSelector } from 'react-redux'
import WebPlayer from '../components/WebPlayer'
import { useTranslation } from 'react-i18next'

const CollectionPage = ({ match }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'collections' })
  const playlists = useSelector((state) => state.playlists.list)
  const podcasts = []
  const artists = useSelector((state) => state.topArtists.list)
  const albums = []
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
