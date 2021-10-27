import React from 'react'
import Banner from '../components/Banner'
import PlaylistSongCard from '../components/cards/PlaylistSongCard/PlaylistSongCard'
import GridContainer from '../components/GridContainer'
import LeftNavbar from '../components/LeftNavbar/'
import PlaylistControls from '../components/PlaylistControls/PlaylistControls'
import PlaylistCover from '../components/PlaylistCover/PlaylistCover'
import PlaylistSongsContainer from '../components/PlaylistSongsContainer/PlaylistSongsContainer'
import WebPlayer from '../components/WebPlayer'

const PlaylistDetailPage = () => {
  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner />
        <GridContainer>
          <PlaylistCover />
          <PlaylistControls />
          <PlaylistSongsContainer>
            <PlaylistSongCard />
            <PlaylistSongCard />
            <PlaylistSongCard />
          </PlaylistSongsContainer>
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default PlaylistDetailPage
