import React from 'react'
import Banner from '../components/Banner'
import MusicTypesCard from '../components/cards/MusicTypesCard'
import GridContainer from '../components/GridContainer'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import WebPlayer from '../components/WebPlayer'
import './SearchPage.css'

const SearchPage = () => {
  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner includeSearch />
        <GridContainer>
          <h2>Hepsine Goz At</h2>
          <div className='demo-card-container'>
            <MusicTypesCard />
            <MusicTypesCard />
            <MusicTypesCard />
            <MusicTypesCard />
            <MusicTypesCard />
            <MusicTypesCard />
            <MusicTypesCard />
            <MusicTypesCard />
            <MusicTypesCard />
          </div>
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default SearchPage
