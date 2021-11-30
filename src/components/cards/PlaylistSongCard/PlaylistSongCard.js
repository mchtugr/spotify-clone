import React from 'react'

import './playlist-song-card.scss'

const PlaylistSongCard = ({ songData, index }) => {
  // convert miliseconds to minutes and seconds to display song duration
  const convertMilisecond = (ms) => {
    var minutes = Math.floor(ms / 60000)
    var seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }
  return (
    <div className='playlist-card'>
      <div className='playlist-card__table'>
        {/* ORDER NUM */}
        <div className='playlist-card__order playlist-card__table-item'>
          <p>{index + 1}</p>
        </div>

        <div className='playlist-card__title playlist-card__table-item'>
          {/* SONG IMG */}
          <div className='playlist-card__imgbox'>
            <img
              src={songData.track?.album.images[1].url}
              alt={songData.name}
              className='playlist-card__imgbox--img'
            />
          </div>
          <div className='playlist-card__detail'>
            {/* SONG TITLE */}
            <p className='playlist-card__detail--song-name'>
              {songData.track?.name}
            </p>
            {/* ARTIST */}
            <p className='playlist-card__detail--artist'>
              {songData.track?.artists.map((artist, i) => {
                {
                  /* if first artist leave it */
                }
                if (i === 0) {
                  return (
                    <span className='playlist-card__detail--artist' key={i}>
                      {artist.name}{' '}
                    </span>
                  )
                } else {
                  {
                    /* if not put a comma before */
                  }
                  return (
                    <span>
                      ,{' '}
                      <span className='playlist-card__detail--artist' key={i}>
                        {artist.name}
                      </span>
                    </span>
                  )
                }
              })}
            </p>
          </div>
        </div>
        {/* ALBUM NAME */}
        <p className='playlist-card__album playlist-card__table-item'>
          {songData.track?.name}
        </p>
        {/* ADDED AT */}
        <div className='playlist-card__added-on playlist-card__table-item'>
          {new Date(songData.added_at).toDateString()}
        </div>
        {/* DURATION */}
        <div className='playlist-card__duration playlist-card__table-item'>
          {convertMilisecond(songData.track.duration_ms)}
        </div>
      </div>
    </div>
  )
}

export default PlaylistSongCard
