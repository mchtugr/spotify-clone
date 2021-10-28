import React, { useEffect } from 'react'
import axios from 'axios'
// import SpotifyPlayer from 'react-spotify-web-playback'
import { useSelector } from 'react-redux'
const DemoPage = () => {
  const tokenn = useSelector((state) => state.user.token)
  useEffect(() => {
    axios
      .get('https://api.spotify.com/v1/browse/new-releases', {
        headers: {
          Authorization: 'Bearer ' + tokenn,
          'Content-Type': 'application/json',
        },
        params: {
          country: 'TR',
        },
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [tokenn])

  return <div>DEMO PAGE</div>
}

export default DemoPage
