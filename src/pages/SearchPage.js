import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import DiscoverSection from '../components/DiscoverSection'
import DefaultSearchCategories from '../components/DefaultSearchCategories/DefaultSearchCategories'
import GridContainer from '../components/GridContainer'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import WebPlayer from '../components/WebPlayer'
import { browseCategories } from '../redux/actions'
import './SearchPage.css'

const SearchPage = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories.list)
  const search = useSelector((state) => state.search)

  useEffect(() => {
    dispatch(browseCategories())
  }, [dispatch])

  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner includeSearch />
        <GridContainer>
          {search.displayDefault ? (
            <DefaultSearchCategories />
          ) : (
            <>
              <DiscoverSection
                title='Albums'
                data={search.data.albums}
                fromSearch
              />
              <DiscoverSection
                title='Playlists'
                data={search.data.playlists}
                fromSearch
                isPlaylist
              />
              <DiscoverSection
                title='Artists'
                data={search.data.artists}
                isArtist
                fromSearch
              />

              {/* <DiscoverSection title={} data={} /> */}
            </>
          )}
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default SearchPage
