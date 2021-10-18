import React, { useState, useEffect } from 'react'
import { accessUrl } from '../spotify'
import SpotifyWebApi from 'spotify-web-api-js'

const Homepage = () => {
  const spotify = new SpotifyWebApi()
  const [list, setList] = useState([])
  console.log(spotify)

  useEffect(() => {
    spotify.play({
      context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
    })
  })

  return (
    <div>
      <a href={accessUrl}>Login</a>
    </div>
  )
}

export default Homepage
