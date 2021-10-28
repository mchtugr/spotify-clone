import React from 'react'
import './PlaylistSongCard.css'

const PlaylistSongCard = ({ songData, index }) => {
  return (
    <div className='playlist-song-card'>
      <div className='playlist-songs-table'>
        <div className='playlist-songs-order playlist-songs-table-item'>
          <p className='demo'>{index + 1}</p>
        </div>
        <div className='playlist-songs-title playlist-songs-table-item'>
          <div className='playlist-songs-title-img-container'>
            <img
              src={songData.track.album.images[1].url}
              alt='deneme'
              className='playlist-songs-title-img'
            />
          </div>
          <div className='playlist-songs-title-detail'>
            <p className='playlist-song-name'>{songData.track.name}</p>
            <p className='playlist-song-artist'>
              {songData.track.artists.map((artist) => artist.name).join(', ')}
            </p>
          </div>
        </div>
        <div className='playlist-songs-album playlist-songs-table-item'>
          {songData.track.name}
        </div>
        <div className='playlist-songs-added-on playlist-songs-table-item'>
          {new Date(songData.added_at).toDateString()}
        </div>
        <div className='playlist-songs-duration playlist-songs-table-item'>
          3:44
        </div>
      </div>
    </div>
  )
}

export default PlaylistSongCard
