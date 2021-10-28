import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MusicTypesCard from '../components/cards/MusicTypesCard'
import GridContainer from '../components/GridContainer'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import WebPlayer from '../components/WebPlayer'
import { browseCategories } from '../redux/actions'
import './SearchPage.css'

const SearchPage = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories.list)

  useEffect(() => {
    dispatch(browseCategories())
  }, [dispatch])

  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner includeSearch />
        <GridContainer>
          <h2>Hepsine Goz At</h2>
          <div className='demo-card-container'>
            {categories.map((category) => (
              <React.Fragment key={category.id}>
                <MusicTypesCard category={category} />
              </React.Fragment>
            ))}
          </div>
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default SearchPage
