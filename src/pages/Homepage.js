import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import axios from 'axios'
// import SpotifyPlayer from 'react-spotify-web-playback'
import SpotifyWebApi from 'spotify-web-api-js'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import Banner from '../components/Banner'
import WebPlayer from '../components/WebPlayer'
import GridContainer from '../components/GridContainer/'
import WelcomeSection from '../components/WelcomeSection/'
import VerticalCard from '../components/cards/VerticalCard'
import DiscoverSection from '../components/DiscoverSection/'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, setUserToken } from '../redux/actions'
import './HomePage.css'

const Homepage = ({ location }) => {
  const [name, setName] = useState(null)
  const [displayName, setDisplayName] = useState(null)

  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user)

  useEffect(() => {
    let parsed = queryString.parse(location.hash)
    let accessToken = parsed.access_token
    dispatch(setUserToken(accessToken))

    dispatch(getUserDetails(accessToken))
  }, [])
  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(userData.token)

  // spotifyApi.getMe().then((data) => setDisplayName(data.display_name))
  // spotifyApi
  //   .getUserPlaylists()
  //   .then(
  //     function (data) {
  //       console.log('User playlists', data)
  //     },
  //     function (err) {
  //       console.error(err)
  //     }
  //   )

  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner />
        <GridContainer>
          <WelcomeSection />
          <DiscoverSection>
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
          </DiscoverSection>
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default Homepage
