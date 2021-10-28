import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import PlaylistSongCard from '../components/cards/PlaylistSongCard/PlaylistSongCard'
import GridContainer from '../components/GridContainer'
import LeftNavbar from '../components/LeftNavbar/'
import PlaylistControls from '../components/PlaylistControls/PlaylistControls'
import PlaylistCover from '../components/PlaylistCover/PlaylistCover'
import PlaylistSongsContainer from '../components/PlaylistSongsContainer/PlaylistSongsContainer'
import WebPlayer from '../components/WebPlayer'
import { getPlaylist } from '../redux/actions'

const PlaylistDetailPage = (props) => {
  const { playlistId } = props.match.params
  const dispatch = useDispatch()
  const currentPlaylist = useSelector((state) => state.currentPlaylist)

  useEffect(() => {
    dispatch(getPlaylist(playlistId))
  }, [playlistId])

  let items = []
  if (!currentPlaylist.loading) {
    items = currentPlaylist.data.tracks.items
  }

  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner />
        <GridContainer>
          {!currentPlaylist.loading && (
            <PlaylistCover playlistData={currentPlaylist.data} />
          )}
          <PlaylistControls />
          <PlaylistSongsContainer>
            {items.map((song, i) => (
              <React.Fragment key={song.track.id}>
                <PlaylistSongCard songData={song} index={i} />
              </React.Fragment>
            ))}
          </PlaylistSongsContainer>
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default PlaylistDetailPage
