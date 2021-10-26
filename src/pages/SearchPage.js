import React from 'react'
import Banner from '../components/Banner'
import GridContainer from '../components/GridContainer'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import WebPlayer from '../components/WebPlayer'

const SearchPage = () => {
  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner includeSearch />
        <GridContainer />
      </div>
      <WebPlayer />
    </div>
  )
}

export default SearchPage
