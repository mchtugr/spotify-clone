import React from 'react'
import DurationIcon from '../icons/DurationIcon'
import './PlaylistSongsContainer.css'
const PlaylistSongsContainer = ({ children }) => {
  return (
    <div className='playlist-songs-container'>
      <div className='playlist-songs-table-container'>
        <div className='playlist-songs-table'>
          <p className='playlist-songs-table-header'>#</p>
          <p className='playlist-songs-table-header'>TITLE</p>
          <p className='playlist-songs-table-header'>ALBUM</p>
          <p className='playlist-songs-table-header'>ADDED ON</p>
          <p className='playlist-songs-table-header duration-icon'>
            <DurationIcon />
          </p>
        </div>
      </div>
      <div className='playlist-song-cards-container'>{children}</div>
    </div>
  )
}

export default PlaylistSongsContainer
