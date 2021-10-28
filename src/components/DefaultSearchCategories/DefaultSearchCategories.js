import React from 'react'
import { useSelector } from 'react-redux'
import MusicTypesCard from '../cards/MusicTypesCard'
import './DefaultSearchCategories.css'

const DefaultSearchCategories = () => {
  const categories = useSelector((state) => state.categories.list)
  return (
    <div>
      <h2>Hepsine Goz At</h2>
      <div className='demo-card-container'>
        {categories.map((category) => (
          <React.Fragment key={category.id}>
            <MusicTypesCard category={category} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default DefaultSearchCategories
