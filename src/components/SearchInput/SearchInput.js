import React, { useState, useEffect } from 'react'
import SearchIcon from '../icons/SearchIcon'
import { useDispatch } from 'react-redux'
import './SearchInput.css'
import {
  displayDefaultSearchCategories,
  getSearchResults,
} from '../../redux/actions'
import CrossIcon from '../icons/CrossIcon'
const SearchInput = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (keyword.length > 2) {
        dispatch(getSearchResults(keyword))
      }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [keyword, dispatch])

  const handleChange = (e) => {
    setKeyword(e.target.value)
    if (e.target.value === '') {
      dispatch(displayDefaultSearchCategories())
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getSearchResults(keyword))
  }

  const clearSearch = () => {
    setKeyword('')
    dispatch(displayDefaultSearchCategories())
  }

  return (
    <div className='search-input-container'>
      <form onSubmit={handleSubmit}>
        <div className='search-icon-container'>
          <SearchIcon />
        </div>
        <input
          type='text'
          value={keyword}
          onChange={handleChange}
          placeholder="Sanatçılar, şarkılar ve podcast'ler"
          className='search-input'
        />
        {keyword.length > 0 && (
          <div className='cross-icon-container' onClick={clearSearch}>
            <CrossIcon />
          </div>
        )}
      </form>
    </div>
  )
}

export default SearchInput
