import React from 'react'
import './PlaylistCover.css'
const PlaylistCover = () => {
  return (
    <div className='playlist-cover'>
      <div className='playlist-cover-img-container'>
        <img src='/deneme.jpeg' alt='deneme' className='playlist-cover-img' />
      </div>
      <div className='playlist-cover-text'>
        <h3 className='playlist-cover-type'>PlayList</h3>
        <h1 className='playlist-header-title'>Some playlist title here</h1>
        <div className='playlist-cover-detail'>
          <div className='playlist-cover-detail-img-container'>
            <img
              src='/episode.png'
              alt='deneme2'
              className='playlist-cover-detail-img'
            />
          </div>
          <p className='playlist-cover-detail-text'>Some detail here</p>
        </div>
      </div>
    </div>
  )
}

export default PlaylistCover
