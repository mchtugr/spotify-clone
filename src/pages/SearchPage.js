import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Banner from '../components/Banner'
import DiscoverSection from '../components/DiscoverSection'
import DefaultSearchCategories from '../components/DefaultSearchCategories/DefaultSearchCategories'
import GridContainer from '../components/GridContainer'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import WebPlayer from '../components/WebPlayer'
import {
  browseCategories,
  displayDefaultSearchCategories,
} from '../redux/actions'

const SearchPage = () => {
  const dispatch = useDispatch()
  const search = useSelector((state) => state.search)

  // FETCH DATA ON FIRST RENDER
  useEffect(() => {
    dispatch(browseCategories())
    dispatch(displayDefaultSearchCategories())
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
            </>
          )}
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default SearchPage
