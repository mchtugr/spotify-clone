import React from 'react'
import Banner from '../components/Banner'
import GridContainer from '../components/GridContainer'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'

const CollectionPage = ({ match }) => {
  console.log(match)
  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner
          includeCollectionNav
          activeTab='playlist'
          activeTab={match.params.type}
        />
        <GridContainer></GridContainer>
      </div>
    </div>
  )
}

export default CollectionPage
