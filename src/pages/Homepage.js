import React, { useEffect } from 'react'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import Banner from '../components/Banner'
import WebPlayer from '../components/WebPlayer'
import GridContainer from '../components/GridContainer/'
import WelcomeSection from '../components/WelcomeSection/'
import VerticalCard from '../components/cards/VerticalCard'
import DiscoverSection from '../components/DiscoverSection/'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../redux/actions'
import './HomePage.css'

const Homepage = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUserDetails(userData.token))
  }, [])

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
