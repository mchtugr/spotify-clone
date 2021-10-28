import React, { useEffect } from 'react'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import Banner from '../components/Banner'
import WebPlayer from '../components/WebPlayer'
import GridContainer from '../components/GridContainer/'
import WelcomeSection from '../components/WelcomeSection/'
import VerticalCard from '../components/cards/VerticalCard'
import DiscoverSection from '../components/DiscoverSection/'
import { useDispatch, useSelector } from 'react-redux'
import { getNewReleases, getUserDetails } from '../redux/actions'
import './HomePage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  const dispatch = useDispatch()
  const newReleases = useSelector((state) => state.newReleases)
  useEffect(() => {
    dispatch(getUserDetails())
    dispatch(getNewReleases())
  }, [dispatch])

  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner />
        <GridContainer>
          <Link to='/demo'> TRY ME </Link>
          <WelcomeSection />
          <DiscoverSection
            title={'New Releases'}
            data={newReleases}
          ></DiscoverSection>
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default Homepage
