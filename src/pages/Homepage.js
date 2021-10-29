import React, { useEffect } from 'react'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import Banner from '../components/Banner'
import WebPlayer from '../components/WebPlayer'
import GridContainer from '../components/GridContainer/'
import WelcomeSection from '../components/WelcomeSection/'
import DiscoverSection from '../components/DiscoverSection/'
import { useDispatch, useSelector } from 'react-redux'
import { getNewReleases, getTopArtists, getUserDetails } from '../redux/actions'
import './HomePage.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Homepage = () => {
  const dispatch = useDispatch()
  const newReleases = useSelector((state) => state.newReleases)
  const topArtists = useSelector((state) => state.topArtists)
  const { t } = useTranslation('translation', { keyPrefix: 'homepage' })
  useEffect(() => {
    dispatch(getUserDetails())
    dispatch(getNewReleases())
    dispatch(getTopArtists())
  }, [dispatch])

  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner />
        <GridContainer>
          {/* <Link to='/demo'> TRY ME </Link> */}
          <WelcomeSection />
          <DiscoverSection title={t('new_releases')} data={newReleases} />
          <DiscoverSection
            title={t('top_artists')}
            data={topArtists}
            isArtist
          />
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default Homepage
