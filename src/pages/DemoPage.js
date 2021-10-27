import React, { useState } from 'react'
import { accessUrl } from '../spotify'
import queryString from 'query-string'
import axios from 'axios'
// import SpotifyPlayer from 'react-spotify-web-playback'
import SpotifyWebApi from 'spotify-web-api-js'

const DemoPage = ({ location }) => {
  console.log(location)
  const [token, setToken] = useState('')
  // console.log('token:', token)
  const spotifyApi = new SpotifyWebApi()
  // console.log(token)
  spotifyApi.setAccessToken(token)
  spotifyApi.getArtist('6GxAW2HI8Q1qUCTVwPzuWM').then(
    function (data) {
      console.log('Artist information', data)
    },
    function (err) {
      console.error(err)
    }
  )

  const handleFetch = async () => {
    let parsed = await queryString.parse(location.hash)
    // console.log(window.location.search)
    let accessToken = parsed.access_token
    setToken(accessToken)
    // console.log(accessToken)

    if (!accessToken) return
    axios
      .get('https://api.spotify.com/v1/me/', {
        headers: {
          Authorization: 'Bearer ' + accessToken,
          'Content-Type': 'application/json',
        },
        // params: {
        //   country: 'de',
        // },
      })
      .then((data) => console.log(data))
  }

  const giris = () => {
    // axios
    //   .post('https://accounts.spotify.com/api/token', {
    //     headers: {
    //       Authorization:
    //         'Basic ' +
    //         base64('3495cb3dc8b746ab9677dea9e9e58858') +
    //         ':' +
    //         base64('d53c2487f5c641b286336a9527197d2d'),
    //     },
    //     body: { grant_type: 'client_credentials' },
    //   })
    //   .then((data) => console.log(data))
  }

  return (
    <div>
      <a href={accessUrl}>Login</a>
      <br />
      <br />
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleFetch}>fetch</button>
      </div>
      <div>
        <button onClick={giris}>Login</button>
      </div>

      {/* <div>
        <SpotifyPlayer
          token={token}
          uris='spotify:artist:3mvkWMe6swnknwscwvGCHO'
        />
      </div> */}
    </div>
  )
}

export default DemoPage
