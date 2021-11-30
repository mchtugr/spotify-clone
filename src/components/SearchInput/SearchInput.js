import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import SearchIcon from '../icons/SearchIcon'
import CrossIcon from '../icons/CrossIcon'
import {
  displayDefaultSearchCategories,
  getSearchResults,
} from '../../redux/actions'

import './search-input.scss'

const SearchInput = () => {
  const [keyword, setKeyword] = useState('')

  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'banner.input' })
  const dispatch = useDispatch()

  // FETCH DATA WHEN USER STOPS TYPING
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
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <div className='searchbar__icon'>
          <SearchIcon />
        </div>
        <input
          type='text'
          value={keyword}
          onChange={handleChange}
          placeholder={t('placeholder')}
          className='searchbar__input'
        />
        {keyword.length > 0 && (
          <div className='searchbar__cross-icon' onClick={clearSearch}>
            <CrossIcon />
          </div>
        )}
      </form>
    </div>
  )
}

export default SearchInput
