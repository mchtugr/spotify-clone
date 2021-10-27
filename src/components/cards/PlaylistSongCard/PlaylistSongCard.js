import React from 'react'
import './PlaylistSongCard.css'

const PlaylistSongCard = () => {
  return (
    <div className='playlist-song-card'>
      <div className='playlist-songs-table'>
        <div className='playlist-songs-order playlist-songs-table-item'>
          <p className='demo'>1</p>
        </div>
        <div className='playlist-songs-title playlist-songs-table-item'>
          <div className='playlist-songs-title-img-container'>
            <img
              src='/deneme.jpeg'
              alt='deneme'
              className='playlist-songs-title-img'
            />
          </div>
          <div className='playlist-songs-title-detail'>
            <p className='playlist-song-name'>Fikrimin Ince Gulu</p>
            <p className='playlist-song-artist'>Muzeyyen Senar</p>
          </div>
        </div>
        <div className='playlist-songs-album playlist-songs-table-item'>
          Some Album name Here
        </div>
        <div className='playlist-songs-added-on playlist-songs-table-item'>
          23 Sep 2021
        </div>
        <div className='playlist-songs-duration playlist-songs-table-item'>
          3:44
        </div>
      </div>
    </div>
  )
}

export default PlaylistSongCard
