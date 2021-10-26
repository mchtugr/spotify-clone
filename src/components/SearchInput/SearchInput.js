import React, { useState } from 'react'
import SearchIcon from '../icons/SearchIcon'
import './SearchInput.css'
const SearchInput = () => {
  const [keyword, setKeyword] = useState('')

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <div className='search-input-container'>
      <div className='search-icon-container'></div>
      <input
        type='text'
        value={keyword}
        onChange={handleChange}
        placeholder='Sanatcilar, sarkilar ve podcastler'
        className='search-input'
      />
    </div>
  )
}

export default SearchInput
